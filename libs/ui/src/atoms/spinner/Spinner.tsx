import circle from './loaderCircle.svg';

interface SpinnerProps {
  message: string;
}

export const Spinner = ({ message }: SpinnerProps) => (
  <>
    <p className="text-xl mt-20">{message}</p>
    <img
      className="m-12 mb-36 animate-spin duration-1000"
      src={circle}
      alt=""
    ></img>
  </>
);
