import React from 'react';

export const MedalsScreen: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex-col bg-[#f6f6f8] pb-24 text-slate-900">
        <div className="w-full max-w-[960px] mx-auto px-4 md:px-6 pt-10 pb-5">
            <div className="flex flex-col gap-4 text-center md:text-left md:flex-row md:justify-between md:items-end">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <span className="material-symbols-outlined text-4xl text-blue-800">local_police</span>
                        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em]">结案勋章墙</h1>
                    </div>
                    <p className="text-slate-500 text-lg font-normal">欢迎来到 ZPD 荣誉大厅！收集所有勋章，成为传奇探员！</p>
                </div>
                 <div className="hidden md:block">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">第二学年 • 语文复习</span>
                </div>
            </div>
        </div>

        <div className="w-full max-w-[960px] mx-auto px-4 md:px-6 py-4">
            <div className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold leading-tight flex items-center gap-2">
                        <span className="material-symbols-outlined text-yellow-600">military_tech</span>
                        传奇探员勋章进度
                    </h2>
                    <span className="text-2xl font-bold text-blue-800">75%</span>
                </div>
                <div className="relative h-4 w-full rounded-full bg-slate-200 overflow-hidden">
                    <div className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-800 transition-all duration-500" style={{ width: '75%' }}></div>
                </div>
                <div className="flex justify-between items-center text-sm text-slate-500">
                    <span>已收集 3/4 枚勋章</span>
                    <span className="flex items-center gap-1 text-blue-800 font-medium">
                        <span className="material-symbols-outlined text-sm">lightbulb</span> 再破获一个案件即可解锁
                    </span>
                </div>
            </div>
        </div>

        <div className="w-full max-w-[960px] mx-auto px-4 md:px-6 py-4">
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                 {/* Medal 1 */}
                 <div className="group relative flex flex-col items-center gap-4 p-6 rounded-xl bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-blue-800/20">
                     <div className="relative w-32 h-32 rounded-full ring-4 ring-blue-100 overflow-hidden bg-cover bg-center shadow-md group-hover:scale-105 transition-transform" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBw0xQi57TQn8OR_kQwwVG7CeC6khfaVehS_zbs0EtaPgrQ8bfDmr_HbmEGqcKVPPGwNpUUCZatxJyDZ1wCHQe6_ii2UPok9N3fHc36T-2O3m3M9Uf6VnFyFf59t_9IcH1P1ooLkN1BZnVQtpkCBuJ__s_dbqmBwaFluy-nSuY3390S_xa2cJ4XvddepzbVf7yNdFIEzetTBEy1YAlIEItDPJ9_KO4I-SXDLccP-nct1oBtU2t47nZ5T6JPYzOmgvjpniqUMexo1HzV")'}}>
                         <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
                     </div>
                     <div className="text-center">
                         <h3 className="text-lg font-bold">识字英雄</h3>
                         <p className="text-sm text-slate-500 mt-1">Judy's Badge</p>
                         <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                             <span className="material-symbols-outlined text-[14px]">check_circle</span> 已解锁
                         </span>
                     </div>
                 </div>

                 {/* Medal 2 */}
                  <div className="group relative flex flex-col items-center gap-4 p-6 rounded-xl bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-blue-800/20">
                     <div className="relative w-32 h-32 rounded-full ring-4 ring-slate-200 overflow-hidden bg-cover bg-center shadow-md group-hover:scale-105 transition-transform" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCz15psNxrYEW67bPTq3KHDEiwSDuV-9eEgMs_DINfqnhWKMgsD63ssJhKa41K22fcgkNhw6bcj1umHz4USGnyCbIch2UPawiVUJlsNw5SIX-SrXxN0rTYTuSZoDaX5VKdLQAkFGq7Ad2ieI6dzRIYW-N-dDRTHa1KbXUR5tYz2Iw2QtmopR1j9Gm0stQBEMCaqsQ72KAao1ldODKMCJ6hBH7BFJegd01cuCa_HryOziK500hvovowLGDuPeY-kXv-PQSQn0v5-9YkG")'}}>
                         <div className="absolute inset-0 bg-gradient-to-tr from-slate-600/20 to-transparent"></div>
                     </div>
                     <div className="text-center">
                         <h3 className="text-lg font-bold">逻辑大师</h3>
                         <p className="text-sm text-slate-500 mt-1">Chief Bogo's Respect</p>
                         <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                             <span className="material-symbols-outlined text-[14px]">check_circle</span> 已解锁
                         </span>
                     </div>
                 </div>

                 {/* Medal 3 */}
                  <div className="group relative flex flex-col items-center gap-4 p-6 rounded-xl bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-blue-800/20">
                     <div className="relative w-32 h-32 rounded-full ring-4 ring-yellow-100 overflow-hidden bg-cover bg-center shadow-md group-hover:scale-105 transition-transform" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAaJDOzG4yguEe2uf7nj_6N-k9tELA3kpaAtcnqRCsY-IWkdRlqkQlcHGdpg4rqXTalxul_FpgdUFIn2UtP7inoqiFC0RZLY4-iI8NhYdoKByvLNqH1-0bgfJxlQ6BZxVjnHEUkH8ZhcnH-qebaexqyHfTxzTnDnqboM6WGkftfZFotKtwAoHFjZvUKqTAYPFxtC3kyE6EsJBuZc70wJxM40ULiIm3AO3FJVM4pjV49lEAhm0KaryJ9A7PCdGdbfG-BfZaJ4PxiGlew")'}}>
                         <div className="absolute inset-0 bg-yellow-400/10 mix-blend-overlay"></div>
                     </div>
                     <div className="text-center">
                         <h3 className="text-lg font-bold">双语之星</h3>
                         <p className="text-sm text-slate-500 mt-1">Gazelle's Shine</p>
                         <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                             <span className="material-symbols-outlined text-[14px]">check_circle</span> 已解锁
                         </span>
                     </div>
                 </div>
             </div>

             {/* Locked Medal */}
             <div className="flex justify-center mb-10">
                 <div className="relative flex flex-col items-center justify-center p-8 w-full md:w-2/3 rounded-2xl bg-gradient-to-b from-slate-50 to-white border-2 border-dashed border-slate-300">
                     <div className="relative mb-6">
                         <div className="absolute inset-0 rounded-full blur-xl bg-blue-500/20 animate-pulse"></div>
                         <div className="relative flex items-center justify-center w-40 h-40 rounded-full bg-slate-200 border-4 border-slate-300 overflow-hidden">
                             <div className="absolute z-10 flex flex-col items-center text-slate-400">
                                 <span className="material-symbols-outlined text-5xl">lock</span>
                             </div>
                             <div className="w-full h-full bg-cover bg-center opacity-20 grayscale blur-sm" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuANuQzBGXPflE_a8MBfnjk4lsvKDLjwL7G3HC0CcQWnTuGrZCBDXKq6t1dwUOJmjQGkiHho7-VQlTjd6UaBHTPDIrGyhJptHyzVfPhevJFqU-svu8rbZZGeZndZe1On0NjhBOX396eNVsZdcZNoSEbV107vjzAXtsci16cpJd4qkY3iIIZ_krE-hmwHFx6aJ4IrAwjk2fFdy36eN67AQcUAeAXXrrdp1u90ulR5sWH-FsPvm85xALr8VLgypAuAbGcZP-Pp--_GaAwd")'}}></div>
                         </div>
                     </div>
                     <div className="text-center space-y-2">
                         <h3 className="text-2xl font-black text-slate-400 uppercase tracking-widest">传奇探员</h3>
                         <p className="text-blue-800 font-medium">完成最终案件解锁此荣誉</p>
                     </div>
                 </div>
             </div>

             {/* Clawhauser */}
             <div className="w-full">
                 <div className="flex flex-col md:flex-row items-center gap-6 rounded-2xl bg-blue-50 p-6 border border-blue-100 shadow-sm">
                     <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0">
                         <div className="w-full h-full rounded-full bg-cover bg-center border-4 border-white shadow-md" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAuLxwI78E-QQmgbSI5wjZ3SjDQnp8MIShkF-Xkk-sqd8wQ1JA6y_FlGZb5kLW2IUTF1Uy68TPBq-OYaRNwvQZfblXOyu8I4HYTc5gqoQ0eNNC1WjmXkQOA0XZ_yC-QC2g3LP22Ad6BBPz_2TvPWXW_oeBmhjez1_2cWCy5T7QUS5za0WqDCfOP4bx7Dh29ctcD-e3rydykgZNYMVK2Qubr-CPFkUVY9_N3XJV4nVCd6WLCU6f2rcZTa1XHzgF1yz1nuUfsWAhEIYij")'}}></div>
                         <div className="absolute -bottom-2 -right-2 bg-blue-800 text-white rounded-full p-1.5 shadow-sm">
                             <span className="material-symbols-outlined text-lg">sentiment_very_satisfied</span>
                         </div>
                     </div>
                     <div className="flex flex-col gap-2 text-center md:text-left">
                         <div className="flex items-center justify-center md:justify-start gap-2">
                             <span className="text-sm font-bold text-blue-800 uppercase tracking-wider">来自前台的讯息</span>
                             <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                             <span className="text-sm text-slate-500 font-medium">Clawhauser</span>
                         </div>
                         <h4 className="text-xl font-bold text-slate-900">"哇哦！看看这些闪亮的勋章！"</h4>
                         <p className="text-slate-600 leading-relaxed">你绝对是警局里最棒的探员！我就知道你能行！只要再把那个大案子破了，你就是我们 ZPD 的传奇啦！加油！甜甜圈在等着你！</p>
                     </div>
                     <div className="hidden md:block ml-auto opacity-20 rotate-12">
                         <span className="material-symbols-outlined text-8xl text-pink-500">donut_large</span>
                     </div>
                 </div>
             </div>
        </div>
    </div>
  );
};
