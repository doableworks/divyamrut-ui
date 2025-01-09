import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function CustomButton({
  title,
  className = "",
  style = {},
  icon = null,
  loading = false,
  type = "button",
  spinnerColor = "#fff",
  spinnerSize = "small",
  spinnerStyle = { color: spinnerColor, marginRight: "8px" },
  ...rest
}) {
  return (
    <button
      disabled={loading}
      type={type}
      className={`${className}`}
      style={style}
      {...rest}
    >
      {loading && (
        <Spin
          indicator={<LoadingOutlined spin />}
          size={spinnerSize}
          style={spinnerStyle}
        />
      )}
      {icon && !loading && <span className="mr-2">{icon}</span>}
      {title && <span>{title}</span>}
    </button>
  );
}
