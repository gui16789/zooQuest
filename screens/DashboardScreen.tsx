import React from 'react';
import { Mission, PlayerProgress } from '../types';
import { getNextRank, getRank, missionIsUnlocked, subjectLabels } from '../domain/scoring';
import { getMissionStats } from '../domain/scoring';

interface DashboardScreenProps {
  progress: PlayerProgress;
  missions: Mission[];
  onStart: () => void;
  onReset: () => void;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({ progress, missions, onStart, onReset }) => {
  const rank = getRank(progress.xp);
  const nextRank = getNextRank(progress.xp);
  const recommendedMission =
    missions.find((mission) => missionIsUnlocked(mission, progress) && !progress.completedMissionIds.includes(mission.id)) ??
    missions[0];
  const stats = getMissionStats(recommendedMission, progress);
  const rankProgress = nextRank ? Math.min(100, Math.round((progress.xp / nextRank.minXp) * 100)) : 100;

  return (
    <div className="min-h-screen bg-[#f5f7fb] pb-28 text-slate-950">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg">
              <span className="material-symbols-outlined">local_police</span>
            </div>
            <div>
              <h1 className="text-base font-black">{progress.officerName}</h1>
              <p className="text-xs font-bold text-slate-500">ZooQuest 警官学院 · {rank.name}</p>
            </div>
          </div>
          <button onClick={onReset} className="rounded-full border border-slate-200 px-3 py-2 text-xs font-bold text-slate-500 hover:bg-slate-50">
            重置演示进度
          </button>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 md:px-6 lg:grid-cols-[1.45fr_0.8fr]">
        <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl md:p-8">
          <div className="absolute -right-10 top-10 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-40 w-2/3 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,.08)_100%)]" />
          <div className="relative z-10 max-w-2xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-blue-300">Today's Assignment</p>
            <h2 className="text-4xl font-black leading-tight md:text-5xl">从见习探员开始，今天破解一个真实案件。</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
              当前推荐：{recommendedMission.title}。完成线索题和 Boss 战后，会自动获得 XP、结案报告和勋章。
            </p>
            <button
              onClick={onStart}
              className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-6 py-4 text-base font-black text-slate-950 shadow-xl shadow-amber-400/20 transition hover:-translate-y-0.5 hover:bg-amber-300"
            >
              <span className="material-symbols-outlined">map</span>
              打开疯狂城市地图
            </button>
          </div>
        </section>

        <aside className="grid gap-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-black text-slate-500">等级进度</span>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">{progress.xp} XP</span>
            </div>
            <h3 className="text-2xl font-black">{rank.name}</h3>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-blue-600" style={{ width: `${rankProgress}%` }} />
            </div>
            <p className="mt-2 text-xs font-medium text-slate-500">
              {nextRank ? `距离 ${nextRank.name} 还差 ${Math.max(0, nextRank.minXp - progress.xp)} XP` : '已达到当前最高等级'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <p className="text-xs font-black text-slate-500">已破案件</p>
              <p className="mt-2 text-3xl font-black">{progress.completedMissionIds.length}</p>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <p className="text-xs font-black text-slate-500">勋章</p>
              <p className="mt-2 text-3xl font-black">{progress.medalIds.length}</p>
            </div>
          </div>
        </aside>

        <section className="lg:col-span-2">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-black">任务看板</h2>
              <p className="text-sm text-slate-500">先完成解锁的案件，后续题库会按同一结构继续扩展。</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {missions.map((mission) => {
              const missionStats = getMissionStats(mission, progress);
              const unlocked = missionIsUnlocked(mission, progress);
              const completed = progress.completedMissionIds.includes(mission.id);
              return (
                <article key={mission.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">
                      {subjectLabels[mission.subject]}
                    </span>
                    <span className="material-symbols-outlined text-slate-400">{completed ? 'verified' : unlocked ? 'lock_open' : 'lock'}</span>
                  </div>
                  <h3 className="min-h-14 text-lg font-black leading-tight">{mission.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-500">{mission.summary}</p>
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full bg-slate-950" style={{ width: `${Math.round((missionStats.answered / missionStats.total) * 100)}%` }} />
                  </div>
                  <p className="mt-2 text-xs font-bold text-slate-500">
                    {unlocked ? `${missionStats.answered}/${missionStats.total} 题已完成` : '完成上一个案件后解锁'}
                  </p>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};
