import React from 'react';

export const BattleScreen: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#101622] overflow-hidden font-display">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: 'url("https://placeholder.pics/svg/1920x1080")'}}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#101622]/80 via-[#101622]/50 to-[#101622]"></div>

      {/* Main Game Area */}
      <main className="flex-1 relative flex flex-col items-center justify-center p-4 md:p-8">
        
        {/* Game HUD Layout */}
        <div className="relative w-full max-w-7xl h-full flex flex-col gap-6 pb-24">
          
          {/* Headline / Context */}
          <div className="text-center z-10 pt-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 backdrop-blur-sm mb-4 animate-pulse">
              <span className="material-symbols-outlined text-red-500 text-sm">warning</span>
              <span className="text-red-400 text-xs font-bold tracking-wider uppercase">最终决战警告</span>
            </div>
            <h1 className="text-white text-3xl md:text-5xl font-black tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              决战幕后黑手
            </h1>
            <p className="text-slate-400 mt-2 text-sm md:text-base">利用知识光束击破无知屏障！</p>
          </div>

          {/* Battlefield Container */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Side: Heroes */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-end h-full pb-8 relative z-10 order-2 lg:order-1">
              <div className="relative group">
                {/* Hero Glow Effect */}
                <div className="absolute -inset-4 bg-blue-600/30 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                
                {/* Hero Images Composition */}
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                   <div className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 rounded-xl bg-cover bg-center border-4 border-blue-600 shadow-[0_0_20px_rgba(18,88,226,0.6)] z-20 transform translate-x-4 translate-y-4" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDo0Apy_fR3LAzwKyR4AjXOOgjtljf91u5JJi-rpcT9Apm8CZhAzOplvEAS30OH8iYuHQDtYJQbA_qKRqHkkd916CTaFpJRWC3zNfnpHwE3jINLO319rbRH3OToXKTh7oBZ3fjOXAc1o29Rkq3errf93Zc3owzvOBtq8qaoXzwykcbRzM8N4iZ2lpWKYS3JXaBWP3ARGnJrsI_SeaHo2a4FE2bXgrImc_fM5OXHOqvR9Ck9_fazrtiBoLfgw3cQq4DmpjFU_vaHIIzG")'}}></div>
                   <div className="absolute bottom-4 left-4 w-28 h-28 md:w-36 md:h-36 rounded-xl bg-cover bg-center border-4 border-slate-700 z-10 opacity-90 transform -rotate-6" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9UX_zrUR0CGzmgfteSng5gBsbIHziimkIoZkECb48nE0jkKpSvzks_vLmWuGe6OKvGVNma_q6BWr0PbtIA1i8uf7ZF_tT_n4P6pPnq-DNTRGd6dP1fuowk0dzMYm0xkMnvuW1fAC5RpHUzz0ePDtDI2rCiyfMpbltGZkpTxZBQKTiw2XjqUAQpMi3CZP72DwzBAlnyaKPs5poz7S9ulUjqtoXQMO817xuBdY237mh7wjg1WcE0ukCWNNXPCVhcekzD-D3KCDSGlDG")'}}></div>
                   <div className="absolute top-0 right-1/4 w-24 h-24 md:w-32 md:h-32 rounded-full bg-cover bg-center border-4 border-yellow-400 z-30 shadow-lg transform -translate-y-4" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDiclFyGuVlM5eeLRdeEbTMSWouyyW9IqAhZ_syjap8ATLuXRfwFZkN4wxNBgmDgBpKjgpzUPlzeklf44CbunZpMpwkTBzJua383nmAj616td5jqSw6Zypk-q8a0YpWXJSI5MkD_FizIq8NglNPOWMVK6ED-CsTNYPfcO0qNJXuYGmhJ0_A5v34F-7Z2gXjlKFwZ-V0vEE0UhqeuIJ8CndH7yDkz9rTHzd7sZvZ7NGL533t8HKg-_cwr5_guHRLHitKEa9qui_QE3WF")'}}></div>
                </div>
              </div>

              {/* Hero Stats */}
              <div className="mt-8 bg-slate-800/80 backdrop-blur border border-slate-700 rounded-xl p-4 w-full max-w-xs shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-yellow-400">bolt</span>
                  <span className="text-white font-bold">正义能量</span>
                </div>
                <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 w-[85%] shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
                </div>
                <div className="flex justify-between mt-1 text-xs text-slate-400">
                  <span>充能中...</span>
                  <span>85%</span>
                </div>
              </div>
            </div>

            {/* Center: Puzzle Shield */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center z-20 order-1 lg:order-2 w-full">
              <div className="relative w-full max-w-lg">
                {/* Shield Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl blur opacity-30 animate-pulse"></div>
                
                {/* Puzzle Card */}
                <div className="relative bg-[#192233]/95 border border-cyan-500/50 rounded-2xl p-6 md:p-8 shadow-[0_0_40px_rgba(18,88,226,0.15)] backdrop-blur-md">
                   <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full font-bold shadow-lg border border-white/10 flex items-center gap-2 whitespace-nowrap">
                         <span className="material-symbols-outlined text-sm">shield</span>
                         知识护盾
                      </div>
                   </div>
                   
                   <div className="mt-4 mb-6">
                      <h3 className="text-cyan-200 text-sm font-bold uppercase tracking-widest mb-2 text-center">句子重组任务</h3>
                      <p className="text-white text-xl md:text-2xl font-bold text-center leading-relaxed">
                          请找出句子中的 <span className="text-red-400 underline decoration-wavy">陷阱词</span> 并点击它！
                      </p>
                   </div>

                   <div className="bg-[#111722] rounded-xl p-6 border border-slate-700/50 flex flex-wrap gap-3 justify-center items-center min-h-[120px]">
                      <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-lg font-medium transition-all hover:-translate-y-1 shadow-md">朱迪</button>
                      <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-lg font-medium transition-all hover:-translate-y-1 shadow-md">警官</button>
                      <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-lg font-medium transition-all hover:-translate-y-1 shadow-md">勇敢地</button>
                      <button className="px-4 py-2 bg-red-500/20 hover:bg-red-500 hover:text-white border border-red-500/50 text-red-200 rounded-lg text-lg font-medium transition-all hover:-translate-y-1 shadow-[0_0_10px_rgba(239,68,68,0.2)] animate-pulse">懒惰地</button>
                      <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-lg font-medium transition-all hover:-translate-y-1 shadow-md">抓住了</button>
                      <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-lg font-medium transition-all hover:-translate-y-1 shadow-md">坏蛋</button>
                   </div>

                   <div className="mt-6 flex justify-center">
                      <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white text-lg font-bold py-3 px-12 rounded-full shadow-[0_4px_14px_0_rgba(18,88,226,0.39)] transition-all active:scale-95 flex items-center gap-2">
                        <span className="material-symbols-outlined">auto_fix</span>
                        发射光束
                      </button>
                   </div>
                </div>
              </div>
            </div>

            {/* Right Side: Boss */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-start justify-end h-full pb-8 relative z-10 order-3">
              <div className="relative w-full flex flex-col items-center lg:items-start">
                 {/* Boss Aura */}
                 <div className="absolute inset-0 bg-purple-900/40 blur-3xl rounded-full transform scale-150"></div>
                 
                 {/* Boss Image */}
                 <div className="relative w-64 h-64 md:w-80 md:h-80 mb-4 transition-transform hover:scale-105 duration-700">
                    <div className="w-full h-full bg-contain bg-no-repeat bg-center drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYFXAXQbXbo3b0sYXWU1zrmiyDtebkOzsX80sWJfZpCocuiV0P4kdKevbeIJQyMYKTnp8eGOmZWOz4leRWCK8o-RV5VlvzUeCjWB8zSLeo6vo1S3RPyJLqGG5A0GodpaaA8VUWPvPK4GKO1EjDm5BfhyAeN6YL2iNdl1WsvzFC9kDP4FmDNTKzyBh04yGNnVDjVZYmnX4BbN7A537lncs89L2mY6mxH3TnI13JdaCb9uSHlVrN_XijJZZUnnhbXIF9yjciP1GY8pW3")'}}></div>
                    {/* Boss Dialogue Bubble */}
                    <div className="absolute -top-10 -left-10 bg-white text-slate-900 p-3 rounded-xl rounded-br-none shadow-lg text-sm font-bold max-w-[180px] animate-bounce">
                        "你们永远无法战胜我的无知屏障！咩哈哈哈！"
                    </div>
                 </div>

                 {/* Boss Health Bar */}
                 <div className="w-full max-w-sm bg-slate-900/90 backdrop-blur p-4 rounded-xl border border-red-900/50 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-1 opacity-20">
                      <span className="material-symbols-outlined text-red-500">warning</span>
                    </div>
                    <div className="flex justify-between items-end mb-2">
                       <div>
                          <h3 className="text-red-400 font-bold text-lg leading-none">幕后黑手</h3>
                          <span className="text-slate-500 text-xs uppercase tracking-wider">Bellwether (Mastermind)</span>
                       </div>
                       <span className="text-red-400 font-mono font-bold text-xl">45%</span>
                    </div>
                    {/* HP Bar Container */}
                    <div className="h-6 w-full bg-[#321818] rounded border border-red-900/30 relative overflow-hidden">
                       <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-600 via-red-500 to-orange-600 w-[45%] transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
                       {/* HP Segment lines */}
                       <div className="absolute inset-0 grid grid-cols-10 w-full h-full">
                          <div className="border-r border-black/20 h-full"></div>
                          <div className="border-r border-black/20 h-full"></div>
                          <div className="border-r border-black/20 h-full"></div>
                          <div className="border-r border-black/20 h-full"></div>
                          <div className="border-r border-black/20 h-full"></div>
                          <div className="border-r border-black/20 h-full"></div>
                          <div className="border-r border-black/20 h-full"></div>
                          <div className="border-r border-black/20 h-full"></div>
                          <div className="border-r border-black/20 h-full"></div>
                       </div>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                       <span className="text-xs text-slate-400">无知屏障 (HP)</span>
                       <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                          <span className="text-[10px] text-red-400 font-bold uppercase">CRITICAL STATE</span>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};
