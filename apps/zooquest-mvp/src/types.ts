export type Screen = 'home' | 'enroll' | 'briefing' | 'map' | 'case' | 'boss' | 'report';

export type Subject = 'chinese' | 'math' | 'english';

export type QuestionType = 'choice' | 'sequence';

export interface Mentor {
  id: string;
  name: string;
  title: string;
  subject: Subject;
  color: string;
  portrait: string;
  motto: string;
}

export interface Question {
  id: string;
  subject: Subject;
  type: QuestionType;
  title: string;
  story: string;
  prompt: string;
  options: string[];
  answer: string | string[];
  hint: string;
  explanation: string;
  xp: number;
}

export interface Chapter {
  id: string;
  title: string;
  area: string;
  status: 'open' | 'locked';
  summary: string;
  requiredBadge?: string;
}

export interface CaseFile {
  id: string;
  chapterId: string;
  title: string;
  subtitle: string;
  mystery: string;
  mapLabel: string;
  clueQuestionIds: string[];
  bossQuestionIds: string[];
  badge: {
    id: string;
    name: string;
    description: string;
  };
}

export interface AnswerRecord {
  questionId: string;
  selected: string | string[];
  correct: boolean;
}

export interface Progress {
  cadetName: string;
  xp: number;
  badges: string[];
  completedCases: string[];
  answers: AnswerRecord[];
  activeQuestionIndex: number;
  bossQuestionIndex: number;
}
