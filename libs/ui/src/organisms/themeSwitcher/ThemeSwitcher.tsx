import clsx from 'clsx';

import SunIcon from './sun.svg';

interface ThemeSwitcherProps {
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
}

export const ThemeSwitcher = ({
  isDarkTheme,
  toggleDarkTheme,
}: ThemeSwitcherProps) => {
  return (
    <div className="flex justify-end relative z-10">
      <button
        className="flex items-center justify-end gap-3 text-xs h-6 p-0 border-none bg-transparent"
        onClick={toggleDarkTheme}
      >
        <span className="hidden sm:block">
          {`${isDarkTheme ? 'DARK' : 'LIGHT'}`}&nbsp;MODE&nbsp;ON
        </span>
        <div className="flex justify-start border-2 border-current rounded-2xl w-16 h-8">
          <div
            className={clsx(
              'w-1/2 transition-all duration-300',
              isDarkTheme && 'translate-x-8'
            )}
          >
            <img className={clsx(isDarkTheme && 'invert')} src={SunIcon} alt="" />
          </div>
        </div>
      </button>
    </div>
  );
};
