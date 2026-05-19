import {
  avatarOptions,
  caseQuestions,
  cityDistricts,
  firstCase,
  navigationRepairMedal,
  questionById
} from '../data/firstCase';
import { CaseQuestion, Progress } from '../types';

const STORAGE_KEY = 'zooquest-mvp-first-loop-progress';

export const initialProgress: Progress = {
  hasCreatedCadet: false,
  cadet: {
    nickname: '',
    avatarId: avatarOptions[0].id
  },
  currentScreen: 'home',
  firstCaseStatus: 'available',
  currentQuestionId: firstCase.clueQuestionIds[0],
  collectedClues: [],
  viewedClueIds: [],
  answers: [],
  bossStep: 0,
  xp: 0,
  unlockedMedals: [],
  unlockedDistricts: []
};

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialProgress;
    return { ...initialProgress, ...JSON.parse(raw) };
  } catch {
    return initialProgress;
  }
}

export function persistProgress(progress: Progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function clearProgress() {
  localStorage.removeItem(STORAGE_KEY);
}

export function getRank(xp: number) {
  if (xp >= 180) return '城市见习警探';
  if (xp >= 90) return '路线训练员';
  return '警校新生';
}

export function getQuestion(id?: string) {
  return id ? questionById.get(id) : undefined;
}

export function getCurrentClueIndex(progress: Progress) {
  return Math.max(
    0,
    firstCase.clueQuestionIds.findIndex((id) => id === progress.currentQuestionId)
  );
}

export function getNextClueId(currentQuestionId?: string) {
  const index = firstCase.clueQuestionIds.findIndex((id) => id === currentQuestionId);
  return firstCase.clueQuestionIds[index + 1];
}

export function isAnswerCorrect(question: CaseQuestion, selected: string) {
  return selected === question.answer;
}

export function answerQuestion(progress: Progress, question: CaseQuestion, selected: string) {
  const correct = isAnswerCorrect(question, selected);
  const priorCorrect = progress.answers.some((answer) => answer.questionId === question.id && answer.correct);
  const answers = [
    ...progress.answers.filter((answer) => answer.questionId !== question.id),
    { questionId: question.id, selected, correct }
  ];

  const reward = correct && question.clueReward && !progress.collectedClues.includes(question.clueReward)
    ? [question.clueReward]
    : [];

  return {
    ...progress,
    answers,
    collectedClues: [...progress.collectedClues, ...reward],
    xp: correct && !priorCorrect ? progress.xp + 20 : progress.xp
  };
}

export function completeClue(progress: Progress, question: CaseQuestion, selected: string): Progress {
  const answered = answerQuestion(progress, question, selected);
  const nextClueId = getNextClueId(question.id);

  if (nextClueId) {
    return {
      ...answered,
      currentQuestionId: nextClueId,
      firstCaseStatus: 'in_progress'
    };
  }

  return {
    ...answered,
    currentQuestionId: firstCase.reasoningQuestionId,
    currentScreen: 'clue-board',
    firstCaseStatus: 'in_progress'
  };
}

export function completeReasoning(progress: Progress, question: CaseQuestion, selected: string): Progress {
  const answered = answerQuestion(progress, question, selected);
  return {
    ...answered,
    currentQuestionId: firstCase.bossQuestionIds[0],
    currentScreen: 'boss'
  };
}

export function completeBossStep(progress: Progress, question: CaseQuestion, selected: string): Progress {
  const answered = answerQuestion(progress, question, selected);
  const nextStep = Math.min(3, progress.bossStep + 1) as Progress['bossStep'];
  const nextQuestionId = firstCase.bossQuestionIds[nextStep];

  if (nextQuestionId) {
    return {
      ...answered,
      bossStep: nextStep,
      currentQuestionId: nextQuestionId
    };
  }

  return completeFirstCase({
    ...answered,
    bossStep: 3,
    currentQuestionId: undefined
  });
}

export function completeFirstCase(progress: Progress): Progress {
  return {
    ...progress,
    currentScreen: 'reward',
    firstCaseStatus: 'completed',
    xp: Math.max(progress.xp, 180),
    unlockedMedals: progress.unlockedMedals.includes(navigationRepairMedal.id)
      ? progress.unlockedMedals
      : [...progress.unlockedMedals, navigationRepairMedal.id],
    unlockedDistricts: progress.unlockedDistricts.includes(cityDistricts[0].id)
      ? progress.unlockedDistricts
      : [...progress.unlockedDistricts, cityDistricts[0].id]
  };
}

export function markClueViewed(progress: Progress, clueId: string): Progress {
  if (progress.viewedClueIds.includes(clueId)) return progress;
  return {
    ...progress,
    viewedClueIds: [...progress.viewedClueIds, clueId]
  };
}

export function getAnsweredQuestion(progress: Progress, questionId: string) {
  return progress.answers.find((answer) => answer.questionId === questionId);
}

export function getCaseCompletion(progress: Progress) {
  const total = caseQuestions.length;
  return Math.round((progress.answers.length / total) * 100);
}
