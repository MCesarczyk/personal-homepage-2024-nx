import styled, { css } from 'styled-components';

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
    <SwitcherButtonWrapper>
      <SwitcherButton onClick={onThemeSwitch}>
        <SwitcherCaption>
          {`${isDarkTheme ? 'DARK' : 'LIGHT'}`}&nbsp;MODE&nbsp;ON
        </SwitcherCaption>
        <SwitcherIconWrapper>
          <SwitcherIcon shifted={isDarkTheme}>
            <StyledSunIcon $inverted={!isDarkTheme} src={SunIcon} alt="" />
          </SwitcherIcon>
        </SwitcherIconWrapper>
      </SwitcherButton>
    </SwitcherButtonWrapper>
  );
};

const SwitcherButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SwitcherButton = styled.button`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  font-size: 12px;
  height: 24px;
  padding: 0px;
  border: none;
  color: ${({ theme }) => theme.color.primary};
  background-color: transparent;
`;

const SwitcherCaption = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;

const SwitcherIconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  border: 2px solid currentColor;
  border-radius: 16px;
  width: 48px;
  height: 25px;
`;

const SwitcherIcon = styled.div<{ shifted?: boolean }>`
  width: 50%;
  transition: 0.3s;

  ${({ shifted }) =>
    shifted &&
    css`
      transform: translateX(23px);
    `}
`;

const StyledSunIcon = styled.img<{ $inverted?: boolean }>`
  filter: ${({ $inverted }) => ($inverted ? 'invert()' : 'none')};
`;
