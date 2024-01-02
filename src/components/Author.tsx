type VolumeProps = {
  img?: string;
  alt?: string;
  authorIndex?: number;
  className?: string;
};

const Volume = ({
  img = "/placeholder-ava.jpg",
  alt = "author picture",
  authorIndex = 1,
  className = "",
}: VolumeProps) => {
  return (
    <div className={className}>
      <div className="flex flex-col items-center">
        <img
          src={img}
          alt={alt}
          placeholder="blur"
          className="aspect-square w-full rounded-full border border-black object-cover object-top"
        />
        <p>{`Автор ${authorIndex}`}</p>
      </div>
    </div>
  );
};

export default Volume;
