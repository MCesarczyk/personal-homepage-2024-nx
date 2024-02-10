import styled, { css } from 'styled-components';

interface ThumbnailProps {
  id: number;
  icon: string;
  url: string;
  isDarkTheme?: boolean;
}

export const Thumbnail = ({ id, icon, url, isDarkTheme }: ThumbnailProps) => {
  return (
    <Wrapper key={id} {...{ isDarkTheme }}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt="" />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isDarkTheme?: boolean }>`
  width: 48px;
  margin: 24px;
  transition: 1s;

  @media (max-width: ${({ theme }) => theme.breakpoints.netbookMax}) {
    width: 42px;
    margin: 21px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    width: 40px;
    margin: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 32px;
    margin: 16px;
  }

  ${({ isDarkTheme }) =>
    !isDarkTheme &&
    css`
      filter: invert(1);
    `}

  &:hover {
    color: ${({ theme }) => theme.color.themeColor};
    filter: brightness(50%);
    transform: scale(110%);
  }
`;
