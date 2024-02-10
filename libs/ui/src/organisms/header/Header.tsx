import styled from 'styled-components';

import { Caption, Link } from '../../atoms';

import photo from './portrait.png';
import EnvelopeIcon from './envelopeIcon.svg';

interface HeaderProps {
  name: string;
  description: string;
}

export const Header = ({ name, description }: HeaderProps) => (
  <HeaderContainer>
    <div>
      <HeaderImage src={photo} alt="portrait" />
    </div>
    <div>
      <Caption>THIS IS:</Caption>
      <HeaderTitle>{name}</HeaderTitle>
      <HeaderParagraph>{description}</HeaderParagraph>
      <Link href="#contact">
        <HeaderButtonIcon>
          <img src={EnvelopeIcon} alt="" />
        </HeaderButtonIcon>
        Contact
      </Link>
    </div>
  </HeaderContainer>
);

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 64px;
  margin-top: -30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    grid-template-columns: 1fr;
    gap: 0px;
  }
`;

export const HeaderInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const HeaderImage = styled.img`
  width: 400px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    min-width: 132px;
    width: 50%;
  }
`;

export const HeaderTitle = styled.h1`
  display: block;
  font-size: 38px;
  font-weight: 900;
  text-align: left;
  margin-top: 12px;
  margin-bottom: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoints.netbookMax}) {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    font-size: 22px;
  }
`;

export const HeaderParagraph = styled.p`
  margin-bottom: 32px;
`;

export const HeaderButtonIcon = styled.div`
  width: 22px;
  height: 20px;
  margin-right: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    transform: scale(0.9);
    margin-right: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    transform: scale(0.8);
    margin-right: 14px;
  }
`;
