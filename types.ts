export enum Screen {
  Welcome = 'Welcome',
  Login = 'Login',
  Dashboard = 'Dashboard',
  Map = 'Map',
  Battle = 'Battle',
  CaseFile = 'CaseFile',
  Report = 'Report',
  Handbook = 'Handbook',
  Medals = 'Medals',
  Pending = 'Pending'
}

export type Subject = 'chinese' | 'math' | 'english';

export type QuestionType = 'choice' | 'sort';

export interface Question {
  id: string;
  subject: Subject;
  unit: string;
  knowledgePoint: string;
  difficulty: 'A' | 'B' | 'C';
  type: QuestionType;
  sceneText: string;
  prompt: string;
  options: string[];
  answer: string | string[];
  hint: string;
  explanation: string;
}

export interface Mission {
  id: string;
  title: string;
  district: string;
  subject: Subject;
  textbook: string;
  summary: string;
  mentor: string;
  cover: string;
  accent: string;
  clueQuestionIds: string[];
  bossQuestionIds: string[];
  rewardMedalId: string;
  unlockAfter?: string;
}

export interface Medal {
  id: string;
  name: string;
  description: string;
  subject: Subject | 'habit' | 'legend';
  icon: string;
}

export interface Rank {
  name: string;
  minXp: number;
}

export interface AnswerRecord {
  questionId: string;
  missionId: string;
  subject: Subject;
  correct: boolean;
  selected: string | string[];
  answeredAt: string;
}

export interface PlayerProgress {
  officerName: string;
  avatar: string;
  xp: number;
  currentMissionId: string;
  completedMissionIds: string[];
  medalIds: string[];
  answers: AnswerRecord[];
}

export interface MissionStats {
  answered: number;
  correct: number;
  total: number;
  accuracy: number;
}
