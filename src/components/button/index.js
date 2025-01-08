export default function CustomButton({
  title = "Button",
  className = "",
  style = {},
  variant = "filled",
  onClick = () => {},
  icon = null,
}) {
  const baseClasses = "px-4 py-2 rounded font-medium text-center h-[48px]";

  const variantClasses =
    variant === "filled"
      ? "bg-blue-500 text-white hover:bg-[--e-global-color-E0A43B]"
      : "border border-blue-500 text-blue-500 hover:bg-blue-100";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      style={style}
      onClick={onClick}
    >
      {icon && <span className="mr-1">{icon}</span>}
      <span>{title}</span>
    </button>
  );
}
