import React from 'react';
import { Screen } from '../types';

interface NavigationProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentScreen, onNavigate }) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-full shadow-2xl px-6 py-3 flex items-center gap-6 transition-all duration-300 hover:scale-105">
      <button 
        onClick={() => onNavigate(Screen.Dashboard)}
        className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === Screen.Dashboard ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
      >
        <span className="material-symbols-outlined">home</span>
      </button>

      <button 
        onClick={() => onNavigate(Screen.Map)}
        className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === Screen.Map ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
      >
        <span className="material-symbols-outlined">map</span>
      </button>

      <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>

      <button 
        onClick={() => onNavigate(Screen.CaseFile)}
        className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === Screen.CaseFile ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
      >
        <span className="material-symbols-outlined">folder_open</span>
      </button>

      <button 
        onClick={() => onNavigate(Screen.Battle)}
        className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === Screen.Battle ? 'text-red-500' : 'text-slate-400 hover:text-slate-600'}`}
      >
        <span className="material-symbols-outlined">swords</span>
      </button>

      <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>

       <button 
        onClick={() => onNavigate(Screen.Report)}
        className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === Screen.Report ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
      >
        <span className="material-symbols-outlined">assessment</span>
      </button>

      <button 
        onClick={() => onNavigate(Screen.Medals)}
        className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === Screen.Medals ? 'text-yellow-500' : 'text-slate-400 hover:text-slate-600'}`}
      >
        <span className="material-symbols-outlined">military_tech</span>
      </button>
      
       <button 
        onClick={() => onNavigate(Screen.Handbook)}
        className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === Screen.Handbook ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
      >
        <span className="material-symbols-outlined">menu_book</span>
      </button>

       <button 
        onClick={() => onNavigate(Screen.Pending)}
        className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === Screen.Pending ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
      >
        <span className="material-symbols-outlined">pending_actions</span>
      </button>

    </div>
  );
};
