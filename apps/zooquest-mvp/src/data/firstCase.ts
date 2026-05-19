import {
  AvatarOption,
  Badge,
  CaseQuestion,
  District,
  FirstCase,
  TrainingConnection,
  TrainingNode
} from '../types';

export const avatarOptions: AvatarOption[] = [
  {
    id: 'rabbit-cadet',
    name: '兔子小警探',
    animal: '兔',
    description: '反应快，喜欢第一个发现路线灯。',
    color: '#f7b7c8'
  },
  {
    id: 'fox-cadet',
    name: '狐狸小警探',
    animal: '狐',
    description: '爱观察，最擅长找出错误方向。',
    color: '#f49b45'
  },
  {
    id: 'otter-cadet',
    name: '水獭小警探',
    animal: '獭',
    description: '好奇心强，喜欢研究地图节点。',
    color: '#8fc7bd'
  }
];

export const randomNicknames = ['路线小警探', '星星探员', '闪电新生', '徽章学员', '方向侦查员'];

export const firstCase: FirstCase = {
  id: 'case-academy-navigation-001',
  title: '导航机器人迷路案',
  subtitle: '警官学院入学第一案',
  mentorName: '牛局长',
  mentorTitle: '数学行动导师',
  goal: '用东、南、西、北帮助导航机器人找回正确路线。',
  rewardBadgeId: 'navigation-repair-medal',
  clueQuestionIds: [
    'q-academy-nav-001',
    'q-academy-nav-002',
    'q-academy-nav-003',
    'q-academy-nav-004'
  ],
  reasoningQuestionId: 'q-academy-nav-005',
  bossQuestionIds: ['q-academy-nav-boss-001', 'q-academy-nav-boss-002', 'q-academy-nav-boss-003']
};

export const navigationRepairMedal: Badge = {
  id: 'navigation-repair-medal',
  name: '导航修复勋章',
  description: '帮助导航机器人恢复正确路线，完成警官学院第一项方向训练。'
};

export const trainingNodes: TrainingNode[] = [
  { id: 'check-in', name: '报到台', x: 16, y: 48 },
  { id: 'equipment', name: '装备室', x: 42, y: 48 },
  { id: 'sign-tower', name: '路标塔', x: 42, y: 20 },
  { id: 'command-screen', name: '指挥屏', x: 68, y: 48 },
  { id: 'training-gate', name: '训练门', x: 42, y: 76 },
  { id: 'robot-station', name: '机器人站', x: 68, y: 76 }
];

export const trainingConnections: TrainingConnection[] = [
  { from: 'check-in', to: 'equipment', direction: 'east' },
  { from: 'equipment', to: 'sign-tower', direction: 'north' },
  { from: 'equipment', to: 'command-screen', direction: 'east' },
  { from: 'equipment', to: 'training-gate', direction: 'south' },
  { from: 'training-gate', to: 'robot-station', direction: 'east' }
];

export const clueDescriptions: Record<string, string> = {
  '点亮第 1 个方向灯': '你确认了东边方向灯，训练场开始校准。',
  '路线芯片 1': '报到台到装备室的路线已经恢复。',
  '路线芯片 2': '路标塔和装备室的位置关系已经确认。',
  故障原因线索: '机器人把去指挥屏的方向说反了。',
  方向混乱: '机器人多次说错方向，Boss 弱点就是方向程序混乱。'
};

