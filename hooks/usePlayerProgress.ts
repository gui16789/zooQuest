import { useEffect, useMemo, useState } from 'react';
import { missions } from '../data/missions';
import { PlayerProgress, Question } from '../types';
import { isCorrect } from '../domain/scoring';

const STORAGE_KEY = 'zooquest-player-progress-v1';

const defaultProgress: PlayerProgress = {
  officerName: '小小探员',
  avatar: 'local_police',
  xp: 0,
  currentMissionId: missions[0].id,
  completedMissionIds: [],
  medalIds: [],
  answers: []
};

function readProgress(): PlayerProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaultProgress, ...JSON.parse(raw) } : defaultProgress;
  } catch {
    return defaultProgress;
  }
}

export function usePlayerProgress() {
  const [progress, setProgress] = useState<PlayerProgress>(() => readProgress());
  const [lastQuestionResult, setLastQuestionResult] = useState<{
    question: Question;
    selected: string | string[];
    correct: boolean;
  } | null>(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const completedCount = progress.completedMissionIds.length;

  const answerQuestion = (missionId: string, question: Question, selected: string | string[]) => {
    const correct = isCorrect(question, selected);
    setLastQuestionResult({ question, selected, correct });
    setProgress((current) => {
      const existingIndex = current.answers.findIndex((answer) => answer.questionId === question.id);
      const nextAnswer = {
        questionId: question.id,
        missionId,
        subject: question.subject,
        correct,
        selected,
        answeredAt: new Date().toISOString()
      };
      const answers = [...current.answers];
      if (existingIndex >= 0) {
        answers[existingIndex] = nextAnswer;
      } else {
        answers.push(nextAnswer);
      }

      const xpGain = correct ? (question.difficulty === 'C' ? 18 : 12) : 4;
      return {
        ...current,
        answers,
        xp: current.xp + xpGain,
        currentMissionId: missionId
      };
    });

    return correct;
  };

  const completeMission = (missionId: string, medalId: string) => {
    setProgress((current) => {
      const completedMissionIds = current.completedMissionIds.includes(missionId)
        ? current.completedMissionIds
        : [...current.completedMissionIds, missionId];
      const baseMedals = current.medalIds.includes(medalId) ? current.medalIds : [...current.medalIds, medalId];
      const medalIds =
        completedMissionIds.length >= 3 && !baseMedals.includes('medal-legend-first-three')
          ? [...baseMedals, 'medal-legend-first-three']
          : baseMedals;

      return {
        ...current,
        completedMissionIds,
        medalIds,
        xp: current.completedMissionIds.includes(missionId) ? current.xp : current.xp + 50
      };
    });
  };

  const resetProgress = () => {
    setLastQuestionResult(null);
    setProgress(defaultProgress);
  };

  return useMemo(
    () => ({
      progress,
      completedCount,
      lastQuestionResult,
      answerQuestion,
      completeMission,
      resetProgress,
      setCurrentMissionId: (missionId: string) =>
        setProgress((current) => ({
          ...current,
          currentMissionId: missionId
        }))
    }),
    [progress, completedCount, lastQuestionResult]
  );
}
