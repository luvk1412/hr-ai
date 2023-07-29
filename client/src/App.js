import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { CssBaseline, Container, TextField, Button, Typography, Box, useMediaQuery, Grid, Paper, IconButton, Input, CircularProgress } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode],
  );

  const submitQuery = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/hrquery', { query: input });
      setOutput(response.data.result);
    } catch (error) {
      console.error(error);
      setOutput('Error gettin response, please retry')
    }
    setIsLoading(false);
  };

  return (
    // <Container maxWidth="md" sx={{ marginTop: '20px', marginRight: '30px', marginBottom: '20px', marginLeft: '30px' }}>

    <Container maxWidth="md">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ height: '100vh', p: 2, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} marginTop={2}>
            <Typography variant="h3" component="div" marginTop={3}>
              Titan AI HR
            </Typography>
            <IconButton onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
          {/* <Container> */}
          <form onSubmit={submitQuery} noValidate autoComplete="off">
            <Grid container spacing={2} marginTop={2}>
              <Grid item xs={8}>
                <Input
                  fullWidth
                  id="outlined-basic"
                  label="Enter your query"
                  variant="outlined"
                  placeholder="Ask you question"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" type="submit" fullWidth disabled={isLoading}>
                  {isLoading ? 'Loading...' : 'Submit'}
                </Button>
              </Grid>
            </Grid>
          </form>
          {/* </Container> */}
          <Box my={4}>
            {isLoading ? <CircularProgress /> : output && <Paper elevation={3} style={{ padding: '1em' }}>
              <ReactMarkdown>{output}</ReactMarkdown>
            </Paper>
            }
          </Box>
        </Box>
      </ThemeProvider>
    </Container>
  );
};

export default App;
