const Tag = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  return (
    <span
      className={` max-h-max text-[11px] font-medium bg-amber-200 px-3 py-0.5 
         rounded-full text-amber-700    ${className} `}
    >
      {text}
    </span>
  );
};

export default Tag;
