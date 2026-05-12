import React from 'react';
import { questionById } from '../data/questions';
import { PlayerProgress } from '../types';
import { subjectLabels } from '../domain/scoring';

interface HandbookScreenProps {
  progress: PlayerProgress;
}

export const HandbookScreen: React.FC<HandbookScreenProps> = ({ progress }) => {
  const answeredQuestions = progress.answers
    .map((answer) => ({
      answer,
      question: questionById.get(answer.questionId)
    }))
    .filter((item) => item.question);
  const wrongAnswers = answeredQuestions.filter((item) => !item.answer.correct);

  return (
    <div className="min-h-screen bg-[#f7f1e8] pb-28 text-[#2d2118]">
      <main className="mx-auto max-w-6xl px-4 py-8">
        <section className="overflow-hidden rounded-[2rem] border-4 border-[#3e2723] bg-[#fffaf0] shadow-2xl md:grid md:grid-cols-2">
          <div className="border-b border-[#eadfca] p-6 md:border-b-0 md:border-r md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-700">Detective Handbook</p>
            <h1 className="mt-3 text-4xl font-black">探员成长手册</h1>
            <p className="mt-3 text-sm leading-relaxed text-[#6f604c]">
              这里自动记录孩子做过的题、掌握的知识点和需要复盘的错题。后续新增题库时也会进入同一手册。
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs font-black text-[#8c7a63]">已答题</p>
                <p className="mt-2 text-3xl font-black">{answeredQuestions.length}</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs font-black text-[#8c7a63]">待复盘</p>
                <p className="mt-2 text-3xl font-black">{wrongAnswers.length}</p>
              </div>
            </div>

            <h2 className="mt-8 text-2xl font-black">知识点足迹</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {answeredQuestions.length === 0 ? (
                <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#8c7a63]">完成第一道题后自动记录</span>
              ) : (
                answeredQuestions.map(({ question }) => (
                  <span key={question!.id} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#3e2723] shadow-sm">
                    {question!.knowledgePoint}
                  </span>
                ))
              )}
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-black">错题档案</h2>
              <span className="material-symbols-outlined text-3xl text-red-500">manage_search</span>
            </div>

            <div className="space-y-4">
              {wrongAnswers.length === 0 ? (
                <div className="rounded-3xl border border-green-100 bg-green-50 p-5 text-green-800">
                  <p className="font-black">暂时没有错题</p>
                  <p className="mt-1 text-sm">继续闯关后，这里会记录需要复习的题目解释。</p>
                </div>
              ) : (
                wrongAnswers.map(({ answer, question }) => (
                  <article key={answer.questionId} className="rounded-3xl border-l-4 border-red-500 bg-white p-5 shadow-sm">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-black text-red-700">
                        {subjectLabels[question!.subject]}
                      </span>
                      <span className="text-xs font-bold text-[#8c7a63]">{question!.unit}</span>
                    </div>
                    <h3 className="text-lg font-black">{question!.prompt}</h3>
                    <p className="mt-2 text-sm text-[#6f604c]">你的答案：{Array.isArray(answer.selected) ? answer.selected.join(' ') : answer.selected}</p>
                    <p className="mt-2 rounded-2xl bg-amber-50 p-3 text-sm font-medium text-amber-900">{question!.explanation}</p>
                  </article>
                ))
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
