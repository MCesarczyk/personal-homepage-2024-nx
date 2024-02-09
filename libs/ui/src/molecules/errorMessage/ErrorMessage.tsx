import styled from 'styled-components';

import WarningSign from './warningSign.svg';
import { Link } from '../../atoms';

interface ErrorMessageProps {
  errorMessage: string;
  errorDescription: string;
  address: string;
}

export const ErrorMessage = ({
  errorMessage,
  errorDescription,
  address,
}: ErrorMessageProps) => (
  <>
    <WarningSignWrapper>
      <img src={WarningSign} alt='' />
    </WarningSignWrapper>
    <ErrorHeader>{errorMessage}</ErrorHeader>
    <ErrorCaption>{errorDescription}</ErrorCaption>
    <Link>
      <a href={address} target="_blank" rel="noreferrer">
        Go to Github
      </a>
    </Link>
  </>
);

export const WarningSignWrapper = styled.div`
  margin-top: 96px;
  margin-bottom: 24px;
`;

export const ErrorHeader = styled.h3`
  font-size: 24px;
`;

export const ErrorCaption = styled.p`
  font-size: 20px;
  margin: 32px auto;
`;
