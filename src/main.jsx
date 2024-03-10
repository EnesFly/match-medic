import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import theme from './theming/theme.jsx'
import { ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from './contexts/isAuth.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
