import { twMerge } from 'tailwind-merge';

const Divider = ({ className = "", text = "", position = "center" }) => {
  return (
    <div className={twMerge("relative flex items-center", className)}>
      <div className="flex-1 border-t border-gray-300" />
      {text && (
        <span
          className={twMerge(
            "px-3 text-gray-500 text-sm",
            position === "left" && "ml-0 mr-auto",
            position === "right" && "ml-auto mr-0"
          )}
        >
          {text}
        </span>
      )}
      <div className="flex-1 border-t border-gray-300" />
    </div>
  );
};

export default Divider;