export const caseQuestions: CaseQuestion[] = [
  {
    id: 'q-academy-nav-001',
    phase: 'clue',
    order: 1,
    subject: 'math',
    textbook: '北师大数学二年级下册',
    unit: '方向与位置',
    knowledgePoint: '东南西北',
    difficulty: 'A',
    interaction: 'direction-button',
    title: '线索一：校准东方灯',
    sceneText: '牛局长打开训练场方向灯，先考考你能不能认出东边。',
    prompt: '训练场的“东”灯亮了。请点一下东边的方向灯。',
    options: ['东', '南', '西', '北'],
    answer: '东',
    hint: '看看指南针，东在右边。',
    explanation: '指南针上东边在右侧，所以要点“东”。',
    clueReward: '点亮第 1 个方向灯'
  },
  {
    id: 'q-academy-nav-002',
    phase: 'clue',
    order: 2,
    subject: 'math',
    textbook: '北师大数学二年级下册',
    unit: '方向与位置',
    knowledgePoint: '路线移动',
    difficulty: 'A',
    interaction: 'map-node-click',
    title: '线索二：找到装备室',
    sceneText: '导航机器人想去装备室，但它不确定该往哪边走。',
    prompt: '从报到台出发，向东走，找到装备室。',
    answer: 'equipment',
    hint: '先找到报到台，再看它东边连着哪里。',
    explanation: '装备室在报到台的东边，所以从报到台向东能到装备室。',
    clueReward: '路线芯片 1',
    startNodeId: 'check-in'
  },
  {
    id: 'q-academy-nav-003',
    phase: 'clue',
    order: 3,
    subject: 'math',
    textbook: '北师大数学二年级下册',
    unit: '方向与位置',
    knowledgePoint: '方位判断',
    difficulty: 'A',
    interaction: 'choice',
    title: '线索三：路标塔的位置',
    sceneText: '牛局长指着地图，让你判断路标塔和装备室的位置。',
    prompt: '看地图，路标塔在装备室的哪一边？',
    options: ['东', '南', '西', '北'],
    answer: '北',
    hint: '先找到装备室，再看路标塔在它的上、下、左、右哪边。',
    explanation: '路标塔在装备室上方，上方表示北边。',
    clueReward: '路线芯片 2'
  },
  {
    id: 'q-academy-nav-004',
    phase: 'clue',
    order: 4,
    subject: 'math',
    textbook: '北师大数学二年级下册',
    unit: '方向与位置',
    knowledgePoint: '路线纠错',
    difficulty: 'B',
    interaction: 'choice',
    title: '线索四：找出错误路线',
    sceneText: '导航机器人开始播报路线，可牛局长发现它又说错了一个方向。',
    prompt: '机器人说：“从装备室向西到指挥屏。”这句话哪里错了？',
    options: ['指挥屏在装备室东边，不是西边。', '指挥屏在装备室南边，不是西边。', '指挥屏在装备室北边，不是西边。'],
    answer: '指挥屏在装备室东边，不是西边。',
    hint: '找到装备室，再看指挥屏在它的左边还是右边。',
    explanation: '指挥屏在装备室右边，右边是东，所以应该向东走。',
    clueReward: '故障原因线索'
  },
  {
    id: 'q-academy-nav-005',
    phase: 'reasoning',
    order: 5,
    subject: 'math',
    textbook: '北师大数学二年级下册',
    unit: '方向与位置',
    knowledgePoint: '原因判断',
    difficulty: 'A',
    interaction: 'choice',
    title: '轻量推理：机器人为什么迷路',
    sceneText: '你收集了方向灯、路线芯片和错误播报记录，可以判断原因了。',
    prompt: '机器人总把方向说错。它为什么会迷路？',
    options: ['方向程序混乱了。', '它没有带水杯。', '训练场太安静了。'],
    answer: '方向程序混乱了。',
    hint: '想一想，刚才出错的是方向，还是别的东西？',
    explanation: '机器人多次说错方向，说明它的方向程序混乱了。',
    clueReward: '方向混乱'
  },
  {
    id: 'q-academy-nav-boss-001',
    phase: 'boss',
    order: 6,
    subject: 'math',
    textbook: '北师大数学二年级下册',
    unit: '方向与位置',
    knowledgePoint: '路线纠错',
    difficulty: 'A',
    interaction: 'choice',
    title: 'Boss 题一：纠错方向',
    sceneText: '混乱导航机器人开始绕圈，它把去路标塔的方向说反了。',
    prompt: '机器人说：“从装备室向南到路标塔。”正确方向是什么？',
    options: ['东', '南', '西', '北'],
    answer: '北',
    hint: '路标塔在装备室上方，上方是什么方向？',
    explanation: '路标塔在装备室北边，所以应该向北走。'
  },
  {
    id: 'q-academy-nav-boss-002',
    phase: 'boss',
    order: 7,
    subject: 'math',
    textbook: '北师大数学二年级下册',
    unit: '方向与位置',
    knowledgePoint: '路线移动',
    difficulty: 'A',
    interaction: 'map-node-click',
    title: 'Boss 题二：点击终点',
    sceneText: '机器人需要到训练门重启路线灯，你来帮它选择终点。',
    prompt: '从装备室出发，向南走。请点击正确的终点。',
    answer: 'training-gate',
    hint: '找到装备室，再看它下面连着哪个训练点。',
    explanation: '训练门在装备室南边，所以向南走到训练门。',
    startNodeId: 'equipment'
  },
  {
    id: 'q-academy-nav-boss-003',
    phase: 'boss',
    order: 8,
    subject: 'math',
    textbook: '北师大数学二年级下册',
    unit: '方向与位置',
    knowledgePoint: '路线纠错',
    difficulty: 'B',
    interaction: 'choice',
    title: 'Boss 题三：改正 2 步路线',
    sceneText: '最后一步，机器人要从装备室到机器人站，但路线里还有一个错误。',
    prompt: '正确路线是哪一条？',
    options: [
      '从装备室向南到训练门，再向东到机器人站。',
      '从装备室向北到训练门，再向东到机器人站。',
      '从装备室向南到训练门，再向西到机器人站。'
    ],
    answer: '从装备室向南到训练门，再向东到机器人站。',
    hint: '先找到训练门，再看机器人站在训练门的哪边。',
    explanation: '训练门在装备室南边，机器人站在训练门东边，所以路线是先向南，再向东。'
  }
];

export const questionById = new Map(caseQuestions.map((question) => [question.id, question]));

export const cityDistricts: District[] = [
  {
    id: 'central-plaza',
    name: '中央广场',
    status: 'open',
    description: '城市地图第一站，新的案件会从这里开始。'
  },
  {
    id: 'rainforest-market',
    name: '雨林市场',
    status: 'locked',
    description: '账本、物品和调查记录等你以后解锁。'
  },
  {
    id: 'international-station',
    name: '国际通讯站',
    status: 'locked',
    description: '英语通讯任务会在后续开放。'
  }
];
