import { useMemo, useState } from 'react';
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

const subjectName = {
  chinese: '语文侦查',
  math: '数学行动',
  english: '英语通讯'
} as const;

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

  const enroll = (name: string) => {
    const next = { ...initialProgress, cadetName: name.trim() || '小探员' };
    saveProgress(next);
    setScreen('briefing');
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
    <div className="app-shell">
      {screen !== 'home' && (
        <StoryTopBar
          progress={progress}
          screen={screen}
          onMap={() => setScreen('map')}
          onRestart={restart}
        />
      )}

      {screen === 'home' && <HomeScreen onEnroll={() => setScreen('enroll')} />}
      {screen === 'enroll' && <EnrollScreen onSubmit={enroll} />}
      {screen === 'briefing' && <BriefingScreen progress={progress} onContinue={() => setScreen('map')} />}
      {screen === 'map' && <MapScreen progress={progress} onOpenCase={() => setScreen('case')} />}
      {screen === 'case' && (
        <CaseScreen
          progress={progress}
          question={clueQuestion}
          lastResult={lastResult}
          onAnswer={submitClue}
          onBoss={() => setScreen('boss')}
        />
      )}
      {screen === 'boss' && (
        <BossScreen
          progress={progress}
          question={bossQuestion}
          lastResult={lastResult}
          onAnswer={submitBoss}
          onReport={() => setScreen('report')}
        />
      )}
      {screen === 'report' && <ReportScreen progress={progress} onMap={() => setScreen('map')} onRestart={restart} />}
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
      <div>
        <strong>ZooQuest 动物城市警探学院</strong>
        <span>{progress.cadetName} · {getRank(progress.xp)} · {progress.xp} XP</span>
      </div>
      <nav aria-label="主线导航">
        <button onClick={onMap} disabled={screen === 'map'}>地图</button>
        <button onClick={onRestart}>重开演示</button>
      </nav>
    </header>
  );
}

function HomeScreen({ onEnroll }: { onEnroll: () => void }) {
  return (
    <main className="home-screen">
      <section className="hero-stage">
        <div className="academy-seal">
          <span className="material-symbols-outlined">local_police</span>
          <b>ZQ</b>
        </div>
        <p className="eyebrow">动物城市警探学院 · 新生招募</p>
        <h1>让二年级知识，变成一场会发光的破案旅程。</h1>
        <p className="hero-copy">
          小朋友将跟随三位原创导师，学习语文、数学、英语，破解“知识灯塔失光案”，从见习探员成长为真正的小警员。
        </p>
        <div className="hero-actions">
          <button className="primary-action" onClick={onEnroll}>加入警探学院</button>
          <a href="#courses">查看三门课程</a>
        </div>
      </section>

      <section id="courses" className="course-band">
        {mentors.map((mentor) => (
          <article key={mentor.id} className="mentor-card" style={{ '--mentor-color': mentor.color } as React.CSSProperties}>
            <div className="mentor-portrait">{mentor.portrait}</div>
            <p>{mentor.title}</p>
            <h2>{mentor.name}</h2>
            <span>{mentor.motto}</span>
          </article>
        ))}
      </section>
    </main>
  );
}

function EnrollScreen({ onSubmit }: { onSubmit: (name: string) => void }) {
  const [name, setName] = useState('小探员');

  return (
    <main className="center-screen">
      <section className="enroll-card">
        <p className="eyebrow">新生档案</p>
        <h1>先给你的警探档案起个名字。</h1>
        <label>
          探员昵称
          <input value={name} onChange={(event) => setName(event.target.value)} maxLength={8} />
        </label>
        <button className="primary-action" onClick={() => onSubmit(name)}>领取见习徽章</button>
        <p className="quiet-note">MVP 只保存在本机浏览器，不收集真实姓名、学校或照片。</p>
      </section>
    </main>
  );
}

function BriefingScreen({ progress, onContinue }: { progress: Progress; onContinue: () => void }) {
  return (
    <main className="briefing-screen">
      <section className="briefing-panel">
        <div className="chapter-index">序章</div>
        <h1>晨雾警报响起，知识灯塔正在变暗。</h1>
        <p>
          {progress.cadetName}，欢迎来到动物城市警探学院。今天清晨，中央广场的知识灯塔只剩一点微光。
          三位导师已经集合，你需要通过语文、数学和英语三条线索，找出干扰灯塔的幕后源头。
        </p>
        <div className="mentor-line">
          {mentors.map((mentor) => (
            <span key={mentor.id}>{mentor.portrait} {mentor.name}</span>
          ))}
        </div>
        <button className="primary-action" onClick={onContinue}>前往城市地图</button>
      </section>
    </main>
  );
}

