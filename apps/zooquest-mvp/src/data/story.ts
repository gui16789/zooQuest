import { CaseFile, Chapter, Mentor, Question } from '../types';

export const mentors: Mentor[] = [
  {
    id: 'rabbit-captain',
    name: '白耳队长',
    title: '语文侦查导师',
    subject: 'chinese',
    color: '#2f9f7a',
    portrait: '兔',
    motto: '每个字都可能是一枚脚印。'
  },
  {
    id: 'buffalo-chief',
    name: '岩角教官',
    title: '数学行动导师',
    subject: 'math',
    color: '#2f6fd6',
    portrait: '牛',
    motto: '算清数量，路线就会自己出现。'
  },
  {
    id: 'lark-officer',
    name: '云雀通讯员',
    title: '英语通讯导师',
    subject: 'english',
    color: '#d98b22',
    portrait: '雀',
    motto: '听懂暗号，城市就能重新连线。'
  }
];

export const chapters: Chapter[] = [
  {
    id: 'chapter-lighthouse',
    title: '第一章：晨雾里的知识灯塔',
    area: '中央广场',
    status: 'open',
    summary: '城市中心的知识灯塔忽明忽暗，第一批线索藏在公告、仓库清单和英语通讯里。'
  },
  {
    id: 'chapter-market',
    title: '第二章：雨林市场的错位账本',
    area: '雨林市场',
    status: 'locked',
    summary: '市场收据被调包，需要用加减法和量词查清真相。',
    requiredBadge: 'lighthouse-badge'
  },
  {
    id: 'chapter-seasons',
    title: '第三章：四季气象站密码',
    area: '气象站',
    status: 'locked',
    summary: '季节按钮被打乱，英语季节词会成为新的通讯密码。',
    requiredBadge: 'market-badge'
  },
  {
    id: 'chapter-museum',
    title: '第四章：自然历史馆的衣物证物',
    area: '自然历史馆',
    status: 'locked',
    summary: '古老展厅里出现神秘服装标签，this 和 that 将决定证物归属。',
    requiredBadge: 'season-badge'
  }
];

export const openingCase: CaseFile = {
  id: 'case-lighthouse-001',
  chapterId: 'chapter-lighthouse',
  title: '知识灯塔失光案',
  subtitle: '新生探员第一次联合行动',
  mystery: '今天清晨，动物城市中央广场的知识灯塔突然变暗。灯塔守卫只留下三条线索：一张写错字的公告、一箱没有分完的证物、一段英文能力暗号。',
  mapLabel: '中央广场灯塔',
  clueQuestionIds: ['clue-chinese-park', 'clue-math-box', 'clue-english-robot'],
  bossQuestionIds: ['boss-reason-why', 'boss-math-car', 'boss-english-can'],
  badge: {
    id: 'lighthouse-badge',
    name: '灯塔初亮勋章',
    description: '完成三科联合侦查，让中央广场的知识灯塔重新亮起。'
  }
};

export const questions: Question[] = [
  {
    id: 'clue-chinese-park',
    subject: 'chinese',
    type: 'choice',
    title: '线索一：公告栏上的错字',
    story: '白耳队长发现公告写着：“请保护公圆里的花。”孩子们围在公告前，觉得有一个字怪怪的。',
    prompt: '公告里哪个字写错了？',
    options: ['圆', '花', '请'],
    answer: '圆',
    hint: '表示游玩的地方，应写“园”。',
    explanation: '“公园”表示公共游园，不能写成“公圆”。',
    xp: 20
  },
  {
    id: 'clue-math-box',
    subject: 'math',
    type: 'choice',
    title: '线索二：证物箱没有装完',
    story: '岩角教官打开仓库，里面有 18 件灯塔零件。每个证物箱只能装 4 件。',
    prompt: '可以装满几箱，还剩几件？',
    options: ['4箱，还剩2件', '5箱，还剩0件', '3箱，还剩6件'],
    answer: '4箱，还剩2件',
    hint: '4 × 4 = 16，18 - 16 = 2。',
    explanation: '18 ÷ 4 = 4 余 2。余下的 2 件可能就是关键零件。',
    xp: 20
  },
  {
    id: 'clue-english-robot',
    subject: 'english',
    type: 'choice',
    title: '线索三：机器人能力暗号',
    story: '云雀通讯员收到一段英文暗号。训练机器人拿着麦克风，屏幕上闪着 “Can you sing?”',
    prompt: '如果机器人会唱歌，应该回答哪一句？',
    options: ['Yes, I can.', "No, I can't.", "It's hot."],
    answer: 'Yes, I can.',
    hint: '会做某事，用 can。',
    explanation: '肯定回答是 “Yes, I can.”，这会打开通讯频道。',
    xp: 20
  },
  {
    id: 'boss-reason-why',
    subject: 'chinese',
    type: 'choice',
    title: 'Boss 关一：说清推理理由',
    story: '幕后干扰源制造了迷雾，只有讲清理由，灯塔才会亮起第一格。',
    prompt: '哪句话最像一条完整推理？',
    options: ['因为零件少了2件，所以要检查剩下的零件。', '零件很亮。', '灯塔在广场。'],
    answer: '因为零件少了2件，所以要检查剩下的零件。',
    hint: '完整推理要有原因和行动。',
    explanation: '“因为……所以……”能把线索和下一步行动连起来。',
    xp: 30
  },
  {
    id: 'boss-math-car',
    subject: 'math',
    type: 'choice',
    title: 'Boss 关二：安排行动车',
    story: '19 名小探员要赶到灯塔，每辆行动车坐 4 人。',
    prompt: '至少需要几辆车？',
    options: ['5辆', '4辆', '6辆'],
    answer: '5辆',
    hint: '4辆只能坐16人，还剩3人也要坐车。',
    explanation: '19 ÷ 4 = 4 余 3，所以至少需要 5 辆车。',
    xp: 30
  },
  {
    id: 'boss-english-can',
    subject: 'english',
    type: 'choice',
    title: 'Boss 关三：修复英文频道',
    story: '机器人把最后一个暗号传来：“I can draw.”',
    prompt: 'draw 的意思是什么？',
    options: ['画画', '游泳', '跳舞'],
    answer: '画画',
    hint: 'draw 常和纸、笔一起出现。',
    explanation: 'draw 表示“画画”。英文频道恢复后，灯塔重新点亮。',
    xp: 30
  }
];

export const questionById = new Map(questions.map((question) => [question.id, question]));
