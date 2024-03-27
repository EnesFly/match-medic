import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import theme from './theming/theme.jsx'
import { ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from './contexts/isAuth.jsx';
import { createBrowserRouter,
  RouterProvider, } from 'react-router-dom';
import About from './pages/About.jsx';
import FAQ from './pages/FAQ.jsx';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/FAQ",
      element: <FAQ />,
    },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
