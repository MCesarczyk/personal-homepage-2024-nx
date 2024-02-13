import { LoaderCircle } from '@assets';

interface SpinnerProps {
  message: string;
}

export const Spinner = ({ message }: SpinnerProps) => (
  <>
    <p className="text-xl mt-20">{message}</p>
    <div className="m-12 mb-36 animate-spin duration-1000">
      <LoaderCircle />
    </div>
  </>
);
