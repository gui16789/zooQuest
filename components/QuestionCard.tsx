import React, { useMemo, useState } from 'react';
import { Question } from '../types';
import { subjectColors, subjectLabels } from '../domain/scoring';

interface QuestionCardProps {
  question: Question;
  index: number;
  total: number;
  mode: 'clue' | 'boss';
  onSubmit: (selected: string | string[]) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, index, total, mode, onSubmit }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [sortAnswer, setSortAnswer] = useState<string[]>([]);

  const remainingSortOptions = useMemo(
    () => question.options.filter((option) => !sortAnswer.includes(option)),
    [question.options, sortAnswer]
  );

  const submitDisabled = question.type === 'sort' ? sortAnswer.length !== question.options.length : !selected;

  const handleSubmit = () => {
    if (question.type === 'sort') {
      onSubmit(sortAnswer);
      setSortAnswer([]);
    } else if (selected) {
      onSubmit(selected);
      setSelected(null);
    }
  };

  return (
    <section className="relative w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 md:p-8">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <span className={`rounded-full border px-3 py-1 text-xs font-bold ${subjectColors[question.subject]}`}>
          {subjectLabels[question.subject]} · {question.knowledgePoint}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
          {mode === 'boss' ? 'Boss 战' : '线索'} {index + 1}/{total}
        </span>
      </div>

      <div className="mb-5 rounded-xl bg-slate-50 p-4 text-sm font-medium leading-relaxed text-slate-600">
        {question.sceneText}
      </div>

      <h1 className="mb-6 text-2xl font-black leading-tight text-slate-950 md:text-3xl">{question.prompt}</h1>

      {question.type === 'choice' ? (
        <div className="grid gap-3">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => setSelected(option)}
              className={`min-h-14 rounded-xl border-2 px-4 py-3 text-left text-lg font-bold transition-all ${
                selected === option
                  ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-md shadow-blue-100'
                  : 'border-slate-200 bg-white text-slate-800 hover:border-blue-300 hover:bg-blue-50/60'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="min-h-20 rounded-xl border-2 border-dashed border-blue-200 bg-blue-50 p-3">
            <p className="mb-2 text-xs font-bold text-blue-700">你的排序</p>
            <div className="flex flex-wrap gap-2">
              {sortAnswer.length === 0 ? (
                <span className="text-sm text-blue-500">点击下方词卡组成线索句</span>
              ) : (
                sortAnswer.map((word) => (
                  <button
                    key={word}
                    onClick={() => setSortAnswer((current) => current.filter((item) => item !== word))}
                    className="rounded-lg bg-blue-600 px-3 py-2 text-base font-bold text-white"
                  >
                    {word}
                  </button>
                ))
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {remainingSortOptions.map((word) => (
              <button
                key={word}
                onClick={() => setSortAnswer((current) => [...current, word])}
                className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-base font-bold text-slate-800 hover:border-blue-300 hover:bg-blue-50"
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3 rounded-xl bg-amber-50 p-4 text-sm text-amber-900 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-2">
          <span className="material-symbols-outlined text-amber-600">lightbulb</span>
          <span>{question.hint}</span>
        </div>
        <button
          disabled={submitDisabled}
          onClick={handleSubmit}
          className="rounded-xl bg-slate-950 px-5 py-3 font-bold text-white transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          提交线索
        </button>
      </div>
    </section>
  );
};
