import styled from 'styled-components';

interface ThumbnailProps {
  id: string;
  icon: string;
  url: string;
}

export const Thumbnail = ({ id, icon, url }: ThumbnailProps) => {
  return (
    <Wrapper key={id}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt="" />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

  &:hover {
    color: ${({ theme }) => theme.color.themeColor};
    filter: brightness(50%);
    transform: scale(110%);
  }
`;
