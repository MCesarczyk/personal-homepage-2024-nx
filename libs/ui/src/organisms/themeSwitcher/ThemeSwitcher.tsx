import clsx from 'clsx';

import SunIcon from './sun.svg';

interface ThemeSwitcherProps {
  isDarkTheme: boolean;
  setDarkTheme: (isDark: boolean) => void;
}

export const ThemeSwitcher = ({
  isDarkTheme,
  setDarkTheme,
}: ThemeSwitcherProps) => {
  const onThemeSwitch = () => {
    setDarkTheme(!isDarkTheme);
  };

  return (
    <div className="flex justify-end">
      <button
        className="flex items-center justify-end gap-3 text-xs h-6 p-0 border-none text-blue-700 bg-transparent"
        onClick={onThemeSwitch}
      >
        <span className="hidden sm:block">
          {`${isDarkTheme ? 'DARK' : 'LIGHT'}`}&nbsp;MODE&nbsp;ON
        </span>
        <div className="flex justify-start border-2 rounded-2xl w-16 h-8">
          <div
            className={clsx(
              'w-1/2 transition-all duration-300',
              isDarkTheme && 'translate-x-8'
            )}
          >
            <img className={clsx(!isDarkTheme && 'invert')} src={SunIcon} alt="" />
          </div>
        </div>
      </button>
    </div>
  );
};
