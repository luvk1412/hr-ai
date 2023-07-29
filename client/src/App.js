import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { CssBaseline, Container, TextField, Button, Typography, Box, useMediaQuery, Grid, Paper, IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [darkMode, setDarkMode] = useState(false);

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

  // const submitQuery = async (event) => {
  //   event.preventDefault();
  //   const response = await axios.post('http://localhost:<your_port>', { query: input });
  //   setOutput(response.data);
  // };

  const markdown = `
  # This is a heading
  ## This is a sub-heading
  
  Here is some **bold text** and some *italic text*.
  
  This is a bullet list:
  - Item 1
  - Item 2
  - Item 3
  
  This is a numbered list:
  1. Item 1
  2. Item 2
  3. Item 3
  
  Here is a [link](http://example.com).
  
  Here is some \`inline code\`.
  
  Here is a code block:
  
  \`\`\`javascript
  function helloWorld() {
    console.log("Hello, world!");
  }
  \`\`\`
  
  > This is a quote.
  `;

  const submitQuery = async (event) => {
    event.preventDefault();
    // const response = await axios.post('http://localhost:<your_port>', { query: input });
    // setOutput(response.data);
    setOutput(markdown)
  };

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ height: '100vh', p: 2, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h4" component="div" gutterBottom>
              Titan AI HR
            </Typography>
            <IconButton onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
          <Container>
            <form onSubmit={submitQuery} noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Enter your query"
                    variant="outlined"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button variant="contained" type="submit" fullWidth>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Container>
          <Box my={4}>
            <Paper elevation={3} style={{ padding: '1em' }}>
              <ReactMarkdown>{output}</ReactMarkdown>
            </Paper>
          </Box>

        </Box>
      </ThemeProvider>
    </Container>
  );
};

export default App;
