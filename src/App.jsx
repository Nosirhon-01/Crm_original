import React, { useState } from 'react';
import axios from 'axios';
import educationImg from './assets/education.png';
import studySvg from './assets/study.svg';
import Dashboard from './components/Dashboard';
import {
  Box, TextField, Button, Typography, InputAdornment, IconButton,
  Alert, Paper, CircularProgress, ThemeProvider, createTheme, CssBaseline
} from '@mui/material';
import { Visibility, VisibilityOff, Phone, Lock } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: { main: '#1e2a4a' },
    secondary: { main: '#7c4dff' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          fontSize: '1rem',
          padding: '12px 24px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#f8f9fc',
            borderRadius: 12,
          },
        },
      },
    },
  },
});

function App() {
  const [isAuth, setIsAuth] = useState(() => localStorage.getItem('isAuth') === 'true');
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 9);
    let formatted = '';
    if (digits.length > 0) formatted += digits.slice(0, 2);
    if (digits.length > 2) formatted += ' ' + digits.slice(2, 5);
    if (digits.length > 5) formatted += ' ' + digits.slice(5, 7);
    if (digits.length > 7) formatted += ' ' + digits.slice(7, 9);
    return formatted;
  };

  const getRawPhone = () => '998' + phone.replace(/\s/g, '');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // Backend-siz kirish uchun superadmin (mock login)
      if (getRawPhone() === '998998888888' && password === 'admin') {
        const mockUser = { login: '998998888888', role: 'SUPERADMIN', email: 'superadmin@crm.com' };
        localStorage.setItem('isAuth', 'true');
        localStorage.setItem('user', JSON.stringify(mockUser));
        setUser(mockUser);
        setIsAuth(true);
        setLoading(false);
        return;
      }

      const res = await axios.post('/_/backend/auth/login', { login: getRawPhone(), password });
      if (res.data.success) {
        localStorage.setItem('isAuth', 'true');
        localStorage.setItem('user', JSON.stringify(res.data.user));
        setUser(res.data.user);
        setIsAuth(true);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Telefon raqam yoki parol noto\'g\'ri');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('user');
    setUser(null);
    setIsAuth(false);
  };

  if (isAuth) {
    if (user?.role === 'SUPERADMIN' || user?.role === 'ADMIN') {
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Dashboard onLogout={handleLogout} userEmail={user?.email} />
        </ThemeProvider>
      );
    } else {
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', bgcolor: '#f8f9fc', p: 4 }}>
            <Paper elevation={0} sx={{ p: 6, borderRadius: 4, textAlign: 'center', maxWidth: 400, border: '1px solid #e5e7eb' }}>
              <Box sx={{ width: 80, height: 80, bgcolor: '#fef3c7', color: '#f59e0b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3 }}>
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              </Box>
              <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>Kirish cheklangan</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Sizning rolingiz (<strong>{user?.role}</strong>) uchun panel hali tayyor emas.
              </Typography>
              <Button fullWidth variant="contained" onClick={handleLogout} sx={{ borderRadius: 3 }}>Chiqish</Button>
            </Paper>
          </Box>
        </ThemeProvider>
      );
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
        {/* Left side - Illustration */}
        <Box sx={{
          display: { xs: 'none', lg: 'flex' },
          width: '50%',
          bgcolor: '#1e2a4a',
          alignItems: 'center',
          justifyContent: 'center',
          p: 6,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.08 }}>
            <Box sx={{ position: 'absolute', top: 40, left: 40, width: 200, height: 200, border: '4px solid white', borderRadius: '50%' }} />
            <Box sx={{ position: 'absolute', bottom: 80, right: 80, width: 320, height: 320, border: '8px solid white', borderRadius: '50%' }} />
            <Box sx={{ position: 'absolute', top: '50%', left: '20%', width: 120, height: 120, border: '3px solid white', borderRadius: 4, transform: 'rotate(45deg)' }} />
          </Box>

          <Box sx={{ width: '100%', maxWidth: 500, zIndex: 10, textAlign: 'center' }}>
            <Box
              component="img"
              src={studySvg}
              alt="Education"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: 420,
                objectFit: 'contain',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
              }}
            />
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 800, mt: 4, letterSpacing: -0.5 }}>
              CRM<span style={{ color: '#7c4dff' }}>SYS</span>
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', mt: 1 }}>
              O'quv markazi boshqaruv tizimi
            </Typography>
          </Box>
        </Box>

        {/* Right side - Login Form */}
        <Box sx={{
          width: { xs: '100%', lg: '50%' },
          bgcolor: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 3, md: 8 },
          position: 'relative',
        }}>
          <Box sx={{ width: '100%', maxWidth: 420 }}>
            
            {/* Logo */}
            <Box sx={{ textAlign: 'center', mb: 5 }}>
              <Box sx={{
                width: 72, height: 72, mx: 'auto', mb: 3,
                borderRadius: 3, overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(30,42,74,0.12)',
                border: '2px solid #f0f0f5',
              }}>
                <Box component="img" src={educationImg} alt="Logo" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#1e2a4a', letterSpacing: -0.5, fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
                LEARNING MANAGEMENT SYSTEM
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                Tizimga kirish uchun ma'lumotlaringizni kiriting
              </Typography>
            </Box>

            {/* Error */}
            {error && (
              <Alert severity="error" sx={{ mb: 3, borderRadius: 3 }} onClose={() => setError('')}>
                {error}
              </Alert>
            )}

            {/* Form */}
            <form onSubmit={handleLogin}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <TextField
                  fullWidth
                  label="Telefon raqam"
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                  placeholder="99 123 45 67"
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone sx={{ color: '#7c4dff', mr: 0.5 }} />
                        <Typography sx={{ fontWeight: 700, color: '#1e2a4a', fontSize: 14 }}>+998</Typography>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': { fontSize: '1.1rem', letterSpacing: '0.15em' },
                  }}
                />

                <TextField
                  fullWidth
                  label="Parol"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Parolni kiriting"
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock sx={{ color: '#7c4dff' }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={loading}
                  sx={{
                    mt: 1,
                    py: 1.5,
                    borderRadius: 3,
                    bgcolor: '#1e2a4a',
                    fontSize: '1rem',
                    boxShadow: '0 4px 14px rgba(30,42,74,0.3)',
                    '&:hover': { bgcolor: '#2c3e6d', boxShadow: '0 6px 20px rgba(30,42,74,0.4)' },
                  }}
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : 'Kirish'}
                </Button>
              </Box>
            </form>
          </Box>

          {/* Footer */}
          <Typography variant="caption" sx={{ position: 'absolute', bottom: 24, color: 'text.disabled' }}>
            Copyright © {new Date().getFullYear()} CRM System. Barcha huquqlar himoyalangan.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
