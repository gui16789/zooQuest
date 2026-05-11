import React from 'react';

export const PendingScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111621] text-white pb-24">
        <div className="w-full flex justify-center sticky top-0 z-50 bg-[#111722]/95 backdrop-blur-sm border-b border-[#243047]">
            <header className="flex items-center justify-between px-4 py-3 md:px-10 w-full max-w-[1200px]">
                 <div className="flex items-center gap-4">
                     <div className="flex items-center gap-3 text-white">
                         <div className="size-8 flex items-center justify-center text-blue-500">
                             <span className="material-symbols-outlined text-3xl">local_police</span>
                         </div>
                         <h2 className="text-lg font-bold hidden sm:block">Zootopia: 警局悬案馆</h2>
                     </div>
                     <div className="hidden md:flex items-center gap-6 ml-4">
                         <a className="text-sm font-medium hover:text-blue-500 transition-colors" href="#">大厅首页</a>
                         <a className="text-blue-500 text-sm font-bold border-b-2 border-blue-500" href="#">档案室</a>
                     </div>
                 </div>
                 <div className="flex items-center gap-4">
                     <label className="hidden sm:flex items-center bg-[#243047] rounded-lg px-3 h-10">
                         <span className="material-symbols-outlined text-gray-400">search</span>
                         <input className="bg-transparent border-none text-sm ml-2 focus:ring-0 text-white placeholder-gray-400" placeholder="搜索案件 ID..." />
                     </label>
                      <div className="relative">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-blue-500/30" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWJFrmSy6Rzcv553DCBlFma61tksnN2h2RaPImowSrmwPkXTaCSGxOmBvlrs9Z0Ki--cCF1-HRRQGMjvJ3nd7_5yIkUma0Lw1mTCgvDbwU5KtrnrydfCziqH707Wm8D9Jx4G5HCWO16RAv-6Sim_RXZcauTX_6DvkuEWsxkVkD7D95azxvgrYAGBU0pd8Izn-PzxJXP1bRBhGe87pc27qGNNo_OOEXlSQ-OX9c_FTqw5l0MkiwFhGLVvMfdI5zMt3yEGWRv8Lmsy1M")'}}></div>
                        <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-[#111722]"></div>
                      </div>
                 </div>
            </header>
        </div>

        <main className="px-4 md:px-40 flex flex-1 justify-center py-5">
            <div className="flex flex-col max-w-[960px] flex-1">
                {/* Hero */}
                <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6 bg-[#1a2232] rounded-xl border border-[#243047] shadow-lg mb-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#111722_1px,transparent_1px),linear-gradient(to_bottom,#111722_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
                    <div className="w-full md:w-[45%] rounded-lg aspect-video bg-cover bg-center border border-white/10 shadow-md relative z-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnXlZ-m0vffVaNLxTjjLR0fF1fP7H6_SZVCOJtXpxfBL3SdzgYbRL_TzLS2JM-87RqX0vyW1l9ykdOZ5THBbGAA_6bYmY0k7ZhBTUQI7dl-OCF--X8uuaMRgx7GIzBlfR9GomKMiTVfIF6SjcxWq0vAE9Gqaxmq-sOkskz8PsYmkPpHP7mxPIaSjUV1r28g-l87TADtNFek31vdFAg2HnHHCE9ZcA757vz9K2dsTx-XoNuvQN7kBtv1lcZ061LMGB7cn_SGoBFXfAD")'}}></div>
                    <div className="flex flex-col gap-4 justify-center relative z-10">
                        <div className="flex flex-col gap-2">
                             <div className="flex items-center gap-2 mb-1">
                                <span className="bg-yellow-500/20 text-yellow-500 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">每日任务</span>
                                <span className="text-gray-400 text-xs">Clawhauser 在线</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black leading-tight">快来破案！<br/><span className="text-blue-500 text-2xl md:text-4xl">(Close the cases!)</span></h1>
                             <div className="bg-blue-500/10 border-l-4 border-blue-500 p-3 rounded-r-lg mt-2">
                                <h2 className="text-gray-300 text-sm italic">"甜甜圈可以等，但正义不能迟到！这些悬案正等着你重新调查，警官！" <br/>— 豹警官 (Clawhauser)</h2>
                            </div>
                        </div>
                        <button className="flex w-fit items-center gap-2 rounded-lg h-12 px-6 bg-blue-600 hover:bg-blue-500 transition-all font-bold shadow-lg">
                            <span className="material-symbols-outlined">assignment</span>
                            <span>查看今日任务</span>
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex-1 min-w-[150px] bg-[#1a2232] p-5 rounded-xl border border-[#243047] relative overflow-hidden group">
                        <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><span className="material-symbols-outlined text-6xl text-green-500">check_circle</span></div>
                        <div className="flex items-center gap-2 text-green-500"><span className="material-symbols-outlined">task_alt</span><span className="text-gray-400 text-sm font-medium">已结案 (Solved)</span></div>
                        <p className="text-3xl font-bold mt-1">24</p>
                    </div>
                    <div className="flex-1 min-w-[150px] bg-[#1a2232] p-5 rounded-xl border border-[#243047] relative overflow-hidden group">
                        <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><span className="material-symbols-outlined text-6xl text-yellow-500">pending_actions</span></div>
                        <div className="flex items-center gap-2 text-yellow-500"><span className="material-symbols-outlined">hourglass_top</span><span className="text-gray-400 text-sm font-medium">待破悬案 (Pending)</span></div>
                        <p className="text-3xl font-bold mt-1">5</p>
                    </div>
                     <div className="flex-1 min-w-[150px] bg-[#1a2232] p-5 rounded-xl border border-[#243047] relative overflow-hidden group">
                        <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><span className="material-symbols-outlined text-6xl text-blue-500">pie_chart</span></div>
                        <div className="flex items-center gap-2 text-blue-500"><span className="material-symbols-outlined">analytics</span><span className="text-gray-400 text-sm font-medium">搜查进度 (Progress)</span></div>
                        <div className="flex items-baseline gap-2 mt-1">
                             <p className="text-3xl font-bold">82%</p>
                             <span className="text-xs text-green-400 font-medium">+4% 今天</span>
                        </div>
                    </div>
                </div>

                {/* List Header */}
                <div className="flex items-center justify-between px-2 pb-4 pt-2">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-red-500 animate-pulse">warning</span>
                        <h2 className="text-2xl font-bold">待破悬案 (Pending Cases)</h2>
                    </div>
                    <button className="text-blue-500 text-sm font-medium hover:text-white flex items-center gap-1">查看全部 <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
                </div>

                {/* Cases */}
                <div className="flex flex-col gap-4 pb-10">
                    {/* Case 1 */}
                    <div className="flex flex-col md:flex-row bg-[#1a2232] border border-[#243047] rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors shadow-lg">
                        <div className="w-full md:w-64 aspect-video bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500 relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtTL_e3fO3I8KHg8ZBRY4eo2AByeAUXO2culRI63lms-6LELVL9FAU6C3el-4V8ruagHv7FgeeVbTusw2Ep9nEO9gfykxrJyYxwuIfaelE5BnjToMWx2hDcy-vaxAOgxFzkoIuEZ5VxxNg-2smVh-BwEl06qKVWCsGpMIn4LfB2UVonzOT65z2Nq9IX7owYLRRBepDhg2EOdz5It6SfMZY0BxFfJPtQhWr1cisHMfE7JQtxJ2ISm9txU2ijc6_1CiC-dgEoduFHcAJ")'}}>
                             <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">High Priority</div>
                        </div>
                        <div className="flex-1 p-5 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold">案件 #102: 错别字案件</h3>
                                    <span className="text-xs font-mono text-gray-400 border border-[#243047] px-2 py-1 rounded">FILE: ZH-02</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-4">(Misspelled Words Case)</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#111722]/50 p-3 rounded-lg border border-[#243047]/50 mb-4">
                                     <div>
                                        <span className="text-xs text-gray-500 uppercase">嫌疑人 (Suspect)</span>
                                        <p className="text-sm font-medium flex items-center gap-2"><span className="material-symbols-outlined text-base text-blue-500">person_search</span> 错字鼬鼠 (Typo Weasel)</p>
                                    </div>
                                    <div>
                                        <span className="text-xs text-gray-500 uppercase">案情 (Details)</span>
                                        <p className="text-sm">同音字混淆导致的任务失败。</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end pt-2 border-t border-[#243047]/50">
                                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg transition-all">
                                    <span className="material-symbols-outlined text-lg">search</span> 重新侦破 (Re-investigate)
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Case 2 */}
                    <div className="flex flex-col md:flex-row bg-[#1a2232] border border-[#243047] rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors shadow-lg">
                        <div className="w-full md:w-64 aspect-video bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBs48YhCKs2oR9JqTMFZf2Ox_tle22BQZg51TcLK-_leV168p6_vRdc0HAoeNlK8wVTVT2VEMqutC0UUv479WN_1_8BHTkPiMjaXGl28yVoctmSJObOeUQFjQAchAiJs7KevseithBPgPdZDCLVkttZigwLEqtDYyMALmutcGW2Nei6GUlVnEdlAnMq_L7d0eOx8wM8SNFnCGYETgFMGfKhvCJXBUq-1shNzZE4pkRe7eHY8RM6WRLm5vRxfJEq1SuysQn4Vw8jaEfJ")'}}></div>
                        <div className="flex-1 p-5 flex flex-col justify-between">
                             <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold">案件 #105: 古诗迷案</h3>
                                    <span className="text-xs font-mono text-gray-400 border border-[#243047] px-2 py-1 rounded">FILE: POEM-05</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-4">(Ancient Poem Mystery)</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#111722]/50 p-3 rounded-lg border border-[#243047]/50 mb-4">
                                     <div>
                                        <span className="text-xs text-gray-500 uppercase">嫌疑人 (Suspect)</span>
                                        <p className="text-sm font-medium flex items-center gap-2"><span className="material-symbols-outlined text-base text-blue-500">person_search</span> 遗忘树懒 (Forgetful Sloth)</p>
                                    </div>
                                    <div>
                                        <span className="text-xs text-gray-500 uppercase">案情 (Details)</span>
                                        <p className="text-sm">丢失了关键的诗句顺序。</p>
                                    </div>
                                </div>
                            </div>
                             <div className="flex justify-end pt-2 border-t border-[#243047]/50">
                                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg transition-all">
                                    <span className="material-symbols-outlined text-lg">search</span> 重新侦破 (Re-investigate)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  );
};
