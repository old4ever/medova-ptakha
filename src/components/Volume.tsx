type VolumeProps = {
  img: string;
  alt?: string;
  volumeNumber?: number;
  className?: string;
};

const Volume = ({
  img,
  alt = "volume cover",
  volumeNumber = 1,
  className = "",
}: VolumeProps) => {
  return (
    <div className={className}>
      <div className="flex flex-col items-center justify-center">
        <img
          src={img}
          alt={alt}
          placeholder="blur"
          className="aspect-square h-full w-full object-cover object-top"
        ></img>
        <p>{`вип. ${volumeNumber}`}</p>
      </div>
    </div>
  );
};

export default Volume;
