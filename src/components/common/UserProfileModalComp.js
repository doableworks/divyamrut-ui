import React, { useState } from "react";
import { Popover, Button } from "antd";
import {
  MoreOutlined,
  UserOutlined,
  LogoutOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { ThreeDots } from "@/icon/icons";

const UserProfilePopover = ({ handleLogout }) => {
  const handlePopoverClose = () => {
    setPopoverVisible(false);
  };

  const content = (
    <div className="p-3 flex flex-col gap-2">
      <Link className="flex items-center gap-2 text-primary" href="/profile">
        <UserOutlined />
        <span>Profile</span>
      </Link>

      <Link className="flex items-center gap-2 text-primary" href="/order-list">
        <UnorderedListOutlined />
        <span>Orders</span>
      </Link>

      <button
        className="flex items-center gap-2 text-primary"
        type="button"
        onClick={() => {
          handleLogout();
          handlePopoverClose();
        }}
      >
        <LogoutOutlined />
        <span>Logout</span>
      </button>
    </div>
  );

  return (
    <Popover placement="bottomRight" content={content} arrow={false}>
      <button type="button">
        <ThreeDots color="#3c3c3d" h={20} />
      </button>
    </Popover>
  );
};

export default UserProfilePopover;
