import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { CssBaseline, Container, Button, Typography, Box, Grid, Paper, IconButton, Input, CircularProgress, Divider, Tooltip } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import GitHubIcon from '@mui/icons-material/GitHub';


const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

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
      const response = await axios.post('localhost:82/hrquery', { query: input });
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} marginTop={5}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={darkMode ? "https://resources.flockmail.com/titanemail_logo_dark.svg" : "https://resources.flockmail.com/titanemail_logo.svg"} alt="Titan Logo" style={{ width: '120px' }} />
              <Typography variant="h6" component="div" marginLeft={1}>
                Ai HR
              </Typography>
            </div>
            <IconButton onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
          {/* <Container> */}
          <form onSubmit={submitQuery} noValidate autoComplete="off">
            <Grid container spacing={2} marginTop={4}>
              <Grid item xs={8}>
                <Input
                  fullWidth
                  id="outlined-basic"
                  label="Enter your query"
                  variant="outlined"
                  placeholder="Ask your HR related question"
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
          {/* Footer */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 'auto' }}>
            <Typography variant="body2" color="text.secondary">
              Made with <span style={{ color: 'red' }}>&#x2764;&#xFE0F;</span> for Titan
            </Typography>
            <Divider orientation="vertical" flexItem style={{ height: '20px', margin: '10px 10px' }} />
            <Tooltip title="Contribute" arrow>
              <IconButton href="https://github.com/luvk1412/hr-ai" target="_blank" color="inherit">
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </ThemeProvider>
    </Container>
  );
};

export default App;
