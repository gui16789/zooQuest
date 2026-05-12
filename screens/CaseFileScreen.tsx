import React from 'react';
import { Mission, PlayerProgress } from '../types';
import { QuestionCard } from '../components/QuestionCard';
import { questionById } from '../data/questions';
import { getMissionStats, getNextQuestionId, subjectLabels } from '../domain/scoring';

interface CaseFileScreenProps {
  mission: Mission;
  progress: PlayerProgress;
  onAnswer: (selected: string | string[]) => void;
}

export const CaseFileScreen: React.FC<CaseFileScreenProps> = ({ mission, progress, onAnswer }) => {
  const nextQuestionId = getNextQuestionId(mission.clueQuestionIds, progress);
  const question = nextQuestionId ? questionById.get(nextQuestionId) : undefined;
  const stats = getMissionStats(mission, progress);
  const clueIndex = question ? mission.clueQuestionIds.indexOf(question.id) : mission.clueQuestionIds.length;

  return (
    <div className="min-h-screen bg-[#f6f7f8] pb-28 text-slate-950">
      <header className="border-b border-slate-200 bg-white px-5 py-4">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-600">Case File</p>
            <h1 className="text-2xl font-black md:text-4xl">{mission.title}</h1>
            <p className="mt-1 text-sm font-medium text-slate-500">{mission.mentor} · {subjectLabels[mission.subject]}</p>
          </div>
          <div className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white">
            {stats.answered}/{stats.total} 已完成 · 准确率 {stats.accuracy}%
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-6 px-4 py-7 lg:grid-cols-[0.8fr_1.4fr]">
        <aside className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
          <img src={mission.cover} alt="" className="mb-5 h-48 w-full rounded-3xl object-cover" />
          <h2 className="text-xl font-black">案件目标</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{mission.summary}</p>
          <div className="mt-5 space-y-3">
            {mission.clueQuestionIds.map((id, index) => {
              const answered = progress.answers.some((answer) => answer.questionId === id);
              return (
                <div key={id} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                  <span className={`flex size-8 items-center justify-center rounded-full text-sm font-black ${answered ? 'bg-green-500 text-white' : 'bg-white text-slate-500'}`}>
                    {answered ? <span className="material-symbols-outlined text-base">check</span> : index + 1}
                  </span>
                  <span className="text-sm font-bold text-slate-700">线索 {index + 1}</span>
                </div>
              );
            })}
          </div>
        </aside>

        <div className="flex items-start justify-center">
          {question ? (
            <QuestionCard question={question} index={clueIndex} total={mission.clueQuestionIds.length} mode="clue" onSubmit={onAnswer} />
          ) : (
            <section className="w-full rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl">
              <span className="material-symbols-outlined text-5xl text-amber-300">verified</span>
              <h2 className="mt-4 text-3xl font-black">线索已经收集完毕</h2>
              <p className="mt-3 text-slate-300">请从底部导航进入 Boss 战，完成最终认证后生成结案报告。</p>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};
