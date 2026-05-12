import React from 'react';
import { medals } from '../data/medals';
import { PlayerProgress } from '../types';

interface MedalsScreenProps {
  progress: PlayerProgress;
}

export const MedalsScreen: React.FC<MedalsScreenProps> = ({ progress }) => {
  const unlockedCount = medals.filter((medal) => progress.medalIds.includes(medal.id)).length;
  const percent = Math.round((unlockedCount / medals.length) * 100);

  return (
    <div className="min-h-screen bg-[#f6f7f8] pb-28 text-slate-950">
      <main className="mx-auto max-w-6xl px-4 py-10">
        <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-600">Medal Hall</p>
            <h1 className="text-4xl font-black">结案勋章墙</h1>
            <p className="mt-2 text-slate-500">完成案件和复盘任务后自动解锁，便于孩子看到真实成长。</p>
          </div>
          <div className="rounded-3xl bg-slate-950 px-5 py-4 text-white">
            <p className="text-xs font-black text-slate-400">总进度</p>
            <p className="text-3xl font-black">{percent}%</p>
          </div>
        </header>

        <section className="mb-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-black">已收集 {unlockedCount}/{medals.length}</span>
            <span className="text-sm font-bold text-slate-500">{progress.xp} XP</span>
          </div>
          <div className="h-4 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-gradient-to-r from-amber-300 to-blue-600" style={{ width: `${percent}%` }} />
          </div>
        </section>

        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {medals.map((medal) => {
            const unlocked = progress.medalIds.includes(medal.id);
            return (
              <article
                key={medal.id}
                className={`rounded-[2rem] border p-6 text-center shadow-sm transition ${
                  unlocked ? 'border-amber-200 bg-white' : 'border-slate-200 bg-slate-100 text-slate-400'
                }`}
              >
                <div
                  className={`mx-auto flex size-28 items-center justify-center rounded-full border-8 ${
                    unlocked ? 'border-amber-100 bg-amber-300 text-slate-950 shadow-xl shadow-amber-200' : 'border-slate-200 bg-white'
                  }`}
                >
                  <span className="material-symbols-outlined text-5xl">{unlocked ? medal.icon : 'lock'}</span>
                </div>
                <h2 className="mt-5 text-xl font-black">{medal.name}</h2>
                <p className="mt-2 min-h-12 text-sm leading-relaxed">{medal.description}</p>
                <span
                  className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-black ${
                    unlocked ? 'bg-green-50 text-green-700' : 'bg-white text-slate-400'
                  }`}
                >
                  {unlocked ? '已解锁' : '未解锁'}
                </span>
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
};
