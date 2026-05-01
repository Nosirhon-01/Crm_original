import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation, Routes, Route, Navigate } from 'react-router-dom';
import educationImg from '../assets/education.png';

const SidebarIcon = ({ name }) => {
  switch (name) {
    case 'home':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>;
    case 'teachers':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>;
    case 'classes':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>;
    case 'students':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>;
    case 'gifts':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 0h4a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V10a2 2 0 012-2h4"/></svg>;
    case 'settings':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>;
    case 'courses':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>;
    case 'finance':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>;
    case 'rooms':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>;
    case 'branch':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>;
    case 'employees':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>;
    case 'reasons':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>;
    case 'roles':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>;
    case 'coin':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;
    case 'send_message':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>;
    case 'faq':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;
    case 'check':
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;
    default:
      return null;
  }
};

const roomsData = [{ id: 1, name: 'AUTODESK', capacity: 18 }];

const Dashboard = ({ onLogout, userEmail }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('uz');
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [rooms, setRooms] = useState(roomsData);
  const [newRoom, setNewRoom] = useState({ name: '', capacity: '' });
  const [editingRoom, setEditingRoom] = useState(null);
  const [showAddRoomSidebar, setShowAddRoomSidebar] = useState(false);

  const activeTab = location.pathname.split('/')[2] || 'home';
  const activeSettingsTab = location.pathname.split('/')[3] || 'rooms';

  const getHeaders = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });

  const handleAddRoom = async () => {
    if (!newRoom.name || !newRoom.capacity) return;
    try {
      if (editingRoom) {
        const res = await axios.patch(`/_/backend/rooms/${editingRoom.id}`, {
          name: newRoom.name,
          capacity: parseInt(newRoom.capacity)
        }, getHeaders());
        setRooms(rooms.map(r => r.id === editingRoom.id ? res.data : r));
      } else {
        const res = await axios.post('/_/backend/rooms', { 
          name: newRoom.name, 
          capacity: parseInt(newRoom.capacity) 
        }, getHeaders());
        setRooms([...rooms, res.data]);
      }
      closeRoomSidebar();
    } catch (err) {
      if (editingRoom) {
        setRooms(rooms.map(r => r.id === editingRoom.id ? { ...r, name: newRoom.name, capacity: parseInt(newRoom.capacity) } : r));
      } else {
        setRooms([...rooms, { id: Date.now(), name: newRoom.name, capacity: parseInt(newRoom.capacity) }]);
      }
      closeRoomSidebar();
    }
  };

  const handleDeleteRoom = async (id) => {
    try {
      await axios.delete(`/_/backend/rooms/${id}`, getHeaders());
      setRooms(rooms.filter(r => r.id !== id));
    } catch (err) {
      setRooms(rooms.filter(r => r.id !== id));
    }
  };

  const openEditSidebar = (room) => {
    setEditingRoom(room);
    setNewRoom({ name: room.name, capacity: room.capacity });
    setShowAddRoomSidebar(true);
  };

  const closeRoomSidebar = () => {
    setShowAddRoomSidebar(false);
    setEditingRoom(null);
    setNewRoom({ name: '', capacity: '' });
  };

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get('/_/backend/rooms', getHeaders());
        if (res.data && Array.isArray(res.data)) {
          setRooms(res.data);
        }
      } catch (err) {
        console.log('Backend offline');
      }
    };
    fetchRooms();
  }, []);

  const translations = {
    uz: {
      home: 'Asosiy', teachers: 'O\'qituvchilar', groups: 'Guruhlar', courses: 'Kurslar', students: 'Talabalar', gifts: 'Sovg\'alar', finance: 'Moliya', settings: 'Boshqarish', subscription: 'Obuna', subExpired: 'Obunangiz tugagan', renew: 'Obunani yangilash', welcome: 'Salom, creator!', welcomeSub: 'CRMga xush kelibsiz!', schedule: 'Dars Jadvali', logout: 'Chiqish', logoutTitle: 'Hisobdan chiqish', logoutMessage: 'Rostdan ham hisobdan chiqmoqchimisiz?', logoutConfirm: 'Ha, chiqaman', logoutCancel: 'Yo\'q, qolaman', menu: 'Menu',
      settingsMenu: { courses: 'Kurslar', rooms: 'Xonalar', branch: 'Filiallar', employees: 'Xodimlar', reasons: 'Sabablar', roles: 'Rollar', coin: 'Coin', sendMessage: 'Xabar yuborish', faq: 'FAQ', check: 'Tekshiruv' }
    },
    ru: {
      home: 'Главная', teachers: 'Учителя', groups: 'Группы', courses: 'Курсы', students: 'Студенты', gifts: 'Подарки', finance: 'Финансы', settings: 'Управление', subscription: 'Подписка', subExpired: 'Ваша подписка истекла', renew: 'Продлить подписку', welcome: 'Привет, создатель!', welcomeSub: 'Добро пожаловать в CRM!', schedule: 'Расписание занятий', logout: 'Выйти', logoutTitle: 'Выйти из аккаунта', logoutMessage: 'Вы действительно хотите выйти?', logoutConfirm: 'Да, выйти', logoutCancel: 'Нет, остаться', menu: 'Меню',
      settingsMenu: { courses: 'Курсы', rooms: 'Кабинеты', branch: 'Филиалы', employees: 'Сотрудники', reasons: 'Причины', roles: 'Роли', coin: 'Монеты', sendMessage: 'Отправить сообщение', faq: 'ЧАВО', check: 'Проверка' }
    }
  };

  const t = translations[language];

  return (
    <div className={`relative flex h-screen font-sans transition-colors duration-300 select-none overflow-hidden ${isDarkMode ? 'bg-[#0f172a] text-white' : 'bg-[#f8f9fc]'}`}>
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />}

      <aside className={`fixed lg:relative inset-y-0 left-0 w-64 border-r flex-shrink-0 flex flex-col z-50 transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} ${isDarkMode ? 'bg-[#1e293b] border-gray-700' : 'bg-white border-gray-100'}`}>
        <div className="h-20 flex items-center px-6 border-b dark:border-gray-700 border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#1e2a4a] rounded-xl flex items-center justify-center shadow-lg rotate-3 overflow-hidden p-[2px]">
              <img src={educationImg} alt="Logo" className="w-full h-full object-cover rounded-lg bg-[#f8f9fc]" />
            </div>
            <span className={`text-2xl font-black tracking-tighter ${isDarkMode ? 'text-white' : 'text-[#1e2a4a]'}`}>
              NAJOT<span className="text-[#7c4dff]">COIN</span>
            </span>
          </div>
        </div>

        {activeTab === 'settings' && (
          <button onClick={() => setIsSettingsMenuOpen(!isSettingsMenuOpen)} className="absolute top-28 -right-4 z-40 w-8 h-8 flex items-center justify-center rounded-xl bg-[#7c4dff] text-white shadow-lg border-2 border-white dark:border-[#1e293b]">
            <svg className={`w-4 h-4 transition-transform duration-300 ${!isSettingsMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
          </button>
        )}

        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {[
            { id: 'home', label: t.home, icon: 'home' },
            { id: 'teachers', label: t.teachers, icon: 'teachers' },
            { id: 'groups', label: t.groups, icon: 'classes' },
            { id: 'students', label: t.students, icon: 'students' },
            { id: 'gifts', label: t.gifts, icon: 'gifts' },
            { id: 'finance', label: t.finance, icon: 'finance' },
            { id: 'settings', label: t.settings, icon: 'settings' },
          ].map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button key={item.id} onClick={() => { navigate(`/dashboard/${item.id}${item.id === 'settings' ? '/rooms' : ''}`); if (window.innerWidth < 1024) setIsMobileMenuOpen(false); }} className={`w-full p-3 rounded-xl flex items-center justify-between transition-all group ${isActive ? 'bg-[#7c4dff] text-white shadow-lg shadow-indigo-100' : isDarkMode ? 'text-gray-400 hover:bg-gray-800 hover:text-white' : 'text-gray-500 hover:bg-gray-50 hover:text-[#1e2a4a]'}`}>
                <div className="flex items-center space-x-3">
                  <SidebarIcon name={item.icon} />
                  <span className="font-medium text-sm">{item.label}</span>
                </div>
              </button>
            );
          })}
        </nav>

        <div className="p-4">
          <div className={`rounded-2xl p-4 border ${isDarkMode ? 'bg-[#334155] border-gray-600' : 'bg-gray-50 border-gray-100'}`}>
            <div className={`flex items-center space-x-2 mb-2 ${isDarkMode ? 'text-white' : 'text-[#1e2a4a]'}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              <span className="font-bold">{t.subscription}</span>
            </div>
            <p className="text-xs text-red-500 mb-4 font-medium italic">{t.subExpired}</p>
            <button className="w-full bg-red-500 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-red-600 shadow-sm">{t.renew}</button>
          </div>
        </div>
      </aside>

      <div className={`absolute lg:left-64 top-0 bottom-0 w-64 transition-all duration-300 border-r z-20 flex flex-col shadow-2xl ${ (activeTab === 'settings' && isSettingsMenuOpen) ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none' } ${isDarkMode ? 'bg-[#1e293b] border-gray-700' : 'bg-white border-gray-100'}`}>
        <div className="h-20 flex items-center px-6 border-b flex-shrink-0 dark:border-gray-700 border-gray-100">
          <h2 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-[#1e2a4a]'}`}>{t.menu}</h2>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {[
            { id: 'courses', label: t.settingsMenu.courses, icon: 'courses' },
            { id: 'rooms', label: t.settingsMenu.rooms, icon: 'rooms' },
          ].map((item) => (
            <button key={item.id} onClick={() => navigate(`/dashboard/settings/${item.id}`)} className={`w-full p-3 rounded-xl flex items-center space-x-3 transition-all ${activeSettingsTab === item.id ? isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-[#1e2a4a]' : isDarkMode ? 'text-gray-400 hover:bg-gray-800 hover:text-white' : 'text-gray-500 hover:bg-gray-50 hover:text-[#1e2a4a]'}`}>
              <SidebarIcon name={item.icon} />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <main className="flex-1 flex flex-col overflow-hidden relative">
        <header className={`h-20 border-b flex items-center justify-between px-4 md:px-8 z-10 shadow-sm flex-shrink-0 ${isDarkMode ? 'bg-[#1e293b] border-gray-700' : 'bg-white border-gray-100'}`}>
          <div className="flex items-center space-x-4">
            <button onClick={() => setIsMobileMenuOpen(true)} className={`p-2 rounded-xl lg:hidden ${isDarkMode ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-100'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
            <div className={`hidden sm:flex items-center space-x-4 px-4 py-2.5 rounded-xl border ${isDarkMode ? 'bg-[#334155] border-gray-600' : 'bg-gray-50 border-gray-100'}`}>
              <span className={`font-semibold text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>May 1, 2026 - May 31, 2026</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={() => setLanguage(language === 'uz' ? 'ru' : 'uz')} className={`relative w-[88px] h-10 rounded-full p-1 ${isDarkMode ? 'bg-[#334155]' : 'bg-gray-200'}`}>
              <div className={`absolute top-1 w-[40px] h-8 rounded-full flex items-center justify-center text-xs font-black tracking-wide shadow-md transition-all duration-500 ${language === 'uz' ? 'left-1 bg-[#7c4dff] text-white' : 'left-[44px] bg-[#7c4dff] text-white'}`}>{language === 'uz' ? 'UZ' : 'RU'}</div>
            </button>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className={`w-10 h-10 flex items-center justify-center rounded-xl ${isDarkMode ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
              {isDarkMode ? <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414z"/></svg> : <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>}
            </button>
            <button onClick={() => setShowLogoutModal(true)} className="w-10 h-10 flex items-center justify-center text-red-400 hover:bg-red-50 rounded-xl"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg></button>
            <div className="w-11 h-11 bg-indigo-100 rounded-xl overflow-hidden border-2 border-indigo-200"><img src={`https://ui-avatars.com/api/?name=${userEmail}&background=random&color=fff&bold=true`} alt="Profile" /></div>
          </div>
        </header>

        <div className={`flex-1 overflow-y-auto px-6 py-8 ${isDarkMode ? 'bg-[#0f172a]' : 'bg-[#fdfdff]'}`}>
          <Routes>
            <Route path="home" element={<>
              <div className="mb-10"><h2 className={`text-3xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-[#1e2a4a]'}`}>{t.welcome}</h2><p className="font-medium text-gray-500">{t.welcomeSub}</p></div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
                {[ { label: t.groups, icon: 'classes', color: 'text-purple-600', bg: 'bg-purple-50' }, { label: t.settingsMenu.courses, icon: 'courses', color: 'text-indigo-600', bg: 'bg-indigo-50' }, { label: t.students, icon: 'students', color: 'text-blue-600', bg: 'bg-blue-50' }, { label: t.gifts, icon: 'gifts', color: 'text-pink-600', bg: 'bg-pink-50' }, { label: t.teachers, icon: 'teachers', color: 'text-orange-600', bg: 'bg-orange-50' } ].map((stat, i) => (
                  <div key={i} className={`p-7 rounded-3xl border flex flex-col items-center group transition-all ${isDarkMode ? 'bg-[#1e293b] border-gray-700' : 'bg-white border-gray-100'}`}>
                    <div className={`mb-4 p-4 ${stat.bg} ${stat.color} rounded-2xl shadow-inner`}><SidebarIcon name={stat.icon} /></div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">{stat.label}</div>
                    <div className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-[#1e2a4a]'}`}>0</div>
                  </div>
                ))}
              </div>
            </>} />
            <Route path="settings/*" element={<>
              <div className="mb-8"><h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-[#1e2a4a]'}`}>{t.settings}</h2>
                <div className="flex space-x-6 border-b dark:border-gray-700 overflow-x-auto no-scrollbar">
                  {[ { id: 'courses', label: t.settingsMenu.courses }, { id: 'rooms', label: t.settingsMenu.rooms } ].map(tab => (
                    <button key={tab.id} onClick={() => navigate(`/dashboard/settings/${tab.id}`)} className={`pb-4 text-sm font-semibold relative ${activeSettingsTab === tab.id ? 'text-[#7c4dff]' : 'text-gray-500'}`}>
                      {tab.label}{activeSettingsTab === tab.id && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#7c4dff] rounded-t-full" />}
                    </button>
                  ))}
                </div>
              </div>
              <Routes>
                <Route path="rooms" element={<div className={`rounded-3xl border p-6 ${isDarkMode ? 'bg-[#1e293b] border-gray-700' : 'bg-white border-gray-100'}`}>
                  <div className="flex items-center justify-between mb-8"><h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-[#1e2a4a]'}`}>{t.settingsMenu.rooms}</h3>
                    <button onClick={() => setShowAddRoomSidebar(true)} className="bg-[#7c4dff] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md">+ Xonani qo'shish</button>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                    {rooms.map(room => (
                      <div key={room.id} className={`p-5 rounded-2xl border flex items-center justify-between transition-all ${isDarkMode ? 'bg-[#0f172a] border-gray-700' : 'bg-[#f8f9fc] border-gray-50'}`}>
                        <div><h4 className={`font-bold text-[15px] ${isDarkMode ? 'text-white' : 'text-[#1e2a4a]'}`}>{room.name}</h4><p className="text-xs text-gray-500">Sig'imi: {room.capacity}</p></div>
                        <div className="flex space-x-2">
                          <button onClick={() => handleDeleteRoom(room.id)} className="p-2 text-gray-400 hover:text-red-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                          <button onClick={() => openEditSidebar(room)} className="p-2 text-gray-400 hover:text-indigo-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>} />
                <Route path="*" element={<Navigate to="rooms" replace />} />
              </Routes>
            </>} />
            <Route path="*" element={<Navigate to="home" replace />} />
          </Routes>
        </div>
      </main>

      <div className={`fixed inset-y-0 right-0 z-50 w-full sm:w-96 shadow-2xl transition-transform duration-300 ${showAddRoomSidebar ? 'translate-x-0' : 'translate-x-full'} ${isDarkMode ? 'bg-[#1e293b]' : 'bg-white'}`}>
        <div className={`p-6 border-b flex items-center justify-between dark:border-gray-700 border-gray-100`}><h2 className={`text-[17px] font-bold ${isDarkMode ? 'text-white' : 'text-[#1e2a4a]'}`}>{editingRoom ? 'Xonani tahrirlash' : 'Xonani qo\'shish'}</h2><button onClick={closeRoomSidebar} className="p-2 text-gray-400 hover:text-gray-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg></button></div>
        <div className="p-6 space-y-6">
          <div><label className={`block text-[13px] font-bold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-[#1e2a4a]'}`}>Nomi *</label><input type="text" value={newRoom.name} onChange={(e) => setNewRoom({...newRoom, name: e.target.value})} className={`w-full px-4 py-3 rounded-xl border outline-none ${isDarkMode ? 'bg-[#0f172a] border-gray-700 text-white' : 'bg-white border-gray-200'}`} /></div>
          <div><label className={`block text-[13px] font-bold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-[#1e2a4a]'}`}>Sig'imi *</label><input type="number" value={newRoom.capacity} onChange={(e) => setNewRoom({...newRoom, capacity: e.target.value})} className={`w-full px-4 py-3 rounded-xl border outline-none ${isDarkMode ? 'bg-[#0f172a] border-gray-700 text-white' : 'bg-white border-gray-200'}`} /></div>
        </div>
        <div className="p-6 border-t dark:border-gray-700 flex justify-end space-x-3"><button onClick={closeRoomSidebar} className="px-5 py-2.5 text-gray-600">Bekor qilish</button><button onClick={handleAddRoom} className="px-6 py-2.5 bg-[#7c4dff] text-white rounded-xl font-bold">{editingRoom ? 'Saqlash' : 'Qo\'shish'}</button></div>
      </div>
      {showAddRoomSidebar && <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={closeRoomSidebar} />}
      {showLogoutModal && <div className="fixed inset-0 z-50 flex items-center justify-center"><div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowLogoutModal(false)} /><div className={`relative w-full max-w-sm mx-4 rounded-3xl p-8 shadow-2xl border ${isDarkMode ? 'bg-[#1e293b] border-gray-700' : 'bg-white border-gray-100'}`}><div className="flex flex-col items-center text-center"><div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-5"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg></div><h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-[#1e2a4a]'}`}>{t.logoutTitle}</h3><p className="text-sm mb-8 text-gray-500">{t.logoutMessage}</p><div className="flex w-full space-x-3"><button onClick={() => setShowLogoutModal(false)} className="flex-1 py-3 text-gray-600">{t.logoutCancel}</button><button onClick={onLogout} className="flex-1 py-3 bg-red-500 text-white rounded-xl font-bold">{t.logoutConfirm}</button></div></div></div></div>}
    </div>
  );
};

export default Dashboard;
