import React from 'react';

export const ReportScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#101622] text-slate-200 font-sans pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#232f48] bg-[#111722]/95 backdrop-blur-md px-4 sm:px-10 py-3 shadow-lg">
        <div className="flex items-center gap-4 text-white">
          <div className="flex items-center justify-center size-10 rounded-full bg-blue-600/20 text-blue-600 border border-blue-600/30">
            <span className="material-symbols-outlined text-2xl">local_police</span>
          </div>
          <div>
            <h2 className="text-white text-lg font-bold leading-tight font-display">ZPD 警务终端</h2>
            <p className="text-xs text-slate-400 tracking-widest uppercase">Official Police Interface</p>
          </div>
        </div>
        <div className="flex flex-1 justify-end gap-8">
           <div className="hidden md:flex items-center gap-9">
            <a className="text-white/80 hover:text-white text-sm font-medium transition-colors" href="#">首页</a>
            <a className="text-white/80 hover:text-white text-sm font-medium transition-colors" href="#">档案室</a>
            <a className="text-white text-sm font-medium border-b-2 border-blue-600 pb-1" href="#">特训营</a>
          </div>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-blue-600/40" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1PMfCAZJWBl6_m4BedcAzLSDx8ARixlVbDSv78fDSCihRqt-SAPtFlV0XItVhL6jk_0aViHmsPXozOh-7cBL3wzBbHQriPi3PXgLfvC9VwUcm79KCxJKd-2mS76L8GJucYI_yQCYGr0AhDM_P811wiilcbBHTGKX7cCHZJmD_5XrKMLt7eonUPhg5-yamVxWG0rbYsK5jq7H9XRLJ71waWYOLjzFHOUSBtdZ7ZYybLr5wIbgTR0vXlP-Nq0dkL-5aCGqF1keFPHXz")' }}></div>
        </div>
      </header>

      <div className="px-4 sm:px-40 flex flex-1 justify-center py-8">
        <div className="flex flex-col max-w-[960px] flex-1 gap-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Briefing */}
            <div className="lg:col-span-7 flex flex-col justify-center gap-4 p-4 relative">
               <div className="flex flex-col gap-2 z-10">
                 <div className="flex items-center gap-2 mb-1">
                   <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600/20 text-blue-300 border border-blue-500/30 tracking-wider">CASE #8821-Z</span>
                   <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 tracking-wider">COMPLETED</span>
                 </div>
                 <h1 className="text-white text-5xl font-black leading-tight font-display">战斗统计报告</h1>
                 <p className="text-[#92a4c9] text-lg font-normal flex items-center gap-2">
                   <span className="material-symbols-outlined text-sm">check_circle</span>
                   任务状态：圆满成功
                 </p>
               </div>
               
               {/* Stamp */}
               <div className="absolute right-0 top-0 opacity-80 pointer-events-none select-none z-0 transform translate-x-4 -translate-y-4 rotate-[-12deg]">
                 <div className="border-4 border-red-500 text-red-500 px-4 py-1 rounded-lg text-2xl font-black tracking-widest uppercase opacity-70">
                    MISSION<br/>SUCCESS
                 </div>
               </div>

               <div className="mt-6 bg-[#1a2332] border-l-4 border-orange-500 p-4 rounded-r-lg relative">
                 <div className="flex gap-4">
                   <div className="shrink-0 size-12 rounded-full bg-orange-500/20 border border-orange-500/50 flex items-center justify-center">
                     <span className="material-symbols-outlined text-orange-400">pets</span>
                   </div>
                   <div>
                     <p className="text-orange-200 font-bold text-sm mb-1">Nick Wilde (尼克)</p>
                     <p className="text-slate-300 italic">"还不赖嘛，菜鸟！这次的线索找得比我还快。"</p>
                     <p className="text-slate-500 text-xs mt-1">"Not bad, rookie! Found those clues faster than me."</p>
                   </div>
                 </div>
               </div>
            </div>

            {/* Right: Visual */}
            <div className="lg:col-span-5 h-full min-h-[250px] lg:min-h-0">
               <div className="w-full h-full bg-center bg-no-repeat bg-cover rounded-xl border border-[#232f48] shadow-2xl overflow-hidden relative group" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_8Ra-TRl9lo2sCsJz3QvoBSP-NOgLNLd7E7_KZkmnUPl2csdwvaOEJpFXfLFOM_wIGSw9CEzFX6aX2lJefO0FoJJPn0ctzjJg_PlqPIwrb5cInJEsxfEM9pZXfecDDIP1w7EdgWA4frJ3pDS0sVBHDEyT9kVuyf-25PDy1iGIsu3Y4_bb-ijZCgxaSrdpQkn9CoZ3vC4CQf6Skr4LgAh82Fu6bK3PuXcAltREl01D88OyMK6erpETfN-O7-JhZc3f5wmM6HVlwvq-")' }}>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#111722] via-transparent to-transparent opacity-80"></div>
                 <div className="absolute bottom-4 left-4">
                   <span className="bg-black/50 backdrop-blur px-2 py-1 rounded text-xs text-white font-mono border border-white/10">CAM-02 RECORDING</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="flex flex-wrap gap-4 px-2">
             <div className="flex min-w-[200px] flex-1 flex-col gap-3 rounded-xl p-6 bg-[#1a2332] border border-[#232f48] hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                 <span className="material-symbols-outlined text-4xl text-blue-400">target</span>
               </div>
               <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">准确度战力</p>
               <div className="flex items-baseline gap-2">
                 <p className="text-white text-4xl font-bold font-display">95%</p>
                 <span className="flex items-center text-emerald-400 text-sm font-bold bg-emerald-400/10 px-2 py-0.5 rounded-full">+5%</span>
               </div>
               <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                 <div className="bg-blue-500 h-full rounded-full" style={{ width: '95%' }}></div>
               </div>
             </div>
             
             <div className="flex min-w-[200px] flex-1 flex-col gap-3 rounded-xl p-6 bg-[#1a2332] border border-[#232f48] hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                 <span className="material-symbols-outlined text-4xl text-purple-400">speed</span>
               </div>
               <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">搜寻速度</p>
               <div className="flex items-baseline gap-2">
                 <p className="text-white text-4xl font-bold font-display">极快</p>
                 <span className="flex items-center text-emerald-400 text-sm font-bold bg-emerald-400/10 px-2 py-0.5 rounded-full">S级</span>
               </div>
               <div className="flex gap-1 mt-2">
                 <div className="h-1.5 w-full bg-purple-500 rounded-full animate-pulse"></div>
                 <div className="h-1.5 w-full bg-purple-500 rounded-full animate-pulse delay-75"></div>
                 <div className="h-1.5 w-full bg-purple-500 rounded-full animate-pulse delay-150"></div>
               </div>
             </div>

             <div className="flex min-w-[200px] flex-1 flex-col gap-3 rounded-xl p-6 bg-[#1a2332] border border-[#232f48] hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                 <span className="material-symbols-outlined text-4xl text-yellow-400">military_tech</span>
               </div>
               <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">经验值获得</p>
               <div className="flex items-baseline gap-2">
                 <p className="text-white text-4xl font-bold font-display">+150</p>
                 <p className="text-slate-400 text-xl font-bold">XP</p>
               </div>
               <p className="text-yellow-400/80 text-xs font-medium mt-1">距离晋升警长还差 450 XP</p>
             </div>
          </div>

          {/* Unresolved Mysteries */}
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center justify-between px-2">
               <h2 className="text-white text-[22px] font-bold leading-tight flex items-center gap-3">
                 <span className="material-symbols-outlined text-red-400">folder_open</span>
                 未解之谜 (需复习知识点)
               </h2>
               <button className="text-sm text-blue-500 hover:text-blue-300 flex items-center gap-1 transition-colors">
                 查看档案库 <span className="material-symbols-outlined text-sm">arrow_forward</span>
               </button>
            </div>
            
            <div className="bg-[#1a2332]/50 border border-dashed border-slate-700 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="relative group bg-[#252f44] border-l-4 border-red-500 p-4 rounded-r-lg hover:translate-x-1 transition-transform cursor-pointer shadow-lg">
                   <div className="flex justify-between items-start">
                     <div className="flex gap-3">
                        <div className="mt-1"><span className="material-symbols-outlined text-slate-400">description</span></div>
                        <div>
                          <p className="text-white font-bold text-lg">错别字纠正</p>
                          <p className="text-slate-400 text-sm mt-1">目标汉字: <span className="text-red-300 font-mono text-base mx-1 bg-red-500/10 px-1 rounded">染</span> (Rǎn)</p>
                        </div>
                     </div>
                     <span className="material-symbols-outlined text-slate-600 group-hover:text-blue-500 transition-colors">archive</span>
                   </div>
                   <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                     <span className="bg-red-500/10 text-red-400 px-2 py-0.5 rounded border border-red-500/20">高频错误</span>
                     <span>Added to Cold Case Files</span>
                   </div>
                 </div>

                 <div className="relative group bg-[#252f44] border-l-4 border-yellow-500 p-4 rounded-r-lg hover:translate-x-1 transition-transform cursor-pointer shadow-lg">
                   <div className="flex justify-between items-start">
                     <div className="flex gap-3">
                        <div className="mt-1"><span className="material-symbols-outlined text-slate-400">history_edu</span></div>
                        <div>
                          <p className="text-white font-bold text-lg">成语填空</p>
                          <p className="text-slate-400 text-sm mt-1">知识点: <span className="text-yellow-200 font-mono text-base mx-1 bg-yellow-500/10 px-1 rounded">狐假虎威</span></p>
                        </div>
                     </div>
                     <span className="material-symbols-outlined text-slate-600 group-hover:text-blue-500 transition-colors">archive</span>
                   </div>
                   <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                     <span className="bg-yellow-500/10 text-yellow-400 px-2 py-0.5 rounded border border-yellow-500/20">语法</span>
                     <span>Added to Cold Case Files</span>
                   </div>
                 </div>
              </div>
            </div>
          </div>
          
           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 pb-10">
             <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-slate-600 bg-transparent text-white font-bold hover:bg-white/5 hover:border-slate-400 transition-all flex items-center justify-center gap-2 group">
               <span className="material-symbols-outlined group-hover:text-yellow-400 transition-colors">military_tech</span>
               查看勋章墙
             </button>
             <button className="w-full sm:w-auto px-10 py-3.5 rounded-lg bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
               继续下一关
               <span className="material-symbols-outlined">arrow_forward_ios</span>
             </button>
           </div>

        </div>
      </div>
    </div>
  );
};
