import React from 'react';
import { Mission, MissionStats, PlayerProgress, Question } from '../types';
import { medals } from '../data/medals';
import { questionById } from '../data/questions';
import { subjectLabels } from '../domain/scoring';

interface ReportScreenProps {
  mission: Mission;
  progress: PlayerProgress;
  stats: MissionStats;
  lastQuestionResult: { question: Question; selected: string | string[]; correct: boolean } | null;
  onNext: () => void;
  onMedals: () => void;
}

export const ReportScreen: React.FC<ReportScreenProps> = ({ mission, progress, stats, lastQuestionResult, onNext, onMedals }) => {
  const medal = medals.find((item) => item.id === mission.rewardMedalId);
  const missionQuestionIds = [...mission.clueQuestionIds, ...mission.bossQuestionIds];
  const wrongAnswers = progress.answers.filter((answer) => answer.missionId === mission.id && !answer.correct);

  return (
    <div className="min-h-screen bg-[#101622] pb-28 text-white">
      <main className="mx-auto max-w-5xl px-4 py-10">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur md:p-8">
          <div className="absolute right-8 top-8 rotate-[-10deg] rounded-xl border-4 border-red-500 px-4 py-2 text-2xl font-black uppercase tracking-widest text-red-500 opacity-70">
            Solved
          </div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-300">Case Report</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-black leading-tight md:text-5xl">{mission.title}</h1>
          <p className="mt-3 max-w-2xl text-slate-300">{subjectLabels[mission.subject]} · {mission.textbook}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <div className="rounded-3xl bg-slate-950/70 p-5">
              <p className="text-xs font-black text-slate-400">准确率</p>
              <p className="mt-2 text-4xl font-black">{stats.accuracy}%</p>
            </div>
            <div className="rounded-3xl bg-slate-950/70 p-5">
              <p className="text-xs font-black text-slate-400">正确题数</p>
              <p className="mt-2 text-4xl font-black">{stats.correct}/{stats.total}</p>
            </div>
            <div className="rounded-3xl bg-slate-950/70 p-5">
              <p className="text-xs font-black text-slate-400">总 XP</p>
              <p className="mt-2 text-4xl font-black">{progress.xp}</p>
            </div>
            <div className="rounded-3xl bg-amber-300 p-5 text-slate-950">
              <p className="text-xs font-black">获得勋章</p>
              <p className="mt-2 text-xl font-black">{medal?.name ?? '案件勋章'}</p>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-6 text-slate-950">
            <h2 className="text-2xl font-black">错题复盘</h2>
            <div className="mt-4 space-y-3">
              {wrongAnswers.length === 0 ? (
                <p className="rounded-2xl bg-green-50 p-4 text-sm font-bold text-green-700">本案没有错题，表现稳定。</p>
              ) : (
                wrongAnswers.map((answer) => {
                  const question = questionById.get(answer.questionId);
                  return (
                    <div key={answer.questionId} className="rounded-2xl bg-red-50 p-4">
                      <p className="text-sm font-black text-red-700">{question?.knowledgePoint}</p>
                      <p className="mt-1 text-sm text-slate-700">{question?.explanation}</p>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 text-slate-950">
            <h2 className="text-2xl font-black">知识点清单</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {missionQuestionIds.map((id) => {
                const question = questionById.get(id);
                return question ? (
                  <span key={id} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-black text-slate-700">
                    {question.knowledgePoint}
                  </span>
                ) : null;
              })}
            </div>
            {lastQuestionResult && (
              <div className="mt-5 rounded-2xl bg-blue-50 p-4 text-sm text-blue-900">
                <p className="font-black">最后一题反馈</p>
                <p className="mt-1">{lastQuestionResult.question.explanation}</p>
              </div>
            )}
          </div>
        </section>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button onClick={onMedals} className="rounded-2xl border border-white/20 px-6 py-4 font-black text-white hover:bg-white/10">
            查看勋章墙
          </button>
          <button onClick={onNext} className="rounded-2xl bg-blue-600 px-8 py-4 font-black text-white shadow-xl shadow-blue-600/20 hover:bg-blue-500">
            返回地图继续破案
          </button>
        </div>
      </main>
    </div>
  );
};
