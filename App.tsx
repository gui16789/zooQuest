import React, { useState } from 'react';
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

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Welcome);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.Welcome:
        return <WelcomeScreen onNavigateLogin={() => setCurrentScreen(Screen.Login)} />;
      case Screen.Login:
        return <LoginScreen onLogin={handleLogin} />;
      case Screen.Dashboard:
        return <DashboardScreen />;
      case Screen.Map:
        return <MapScreen />;
      case Screen.Battle:
        return <BattleScreen />;
      case Screen.CaseFile:
        return <CaseFileScreen />;
      case Screen.Report:
        return <ReportScreen />;
      case Screen.Handbook:
        return <HandbookScreen />;
      case Screen.Medals:
        return <MedalsScreen />;
      case Screen.Pending:
        return <PendingScreen />;
      default:
        return <WelcomeScreen onNavigateLogin={() => setCurrentScreen(Screen.Login)} />;
    }
  };

  // Hide bottom navigation on Welcome and Login screens
  const showNavigation = isLoggedIn && currentScreen !== Screen.Welcome && currentScreen !== Screen.Login;

  return (
    <div className="relative">
      {renderScreen()}
      {showNavigation && (
        <Navigation currentScreen={currentScreen} onNavigate={handleNavigate} />
      )}
    </div>
  );
};

export default App;
