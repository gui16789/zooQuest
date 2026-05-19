import { useEffect, useMemo, useState } from 'react';
import {
  avatarOptions,
  cityDistricts,
  clueDescriptions,
  firstCase,
  navigationRepairMedal,
  randomNicknames,
  trainingConnections,
  trainingNodes
} from './data/firstCase';
import {
  answerQuestion,
  clearProgress,
  completeBossStep,
  completeClue,
  completeReasoning,
  getCaseCompletion,
  getCurrentClueIndex,
  getQuestion,
  getRank,
  initialProgress,
  loadProgress,
  markClueViewed,
  persistProgress
} from './domain/progress';
import { CaseQuestion, Progress, Screen, TrainingNode } from './types';

type Feedback = {
  question: CaseQuestion;
  selected: string;
  correct: boolean;
};

const directionLabels: Record<string, string> = {
  east: '东',
  south: '南',
  west: '西',
  north: '北'
};

export function App() {
  const [progress, setProgressState] = useState<Progress>(() => loadProgress());
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const currentQuestion = useMemo(
    () => getQuestion(progress.currentQuestionId),
    [progress.currentQuestionId]
  );

  const setProgress = (next: Progress) => {
    persistProgress(next);
    setProgressState(next);
  };

  const goTo = (screen: Screen) => {
    setFeedback(null);
    setProgress({ ...progress, currentScreen: screen });
  };

  const restart = () => {
    clearProgress();
    setFeedback(null);
    setProgressState(initialProgress);
  };

  const submitAnswer = (question: CaseQuestion, selected: string) => {
    const correct = selected === question.answer;
    setFeedback({ question, selected, correct });

    if (!correct) {
      setProgress(answerQuestion(progress, question, selected));
      return;
    }

    if (question.phase === 'clue') {
      setProgress(completeClue(progress, question, selected));
      return;
    }

    if (question.phase === 'reasoning') {
      setProgress(completeReasoning(progress, question, selected));
      return;
    }

    setProgress(completeBossStep(progress, question, selected));
  };

  return (
    <div className="app-shell">
      {progress.currentScreen !== 'home' && (
        <TopBar progress={progress} onMap={() => goTo('city-map')} onRestart={restart} />
      )}

      {progress.currentScreen === 'home' && (
        <HomeScreen onStart={() => goTo('enrollment')} />
      )}
      {progress.currentScreen === 'enrollment' && (
        <EnrollmentScreen progress={progress} onSave={setProgress} />
      )}
      {progress.currentScreen === 'case-briefing' && (
        <CaseBriefingScreen onContinue={() => goTo('clue-task')} />
      )}
      {progress.currentScreen === 'clue-task' && currentQuestion && (
        <TrainingFieldScreen
          progress={progress}
          question={currentQuestion}
          feedback={feedback}
          onAnswer={submitAnswer}
        />
      )}
      {progress.currentScreen === 'clue-board' && (
        <ClueBoardScreen progress={progress} onProgress={setProgress} onContinue={() => goTo('reasoning')} />
      )}
      {progress.currentScreen === 'reasoning' && currentQuestion && (
        <ReasoningScreen question={currentQuestion} feedback={feedback} onAnswer={submitAnswer} />
      )}
      {progress.currentScreen === 'boss' && currentQuestion && (
        <BossScreen progress={progress} question={currentQuestion} feedback={feedback} onAnswer={submitAnswer} />
      )}
      {progress.currentScreen === 'reward' && (
        <RewardScreen progress={progress} onMap={() => goTo('city-map')} />
      )}
      {progress.currentScreen === 'city-map' && (
        <CityMapScreen progress={progress} onRestart={restart} />
      )}
    </div>
  );
}

function TopBar({
  progress,
  onMap,
  onRestart
}: {
  progress: Progress;
  onMap: () => void;
  onRestart: () => void;
}) {
  const avatar = avatarOptions.find((item) => item.id === progress.cadet.avatarId) ?? avatarOptions[0];

  return (
    <header className="topbar">
      <div className="cadet-chip">
        <span className="avatar-dot" style={{ background: avatar.color }}>{avatar.animal}</span>
        <div>
          <strong>{progress.cadet.nickname || '警校新生'}</strong>
          <small>{getRank(progress.xp)} · {progress.xp} XP</small>
        </div>
      </div>
      <nav aria-label="顶部导航">
        <button type="button" onClick={onMap}>城市地图</button>
        <button type="button" onClick={onRestart}>重新开始</button>
      </nav>
    </header>
  );
}

function HomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <main className="home-screen">
      <section className="hero-stage">
        <div className="academy-gate" aria-hidden="true">
          <span className="gate-arch" />
          <span className="gate-badge">ZQ</span>
          <span className="campus-tower" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">警官学院官网 · 新生招募</p>
          <h1>加入动物城市警探学院</h1>
          <p>跟随牛局长完成入学训练，用数学方向知识帮助导航机器人找回路线。</p>
          <button className="primary-action" type="button" onClick={onStart}>加入警官学院</button>
        </div>
        <BuffaloMentorCard />
      </section>
    </main>
  );
}

function EnrollmentScreen({
  progress,
  onSave
}: {
  progress: Progress;
  onSave: (progress: Progress) => void;
}) {
  const [nickname, setNickname] = useState(progress.cadet.nickname);
  const [avatarId, setAvatarId] = useState(progress.cadet.avatarId);

  const randomName = () => {
    const next = randomNicknames[Math.floor(Math.random() * randomNicknames.length)];
    setNickname(next);
  };

  const submit = () => {
    const trimmed = nickname.trim();
    if (!trimmed) return;

    onSave({
      ...progress,
      hasCreatedCadet: true,
      cadet: { nickname: trimmed, avatarId },
      currentScreen: 'case-briefing',
      firstCaseStatus: 'available'
    });
  };

  return (
    <main className="panel-screen enrollment-screen">
      <section className="id-card">
        <p className="eyebrow">学员入学档案</p>
        <h1>创建你的小警探</h1>

        <label className="form-field">
          <span>警探昵称</span>
          <div className="nickname-row">
            <input
              value={nickname}
              maxLength={12}
              onChange={(event) => setNickname(event.target.value)}
              placeholder="输入你的警探昵称"
            />
            <button type="button" onClick={randomName}>随机昵称</button>
          </div>
        </label>

        <fieldset className="avatar-grid">
          <legend>选择头像</legend>
          {avatarOptions.map((avatar) => (
            <button
              type="button"
              key={avatar.id}
              className={avatarId === avatar.id ? 'selected' : ''}
              onClick={() => setAvatarId(avatar.id)}
            >
              <span className="avatar-preview" style={{ background: avatar.color }}>{avatar.animal}</span>
              <strong>{avatar.name}</strong>
              <small>{avatar.description}</small>
            </button>
          ))}
        </fieldset>

        <button className="primary-action full" type="button" disabled={!nickname.trim()} onClick={submit}>
          开始入学训练
        </button>
      </section>
    </main>
  );
}

function CaseBriefingScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <main className="briefing-screen">
      <section className="briefing-card">
        <BuffaloMentorCard />
        <article>
          <p className="eyebrow">首案接案</p>
          <h1>{firstCase.title}</h1>
          <p>{firstCase.goal}</p>
          <div className="reward-preview">
            <MedalIcon />
            <div>
              <strong>{navigationRepairMedal.name}</strong>
              <span>{navigationRepairMedal.description}</span>
            </div>
          </div>
          <button className="primary-action" type="button" onClick={onContinue}>进入训练场</button>
        </article>
      </section>
    </main>
  );
}

function TrainingFieldScreen({
  progress,
  question,
  feedback,
  onAnswer
}: {
  progress: Progress;
  question: CaseQuestion;
  feedback: Feedback | null;
  onAnswer: (question: CaseQuestion, selected: string) => void;
}) {
  const currentIndex = getCurrentClueIndex(progress);

  return (
    <main className="mission-screen">
      <section className="training-layout">
        <aside className="case-sidebar">
          <p className="eyebrow">训练场线索</p>
          <h1>{firstCase.title}</h1>
          <ProgressSteps current={currentIndex + 1} total={firstCase.clueQuestionIds.length} label="线索节点" />
          <p>按顺序点亮训练场节点，找出导航机器人迷路的原因。</p>
        </aside>
        <section className="map-and-question">
          <TrainingMap activeQuestion={question} progress={progress} onMapAnswer={(selected) => onAnswer(question, selected)} />
          <QuestionCard question={question} feedback={feedback} onAnswer={(selected) => onAnswer(question, selected)} />
        </section>
      </section>
    </main>
  );
}

function ClueBoardScreen({
  progress,
  onProgress,
  onContinue
}: {
  progress: Progress;
  onProgress: (progress: Progress) => void;
  onContinue: () => void;
}) {
  const clues = progress.collectedClues;

  return (
    <main className="panel-screen">
      <section className="clue-board">
        <p className="eyebrow">独立线索板</p>
        <h1>把线索连起来看看</h1>
        <div className="clue-list">
          {clues.map((clue) => (
            <button
              type="button"
              key={clue}
              className={progress.viewedClueIds.includes(clue) ? 'viewed' : ''}
              onClick={() => onProgress(markClueViewed(progress, clue))}
            >
              <strong>{clue}</strong>
              <span>{progress.viewedClueIds.includes(clue) ? clueDescriptions[clue] : '点击查看一句解释'}</span>
            </button>
          ))}
        </div>
        <button className="primary-action" type="button" onClick={onContinue}>开始推理</button>
      </section>
    </main>
  );
}

