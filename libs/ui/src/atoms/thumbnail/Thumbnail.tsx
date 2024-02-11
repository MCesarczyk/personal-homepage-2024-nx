interface ThumbnailProps {
  id: number;
  icon: string;
  url: string;
}

export const Thumbnail = ({ id, icon, url }: ThumbnailProps) => {
  return (
    <div
      className="w-8 m-4 sm:w-10 sm:m-5 md:w-11 md:m-6 lg:w-12 lg:m-6 transition-all duration-500 invert dark:invert-0 hover:brightness-75 hover:scale-110"
      key={id}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt="" />
      </a>
    </div>
  );
};
