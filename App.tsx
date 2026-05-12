import React, { useMemo, useState } from 'react';
import { Screen } from './types';
import { Navigation } from './components/Navigation';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { MapScreen } from './screens/MapScreen';
import { BattleScreen } from './screens/BattleScreen';
import { CaseFileScreen } from './screens/CaseFileScreen';
import { ReportScreen } from './screens/ReportScreen';
import { HandbookScreen } from './screens/HandbookScreen';
import { MedalsScreen } from './screens/MedalsScreen';
import { PendingScreen } from './screens/PendingScreen';
import { usePlayerProgress } from './hooks/usePlayerProgress';
import { missions } from './data/missions';
import { questionById } from './data/questions';
import { getMissionStats, getNextQuestionId } from './domain/scoring';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Welcome);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const progressState = usePlayerProgress();

  const currentMission = useMemo(
    () => missions.find((mission) => mission.id === progressState.progress.currentMissionId) ?? missions[0],
    [progressState.progress.currentMissionId]
  );

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen(Screen.Dashboard);
  };

  const handleNavigate = (screen: Screen) => {
    if (!isLoggedIn && screen !== Screen.Welcome && screen !== Screen.Login) {
      setCurrentScreen(Screen.Login);
    } else {
      setCurrentScreen(screen);
    }
  };

  const handleSelectMission = (missionId: string) => {
    progressState.setCurrentMissionId(missionId);
    setCurrentScreen(Screen.CaseFile);
  };

  const handleClueAnswer = (selected: string | string[]) => {
    const questionId = getNextQuestionId(currentMission.clueQuestionIds, progressState.progress);
    const question = questionId ? questionById.get(questionId) : undefined;
    if (!question) return;

    progressState.answerQuestion(currentMission.id, question, selected);
    const currentIndex = currentMission.clueQuestionIds.indexOf(question.id);
    if (currentIndex === currentMission.clueQuestionIds.length - 1) {
      setCurrentScreen(Screen.Battle);
    }
  };

  const handleBossAnswer = (selected: string | string[]) => {
    const questionId = getNextQuestionId(currentMission.bossQuestionIds, progressState.progress);
    const question = questionId ? questionById.get(questionId) : undefined;
    if (!question) return;

    progressState.answerQuestion(currentMission.id, question, selected);
    const currentIndex = currentMission.bossQuestionIds.indexOf(question.id);
    if (currentIndex === currentMission.bossQuestionIds.length - 1) {
      progressState.completeMission(currentMission.id, currentMission.rewardMedalId);
      setCurrentScreen(Screen.Report);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.Welcome:
        return <WelcomeScreen onNavigateLogin={() => setCurrentScreen(Screen.Login)} />;
      case Screen.Login:
        return <LoginScreen onLogin={handleLogin} />;
      case Screen.Dashboard:
        return (
          <DashboardScreen
            progress={progressState.progress}
            missions={missions}
            onStart={() => setCurrentScreen(Screen.Map)}
            onReset={progressState.resetProgress}
          />
        );
      case Screen.Map:
        return <MapScreen progress={progressState.progress} missions={missions} onSelectMission={handleSelectMission} />;
      case Screen.Battle:
        return <BattleScreen mission={currentMission} progress={progressState.progress} onAnswer={handleBossAnswer} />;
      case Screen.CaseFile:
        return <CaseFileScreen mission={currentMission} progress={progressState.progress} onAnswer={handleClueAnswer} />;
      case Screen.Report:
        return (
          <ReportScreen
            mission={currentMission}
            progress={progressState.progress}
            stats={getMissionStats(currentMission, progressState.progress)}
            lastQuestionResult={progressState.lastQuestionResult}
            onNext={() => setCurrentScreen(Screen.Map)}
            onMedals={() => setCurrentScreen(Screen.Medals)}
          />
        );
      case Screen.Handbook:
        return <HandbookScreen progress={progressState.progress} />;
      case Screen.Medals:
        return <MedalsScreen progress={progressState.progress} />;
      case Screen.Pending:
        return <PendingScreen />;
      default:
        return <WelcomeScreen onNavigateLogin={() => setCurrentScreen(Screen.Login)} />;
    }
  };

  const showNavigation = isLoggedIn && currentScreen !== Screen.Welcome && currentScreen !== Screen.Login;

  return (
    <div className="relative">
      {renderScreen()}
      {showNavigation && <Navigation currentScreen={currentScreen} onNavigate={handleNavigate} />}
    </div>
  );
};

export default App;