function ReasoningScreen({
  question,
  feedback,
  onAnswer
}: {
  question: CaseQuestion;
  feedback: Feedback | null;
  onAnswer: (question: CaseQuestion, selected: string) => void;
}) {
  return (
    <main className="panel-screen">
      <section className="reasoning-card">
        <p className="eyebrow">轻量推理</p>
        <h1>机器人为什么迷路？</h1>
        <QuestionCard question={question} feedback={feedback} onAnswer={(selected) => onAnswer(question, selected)} />
      </section>
    </main>
  );
}

function BossScreen({
  progress,
  question,
  feedback,
  onAnswer
}: {
  progress: Progress;
  question: CaseQuestion;
  feedback: Feedback | null;
  onAnswer: (question: CaseQuestion, selected: string) => void;
}) {
  return (
    <main className="boss-screen">
      <section className="boss-layout">
        <aside className="robot-stage">
          <p className="eyebrow">Boss 修复</p>
          <h1>混乱导航机器人</h1>
          <div className="robot-figure" aria-hidden="true">
            <span className="robot-eye left" />
            <span className="robot-eye right" />
            <span className="robot-question">?</span>
          </div>
          <ProgressSteps current={progress.bossStep + 1} total={3} label="修复进度" />
          <p>答错不会失败。牛局长会给你提示，继续修复就好。</p>
        </aside>
        <section className="boss-question-stack">
          {question.interaction === 'map-node-click' && (
            <TrainingMap
              activeQuestion={question}
              progress={progress}
              onMapAnswer={(selected) => onAnswer(question, selected)}
            />
          )}
          <QuestionCard question={question} feedback={feedback} onAnswer={(selected) => onAnswer(question, selected)} />
        </section>
      </section>
    </main>
  );
}

function RewardScreen({ progress, onMap }: { progress: Progress; onMap: () => void }) {
  return (
    <main className="panel-screen reward-screen">
      <section className="reward-card">
        <p className="eyebrow">结案成功</p>
        <h1>城市地图已解锁</h1>
        <MedalIcon large />
        <strong>{navigationRepairMedal.name}</strong>
        <p>{navigationRepairMedal.description}</p>
        <div className="xp-card">获得 {progress.xp} XP · {getRank(progress.xp)}</div>
        <button className="primary-action" type="button" onClick={onMap}>前往城市地图</button>
      </section>
    </main>
  );
}

function CityMapScreen({ progress, onRestart }: { progress: Progress; onRestart: () => void }) {
  const [selectedDistrictId, setSelectedDistrictId] = useState<string | null>(null);
  const selectedDistrict = cityDistricts.find((district) => district.id === selectedDistrictId);

  return (
    <main className="city-screen">
      <section className="city-map-card">
        <header>
          <p className="eyebrow">动物城市地图</p>
          <h1>中央广场开放了</h1>
          <p>首案训练完成，接下来会从中央广场开始真正的城市办案。</p>
        </header>
        <div className="district-grid">
          {cityDistricts.map((district) => {
            const open = district.status === 'open' || progress.unlockedDistricts.includes(district.id);
            return (
              <article
                key={district.id}
                className={`${open ? 'open' : 'locked'} ${selectedDistrictId === district.id ? 'selected' : ''}`}
              >
                <span className="district-icon">{open ? '★' : '锁'}</span>
                <h2>{district.name}</h2>
                <p>{district.description}</p>
                <button
                  type="button"
                  disabled={!open}
                  onClick={() => open && setSelectedDistrictId(district.id)}
                >
                  {open ? '查看区域' : '待解锁'}
                </button>
              </article>
            );
          })}
        </div>

        {selectedDistrict && (
          <section className="district-detail" aria-live="polite">
            <div>
              <p className="eyebrow">区域档案</p>
              <h2>{selectedDistrict.name}</h2>
              <p>{selectedDistrict.description}</p>
            </div>
            <ul>
              <li>首案状态：导航机器人迷路案已结案</li>
              <li>当前任务：整理中央广场巡逻记录</li>
              <li>下一步：第二案将在后续迭代开放</li>
            </ul>
            <button type="button" className="secondary-action" onClick={() => setSelectedDistrictId(null)}>
              收起区域详情
            </button>
          </section>
        )}

        <button className="secondary-action" type="button" onClick={onRestart}>重新试玩首案</button>
      </section>
    </main>
  );
}

