import React from 'react';
import { Mission, PlayerProgress } from '../types';
import { QuestionCard } from '../components/QuestionCard';
import { questionById } from '../data/questions';
import { getMissionStats, getNextQuestionId, subjectLabels } from '../domain/scoring';

interface BattleScreenProps {
  mission: Mission;
  progress: PlayerProgress;
  onAnswer: (selected: string | string[]) => void;
}

export const BattleScreen: React.FC<BattleScreenProps> = ({ mission, progress, onAnswer }) => {
  const nextQuestionId = getNextQuestionId(mission.bossQuestionIds, progress);
  const question = nextQuestionId ? questionById.get(nextQuestionId) : undefined;
  const stats = getMissionStats(mission, progress);
  const bossIndex = question ? mission.bossQuestionIds.indexOf(question.id) : mission.bossQuestionIds.length;
  const bossHp = Math.max(0, 100 - Math.round((bossIndex / mission.bossQuestionIds.length) * 100));

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#101622] pb-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,.25),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(245,158,11,.22),transparent_30%)]" />
      <main className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-4 py-8 lg:grid-cols-[0.7fr_1.2fr_0.7fr]">
        <aside className="rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-200">Knowledge Beam</p>
          <h1 className="mt-3 text-3xl font-black">Boss 战：{mission.district}</h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">{mission.title} 的最终关卡。答对综合题，击破混乱屏障。</p>
          <div className="mt-5 rounded-2xl bg-black/30 p-4">
            <div className="mb-2 flex justify-between text-xs font-bold text-slate-300">
              <span>Boss HP</span>
              <span>{bossHp}%</span>
            </div>
            <div className="h-4 overflow-hidden rounded-full bg-red-950">
              <div className="h-full rounded-full bg-gradient-to-r from-red-600 to-amber-400" style={{ width: `${bossHp}%` }} />
            </div>
          </div>
        </aside>

        <div className="flex justify-center">
          {question ? (
            <QuestionCard question={question} index={bossIndex} total={mission.bossQuestionIds.length} mode="boss" onSubmit={onAnswer} />
          ) : (
            <section className="w-full rounded-[2rem] bg-white p-8 text-slate-950 shadow-xl">
              <span className="material-symbols-outlined text-5xl text-green-600">task_alt</span>
              <h2 className="mt-4 text-3xl font-black">Boss 已被击败</h2>
              <p className="mt-3 text-slate-600">请查看结案报告。</p>
            </section>
          )}
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-2xl">
          <img src={mission.cover} alt="" className="h-48 w-full rounded-3xl object-cover opacity-80" />
          <h2 className="mt-4 text-xl font-black">{subjectLabels[mission.subject]}能量</h2>
          <p className="mt-2 text-sm text-slate-400">当前案件已答 {stats.answered}/{stats.total} 题，准确率 {stats.accuracy}%。</p>
        </aside>
      </main>
    </div>
  );
};
