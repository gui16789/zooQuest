import React from 'react';

export const HandbookScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f6f7f8] text-[#0e121b] pb-24 overflow-hidden">
        <header className="flex items-center justify-between border-b border-[#e8ebf3] bg-white px-10 py-3 z-10">
            <div className="flex items-center gap-4">
                <div className="size-8 flex items-center justify-center bg-blue-800 rounded-full text-white">
                    <span className="material-symbols-outlined text-xl">local_police</span>
                </div>
                <h2 className="text-lg font-bold leading-tight">Zootopia Learning</h2>
            </div>
             <div className="flex gap-4 items-center">
                <a className="text-blue-800 text-sm font-bold" href="#">Handbook</a>
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-blue-800 cursor-pointer" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnNAqNxbsqiVjdUGtDGTbJD_3EWYq3W98m-JVWeCE0XqKqcTNj2YACCy9fXyZJmFnwMxn6U9_1tNADQNE3E87MOUMSpOevwQarLrWaI95zg_eyOVgF6IKaJtRuSlFCnz-yfFfMP0jO6ma9pCrOmGbqoz8ITHiWwIyMypwVOpVOLXZAm8PYfc6wLSi6DHAl8IsuIOB1rNv7pw5QWUk59K_icwZFENQMkt79WjN0EUu83kc7qlXOep4tGzkLbfi1QOuvS0dnWflom_dD")'}}></div>
            </div>
        </header>

        <main className="relative p-4 md:p-8 flex justify-center items-start">
             {/* Desk Decor */}
             <div className="absolute right-10 bottom-10 w-64 h-6 bg-orange-400 rotate-[-15deg] rounded-full shadow-xl hidden xl:block opacity-90 z-0">
                <div className="absolute right-0 top-0 h-full w-12 bg-green-500 rounded-r-full"></div>
            </div>
            <div className="absolute left-10 bottom-20 text-gray-300 hidden xl:block z-0 rotate-12">
                <span className="material-symbols-outlined text-[180px] opacity-20">search</span>
            </div>

            <div className="relative w-full max-w-[1200px] h-full max-h-[850px] bg-[#fdfbf7] rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden border-4 border-[#3e2723] z-10">
                 {/* Spine */}
                 <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-8 -ml-4 z-20 bg-gradient-to-r from-transparent via-[#00000010] to-transparent pointer-events-none"></div>

                 {/* Left Page */}
                 <div className="flex-1 flex flex-col border-r border-[#e5e7eb] bg-[#fdfbf7] p-6 md:p-10 overflow-y-auto no-scrollbar">
                     <div className="mb-8">
                         <div className="flex justify-between items-start">
                             <div className="flex flex-col gap-2">
                                 <h1 className="text-[#3e2723] text-3xl md:text-4xl font-black leading-tight">探员成长手册</h1>
                                 <p className="text-blue-800 text-sm font-medium tracking-wide uppercase">Zootopia Police Department • Confidential</p>
                             </div>
                             <div className="text-[#fbbf24]"><span className="material-symbols-outlined text-5xl">verified_user</span></div>
                         </div>
                     </div>

                     <div className="flex-1">
                         <div className="flex items-center gap-2 mb-6 border-b-2 border-blue-800/20 pb-2">
                             <span className="material-symbols-outlined text-blue-800">inventory_2</span>
                             <h2 className="text-xl font-bold">线索搜集本 (Clues)</h2>
                         </div>
                         <div className="grid grid-cols-2 gap-4">
                             <div className="group flex flex-col bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100">
                                 <div className="w-full aspect-[4/3] bg-orange-50 rounded-md mb-3 bg-center bg-cover relative overflow-hidden" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3oTqaCLHc0H_smU_IV3B5iJZW2bX9JSuaMslgVS1cuq6IP08pI-8dwtZsSwTC6FpHxmtxYzk3sQpBB709GeJle17MxsF8hMAyeNy8ivJY8uj4bJuZPs4S4bW_l-v4RLQSitcIG7tO5L5Hhsn6qPCTbd-fHE1ibijZ0Ah4EIy-6f7AW-TlYhDEuXfHqfH4OAS-q4xtJvCbaARLBu3B-9h9aNW-aKx9wAW6ejDdIwBYEP7Jj3yzaQ1m-BMkMdIvQKWzEfbrnK3SRlmy")'}}>
                                     <div className="absolute top-2 right-2 bg-blue-800/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">FOUND</div>
                                 </div>
                                 <h3 className="font-bold text-sm">丢失的胡萝卜</h3>
                                 <p className="text-gray-500 text-xs">Case #4021 - Evidence A</p>
                             </div>
                             
                             <div className="group flex flex-col bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100">
                                 <div className="w-full aspect-[4/3] bg-red-50 rounded-md mb-3 bg-center bg-cover relative overflow-hidden" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARxT4ms_bat8aUd7l66HTJEfz0YLUfSqdo0h_f6cNBTUgdOKseDZY2wb8rcPCxQKy8jcmeMnVn5gVPeyeXQ8HbKsDxdR3tZjv7b5nRktpC17trkFOcumN4SlR3H8P9u3_ECtW0fI0wo359wL2l_nvTAYe90gp-uaBvyiUmaNqr2j0gw3CHAu1QM_quOr5SR6JhZr4sOFoY8NeZkXqeQhMDWsHPMKQgdx2_7ZoY8nYEJCog-p-9gDI-z0BhT_MbKvQIsQwhzYJ1rGNO")'}}>
                                      <div className="absolute top-2 right-2 bg-blue-800/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">FOUND</div>
                                 </div>
                                 <h3 className="font-bold text-sm">爪哇冰棍</h3>
                                 <p className="text-gray-500 text-xs">Case #4021 - Evidence B</p>
                             </div>

                             <div className="group flex flex-col bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100">
                                 <div className="w-full aspect-[4/3] bg-gray-50 rounded-md mb-3 bg-center bg-cover relative overflow-hidden" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC_iFpl7wrBsZWu-KaV7khWkjDc_rVEgZy7tPsvzwMC_61UMvsjmhwaj4Pkfy4MTO3C_yF_sRPSaMhkDvOWo4rwYj-SXPTRAvl1cfyy5NPT4dU-1a1gFyMN6ezo6lbWc5o1FCQTd8rW2eY2zbDnChIsW9FJrfElI9xT97NMDpi5Vo4aaH7oj6uiW2-CXKOyUoNqUgjH6ww6oADboc7slYTNIVS31UidPnqFUVIHs5qoDZPIno2xPCsqsFIyA2KvDTteiIoTlYzZJIBR")'}}></div>
                                 <h3 className="font-bold text-sm">神秘车牌</h3>
                                 <p className="text-gray-500 text-xs">Case #4099 - Evidence A</p>
                             </div>

                             <div className="group flex flex-col bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100">
                                 <div className="w-full aspect-[4/3] bg-blue-50 rounded-md mb-3 bg-center bg-cover relative overflow-hidden" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCu_Phw6sEKjC-eW15p4cWBHFe9AJsfAjwZWCq_iJxhU3ibLH1EQ3u0G1EPjQhBMOv8kuZuuGNSv-Ss9RB5vfG-c8NiZwa6QzwjEcygTz5zCtyr-pZtDICW0-4E8SwjCWjasJ8Judw27KZopovmNq4hzN4b1E9W7-LpZsuAeFUfwNaTVfT-2ps8FC8AFeGFblGKKtrIshPh8iSlr2jDWEL58vURn0jshGksq54n5ykpbeiPbN_fxGL_NxccLu3s4QJNYqizKR10sX0A")'}}></div>
                                 <h3 className="font-bold text-sm">监控录像</h3>
                                 <p className="text-gray-500 text-xs">Case #4099 - Evidence B</p>
                             </div>
                         </div>
                     </div>
                 </div>

                 {/* Right Page */}
                 <div className="flex-1 flex flex-col bg-[#fdfbf7] p-6 md:p-10 relative overflow-y-auto no-scrollbar">
                     <div className="flex items-center justify-between mb-6 border-b-2 border-blue-800/20 pb-2">
                         <div className="flex items-center gap-2">
                             <span className="material-symbols-outlined text-blue-800">folder_open</span>
                             <h2 className="text-xl font-bold">成语档案 (Archive)</h2>
                         </div>
                         <div className="text-xs font-mono text-gray-400">REF: ZPD-LANG-02</div>
                     </div>

                     <div className="flex flex-col gap-4 relative z-10">
                         {/* Card 1 */}
                         <div className="relative bg-white p-4 rounded-lg shadow-sm border-l-4 border-l-blue-800 border-y border-r border-gray-100">
                             <div className="flex justify-between items-start mb-2">
                                 <div>
                                     <h3 className="text-2xl font-black">守株待兔</h3>
                                     <p className="text-sm text-blue-800 font-mono">Shǒu zhū dài tù</p>
                                 </div>
                                 <button className="size-8 rounded-full bg-blue-800/10 hover:bg-blue-800/20 flex items-center justify-center text-blue-800 transition-colors">
                                     <span className="material-symbols-outlined text-lg">volume_up</span>
                                 </button>
                             </div>
                             <div className="mb-3">
                                 <p className="text-sm text-gray-600 italic">"Waiting for a rabbit by a tree stump"</p>
                                 <p className="text-xs text-gray-400 mt-1">Metaphor for relying on luck instead of effort.</p>
                             </div>
                             <div className="bg-gray-50 p-2 rounded text-xs text-gray-700 border border-dashed border-gray-200">
                                 <span className="font-bold text-blue-800">Ex:</span> 我们不能<span className="underline decoration-blue-800 decoration-2 underline-offset-2">守株待兔</span>，要主动出击寻找线索！
                             </div>
                             <div className="absolute top-2 right-12 transform rotate-[-15deg] opacity-80 border-2 border-green-500 text-green-500 px-2 py-1 rounded text-xs font-black tracking-widest uppercase pointer-events-none">Learned</div>
                         </div>

                          {/* Card 2 */}
                         <div className="relative bg-white p-4 rounded-lg shadow-sm border-l-4 border-l-orange-500 border-y border-r border-gray-100">
                             <div className="flex justify-between items-start mb-2">
                                 <div>
                                     <h3 className="text-2xl font-black">亡羊补牢</h3>
                                     <p className="text-sm text-orange-600 font-mono">Wáng yáng bǔ láo</p>
                                 </div>
                                 <button className="size-8 rounded-full bg-blue-800/10 hover:bg-blue-800/20 flex items-center justify-center text-blue-800 transition-colors">
                                     <span className="material-symbols-outlined text-lg">volume_up</span>
                                 </button>
                             </div>
                             <div className="mb-3">
                                 <p className="text-sm text-gray-600 italic">"Mending the fold after the sheep are lost"</p>
                                 <p className="text-xs text-gray-400 mt-1">It is never too late to take action.</p>
                             </div>
                             <div className="bg-gray-50 p-2 rounded text-xs text-gray-700 border border-dashed border-gray-200">
                                 <span className="font-bold text-blue-800">Ex:</span> 虽然犯了错，但只要<span className="underline decoration-orange-500 decoration-2 underline-offset-2">亡羊补牢</span>，还来得及。
                             </div>
                             <div className="absolute top-4 right-14 transform rotate-[10deg] opacity-80 border-2 border-green-500 text-green-500 px-2 py-1 rounded text-xs font-black tracking-widest uppercase pointer-events-none">Learned</div>
                         </div>
                         
                          {/* Card 3 (Locked) */}
                         <div className="relative bg-white p-4 rounded-lg shadow-sm border-l-4 border-l-purple-500 border-y border-r border-gray-100 opacity-60">
                             <div className="flex justify-between items-start mb-2">
                                 <div>
                                     <h3 className="text-2xl font-black">蛛丝马迹</h3>
                                     <p className="text-sm text-purple-600 font-mono">Zhū sī mǎ jì</p>
                                 </div>
                                 <button className="size-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 cursor-not-allowed">
                                     <span className="material-symbols-outlined text-lg">lock</span>
                                 </button>
                             </div>
                             <div className="mb-3">
                                 <p className="text-sm text-gray-600 italic">"Spider silk and horse tracks"</p>
                                 <p className="text-xs text-gray-400 mt-1">Tiny clues or traces.</p>
                             </div>
                             <div className="bg-gray-50 p-2 rounded text-xs text-gray-500 border border-dashed border-gray-200 flex items-center justify-center">
                                 <span className="material-symbols-outlined text-sm mr-1">lock</span> Complete Mission 3 to unlock
                             </div>
                         </div>
                     </div>

                     {/* Polaroid */}
                     <div className="absolute -bottom-4 -right-4 md:bottom-10 md:right-6 rotate-6 z-20 hover:rotate-0 transition-transform duration-300">
                        <div className="bg-white p-3 pb-8 shadow-md rounded-sm w-40 md:w-48 transform rotate-3">
                            <div className="aspect-[4/5] bg-gray-200 overflow-hidden rounded-sm bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2DUKm8AVILNGc1HSViT7bJ49-O2fqYBlAaR9L47AxDc66Sc74EcHhST3jeYA9uEJXkFURxwKRDH5RZpBvQY9JCNBcIbh1nrqZznasbHiEYT_z3-HqRpPCDIehWIGMwj-_-m274GFc66HGSlTj1CE-gdkV0aj0HZZmJgK1bCyWXhDqltcH23ZZaYVHorZXHqHqAZI9pY65PCvANe8MWRbVOyK5Wh-TgLPJuuGIt_MnhIdMePLZQVRBMIoGaR_eGlA0KV1fE9PQ5jt5")'}}></div>
                            <div className="text-center mt-3 text-gray-600 font-bold transform -rotate-2 text-xs">Best Partners! 🐰🦊</div>
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-red-500 drop-shadow-md">
                                <span className="material-symbols-outlined text-3xl">push_pin</span>
                            </div>
                        </div>
                     </div>
                 </div>
            </div>
        </main>
    </div>
  );
};
