import { CSSProperties, useMemo, useState } from 'react';
import { chapters, mentors, openingCase, questionById } from './data/story';
import {
  answerQuestion,
  completeOpeningCase,
  getCaseAccuracy,
  getRank,
  getWrongAnswers,
  initialProgress
} from './domain/progress';
import { Progress, Question, Screen } from './types';

const ASSET = '/assets/story/';

const subjectName = {
  chinese: '语文侦查',
  math: '数学行动',
  english: '英语通讯'
} as const;

const subjectIcon = {
  chinese: 'menu_book',
  math: 'calculate',
  english: 'forum'
} as const;

const markerPositions = [
  { left: '31%', top: '63%' },
  { left: '29%', top: '28%' },
  { left: '74%', top: '27%' },
  { left: '66%', top: '70%' }
];

function getStoredProgress(): Progress {
  try {
    const raw = localStorage.getItem('zooquest-mvp-progress');
    return raw ? { ...initialProgress, ...JSON.parse(raw) } : initialProgress;
  } catch {
    return initialProgress;
  }
}

export function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [progress, setProgress] = useState<Progress>(() => getStoredProgress());
  const [lastResult, setLastResult] = useState<{ question: Question; correct: boolean } | null>(null);

  const clueQuestion = useMemo(() => {
    const id = openingCase.clueQuestionIds[progress.activeQuestionIndex];
    return id ? questionById.get(id) : undefined;
  }, [progress.activeQuestionIndex]);

  const bossQuestion = useMemo(() => {
    const id = openingCase.bossQuestionIds[progress.bossQuestionIndex];
    return id ? questionById.get(id) : undefined;
  }, [progress.bossQuestionIndex]);

  const saveProgress = (next: Progress) => {
    localStorage.setItem('zooquest-mvp-progress', JSON.stringify(next));
    setProgress(next);
  };

  const goScreen = (next: Screen) => {
    setLastResult(null);
    setScreen(next);
  };

  const enroll = (name: string) => {
    const next = { ...initialProgress, cadetName: name.trim() || '小探员' };
    saveProgress(next);
    goScreen('briefing');
  };

  const submitClue = (question: Question, selected: string | string[]) => {
    const next = answerQuestion(progress, question, selected);
    const correct = next.answers.find((answer) => answer.questionId === question.id)?.correct ?? false;
    setLastResult({ question, correct });
    saveProgress({
      ...next,
      activeQuestionIndex: Math.min(progress.activeQuestionIndex + 1, openingCase.clueQuestionIds.length)
    });
    if (progress.activeQuestionIndex + 1 >= openingCase.clueQuestionIds.length) {
      setScreen('boss');
    }
  };

  const submitBoss = (question: Question, selected: string | string[]) => {
    const answered = answerQuestion(progress, question, selected);
    const correct = answered.answers.find((answer) => answer.questionId === question.id)?.correct ?? false;
    setLastResult({ question, correct });

    if (progress.bossQuestionIndex + 1 >= openingCase.bossQuestionIds.length) {
      saveProgress(completeOpeningCase(answered));
      setScreen('report');
      return;
    }

    saveProgress({
      ...answered,
      bossQuestionIndex: progress.bossQuestionIndex + 1
    });
  };

  const restart = () => {
    localStorage.removeItem('zooquest-mvp-progress');
    setProgress(initialProgress);
    setLastResult(null);
    setScreen('home');
  };

  return (
    <div className={`app-shell screen-${screen}`}>
      {screen !== 'home' && (
        <StoryTopBar
          progress={progress}
          screen={screen}
          onMap={() => goScreen('map')}
          onRestart={restart}
        />
      )}

      {screen === 'home' && <HomeScreen onEnroll={() => goScreen('enroll')} />}
      {screen === 'enroll' && <EnrollScreen onSubmit={enroll} />}
      {screen === 'briefing' && <BriefingScreen progress={progress} onContinue={() => goScreen('map')} />}
      {screen === 'map' && <MapScreen progress={progress} onOpenCase={() => goScreen('case')} />}
      {screen === 'case' && (
        <CaseScreen
          progress={progress}
          question={clueQuestion}
          lastResult={lastResult}
          onAnswer={submitClue}
          onBoss={() => goScreen('boss')}
        />
      )}
      {screen === 'boss' && (
        <BossScreen
          progress={progress}
          question={bossQuestion}
          lastResult={lastResult}
          onAnswer={submitBoss}
          onReport={() => goScreen('report')}
        />
      )}
      {screen === 'report' && <ReportScreen progress={progress} onMap={() => goScreen('map')} onRestart={restart} />}
    </div>
  );
}

