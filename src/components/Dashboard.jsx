import React from 'react';

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
    default:
      return null;
  }
};

const Dashboard = ({ onLogout }) => {
  return (
    <div className="flex h-screen bg-[#f8f9fc] font-sans">
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col z-20">
        <div className="p-6 flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#1e2a4a] rounded-xl flex items-center justify-center text-white shadow-lg rotate-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <span className="text-2xl font-black text-[#1e2a4a] tracking-tighter">CRM<span className="text-[#7c4dff]">SYS</span></span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          <button className="w-full bg-[#7c4dff] text-white p-3 rounded-xl flex items-center space-x-3 cursor-pointer shadow-lg shadow-indigo-100 transition-all hover:scale-[1.02] active:scale-95">
            <SidebarIcon name="home" />
            <span className="font-medium">Asosiy</span>
          </button>
          {[
            { id: 'teachers', label: 'O\'qituvchilar', icon: 'teachers' },
            { id: 'groups', label: 'Guruhlar', icon: 'classes' },
            { id: 'courses', label: 'Kurslar', icon: 'courses' },
            { id: 'students', label: 'Talabalar', icon: 'students' },
            { id: 'gifts', label: 'Sovg\'alar', icon: 'gifts' },
            { id: 'settings', label: 'Boshqarish', icon: 'settings' },
          ].map((item) => (
            <button key={item.id} className="w-full text-gray-500 hover:bg-gray-50 p-3 rounded-xl flex items-center space-x-3 cursor-pointer transition-all hover:text-[#1e2a4a] active:scale-95 group">
              <SidebarIcon name={item.icon} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4">
          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
            <div className="flex items-center space-x-2 mb-2 text-[#1e2a4a]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              <span className="font-bold">Obuna</span>
            </div>
            <p className="text-xs text-red-500 mb-4 font-medium italic">Obunangiz tugagan</p>
            <button className="w-full bg-red-500 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-red-600 transition-all hover:shadow-lg active:scale-95">
              Obunani yangilash
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 z-10 shadow-sm">
          <div className="flex items-center space-x-4 bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-100 hover:bg-white transition-colors cursor-pointer group">
            <svg className="w-5 h-5 text-indigo-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            <span className="text-gray-600 font-semibold text-sm">May 1, 2026 - May 31, 2026</span>
          </div>

          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 hover:bg-white transition-all active:scale-95">
              <span className="text-sm font-bold text-gray-600">O'zbekcha</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div className="flex items-center space-x-4">
              <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:bg-indigo-50 hover:text-indigo-500 rounded-xl transition-all active:scale-90">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
              </button>
              <button 
                onClick={onLogout}
                className="w-10 h-10 flex items-center justify-center text-red-400 hover:bg-red-50 hover:text-red-500 rounded-xl transition-all active:scale-90"
                title="Chiqish"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
              </button>
              <div className="w-11 h-11 bg-indigo-100 rounded-xl flex items-center justify-center overflow-hidden border-2 border-indigo-200 cursor-pointer hover:border-indigo-400 transition-colors">
                <img src={`https://ui-avatars.com/api/?name=${userEmail}&background=random&color=fff&bold=true`} alt="Profile" />
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 bg-[#fdfdff]">
          <div className="mb-10">
            <h2 className="text-3xl font-black text-[#1e2a4a] mb-2 tracking-tight">Salom, creator!</h2>
            <p className="text-gray-500 font-medium">CRMga xush kelibsiz!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
            {[
              { label: 'Guruhlar', count: 0, icon: 'classes', color: 'text-purple-600', bg: 'bg-purple-50' },
              { label: 'Kurslar', count: 0, icon: 'courses', color: 'text-indigo-600', bg: 'bg-indigo-50' },
              { label: 'Talabalar', count: 1, icon: 'students', color: 'text-blue-600', bg: 'bg-blue-50' },
              { label: 'Sovg\'alar', count: 3, icon: 'gifts', color: 'text-pink-600', bg: 'bg-pink-50' },
              { label: 'O\'qituvchilar', count: 0, icon: 'teachers', color: 'text-orange-600', bg: 'bg-orange-50' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-7 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
                <div className={`mb-4 p-4 ${stat.bg} ${stat.color} rounded-2xl group-hover:scale-110 transition-transform shadow-inner`}>
                  <SidebarIcon name={stat.icon} />
                </div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">{stat.label}</div>
                <div className="text-3xl font-black text-[#1e2a4a] tracking-tight">{stat.count}</div>
              </div>
            ))}
          </div>

          <button className="w-full bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all active:scale-[0.99] group text-left">
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gray-50 rounded-lg text-indigo-500 group-hover:bg-indigo-50 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                </div>
                <h3 className="font-bold text-[#1e2a4a] group-hover:text-indigo-600 transition-colors">Dars Jadvali</h3>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
            </div>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