function MapScreen({ progress, onOpenCase }: { progress: Progress; onOpenCase: () => void }) {
  const firstCaseDone = progress.completedCases.includes(openingCase.id);

  return (
    <main className="map-screen">
      <section className="map-heading">
        <p className="eyebrow">Story Map</p>
        <h1>动物城市主线地图</h1>
        <p>每个区域都是一个章节。MVP 先开放第一章，后续章节按同样结构扩展。</p>
      </section>

      <section className="chapter-grid">
        {chapters.map((chapter, index) => {
          const open = chapter.status === 'open' || (chapter.requiredBadge && progress.badges.includes(chapter.requiredBadge));
          return (
            <article key={chapter.id} className={`chapter-card ${open ? 'open' : 'locked'}`}>
              <div className="chapter-number">{index + 1}</div>
              <p>{chapter.area}</p>
              <h2>{chapter.title}</h2>
              <span>{chapter.summary}</span>
              {index === 0 ? (
                <button onClick={onOpenCase}>{firstCaseDone ? '复盘第一章' : '进入第一章'}</button>
              ) : (
                <button disabled>后续迭代解锁</button>
              )}
            </article>
          );
        })}
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
    <main className="case-screen">
      <aside className="case-file">
        <p className="eyebrow">{openingCase.subtitle}</p>
        <h1>{openingCase.title}</h1>
        <p>{openingCase.mystery}</p>
        <ProgressRail current={progress.activeQuestionIndex} total={openingCase.clueQuestionIds.length} label="线索收集" />
      </aside>
      <section className="question-zone">
        {question ? (
          <QuestionPanel question={question} onAnswer={(selected) => onAnswer(question, selected)} />
        ) : (
          <CompletionPanel title="三条线索已经收齐" copy="现在可以进入 Boss 关，修复知识灯塔。" action="进入 Boss 关" onAction={onBoss} />
        )}
        {lastResult && <FeedbackPanel result={lastResult} />}
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
        <p className="eyebrow">Final Gate</p>
        <h1>迷雾干扰源出现了。</h1>
        <p>综合运用三门课程，把灯塔能量充满。</p>
        <div className="hp-bar"><span style={{ width: `${hp}%` }} /></div>
        <b>干扰源能量 {hp}%</b>
      </section>
      <section className="question-zone">
        {question ? (
          <QuestionPanel question={question} onAnswer={(selected) => onAnswer(question, selected)} />
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
      <section className="report-card">
        <p className="eyebrow">Case Closed</p>
        <h1>{openingCase.title} 已结案</h1>
        <p>中央广场的知识灯塔恢复第一束光。下一章将开放雨林市场案件。</p>
        <div className="report-metrics">
          <div><span>{progress.xp}</span><b>XP</b></div>
          <div><span>{accuracy}%</span><b>准确率</b></div>
          <div><span>{progress.badges.length}</span><b>勋章</b></div>
        </div>
        <div className="badge-award">
          <span className="material-symbols-outlined">workspace_premium</span>
          <div>
            <b>{openingCase.badge.name}</b>
            <p>{openingCase.badge.description}</p>
          </div>
        </div>
        <div className="report-actions">
          <button className="primary-action" onClick={onMap}>返回地图</button>
          <button className="secondary-action" onClick={onRestart}>重新试玩 MVP</button>
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
      <div className="question-header" style={{ '--mentor-color': mentor.color } as React.CSSProperties}>
        <div className="mini-portrait">{mentor.portrait}</div>
        <div>
          <span>{subjectName[question.subject]}</span>
          <h2>{question.title}</h2>
        </div>
      </div>
      <p className="story-text">{question.story}</p>
      <h3>{question.prompt}</h3>
      <div className="option-list">
        {question.options.map((option) => (
          <button
            key={option}
            className={selected === option ? 'selected' : ''}
            onClick={() => setSelected(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="hint-strip">
        <span className="material-symbols-outlined">tips_and_updates</span>
        {question.hint}
      </div>
      <button className="primary-action" disabled={!selected} onClick={() => selected && onAnswer(selected)}>
        提交线索
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
      <button className="primary-action" onClick={onAction}>{action}</button>
    </section>
  );
}
