import { Mission } from '../types';

export const missions: Mission[] = [
  {
    id: 'case-park-001',
    title: '中央公园花瓣失踪案',
    district: '中央公园',
    subject: 'chinese',
    textbook: '统编语文二下',
    summary: '花坛里的花瓣突然消失，线索藏在春天词语、句子和短证词里。',
    mentor: '兔警官导师',
    cover: 'https://images.unsplash.com/photo-1520962880247-cfaf541c8724?auto=format&fit=crop&w=1200&q=80',
    accent: 'emerald',
    clueQuestionIds: ['q-park-001', 'q-park-002', 'q-park-003', 'q-park-004', 'q-park-005'],
    bossQuestionIds: ['q-park-boss-001', 'q-park-boss-002', 'q-park-boss-003'],
    rewardMedalId: 'medal-case-park'
  },
  {
    id: 'case-canal-001',
    title: '运河仓库证物分箱案',
    district: '运河仓库',
    subject: 'math',
    textbook: '北师大数学二下',
    summary: '证物箱、警车和仓库编号都被打乱，需要用除法、方向和加减法恢复秩序。',
    mentor: '牛队长导师',
    cover: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80',
    accent: 'blue',
    clueQuestionIds: ['q-canal-001', 'q-canal-002', 'q-canal-003', 'q-canal-004', 'q-canal-005'],
    bossQuestionIds: ['q-canal-boss-001', 'q-canal-boss-002', 'q-canal-boss-003'],
    rewardMedalId: 'medal-case-canal',
    unlockAfter: 'case-park-001'
  },
  {
    id: 'case-robot-001',
    title: '机器人能力档案失踪案',
    district: '国际通讯站',
    subject: 'english',
    textbook: '新启航英语二下 Unit 1',
    summary: '训练机器人的能力档案丢失了，用 Can 问答和动作词帮它重新认证。',
    mentor: '国际联络导师',
    cover: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    accent: 'amber',
    clueQuestionIds: ['q-robot-001', 'q-robot-002', 'q-robot-003', 'q-robot-004', 'q-robot-005'],
    bossQuestionIds: ['q-robot-boss-001', 'q-robot-boss-002', 'q-robot-boss-003'],
    rewardMedalId: 'medal-case-robot',
    unlockAfter: 'case-canal-001'
  }
];

export const missionById = new Map(missions.map((mission) => [mission.id, mission]));
