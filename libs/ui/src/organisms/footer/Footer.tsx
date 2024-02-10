import { ReactNode } from 'react';
import styled from 'styled-components';

import { Caption } from '../../atoms';

interface FooterProps {
  address: string;
  note: string;
  children: ReactNode[];
}

export const Footer = ({ address, note, children }: FooterProps) => (
  <FooterContainer>
    <FooterHeader>
      <Caption>CONTACT:</Caption>
      <FooterLink id="contact" href={`mailto:${address}`}>
        {address}
      </FooterLink>
    </FooterHeader>
    <FooterParagraph>{note}</FooterParagraph>
    <FooterThumbnailWrapper>{children}</FooterThumbnailWrapper>
  </FooterContainer>
);

const FooterContainer = styled.div`
  width: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    width: 100%;
  }
`;

const FooterHeader = styled.h2`
  font-size: 32px;
  margin: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.netbookMax}) {
    font-size: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 18px;
  }
`;

const FooterLink = styled.a`
  display: block;
  font-weight: 900;
  color: ${({ theme }) => theme.color.primary};
  margin: 24px 0 24px 0;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.netbookMax}) {
    margin: 21px 0 21px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    margin: 18px 0 18px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 12px 0 12px 0;
  }

  &:hover {
    color: ${({ theme }) => theme.color.themeColor};
  }
`;

const FooterParagraph = styled.p`
  margin-bottom: 56px;
`;

const FooterThumbnailWrapper = styled.div`
  display: flex;
`;
