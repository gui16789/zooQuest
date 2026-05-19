export type Screen =
  | 'home'
  | 'enrollment'
  | 'case-briefing'
  | 'clue-task'
  | 'clue-board'
  | 'reasoning'
  | 'boss'
  | 'reward'
  | 'city-map';

export type Subject = 'math';

export type Difficulty = 'A' | 'B';

export type QuestionPhase = 'clue' | 'reasoning' | 'boss';

export type QuestionInteraction = 'direction-button' | 'map-node-click' | 'choice';

export type NodeStatus = 'locked' | 'active' | 'complete';

export interface AvatarOption {
  id: string;
  name: string;
  animal: string;
  description: string;
  color: string;
}

export interface TrainingNode {
  id: string;
  name: string;
  x: number;
  y: number;
}

export interface TrainingConnection {
  from: string;
  to: string;
  direction: 'east' | 'south' | 'north' | 'west';
}

export interface CaseQuestion {
  id: string;
  phase: QuestionPhase;
  order: number;
  subject: Subject;
  textbook: '北师大数学二年级下册';
  unit: '方向与位置';
  knowledgePoint: '东南西北' | '路线移动' | '方位判断' | '路线纠错' | '原因判断';
  difficulty: Difficulty;
  interaction: QuestionInteraction;
  title: string;
  sceneText: string;
  prompt: string;
  options?: string[];
  answer: string;
  hint: string;
  explanation: string;
  clueReward?: string;
  startNodeId?: string;
}

export interface FirstCase {
  id: string;
  title: string;
  subtitle: string;
  mentorName: string;
  mentorTitle: string;
  goal: string;
  rewardBadgeId: string;
  clueQuestionIds: string[];
  reasoningQuestionId: string;
  bossQuestionIds: string[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
}

export interface District {
  id: string;
  name: string;
  status: 'open' | 'locked';
  description: string;
}

export interface AnswerRecord {
  questionId: string;
  selected: string;
  correct: boolean;
}

export interface CadetProfile {
  nickname: string;
  avatarId: string;
}

export interface Progress {
  hasCreatedCadet: boolean;
  cadet: CadetProfile;
  currentScreen: Screen;
  firstCaseStatus: 'available' | 'in_progress' | 'completed';
  currentQuestionId?: string;
  collectedClues: string[];
  viewedClueIds: string[];
  answers: AnswerRecord[];
  bossStep: 0 | 1 | 2 | 3;
  xp: number;
  unlockedMedals: string[];
  unlockedDistricts: string[];
}
