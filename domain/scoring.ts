import { Mission, PlayerProgress, Question, Rank, Subject } from '../types';
import { ranks } from '../data/ranks';

export const subjectLabels: Record<Subject, string> = {
  chinese: '语文侦查',
  math: '数学行动',
  english: '英语通讯'
};

export const subjectColors: Record<Subject, string> = {
  chinese: 'text-emerald-700 bg-emerald-50 border-emerald-100',
  math: 'text-blue-700 bg-blue-50 border-blue-100',
  english: 'text-amber-700 bg-amber-50 border-amber-100'
};

export function getRank(xp: number): Rank {
  return [...ranks].reverse().find((rank) => xp >= rank.minXp) ?? ranks[0];
}

export function getNextRank(xp: number): Rank | undefined {
  return ranks.find((rank) => rank.minXp > xp);
}

export function isCorrect(question: Question, selected: string | string[]): boolean {
  if (Array.isArray(question.answer)) {
    return Array.isArray(selected) && question.answer.join('|') === selected.join('|');
  }

  return question.answer === selected;
}

export function missionIsUnlocked(mission: Mission, progress: PlayerProgress): boolean {
  return !mission.unlockAfter || progress.completedMissionIds.includes(mission.unlockAfter);
}

export function getMissionStats(mission: Mission, progress: PlayerProgress) {
  const ids = [...mission.clueQuestionIds, ...mission.bossQuestionIds];
  const answers = progress.answers.filter((answer) => ids.includes(answer.questionId));
  const correct = answers.filter((answer) => answer.correct).length;

  return {
    answered: answers.length,
    correct,
    total: ids.length,
    accuracy: answers.length === 0 ? 0 : Math.round((correct / answers.length) * 100)
  };
}

export function getQuestionAnswered(progress: PlayerProgress, questionId: string): boolean {
  return progress.answers.some((answer) => answer.questionId === questionId);
}

export function getNextQuestionId(questionIds: string[], progress: PlayerProgress): string | undefined {
  return questionIds.find((questionId) => !getQuestionAnswered(progress, questionId));
}
