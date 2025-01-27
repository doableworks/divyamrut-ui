import { twMerge } from "tailwind-merge";

export default function CommonNoTherapy({
  title = "Oops! No Therapies Found",
  description = "Currently, there are no therapies available to display. Please check back soon as we continue to update our offerings. If you have specific therapy needs or questions, feel free to contact us—we’re here to assist you on your wellness journey.",
  onClick,
  containerClass,
  btnTitle = "Reload",
  isShowButton = true,
}) {
  return (
    <div
      className={twMerge(
        "flex flex-col justify-center max-w-3xl min-h-72",
        containerClass
      )}
    >
      <p className="section-title !mb-6 ">{title}</p>
      <p className="section-content">{description}</p>
      {isShowButton && (
        <button
          onClick={onClick ? onClick : () => window.location.reload()}
          type="button"
          className="site-button-primary"
        >
          {btnTitle}
        </button>
      )}
    </div>
  );
}
