import React from 'react';

export const CaseFileScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f6f7f8] text-[#0d141b] pb-24">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="px-6 md:px-10 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <span className="material-symbols-outlined text-2xl">local_police</span>
            </div>
            <div>
              <h2 className="text-lg font-bold leading-tight tracking-tight">Zootopia Detective Academy</h2>
              <p className="text-xs text-slate-500 font-medium tracking-wider uppercase">疯狂动物城侦探学院</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-slate-700">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-slate-700 relative">
              <span className="material-symbols-outlined">backpack</span>
              <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 border-2 border-white"></span>
            </button>
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <span className="material-symbols-outlined">map</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 p-6 md:p-10">
        
        {/* Page Heading */}
        <div className="flex flex-wrap justify-between items-end gap-4 p-2">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider">
              <span className="material-symbols-outlined text-lg">folder_open</span>
              Case File #42
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0d141b] leading-tight">Savanna Central Bank Mystery</h1>
            <p className="text-slate-500 font-medium">Find the missing character clues to solve the crime! (找出丢失的汉字线索！)</p>
          </div>
          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg border border-yellow-200">
            <span className="material-symbols-outlined">verified_user</span>
            <span className="font-bold text-sm">Junior Detective Level</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
          {/* Left Column: The Evidence Board */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm border border-slate-200 min-h-[500px]">
              {/* Header with Location Image */}
              <div className="relative h-48 w-full bg-slate-200">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-yYcm6G-Pjz6jYlfT9SffwT42hx0t9y2z-7tZx67vzsYEPkwrp0GxqfhH_xBykDiP5z_8fXIkbGay-tgCAAIBIPEVY3rec8ciW1SStyIH8xzyODAacBi72MweV_RNc1qtmdrPR92S_bTGD6KGXeXskBfpHdmwyNKb0skvFsZswKEts5X2zMKzjpT8ufOmKp7vq2EDTgAwroTKlMq4qqHZeOOS_YM0iql9Go5aPZ83dTPs1mmSLm3LkvVKJGuzIpqTECys-HKz01Gc")' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg text-white text-xs font-bold uppercase tracking-widest border border-white/20">
                    Location: Savanna Central
                  </span>
                </div>
              </div>

              {/* Question Area */}
              <div className="flex-1 p-6 md:p-10 flex flex-col items-center justify-center gap-8 relative">
                <div className="w-full text-center space-y-2">
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Clue 3 of 5</p>
                  <h3 className="text-xl font-bold text-slate-700">Fill in the blank (填空):</h3>
                </div>
                {/* The Puzzle */}
                <div className="flex items-center gap-4 md:gap-8 bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-100 shadow-inner">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-lg shadow-md flex items-center justify-center text-5xl md:text-6xl font-bold text-[#0d141b] border-2 border-slate-200">
                      警
                    </div>
                    <span className="text-slate-500 font-mono">jǐng</span>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-slate-300">add</span>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-100 rounded-lg border-2 border-dashed border-blue-600 text-blue-600 flex items-center justify-center text-5xl md:text-6xl font-bold animate-pulse">
                      ?
                    </div>
                    <span className="text-slate-500 font-mono">chá</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-lg font-medium">Police Officer</p>
                </div>
              </div>

              {/* Bottom Bar: Gadget Buttons */}
              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button className="group relative flex flex-col items-center justify-center p-4 h-24 rounded-xl bg-white border-2 border-slate-200 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                     <span className="text-3xl font-bold mb-1">查</span>
                     <span className="text-xs text-slate-400 font-mono">chá</span>
                  </button>
                  <button className="group relative flex flex-col items-center justify-center p-4 h-24 rounded-xl bg-white border-2 border-slate-200 hover:border-green-500 hover:bg-green-50 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                     <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-green-600">
                       <span className="material-symbols-outlined text-sm">check_circle</span>
                     </div>
                     <span className="text-3xl font-bold mb-1">察</span>
                     <span className="text-xs text-slate-400 font-mono">chá</span>
                  </button>
                  <button className="group relative flex flex-col items-center justify-center p-4 h-24 rounded-xl bg-white border-2 border-slate-200 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                     <span className="text-3xl font-bold mb-1">茶</span>
                     <span className="text-xs text-slate-400 font-mono">chá</span>
                  </button>
                   <button className="group relative flex flex-col items-center justify-center p-4 h-24 rounded-xl bg-white border-2 border-slate-200 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                     <span className="text-3xl font-bold mb-1">差</span>
                     <span className="text-xs text-slate-400 font-mono">chà</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Judy Hopps & Stats */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="relative w-full rounded-xl overflow-hidden bg-blue-600 shadow-lg shadow-blue-500/20 aspect-[4/3] group cursor-default">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAy3GMFA_sCKjHiVnBkyca22rQQxn6RlbI-uIxa_gYFJb-vJYc5cYKexr66G8HD_9at7Ug1GY6cJraAJyFxNBw9XQrsABaFIh2HQPmzSUZuxg2EWEvf0V6Ob3QePolBsmEdRz_CMA0l-nc4IupokWxQRCXkUDEDUygqMVn97BlSqtnmgumMfIA3X4RPeWf2H6ccnQEglQdVSF0tUQEGMQLhELdgHHjDbstquwg-q55aRNdf-TKtHMbKZeaIUqAjpAuloRi40mPI3jVJ")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-yellow-400 text-lg">star</span>
                  <span className="text-yellow-400 font-bold text-xs uppercase tracking-widest">Officer on Duty</span>
                </div>
                <p className="text-white text-lg font-bold leading-tight">"You're doing great! Keep looking for clues!"</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <p className="text-[#0d141b] text-base font-bold">Clue Progress</p>
                <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-sm font-bold">65%</span>
              </div>
              <div className="relative w-full h-4 rounded-full bg-slate-100 overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-blue-600 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-slate-400 font-medium">
                <span>Start</span>
                <span>Case Solved</span>
              </div>
            </div>

            {/* Timer */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-slate-500">
                <span className="material-symbols-outlined">timer</span>
                <span className="text-sm font-bold uppercase tracking-wider">Time Remaining</span>
              </div>
              <div className="flex gap-3">
                <div className="flex grow basis-0 flex-col items-center gap-2">
                  <div className="flex h-12 w-full items-center justify-center rounded-lg bg-slate-100 border border-slate-200">
                    <p className="text-[#0d141b] text-xl font-bold font-mono">00</p>
                  </div>
                  <p className="text-slate-400 text-xs font-medium">HR</p>
                </div>
                <div className="flex items-center pt-1 text-slate-300">:</div>
                <div className="flex grow basis-0 flex-col items-center gap-2">
                  <div className="flex h-12 w-full items-center justify-center rounded-lg bg-slate-100 border border-slate-200">
                    <p className="text-[#0d141b] text-xl font-bold font-mono">14</p>
                  </div>
                  <p className="text-slate-400 text-xs font-medium">MIN</p>
                </div>
                <div className="flex items-center pt-1 text-slate-300">:</div>
                <div className="flex grow basis-0 flex-col items-center gap-2">
                  <div className="flex h-12 w-full items-center justify-center rounded-lg bg-red-50 border border-red-100">
                    <p className="text-red-500 text-xl font-bold font-mono">32</p>
                  </div>
                  <p className="text-red-400 text-xs font-medium">SEC</p>
                </div>
              </div>
            </div>
            
             <div className="p-4 rounded-xl bg-orange-50 border border-orange-100 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <span className="material-symbols-outlined">stylus_note</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-orange-900">Carrot Pen Found!</p>
                <p className="text-xs text-orange-700">Added to inventory</p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};