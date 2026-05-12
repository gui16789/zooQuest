import { openingCase, questionById } from '../data/story';
import { Progress, Question } from '../types';

export const initialProgress: Progress = {
  cadetName: '小探员',
  xp: 0,
  badges: [],
  completedCases: [],
  answers: [],
  activeQuestionIndex: 0,
  bossQuestionIndex: 0
};

export function getRank(xp: number) {
  if (xp >= 260) return '传奇预备警探';
  if (xp >= 160) return '正式小警员';
  if (xp >= 80) return '初级探员';
  return '见习探员';
}

export function isCorrect(question: Question, selected: string | string[]) {
  if (Array.isArray(question.answer)) {
    return Array.isArray(selected) && question.answer.join('|') === selected.join('|');
  }
  return selected === question.answer;
}

export function answerQuestion(progress: Progress, question: Question, selected: string | string[]) {
  const correct = isCorrect(question, selected);
  const alreadyAnswered = progress.answers.some((answer) => answer.questionId === question.id);
  const answers = [
    ...progress.answers.filter((answer) => answer.questionId !== question.id),
    { questionId: question.id, selected, correct }
  ];

  return {
    ...progress,
    answers,
    xp: alreadyAnswered ? progress.xp : progress.xp + (correct ? question.xp : 5)
  };
}

export function completeOpeningCase(progress: Progress) {
  const badges = progress.badges.includes(openingCase.badge.id)
    ? progress.badges
    : [...progress.badges, openingCase.badge.id];
  const completedCases = progress.completedCases.includes(openingCase.id)
    ? progress.completedCases
    : [...progress.completedCases, openingCase.id];

  return {
    ...progress,
    badges,
    completedCases
  };
}

export function getCaseAccuracy(progress: Progress) {
  const questionIds = [...openingCase.clueQuestionIds, ...openingCase.bossQuestionIds];
  const records = progress.answers.filter((answer) => questionIds.includes(answer.questionId));
  if (records.length === 0) return 0;
  return Math.round((records.filter((answer) => answer.correct).length / records.length) * 100);
}

export function getWrongAnswers(progress: Progress) {
  return progress.answers
    .filter((answer) => !answer.correct)
    .map((answer) => ({
      answer,
      question: questionById.get(answer.questionId)
    }))
    .filter((item) => item.question);
}
