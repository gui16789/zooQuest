import React from 'react';

export const DashboardScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f6f7f8] text-[#0d141b] pb-24">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
               <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 ring-2 ring-white shadow-sm">
                 <span className="material-symbols-outlined">local_police</span>
               </div>
               <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h1 className="text-sm font-bold text-slate-900 leading-tight">Officer Hopps</h1>
              <p className="text-xs text-slate-500">Zootopia Precinct 1</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <button className="w-9 h-9 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 transition-colors relative">
               <span className="material-symbols-outlined">notifications</span>
               <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
             </button>
             <button className="w-9 h-9 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 transition-colors">
               <span className="material-symbols-outlined">settings</span>
             </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-6 space-y-6">
        
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-[#111722] to-[#1e293b] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9Q_Bq-pQ94QrCNJUzKpOh2MVKZr2Udvo9C3aZpIir_2GB_uGcHwZoB6XxqLydZkISYDCDuz-ZqALAuAVvyBmxBWAHXMFcZ3IiQrJ2F1KPnX41ryDeYenjK9fhhjPyFd0vdD9uyj7KsxGL00ZL14A21y0z0Azua2GMUOoyrcsOAgc8LN1YJmvwQJ7Pzcs4Yq3cWaM8v8Jjj9LAbZy-b9DkXDNqiyUFCJxUCkNAPNsPTKlbycOAfUbF9UJzhpvLDdOwScl61ycqA32r')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-blue-300 font-bold text-xs uppercase tracking-wider mb-1">Morning Shift • 08:00 AM</p>
                <h2 className="text-3xl md:text-4xl font-black mb-2">Good Morning, Officer!</h2>
                <p className="text-slate-300 max-w-md">Tundratown reports slippery roads. Savanna Central is clear. Your daily training is ready.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-blue-900/30 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">play_circle</span>
                Start Daily Training
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-bold backdrop-blur-sm transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">calendar_month</span>
                View Schedule
              </button>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-1">
              <div className="flex items-center gap-2 text-slate-500 mb-1">
                 <span className="material-symbols-outlined text-orange-500">local_fire_department</span>
                 <span className="text-xs font-bold uppercase">Streak</span>
              </div>
              <p className="text-2xl font-black text-slate-900">12 Days</p>
           </div>
           <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-1">
              <div className="flex items-center gap-2 text-slate-500 mb-1">
                 <span className="material-symbols-outlined text-blue-500">star</span>
                 <span className="text-xs font-bold uppercase">XP Today</span>
              </div>
              <p className="text-2xl font-black text-slate-900">+450</p>
           </div>
           <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-1">
              <div className="flex items-center gap-2 text-slate-500 mb-1">
                 <span className="material-symbols-outlined text-purple-500">auto_stories</span>
                 <span className="text-xs font-bold uppercase">Words</span>
              </div>
              <p className="text-2xl font-black text-slate-900">1,024</p>
           </div>
           <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-1">
              <div className="flex items-center gap-2 text-slate-500 mb-1">
                 <span className="material-symbols-outlined text-green-500">military_tech</span>
                 <span className="text-xs font-bold uppercase">Rank</span>
              </div>
              <p className="text-2xl font-black text-slate-900">Detective</p>
           </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Col: Current Mission */}
          <div className="lg:col-span-2 space-y-6">
             <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-600">map</span>
                  Current Assignment
                </h3>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">Case #4021</span>
             </div>

             <div className="group relative bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden cursor-pointer hover:shadow-md transition-all">
                <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIb7tOmDB7WvlVkxpoeSgYypm1KPEDl3R8GevuBbcRENGif91FQbmoPxQugl6zIIRsYUEf3i3mRpnI8d0REY6li06f7itz6iHSXt1rxTymbRDjxnWqlROeQv4OrxiS2YdXhfwf0mRYf-7-wEumzk12x2NewjgygL8KES4VfSoYC33MHBiaUndf8JPpS00RLOKpHrd_nVsAPdz7xuXaVGk-_FYS29-jWVEujSzAL1h0XR7fr8QXqFqtsgrCPmFzgYHUO4yD0jA4WwTW")'}}>
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                   <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-1">
                         <span className="bg-yellow-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded">IN PROGRESS</span>
                      </div>
                      <h4 className="text-2xl font-bold">Sahara Square Mystery</h4>
                      <p className="text-slate-300 text-sm">Find the missing clues in the marketplace.</p>
                   </div>
                   <div className="absolute bottom-4 right-4">
                      <div className="size-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                         <span className="material-symbols-outlined">play_arrow</span>
                      </div>
                   </div>
                </div>
                <div className="p-4 bg-white">
                   <div className="flex justify-between items-center text-sm mb-2">
                      <span className="text-slate-500 font-medium">Mission Progress</span>
                      <span className="text-blue-600 font-bold">65%</span>
                   </div>
                   <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full" style={{width: '65%'}}></div>
                   </div>
                </div>
             </div>

             {/* Recent Activity / Tasks */}
             <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Today's Tasks</h3>
                <div className="space-y-4">
                   <div className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-100">
                      <div className="size-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                         <span className="material-symbols-outlined">check</span>
                      </div>
                      <div className="flex-1">
                         <h4 className="text-sm font-bold text-slate-900 decoration-slate-400">Morning Vocab Drill</h4>
                         <p className="text-xs text-slate-500">Completed at 08:30 AM</p>
                      </div>
                      <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+50 XP</span>
                   </div>

                   <div className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-100">
                      <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                         <span className="material-symbols-outlined">radio_button_unchecked</span>
                      </div>
                      <div className="flex-1">
                         <h4 className="text-sm font-bold text-slate-900">Grammar: Sentence Structure</h4>
                         <p className="text-xs text-slate-500">Estimated time: 10 mins</p>
                      </div>
                      <button className="text-xs font-bold text-blue-600 border border-blue-200 hover:bg-blue-50 px-3 py-1.5 rounded-lg">Start</button>
                   </div>

                   <div className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-100 opacity-60">
                      <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                         <span className="material-symbols-outlined">lock</span>
                      </div>
                      <div className="flex-1">
                         <h4 className="text-sm font-bold text-slate-500">Evening Review</h4>
                         <p className="text-xs text-slate-400">Unlocks at 06:00 PM</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Col: Squad & Extras */}
          <div className="space-y-6">
             
             {/* Squad Online */}
             <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
                <div className="flex items-center justify-between mb-4">
                   <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Squad Online</h3>
                   <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
                </div>
                <div className="space-y-4">
                   <div className="flex items-center gap-3">
                      <div className="relative">
                         <div className="size-10 rounded-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLKx_ozMDkw4NxGtraODMxUsZHG8yJEbOyPgPGHwK49TsEdslgUIbElmBpbxsYBV1OWtITl0qd9IWfELEq58DOn7DDFnPbkmvqfvk3UkyEIrA_IDWlIwUWokuuRqB_DkchzMS1DcXXC6zHRXFzLN37VkkuQKksZRtoeGcKZND_-yjssBDCZ3I6rKwpSpr7tRa5JflrbAD_iRZZo3PxfMZ4OV__kekZmFffd_-goyJx5De_C1Xl0qR2Na0TZrH5z0NcpHhKws7oJ-jK")'}}></div>
                         <div className="absolute bottom-0 right-0 size-2.5 bg-green-500 border-2 border-white rounded-full"></div>
                      </div>
                      <div>
                         <p className="text-sm font-bold text-slate-900">Judy Hopps</p>
                         <p className="text-xs text-slate-500">"Ready to learn?"</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="relative">
                         <div className="size-10 rounded-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_8Ra-TRl9lo2sCsJz3QvoBSP-NOgLNLd7E7_KZkmnUPl2csdwvaOEJpFXfLFOM_wIGSw9CEzFX6aX2lJefO0FoJJPn0ctzjJg_PlqPIwrb5cInJEsxfEM9pZXfecDDIP1w7EdgWA4frJ3pDS0sVBHDEyT9kVuyf-25PDy1iGIsu3Y4_bb-ijZCgxaSrdpQkn9CoZ3vC4CQf6Skr4LgAh82Fu6bK3PuXcAltREl01D88OyMK6erpETfN-O7-JhZc3f5wmM6HVlwvq-")'}}></div>
                         <div className="absolute bottom-0 right-0 size-2.5 bg-yellow-500 border-2 border-white rounded-full"></div>
                      </div>
                      <div>
                         <p className="text-sm font-bold text-slate-900">Nick Wilde</p>
                         <p className="text-xs text-slate-500">Away (Eating Pawpsicle)</p>
                      </div>
                   </div>
                    <div className="flex items-center gap-3">
                      <div className="relative">
                         <div className="size-10 rounded-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAuLxwI78E-QQmgbSI5wjZ3SjDQnp8MIShkF-Xkk-sqd8wQ1JA6y_FlGZb5kLW2IUTF1Uy68TPBq-OYaRNwvQZfblXOyu8I4HYTc5gqoQ0eNNC1WjmXkQOA0XZ_yC-QC2g3LP22Ad6BBPz_2TvPWXW_oeBmhjez1_2cWCy5T7QUS5za0WqDCfOP4bx7Dh29ctcD-e3rydykgZNYMVK2Qubr-CPFkUVY9_N3XJV4nVCd6WLCU6f2rcZTa1XHzgF1yz1nuUfsWAhEIYij")'}}></div>
                         <div className="absolute bottom-0 right-0 size-2.5 bg-green-500 border-2 border-white rounded-full"></div>
                      </div>
                      <div>
                         <p className="text-sm font-bold text-slate-900">Clawhauser</p>
                         <p className="text-xs text-slate-500">"New Gazelle song!!"</p>
                      </div>
                   </div>
                </div>
                <button className="w-full mt-4 py-2 text-xs font-bold text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">View All Squad</button>
             </div>

             {/* Quick Actions */}
             <div className="grid grid-cols-2 gap-3">
                <div className="bg-purple-50 hover:bg-purple-100 p-4 rounded-xl cursor-pointer transition-colors border border-purple-100 text-center flex flex-col items-center gap-2">
                   <div className="size-10 rounded-full bg-white flex items-center justify-center text-purple-600 shadow-sm">
                      <span className="material-symbols-outlined">menu_book</span>
                   </div>
                   <span className="text-xs font-bold text-purple-900">Handbook</span>
                </div>
                <div className="bg-amber-50 hover:bg-amber-100 p-4 rounded-xl cursor-pointer transition-colors border border-amber-100 text-center flex flex-col items-center gap-2">
                   <div className="size-10 rounded-full bg-white flex items-center justify-center text-amber-600 shadow-sm">
                      <span className="material-symbols-outlined">military_tech</span>
                   </div>
                   <span className="text-xs font-bold text-amber-900">Achievements</span>
                </div>
             </div>

          </div>
        </div>
      </main>
    </div>
  );
};