function StoryTopBar({
  progress,
  screen,
  onMap,
  onRestart
}: {
  progress: Progress;
  screen: Screen;
  onMap: () => void;
  onRestart: () => void;
}) {
  return (
    <header className="story-topbar">
      <div className="topbar-brand">
        <AcademyCrest compact />
        <div>
          <strong>ZooQuest 动物城市警探学院</strong>
          <span>{progress.cadetName} · {getRank(progress.xp)} · {progress.xp} XP</span>
        </div>
      </div>
      <nav aria-label="主线导航">
        <button onClick={onMap} disabled={screen === 'map'}>
          <span className="material-symbols-outlined">map</span>
          地图
        </button>
        <button onClick={onRestart}>
          <span className="material-symbols-outlined">restart_alt</span>
          重开
        </button>
      </nav>
    </header>
  );
}

function HomeScreen({ onEnroll }: { onEnroll: () => void }) {
  return (
    <main className="official-home">
      <section className="academy-site">
        <header className="site-header">
          <div className="brand-lockup">
            <AcademyCrest />
            <div>
              <h1>ZooQuest 动物城市警探学院</h1>
              <p>故事驱动 · 探案解谜 · 知识学习 · 成长徽章</p>
            </div>
          </div>
          <div className="mentor-roster" aria-label="三位导师">
            {mentors.map((mentor) => (
              <MentorMedallion key={mentor.id} mentor={mentor} />
            ))}
          </div>
        </header>

        <nav className="website-tabs" aria-label="学院官网栏目">
          <a href="#academy">首页</a>
          <a href="#courses">学院介绍</a>
          <a href="#missions">课程与探索</a>
          <a href="#cadets">学员风采</a>
          <a href="#family">家长中心</a>
        </nav>

        <section className="hero-website real-ui-hero" id="academy">
          <div className="hero-copy">
            <p className="eyebrow">新生招募 · 第一季</p>
            <h2>欢迎来到动物城市警探学院！</h2>
            <p>在这里学习知识、搜集线索，破解悬案，成为守护城市智慧的小警探。</p>
            <button className="gold-action" onClick={onEnroll}>
              加入警探学院
              <span className="material-symbols-outlined">pets</span>
            </button>
          </div>
          <figure className="hero-art">
            <img src={`${ASSET}academy-campus.png`} alt="动物城市警探学院校园" />
          </figure>
        </section>

        <section className="quick-entry" id="missions" aria-label="快速入口">
          <FeatureButton icon="menu_book" title="学习课程" copy="三科知识变线索" />
          <FeatureButton icon="search" title="探索任务" copy="公告、证物、暗号" />
          <FeatureButton icon="map" title="城市地图" copy="章节区域逐步开放" />
          <FeatureButton icon="workspace_premium" title="勋章成就" copy="记录成长和复盘" />
        </section>

        <section className="course-and-mentors" id="courses">
          <div className="mentor-group-art">
            <img src={`${ASSET}mentor-group.png`} alt="三位警探学院导师" />
          </div>
          <div className="course-band">
            {mentors.map((mentor) => (
              <article key={mentor.id} className="mentor-card" style={{ '--mentor-color': mentor.color } as CSSProperties}>
                <div className="mentor-portrait">{mentor.portrait}</div>
                <p>{mentor.title}</p>
                <h3>{mentor.name}</h3>
                <span>{mentor.motto}</span>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

function EnrollScreen({ onSubmit }: { onSubmit: (name: string) => void }) {
  const [name, setName] = useState('小探员');
  const [avatar, setAvatar] = useState('狐');
  const avatars = ['狐', '兔', '熊'];

  return (
    <main className="enroll-screen real-enroll-screen">
      <section className="enroll-desk real-enroll-desk">
        <div className="desk-art" aria-hidden="true">
          <img src={`${ASSET}enrollment-desk.png`} alt="" />
        </div>
        <aside className="cadet-preview">
          <div className="cadet-photo">
            <span>{avatar}</span>
          </div>
          <b>选择我的形象</b>
          <div className="avatar-list">
            {avatars.map((item) => (
              <button key={item} className={item === avatar ? 'active' : ''} onClick={() => setAvatar(item)}>{item}</button>
            ))}
          </div>
          <p>MVP 仅保存在本机浏览器，不收集真实姓名、学校或照片。</p>
        </aside>

        <form className="clipboard profile-board real-profile-board" onSubmit={(event) => {
          event.preventDefault();
          onSubmit(name);
        }}>
          <div className="clip" />
          <p className="eyebrow">学员入学档案</p>
          <h1>建立你的探员档案</h1>
          <label>
            学员姓名
            <input value={name} onChange={(event) => setName(event.target.value)} maxLength={8} />
          </label>
          <div className="field-row">
            <label>
              性别
              <select defaultValue="保密">
                <option>保密</option>
                <option>男孩</option>
                <option>女孩</option>
              </select>
            </label>
            <label>
              年级
              <select defaultValue="二年级">
                <option>二年级</option>
                <option>一年级</option>
                <option>三年级</option>
              </select>
            </label>
          </div>
          <label>
            入学宣言
            <textarea defaultValue="我想成为一名会思考的小警探。" maxLength={30} />
          </label>
          <button className="green-action" type="submit">
            成为学员
            <span className="material-symbols-outlined">pets</span>
          </button>
        </form>
      </section>
    </main>
  );
}

function BriefingScreen({ progress, onContinue }: { progress: Progress; onContinue: () => void }) {
  return (
    <main className="briefing-screen">
      <section className="case-briefing">
        <aside className="briefing-tabs" aria-label="案件资料">
          <span className="active"><i className="material-symbols-outlined">description</i>案件档案</span>
          <span><i className="material-symbols-outlined">backpack</i>线索背包</span>
          <span><i className="material-symbols-outlined">flag</i>任务目标</span>
        </aside>
        <div className="briefing-paper">
          <span className="pin pin-left" />
          <span className="pin pin-right" />
          <p className="eyebrow">晨雾警报</p>
          <h1>知识灯塔失光案</h1>
          <p>
            {progress.cadetName}，欢迎来到动物城市警探学院。今天清晨，中央广场的知识灯塔只剩一点微光。
            三位导师已经集合，你需要通过语文、数学和英语三条线索，找出干扰灯塔的幕后源头。
          </p>
          <div className="mission-box">
            <b>任务目标</b>
            <span>收集线索，找出原因，修复知识灯塔。</span>
          </div>
          <button className="gold-action" onClick={onContinue}>
            开始探案
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
        <div className="case-photo" aria-label="知识灯塔现场照片">
          <img src={`${ASSET}case-desk.png`} alt="" />
          <LighthouseScene />
        </div>
      </section>
    </main>
  );
}

function MapScreen({ progress, onOpenCase }: { progress: Progress; onOpenCase: () => void }) {
  const firstCaseDone = progress.completedCases.includes(openingCase.id);

  return (
    <main className="map-screen real-map-screen">
      <section className="storybook-map real-storybook-map">
        <div className="map-canvas real-map-canvas">
          <img src={`${ASSET}city-map.png`} alt="动物城市地图" />
          <div className="map-title">动物城市地图</div>
          {chapters.map((chapter, index) => {
            const open = chapter.status === 'open' || (chapter.requiredBadge && progress.badges.includes(chapter.requiredBadge));
            const position = markerPositions[index] ?? { left: '50%', top: '50%' };
            return (
              <button
                key={chapter.id}
                className={`map-node real-map-node ${open ? 'open' : 'locked'} ${index === 0 ? 'featured' : ''}`}
                style={position}
                onClick={index === 0 ? onOpenCase : undefined}
                disabled={index !== 0}
              >
                <span className="node-dot">{index + 1}</span>
                <b>{chapter.area}</b>
                <small>{index === 0 ? (firstCaseDone ? '复盘第一章' : '进入第一章') : '后续开放'}</small>
              </button>
            );
          })}
        </div>

        <aside className="map-progress real-map-progress">
          <CompassIcon />
          <p>探案进度</p>
          <strong>{progress.completedCases.length ? '1/4' : '0/4'}</strong>
          <span>{getRank(progress.xp)}</span>
        </aside>
      </section>
    </main>
  );
}

function CaseScreen({
  progress,
  question,
  lastResult,
  onAnswer,
  onBoss
}: {
  progress: Progress;
  question?: Question;
  lastResult: { question: Question; correct: boolean } | null;
  onAnswer: (question: Question, selected: string | string[]) => void;
  onBoss: () => void;
}) {
  return (
    <main className="case-screen real-case-screen">
      <section className="case-desk-stage">
        <img src={`${ASSET}case-desk.png`} alt="" aria-hidden="true" />
        <aside className="case-file real-case-file">
          <p className="eyebrow">{openingCase.subtitle}</p>
          <h1>{openingCase.title}</h1>
          <p>{openingCase.mystery}</p>
          <ProgressRail current={progress.activeQuestionIndex} total={openingCase.clueQuestionIds.length} label="线索收集" />
        </aside>
        <section className="question-zone real-question-zone">
          {question ? (
            <QuestionPanel key={question.id} question={question} onAnswer={(selected) => onAnswer(question, selected)} />
          ) : (
            <CompletionPanel title="三条线索已经收齐" copy="现在可以进入 Boss 关，修复知识灯塔。" action="进入 Boss 关" onAction={onBoss} />
          )}
          {lastResult && <FeedbackPanel result={lastResult} />}
        </section>
      </section>
    </main>
  );
}

function BossScreen({
  progress,
  question,
  lastResult,
  onAnswer,
  onReport
}: {
  progress: Progress;
  question?: Question;
  lastResult: { question: Question; correct: boolean } | null;
  onAnswer: (question: Question, selected: string | string[]) => void;
  onReport: () => void;
}) {
  const hp = Math.max(0, 100 - Math.round((progress.bossQuestionIndex / openingCase.bossQuestionIds.length) * 100));

  return (
    <main className="boss-screen">
      <section className="boss-status">
        <div className="boss-mentor">牛</div>
        <p className="eyebrow">Boss 关</p>
        <h1>迷雾干扰源出现了。</h1>
        <p>综合运用三门课程，把灯塔能量充满。</p>
        <div className="boss-checks">
          <span className="done">找出真正的原因</span>
          <span className="done">完成解决方案</span>
          <span>{progress.bossQuestionIndex}/{openingCase.bossQuestionIds.length}</span>
        </div>
        <div className="hp-bar"><span style={{ width: `${hp}%` }} /></div>
        <b>干扰源能量 {hp}%</b>
      </section>
      <section className="question-zone">
        {question ? (
          <QuestionPanel key={question.id} question={question} onAnswer={(selected) => onAnswer(question, selected)} />
        ) : (
          <CompletionPanel title="知识灯塔重新亮起" copy="第一章结案，查看报告和勋章。" action="查看结案报告" onAction={onReport} />
        )}
        {lastResult && <FeedbackPanel result={lastResult} />}
      </section>
    </main>
  );
}

function ReportScreen({ progress, onMap, onRestart }: { progress: Progress; onMap: () => void; onRestart: () => void }) {
  const wrongAnswers = getWrongAnswers(progress);
  const accuracy = getCaseAccuracy(progress);

  return (
    <main className="report-screen">
      <section className="report-board">
        <div className="report-notebook">
          <p className="eyebrow">结案成功</p>
          <h1>结案报告</h1>
          <dl>
            <div>
              <dt>案件名称</dt>
              <dd>{openingCase.title}</dd>
            </div>
            <div>
              <dt>破案时间</dt>
              <dd>2026-05-13</dd>
            </div>
            <div>
              <dt>你的评价</dt>
              <dd className="stars">★★★★★</dd>
            </div>
          </dl>
          <div className="report-metrics">
            <div><span>{progress.xp}</span><b>XP</b></div>
            <div><span>{accuracy}%</span><b>准确率</b></div>
            <div><span>{progress.badges.length}</span><b>勋章</b></div>
          </div>
        </div>

        <div className="badge-award">
          <img src={`${ASSET}lighthouse-badge.png`} alt="" />
          <strong>{openingCase.badge.name}</strong>
          <p>{openingCase.badge.description}</p>
        </div>

        <div className="report-actions">
          <button className="secondary-action" onClick={onRestart}>
            <span className="material-symbols-outlined">article</span>
            重新试玩
          </button>
          <button className="green-action" onClick={onMap}>
            继续探案
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </section>

      <section className="review-card">
        <h2>复盘手册</h2>
        {wrongAnswers.length === 0 ? (
          <p className="success-note">本次没有错题，可以继续挑战下一章。</p>
        ) : (
          wrongAnswers.map(({ answer, question }) => (
            <article key={answer.questionId}>
              <b>{question!.title}</b>
              <p>{question!.explanation}</p>
            </article>
          ))
        )}
      </section>
    </main>
  );
}

function ProgressRail({ current, total, label }: { current: number; total: number; label: string }) {
  return (
    <div className="progress-rail">
      <div>
        <span>{label}</span>
        <b>{Math.min(current, total)}/{total}</b>
      </div>
      <div className="rail-track">
        <span style={{ width: `${Math.round((Math.min(current, total) / total) * 100)}%` }} />
      </div>
    </div>
  );
}

function QuestionPanel({ question, onAnswer }: { question: Question; onAnswer: (selected: string | string[]) => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const mentor = mentors.find((item) => item.subject === question.subject)!;

  return (
    <article className="question-panel">
      <header className="question-header" style={{ '--mentor-color': mentor.color } as CSSProperties}>
        <div className="mini-portrait">{mentor.portrait}</div>
        <div>
          <span>{subjectName[question.subject]}</span>
          <h2>{question.title}</h2>
        </div>
      </header>
      <div className="clue-count">
        <span className="material-symbols-outlined">{subjectIcon[question.subject]}</span>
        线索笔记
      </div>
      <p className="story-text">{question.story}</p>
      <h3>{question.prompt}</h3>
      <div className="option-list">
        {question.options.map((option, index) => (
          <button
            key={option}
            className={selected === option ? 'selected' : ''}
            onClick={() => setSelected(option)}
          >
            <span><b>{String.fromCharCode(65 + index)}.</b> {option}</span>
            <i className="material-symbols-outlined">check_circle</i>
          </button>
        ))}
      </div>
      <div className="hint-strip">
        <span className="material-symbols-outlined">tips_and_updates</span>
        {question.hint}
      </div>
      <button className="green-action full-width" disabled={!selected} onClick={() => selected && onAnswer(selected)}>
        提交线索
        <span className="material-symbols-outlined">pets</span>
      </button>
    </article>
  );
}

function FeedbackPanel({ result }: { result: { question: Question; correct: boolean } }) {
  return (
    <aside className={`feedback-panel ${result.correct ? 'right' : 'wrong'}`}>
      <b>{result.correct ? '线索有效' : '线索需要复查'}</b>
      <p>{result.question.explanation}</p>
    </aside>
  );
}

function CompletionPanel({
  title,
  copy,
  action,
  onAction
}: {
  title: string;
  copy: string;
  action: string;
  onAction: () => void;
}) {
  return (
    <section className="completion-panel">
      <span className="material-symbols-outlined">verified</span>
      <h2>{title}</h2>
      <p>{copy}</p>
      <button className="gold-action" onClick={onAction}>{action}</button>
    </section>
  );
}

function AcademyCrest({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`academy-crest ${compact ? 'compact' : ''}`}>
      <span className="material-symbols-outlined">local_police</span>
      <b>ZQ</b>
    </div>
  );
}

function MentorMedallion({ mentor }: { mentor: (typeof mentors)[number] }) {
  return (
    <div className="mentor-medallion" style={{ '--mentor-color': mentor.color } as CSSProperties}>
      <span>{mentor.portrait}</span>
      <b>{mentor.name}</b>
    </div>
  );
}

function FeatureButton({ icon, title, copy }: { icon: string; title: string; copy: string }) {
  return (
    <a href="#courses">
      <span className="material-symbols-outlined">{icon}</span>
      <b>{title}</b>
      <small>{copy}</small>
    </a>
  );
}

function LighthouseScene() {
  return (
    <div className="lighthouse-scene" aria-hidden="true">
      <span className="moon" />
      <span className="beam" />
      <span className="tower" />
      <span className="rocks" />
    </div>
  );
}

function CompassIcon() {
  return (
    <div className="compass-icon" aria-hidden="true">
      <span />
    </div>
  );
}
