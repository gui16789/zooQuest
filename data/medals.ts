import { Medal } from '../types';

export const medals: Medal[] = [
  {
    id: 'medal-case-park',
    name: '春日侦查勋章',
    description: '破获中央公园花瓣失踪案。',
    subject: 'chinese',
    icon: 'local_florist'
  },
  {
    id: 'medal-case-canal',
    name: '分装专家勋章',
    description: '完成运河仓库证物分箱任务。',
    subject: 'math',
    icon: 'inventory_2'
  },
  {
    id: 'medal-case-robot',
    name: 'Ability Badge',
    description: '完成机器人能力档案认证。',
    subject: 'english',
    icon: 'smart_toy'
  },
  {
    id: 'medal-legend-first-three',
    name: '三科初阶探员',
    description: '完成语文、数学、英语三个入门案件。',
    subject: 'legend',
    icon: 'workspace_premium'
  }
];
