import React, { useState } from 'react';

interface LoginScreenProps {
  onLogin: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a101d]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIb7tOmDB7WvlVkxpoeSgYypm1KPEDl3R8GevuBbcRENGif91FQbmoPxQugl6zIIRsYUEf3i3mRpnI8d0REY6li06f7itz6iHSXt1rxTymbRDjxnWqlROeQv4OrxiS2YdXhfwf0mRYf-7-wEumzk12x2NewjgygL8KES4VfSoYC33MHBiaUndf8JPpS00RLOKpHrd_nVsAPdz7xuXaVGk-_FYS29-jWVEujSzAL1h0XR7fr8QXqFqtsgrCPmFzgYHUO4yD0jA4WwTW")'}}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a101d] via-[#0a101d]/80 to-[#1e3a8a]/30"></div>
      
      {/* Animated Particles/Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(19,127,236,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(19,127,236,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 w-full max-w-md p-6">
        <div className="bg-[#111722]/90 backdrop-blur-xl border border-blue-500/30 rounded-3xl shadow-2xl overflow-hidden relative">
          
          {/* Top Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 animate-pulse"></div>
          
          <div className="p-8 md:p-10">
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="size-20 bg-blue-600/20 rounded-full flex items-center justify-center mb-4 ring-4 ring-blue-500/20 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                <span className="material-symbols-outlined text-5xl text-blue-500">local_police</span>
              </div>
              <h1 className="text-3xl font-black text-white tracking-tight">ZPD 警务系统</h1>
              <p className="text-blue-300/60 text-sm font-medium tracking-widest uppercase mt-1">Secure Officer Access Terminal</p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-blue-300 uppercase tracking-wider ml-1">警号 (Badge Number)</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-slate-500 group-focus-within:text-blue-500 transition-colors">badge</span>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Enter your badge ID" 
                    className="w-full bg-[#0a101d] border border-slate-700 text-white rounded-xl py-3.5 pl-11 pr-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 font-mono"
                    defaultValue="ZPD-9527"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-blue-300 uppercase tracking-wider ml-1">访问代码 (Access Code)</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-slate-500 group-focus-within:text-blue-500 transition-colors">lock</span>
                  </div>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full bg-[#0a101d] border border-slate-700 text-white rounded-xl py-3.5 pl-11 pr-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 font-mono"
                    defaultValue="password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mt-2">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-600 bg-[#0a101d] text-blue-600 focus:ring-blue-500/50" defaultChecked />
                  <span className="ml-2 text-sm text-slate-400">记住警号</span>
                </label>
                <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">忘记代码?</a>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/40 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <span className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span>正在验证...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined group-hover:animate-pulse">fingerprint</span>
                    <span>身份验证 (Authenticate)</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="bg-[#0f1520] px-8 py-4 border-t border-slate-800 text-center">
             <p className="text-xs text-slate-500">Unauthorized access is a felony under Zootopia Penal Code 7734.</p>
          </div>
        </div>
        
        {/* Support Link */}
        <div className="text-center mt-8">
            <button onClick={onLogin} className="text-slate-500 hover:text-white text-sm transition-colors flex items-center justify-center gap-1 mx-auto">
                <span className="material-symbols-outlined text-sm">help</span>
                Need assistance from Clawhauser?
            </button>
        </div>
      </div>
    </div>
  );
};
