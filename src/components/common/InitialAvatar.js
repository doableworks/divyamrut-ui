import React from 'react';
import { Avatar } from 'antd';  // Importing Ant Design Avatar component
import {UserOutlined} from "@ant-design/icons"

const InitialAvatar = ({ shape="circle", user, size = 30 }) => {

  // Function to generate a random color based on the user's name
  const stringToColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = Math.floor(Math.abs((Math.sin(hash) * 10000) % 1 * 16777216)).toString(16);
    return '#' + '0'.repeat(6 - color.length) + color;
  };

  if (!user?.first_name && !user?.last_name) {
    return <Avatar size={size} icon={<UserOutlined/>} style={{backgroundColor:"gray", borderRadius:shape == "ractangle" ?"10px" :"50%"}} />;
  }

  const initials = `${user?.first_name?.charAt(0)}${user?.last_name?.charAt(0)}`.toUpperCase();

  const backgroundColor = stringToColor(user?.full_name);

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: shape == "ractangle" ? "10px" :  '50%',
        backgroundColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontFamily: "var(--font-plus-jakarta-sans)",
        fontSize: `${size / 2.5}px`,
        fontWeight: 'bold',
      }}
    >
      {initials}
    </div>
  );
};

export default InitialAvatar;
