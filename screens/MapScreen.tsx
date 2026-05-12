import React from 'react';
import { Mission, PlayerProgress } from '../types';
import { getMissionStats, missionIsUnlocked, subjectColors, subjectLabels } from '../domain/scoring';

interface MapScreenProps {
  missions: Mission[];
  progress: PlayerProgress;
  onSelectMission: (missionId: string) => void;
}

export const MapScreen: React.FC<MapScreenProps> = ({ missions, progress, onSelectMission }) => {
  return (
    <div className="min-h-screen bg-[#eef3f6] pb-28 text-slate-950">
      <header className="border-b border-slate-200 bg-white px-5 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-600">Mission Map</p>
            <h1 className="text-3xl font-black">疯狂城市案件地图</h1>
          </div>
          <div className="hidden rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white md:block">
            {progress.xp} XP · {progress.medalIds.length} medals
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <div className="grid gap-5 lg:grid-cols-3">
          {missions.map((mission, index) => {
            const unlocked = missionIsUnlocked(mission, progress);
            const completed = progress.completedMissionIds.includes(mission.id);
            const stats = getMissionStats(mission, progress);
            const progressPercent = Math.round((stats.answered / stats.total) * 100);
            return (
              <button
                key={mission.id}
                disabled={!unlocked}
                onClick={() => onSelectMission(mission.id)}
                className={`group relative min-h-[430px] overflow-hidden rounded-[2rem] text-left shadow-xl transition-all ${
                  unlocked ? 'hover:-translate-y-1 hover:shadow-2xl' : 'cursor-not-allowed grayscale'
                }`}
              >
                <img src={mission.cover} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-2">
                  <span className="flex size-10 items-center justify-center rounded-2xl bg-white text-lg font-black text-slate-950">
                    {index + 1}
                  </span>
                  <span className={`rounded-full border px-3 py-1 text-xs font-black ${subjectColors[mission.subject]}`}>
                    {subjectLabels[mission.subject]}
                  </span>
                </div>
                {!unlocked && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950/60">
                    <div className="rounded-2xl bg-white/95 px-5 py-4 text-center font-black text-slate-800 shadow-xl">
                      <span className="material-symbols-outlined mb-1 block text-4xl">lock</span>
                      完成上一个案件解锁
                    </div>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="mb-2 text-sm font-bold text-white/70">{mission.district} · {mission.textbook}</p>
                  <h2 className="text-3xl font-black leading-tight">{mission.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200">{mission.summary}</p>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="mb-2 flex justify-between text-xs font-bold text-slate-300">
                        <span>{completed ? '已结案' : '案件进度'}</span>
                        <span>{progressPercent}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/20">
                        <div className="h-full rounded-full bg-amber-300" style={{ width: `${progressPercent}%` }} />
                      </div>
                    </div>
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-slate-950 transition group-hover:scale-110">
                      <span className="material-symbols-outlined">{completed ? 'replay' : 'play_arrow'}</span>
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
};