function QuestionCard({
  question,
  feedback,
  onAnswer
}: {
  question: CaseQuestion;
  feedback: Feedback | null;
  onAnswer: (selected: string) => void;
}) {
  const [selected, setSelected] = useState('');
  const isMapQuestion = question.interaction === 'map-node-click';
  const isCurrentFeedback = feedback?.question.id === question.id;

  useEffect(() => {
    setSelected('');
  }, [question.id]);

  return (
    <article className="question-card">
      <p className="eyebrow">{question.title}</p>
      <p className="scene-text">{question.sceneText}</p>
      <h2>{question.prompt}</h2>

      {!isMapQuestion && (
        <div className={question.interaction === 'direction-button' ? 'direction-options' : 'choice-options'}>
          {(question.options ?? []).map((option) => (
            <button
              type="button"
              key={option}
              className={selected === option ? 'selected' : ''}
              onClick={() => setSelected(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {isMapQuestion && (
        <p className="map-answer-note">请在路线节点图上点击正确终点。</p>
      )}

      {isCurrentFeedback && (
        <FeedbackBox feedback={feedback} />
      )}

      {!isMapQuestion && (
        <button
          className="primary-action full"
          type="button"
          disabled={!selected}
          onClick={() => selected && onAnswer(selected)}
        >
          提交答案
        </button>
      )}
    </article>
  );
}

function FeedbackBox({ feedback }: { feedback: Feedback }) {
  return (
    <aside className={`feedback-box ${feedback.correct ? 'correct' : 'wrong'}`}>
      <strong>{feedback.correct ? '方向正确' : '再试一次'}</strong>
      <p>{feedback.correct ? feedback.question.explanation : feedback.question.hint}</p>
    </aside>
  );
}

function TrainingMap({
  activeQuestion,
  progress,
  onMapAnswer
}: {
  activeQuestion?: CaseQuestion;
  progress: Progress;
  onMapAnswer?: (nodeId: string) => void;
}) {
  const activeClueIndex = getCurrentClueIndex(progress);

  const nodeStatus = (node: TrainingNode): 'locked' | 'active' | 'complete' => {
    if (activeQuestion?.interaction === 'map-node-click') {
      if (node.id === activeQuestion.startNodeId) return 'active';
      return 'locked';
    }
    const nodeIndex = ['check-in', 'equipment', 'sign-tower', 'command-screen'].indexOf(node.id);
    if (nodeIndex >= 0) {
      if (nodeIndex < activeClueIndex) return 'complete';
      if (nodeIndex === activeClueIndex) return 'active';
      return 'locked';
    }
    return progress.firstCaseStatus === 'completed' ? 'complete' : 'locked';
  };

  return (
    <div className="training-map" aria-label="训练场路线节点图">
      {trainingConnections.map((connection) => {
        const from = trainingNodes.find((node) => node.id === connection.from)!;
        const to = trainingNodes.find((node) => node.id === connection.to)!;
        return (
          <span
            key={`${connection.from}-${connection.to}`}
            className={`map-line ${connection.direction}`}
            style={{
              left: `${Math.min(from.x, to.x)}%`,
              top: `${Math.min(from.y, to.y)}%`,
              width: `${Math.abs(from.x - to.x) || 4}%`,
              height: `${Math.abs(from.y - to.y) || 4}%`
            }}
          >
            <i>{directionLabels[connection.direction]}</i>
          </span>
        );
      })}
      {trainingNodes.map((node) => {
        const status = nodeStatus(node);
        const clickable = activeQuestion?.interaction === 'map-node-click' && node.id !== activeQuestion.startNodeId;
        return (
          <button
            type="button"
            key={node.id}
            className={`map-node ${status} ${clickable ? 'selectable' : ''}`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            disabled={!clickable}
            onClick={() => clickable && onMapAnswer?.(node.id)}
          >
            <span>{node.name}</span>
          </button>
        );
      })}
      <Compass />
    </div>
  );
}

function ProgressSteps({ current, total, label }: { current: number; total: number; label: string }) {
  const safeCurrent = Math.min(current, total);
  return (
    <div className="progress-steps">
      <div>
        <span>{label}</span>
        <strong>{safeCurrent}/{total}</strong>
      </div>
      <div className="step-track">
        <span style={{ width: `${(safeCurrent / total) * 100}%` }} />
      </div>
    </div>
  );
}

function BuffaloMentorCard() {
  return (
    <aside className="mentor-card">
      <div className="buffalo-placeholder" aria-hidden="true">牛</div>
      <div>
        <strong>{firstCase.mentorName}</strong>
        <span>{firstCase.mentorTitle}</span>
      </div>
    </aside>
  );
}

function MedalIcon({ large = false }: { large?: boolean }) {
  return (
    <div className={`medal-icon ${large ? 'large' : ''}`} aria-hidden="true">
      <span>↔</span>
      <i>↕</i>
    </div>
  );
}

function Compass() {
  return (
    <div className="compass" aria-hidden="true">
      <b>北</b>
      <span>东</span>
    </div>
  );
}
