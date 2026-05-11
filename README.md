# ZooQuest

ZooQuest 是一个面向中国小学二年级下册学生的场景化闯关学习游戏原型。孩子以“警官学院学员”的身份浏览学院官网、加入学院、进入城市地图，通过语文、数学和推理表达课程破解案件，获得 XP、等级和勋章。

当前项目重点是验证“寓教于乐”的完整 MVP 闭环：官网首页、学员中心、城市地图、案件线索、Boss 战、结案报告、学习手册和勋章墙。

## 重要合规说明

现有原型包含“疯狂动物城 / Zootopia”方向的内部概念表达。若项目对外发布、商业化、投放应用商店或用于公开招生，必须取得相关 IP 授权，或替换为原创“动物城市警探学院”设定。详见 [PRD](./docs/01-prd.md)。

## 技术栈

- React 19
- TypeScript
- Vite 6

## 本地开发

```bash
npm install
npm run dev
```

默认开发服务端口为 `3000`。

## 常用命令

```bash
npm run typecheck
npm run build
npm run preview
```

## 项目文档

- [项目规划文档索引](./docs/README.md)
- [PRD](./docs/01-prd.md)
- [课程知识点映射](./docs/02-curriculum-map.md)
- [项目计划](./docs/03-project-plan.md)
- [开发与内容规范](./docs/04-development-standards.md)

## 协作规范

- 新功能先确认是否属于 MVP 范围。
- 新增案件必须绑定教材单元、知识点、难度、答案、提示和解释。
- 页面组件不应硬编码题目、案件、等级和勋章数据。
- 提交前至少运行 `npm run typecheck` 和 `npm run build`。
- 不提交 `.env.local`、`node_modules`、`dist` 或任何未授权正式素材。

