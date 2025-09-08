const Icon = ({
  id,
  width = 16,
  height = 16,
  color = "currentColor",
  className = "",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill={color}
      aria-hidden="true"
    >
      <use href={`/sprite.svg#icon-${id}`} />
    </svg>
  );
};

export default Icon;
