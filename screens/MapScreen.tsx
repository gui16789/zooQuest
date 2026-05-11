import React from 'react';

export const MapScreen: React.FC = () => {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-[#f6f7f8] text-[#0d141b]">
      {/* Top Navigation */}
      <header className="flex items-center justify-between border-b border-[#e7edf3] bg-white px-10 py-3 shrink-0 z-20">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center size-10 rounded-full bg-blue-100 text-blue-600">
            <span className="material-symbols-outlined text-2xl">local_police</span>
          </div>
          <h2 className="text-xl font-bold leading-tight">Zootopia Detective</h2>
        </div>
        <div className="flex items-center gap-4">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-blue-500/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1ACDgI3b3czjqNxLaRCfKdQ6aD1RyKPMSvwKgPP-oq1TL5inaM5X4cu7C9RIy-fqARGfYTLOWSsdnxmHPtA9tRbcF48GpCCfMht2A3dfH4fChK9ypTYzHXsMyvw2XacU3wTobrNH9KxK6V_3AfDJffghP7qGsoAyzNFNW_6QsQC9b1KMwdPim9e_x4khFw2Bq5cxsiwche65O_6qJhzpi_W_IFKmZD5M_m_zj5e_ExC44r2QSSPX1mGBOD0ENZTGuh9U8oobuQg6y")' }}></div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-72 border-r border-[#e7edf3] bg-white p-6 justify-between overflow-y-auto z-10">
          <div className="flex flex-col gap-6">
            {/* User Profile Summary */}
            <div className="flex gap-4 items-center p-3 rounded-xl bg-slate-50 border border-slate-100">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9Q_Bq-pQ94QrCNJUzKpOh2MVKZr2Udvo9C3aZpIir_2GB_uGcHwZoB6XxqLydZkISYDCDuz-ZqALAuAVvyBmxBWAHXMFcZ3IiQrJ2F1KPnX41ryDeYenjK9fhhjPyFd0vdD9uyj7KsxGL00ZL14A21y0z0Azua2GMUOoyrcsOAgc8LN1YJmvwQJ7Pzcs4Yq3cWaM8v8Jjj9LAbZy-b9DkXDNqiyUFCJxUCkNAPNsPTKlbycOAfUbF9UJzhpvLDdOwScl61ycqA32r")' }}></div>
              <div className="flex flex-col">
                <h1 className="text-base font-bold leading-normal">Junior Detective</h1>
                <p className="text-blue-600 text-xs font-bold leading-normal">Level 5</p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-50 text-center">
                <span className="material-symbols-outlined text-blue-600 mb-1">star</span>
                <span className="text-xs text-slate-500 font-medium">XP</span>
                <span className="text-sm font-bold text-slate-900">1,200</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-amber-50 text-center">
                <span className="material-symbols-outlined text-amber-500 mb-1">military_tech</span>
                <span className="text-xs text-slate-500 font-medium">Medals</span>
                <span className="text-sm font-bold text-slate-900">5</span>
              </div>
            </div>

            <div className="h-px bg-slate-100 my-2"></div>
            
            {/* Navigation Links */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 px-3 py-3 rounded-lg bg-blue-50 text-blue-600">
                <span className="material-symbols-outlined">map</span>
                <p className="text-sm font-bold leading-normal">Current Mission</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer">
                <span className="material-symbols-outlined">backpack</span>
                <p className="text-sm font-medium leading-normal">Inventory</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 rounded-xl bg-indigo-50 mt-4 relative overflow-hidden group cursor-pointer border border-indigo-100">
            <div className="absolute -right-4 -top-4 text-indigo-100">
              <span className="material-symbols-outlined text-[100px]">lightbulb</span>
            </div>
            <p className="text-indigo-900 text-xs font-bold mb-1 relative z-10">Daily Tip</p>
            <p className="text-indigo-700 text-sm leading-snug relative z-10">Use context clues to find hidden words in Tundratown!</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-y-auto bg-[#f6f7f8] relative pb-24">
          <div className="max-w-5xl mx-auto w-full px-6 py-8 relative z-10">
            
            {/* Progress Section */}
            <div className="mb-10 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center mb-4 gap-2">
                <div className="flex flex-col">
                  <h2 className="text-slate-900 text-lg font-bold">Detective Rank Progress</h2>
                  <p className="text-slate-500 text-sm">Keep solving cases to promote!</p>
                </div>
                <div className="text-right">
                  <span className="text-blue-600 font-bold text-lg">Trainee</span>
                  <span className="text-slate-400 text-sm mx-2">→</span>
                  <span className="text-slate-500 text-sm">Legendary Detective</span>
                </div>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-100">
                      Level 5
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      25% to next rank
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-3 mb-4 text-xs flex rounded-full bg-slate-100">
                  <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600" style={{ width: "25%" }}></div>
                </div>
              </div>
            </div>

            {/* Headline */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white rounded-full shadow-sm text-blue-600">
                <span className="material-symbols-outlined">explore</span>
              </div>
              <div>
                <h1 className="text-slate-900 tracking-tight text-[28px] md:text-[32px] font-bold leading-tight">Mission Map: Select a District</h1>
                <p className="text-slate-500 text-base">Each district holds new vocabulary challenges. Choose your case!</p>
              </div>
            </div>

            {/* Map Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* District 1 */}
              <div className="group relative aspect-video bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden cursor-pointer hover:shadow-lg hover:border-blue-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEIwUvgqaCe0VWMuDOD77t4Z68YQmQ4EhQBcOB-SNerJi8R8GfRtyGJd2zFD1D6CCZkcHaJSY4UUrVkj767FLwvVIPzGCXEK5To-IbOB2cJgmIcwl_LRBQeErgKKiefovRo9YHsxbJTN62UGCbiPbHwc6bgURtv8yulETQb4yNdZFdTRzI8gCOj_Lgaz9e2u6kbbfbAcREvtdx5O9QBwCmrvFSFSURcUUNdUHjbqIi78I2mFSr8bk6O0nwz6JOi98gfOACYDgv8pQL")' }}></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-green-600">check_circle</span>
                      Unit 1: Completed
                    </span>
                    <div className="size-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined">folder_open</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-white text-2xl font-bold mb-1 drop-shadow-md">Savanna Central</h3>
                        <p className="text-white/90 text-sm font-medium drop-shadow-sm flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">visibility</span>
                          Boss Detected
                        </p>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Revisit
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* District 2 */}
              <div className="group relative aspect-video bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden cursor-pointer hover:shadow-lg hover:border-blue-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIb7tOmDB7WvlVkxpoeSgYypm1KPEDl3R8GevuBbcRENGif91FQbmoPxQugl6zIIRsYUEf3i3mRpnI8d0REY6li06f7itz6iHSXt1rxTymbRDjxnWqlROeQv4OrxiS2YdXhfwf0mRYf-7-wEumzk12x2NewjgygL8KES4VfSoYC33MHBiaUndf8JPpS00RLOKpHrd_nVsAPdz7xuXaVGk-_FYS29-jWVEujSzAL1h0XR7fr8QXqFqtsgrCPmFzgYHUO4yD0jA4WwTW")' }}></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold shadow-sm flex items-center gap-1 animate-pulse-slow">
                      <span className="material-symbols-outlined text-sm">play_circle</span>
                      Unit 2: In Progress
                    </span>
                    <div className="size-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined">search</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-white text-2xl font-bold mb-1 drop-shadow-md">Sahara Square</h3>
                        <p className="text-white/90 text-sm font-medium drop-shadow-sm flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">extension</span>
                          Find the Clues
                        </p>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-100 transform translate-y-0 transition-all duration-300">
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* District 3 (Locked) */}
              <div className="group relative aspect-video bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-slate-900/60 z-10 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="flex flex-col items-center text-white">
                    <span className="material-symbols-outlined text-4xl mb-2 text-slate-300">lock</span>
                    <span className="text-sm font-bold uppercase tracking-wider text-slate-300">Locked</span>
                    <span className="text-xs text-slate-400 mt-1">Complete Unit 2 to unlock</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-cover bg-center grayscale" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDns8XeYXHBkWCxH3y-X5iaeylVu4hgfuH48VAEVXHr-IlAphrQUZkcAOlKhZmV0wzbiY_C50ayRMCzgyhAy1vwIxal3solhj2y2S35_8CvKKlT6cIMycGWEsTixipnDVBPPtGKPjGl1bMjizvd62lPWhPXDRSd4gs_686NS_BopimEKg2Iu6fzYg5VhmYlmtuKRkNi_1kYAu7ePHTOiDlzRYsilbMfWX7YaTx8yz2OLU9946D_NOM0ylfceQbsuSq0iHydQBgI9HSU")' }}></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-0">
                  <div>
                    <h3 className="text-white/50 text-2xl font-bold mb-1">Tundratown</h3>
                    <p className="text-white/50 text-sm font-medium">Unit 3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};