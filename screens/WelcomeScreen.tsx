import React from 'react';

interface WelcomeScreenProps {
  onNavigateLogin?: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNavigateLogin }) => {
  return (
    <div className="min-h-screen bg-[#f6f7f8] text-slate-900 font-sans pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-10 rounded-full bg-blue-100 text-blue-600">
              <span className="material-symbols-outlined text-2xl">local_police</span>
            </div>
            <h2 className="text-slate-900 text-lg font-bold tracking-tight">疯狂动物城警校 <span className="hidden sm:inline font-normal opacity-70">(Zootopia Academy)</span></h2>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={onNavigateLogin}
              className="flex items-center justify-center h-10 px-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-all shadow-lg shadow-blue-500/30"
            >
              <span className="mr-2 material-symbols-outlined text-sm">login</span>
              <span>登录 (Login)</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <div className="relative w-full px-4 sm:px-6 py-6 lg:py-10 flex justify-center">
          <div className="w-full max-w-7xl rounded-3xl overflow-hidden relative min-h-[500px] flex items-center justify-center text-center shadow-2xl">
            <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuABLSZhX6KTDEKRikemNqbnTYccPlhZJSyBfEGAJNsL2CLd5oL34WUFdIQIkOL1VoDM08w1qqzu1KjfcoSQEHa6MqDeOkgAqtMe5pjmckLnf3_aDAFBzW5VyJv_nUnnjzH39FG_p9OwzcFWAew9TaFgJUgIUbPu1DtE2rT9CefIKTEKy71lYMs4qkUo4PoInsu_x2a-ed095T9-3zelF1an909tsDtqH_Bs3KTcYpyqq9kGrEtwB738GCIwHWiYsBV4SKP57reuaKyU")' }}>
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70"></div>
            </div>
            <div className="relative z-10 p-6 flex flex-col items-center max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-bold shadow-sm">
                <span className="material-symbols-outlined text-lg">school</span>
                2年级中文复习 (Grade 2 Review)
              </div>
              <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-tight mb-4 drop-shadow-lg">
                欢迎加入<br /><span className="text-blue-600 bg-white px-4 rounded-lg box-decoration-clone inline-block mt-2 transform -rotate-1">疯狂动物城警校！</span>
              </h1>
              <p className="text-slate-100 text-lg md:text-xl font-medium mb-10 max-w-2xl drop-shadow-md">
                和朱迪、尼克一起学习中文，挑战任务，成为最棒的警官！<br />
                <span className="text-base opacity-90 font-normal block mt-2">(Study Chinese with Judy & Nick, complete missions, and become the best officer!)</span>
              </p>
              <button 
                onClick={onNavigateLogin}
                className="group flex items-center justify-center h-14 px-10 rounded-full bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95 text-white text-lg font-bold transition-all shadow-xl shadow-blue-900/50 border-4 border-blue-400/30"
              >
                <span className="material-symbols-outlined mr-2 group-hover:animate-bounce">verified_user</span>
                加入警局 (Join the Academy)
              </button>
            </div>
          </div>
        </div>

        {/* Squads Section */}
        <div className="w-full px-6 py-8 flex justify-center">
          <div className="max-w-7xl w-full flex flex-col">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 px-2 border-b border-slate-200 pb-6">
              <div>
                <div className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-1">Squad Mentors</div>
                <h2 className="text-slate-900 text-3xl font-bold leading-tight flex items-center gap-3">
                  <span className="material-symbols-outlined text-4xl text-yellow-500">groups</span>
                  认识你的小队导师
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Squad 1 */}
              <div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-slate-200 hover:border-blue-500/50 cursor-pointer">
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500 text-white text-xs font-bold shadow-md">
                    <span className="material-symbols-outlined text-sm">auto_stories</span>
                    语文 (Chinese)
                  </span>
                </div>
                <div className="w-full aspect-[4/3] bg-blue-50 overflow-hidden relative">
                  <div className="absolute inset-0 bg-center bg-cover transform group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLKx_ozMDkw4NxGtraODMxUsZHG8yJEbOyPgPGHwK49TsEdslgUIbElmBpbxsYBV1OWtITl0qd9IWfELEq58DOn7DDFnPbkmvqfvk3UkyEIrA_IDWlIwUWokuuRqB_DkchzMS1DcXXC6zHRXFzLN37VkkuQKksZRtoeGcKZND_-yjssBDCZ3I6rKwpSpr7tRa5JflrbAD_iRZZo3PxfMZ4OV__kekZmFffd_-goyJx5De_C1Xl0qR2Na0TZrH5z0NcpHhKws7oJ-jK")' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-2xl font-black tracking-tight drop-shadow-md">朱迪 & 尼克</h3>
                    <p className="text-white/90 text-sm font-medium">Judy Hopps & Nick Wilde</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <p className="text-slate-600 font-medium leading-relaxed">
                      充满活力的二人组！让我们一起在汉字的海洋里破案，快乐学习！
                    </p>
                  </div>
                  <div className="mt-auto">
                    <button className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white font-bold transition-all group-hover:bg-blue-600 group-hover:text-white border border-slate-200 hover:border-transparent">
                      <span>加入语文小队</span>
                      <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Squad 2 */}
              <div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-slate-200 hover:border-blue-500/50 cursor-pointer">
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-bold shadow-md">
                    <span className="material-symbols-outlined text-sm">calculate</span>
                    数学 (Math)
                  </span>
                </div>
                <div className="w-full aspect-[4/3] bg-blue-50 overflow-hidden relative">
                  <div className="absolute inset-0 bg-center bg-cover transform group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCbNJnyj6-93mWgf9n9kZ65FkKRO8UTMVTqOOySgb-RbdO0vpCMzDLgfnFQTXS1HMPeTsniRi4Yjl_3IL0xmUuG0HSRgkztqFwkAoFq40e8jUZwTXB-I04KZiEwlciXGLYFQCxQ9-TNI9HtzH4C-7BOpZ_6gbYHJ7lrgKZ16z2stw0rWHsYcrRqJo1fjXkDU0yxDap_YTKyKVYXnQ-KBNlWQu_eNrLMa6OSWdRB8pRm_YkMyEe6-NTFQn8ZMrSbKEyCyO_eh5bRQmn4")' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-2xl font-black tracking-tight drop-shadow-md">牛局长</h3>
                    <p className="text-white/90 text-sm font-medium">Chief Bogo</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <p className="text-slate-600 font-medium leading-relaxed">
                      严肃但可靠。加入我的队伍，用严密的逻辑和数字解决每一个难题！
                    </p>
                  </div>
                  <div className="mt-auto">
                    <button className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white font-bold transition-all group-hover:bg-blue-600 group-hover:text-white border border-slate-200 hover:border-transparent">
                      <span>加入数学小队</span>
                      <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>

               {/* Squad 3 */}
              <div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-slate-200 hover:border-blue-500/50 cursor-pointer">
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-bold shadow-md">
                    <span className="material-symbols-outlined text-sm">translate</span>
                    英语 (English)
                  </span>
                </div>
                <div className="w-full aspect-[4/3] bg-blue-50 overflow-hidden relative">
                  <div className="absolute inset-0 bg-center bg-cover transform group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCgseImS3-db0NaOUav3ItOOFzDbQvM2yfF1CYpPxV2IhpdxZ_VCQboeyKMzsFt1GrBi1qrZ-0TbyYNlEI6lZ6OFP3XR-juXoEupHrYVQfFrUWqVMrlF67AF9-7Rp0_9yBb4tCCjVLb2dW_4fl5fA-Qwq0fV6vCmJmA05oO-fmX7Rcyl5HKvvEp1zur1-_d3AsebtKai7fKo_Wt8Bxtw59wOPexSQvchwXn2pbL43qUOoDpmdfuXtMtOw-OAa70iox1Iamw9C55sXyB")' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-2xl font-black tracking-tight drop-shadow-md">夏奇羊</h3>
                    <p className="text-white/90 text-sm font-medium">Gazelle</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <p className="text-slate-600 font-medium leading-relaxed">
                      像大明星一样闪耀！在美妙的旋律中轻松掌握英语，自信开口！
                    </p>
                  </div>
                  <div className="mt-auto">
                    <button className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white font-bold transition-all group-hover:bg-blue-600 group-hover:text-white border border-slate-200 hover:border-transparent">
                      <span>加入英语小队</span>
                      <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
                    </button>
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
