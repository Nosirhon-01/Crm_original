import React, { useState } from 'react';
import axios from 'axios';
import studySvg from './assets/study.svg';
import Dashboard from './components/Dashboard';

const SchoolIcon = ({ className }) => (
// ... icons stay same
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 22v-4a2 2 0 1 0-4 0v4"/>
    <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/>
    <path d="M18 5v17"/>
    <path d="m4 6 8-4 8 4"/>
    <path d="M6 5v17"/>
    <circle cx="12" cy="9" r="2"/>
  </svg>
);

const EyeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const EyeOffIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
    <path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
    <line x1="2" x2="22" y1="2" y2="22"/>
  </svg>
);

const ArrowLeftIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
  </svg>
);

function App() {
  const [step, setStep] = useState(() => {
    return localStorage.getItem('isAuth') === 'true' ? 3 : 1;
  });
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [serverOtp, setServerOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('/_/backend/auth/login', { login: email, password });
      if (res.data.success) {
        setServerOtp(res.data.otp);
        setStep(2);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Email yoki parol noto\'g\'ri');
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('/_/backend/auth/verify', { login: email, code });
      if (res.data.success) {
        localStorage.setItem('isAuth', 'true');
        setStep(3);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Tasdiqlash kodi noto\'g\'ri');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuth');
    setStep(1);
  };

  if (step === 3) {
    return <Dashboard onLogout={handleLogout} userEmail={email} />;
  }

  return (
    <div className="flex min-h-screen w-full font-sans bg-gray-50">
      <div className="hidden lg:flex lg:w-1/2 bg-[#1e2a4a] items-center justify-center p-6 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-48 h-48 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 border-8 border-white rounded-full"></div>
        </div>
        
        <div className="w-full max-w-2xl z-10 p-4">
          <img 
            src={studySvg} 
            alt="Study Illustration" 
            className="w-full h-auto drop-shadow-2xl animate-pulse-slow scale-110"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-center p-8 md:p-16 relative">
        <div className="w-full max-w-md space-y-8">
          
          {step === 2 && (
            <button 
              onClick={() => setStep(1)}
              className="absolute top-8 left-8 flex items-center text-gray-500 hover:text-[#1e2a4a] transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Orqaga
            </button>
          )}

          <div className="flex flex-col items-center space-y-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-lg">
              <SchoolIcon className="w-10 h-10 text-[#1e2a4a]" />
            </div>
            
            <div className="text-center">
              <h1 className="text-2xl font-bold text-[#1e2a4a] tracking-tight">
                {step === 1 ? 'LEARNING MANAGEMENT SYSTEM' : 'KODNI TASDIQLASH'}
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                {step === 1 ? 'Tizimga kirish uchun ma\'lumotlaringizni kiriting' : 'Emailingizga yuborilgan 6 xonali kodni kiriting'}
              </p>
              {step === 2 && serverOtp && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-800 font-medium animate-pulse">
                  Test kodi: <span className="text-lg font-bold tracking-widest">{serverOtp}</span>
                </div>
              )}
            </div>
          </div>

          {error && (
            <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm animate-shake">
              {error}
            </div>
          )}

          {step === 1 ? (
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-600">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1e2a4a] outline-none transition-all"
                    placeholder="Emailni kiriting"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-600">Parol</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1e2a4a] outline-none transition-all"
                      placeholder="Parolni kiriting"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#1e2a4a] text-white font-bold rounded-lg hover:bg-[#2c3e6d] transition-all disabled:opacity-50"
              >
                {loading ? 'Yuklanmoqda...' : 'Kirish'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerify} className="space-y-6">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600">Tasdiqlash kodi</label>
                <input
                  type="text"
                  required
                  maxLength="6"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full px-4 py-4 text-center text-2xl tracking-[1em] font-bold bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1e2a4a] outline-none transition-all"
                  placeholder="000000"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#1e2a4a] text-white font-bold rounded-lg hover:bg-[#2c3e6d] transition-all disabled:opacity-50"
              >
                {loading ? 'Tekshirilmoqda...' : 'Tasdiqlash'}
              </button>
              <p className="text-center text-sm text-gray-500">
                Kod kelmadimi? <button type="button" onClick={handleLogin} className="text-[#1e2a4a] font-bold hover:underline">Qaytadan yuborish</button>
              </p>
            </form>
          )}
        </div>

        <div className="absolute bottom-8 text-center w-full px-8">
          <p className="text-xs text-gray-400">
            Copyright © {new Date().getFullYear()} CRM System. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
