"use client";
import { useState } from "react";
import { Card, Radio, Button } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import CustomButton from "@/components/common/CustomButton";

const SelectDeliveryAddress = ({ addressList, SelectedDeliveryAddre, handleAddNeworEditAddre, onDeleteAddress, onSelectAddress }) => {

  return (
    <div className="w-full mx-auto p-4 space-y-4">
      <h2 className="text-xl font-semibold">Select Delivery Address</h2>

      <CustomButton
        htmlType="submit"
        className="site-button-primary !w-[200px] !mt-4 w-[-webkit-fill-available] capitalize"
        title="Add New Address"
        loading={false}
        icon={<PlusOutlined />}
        onClick={() => handleAddNeworEditAddre(true, null)}
      />
      <div className="flex flex-row gap-10 w-full flex-wrap">
        {addressList?.map((addr) => (
          <Card
            key={addr.id}
            className={`p-8 border rounded-lg cursor-pointer  transition-all ${SelectedDeliveryAddre?.uid === addr.uid
              ? "border-blue-500 shadow-md"
              : "border-gray-300"
              }`}
            onClick={() => onSelectAddress(addr)}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <Radio value={addr.uid} checked={SelectedDeliveryAddre?.uid == addr.uid} />
                <div>
                  <p className="section-title !text-left">{addr.address_type}</p>
                  <div className="mt-3 text-gray-700 space-y-1">
                    <p className="section-content !text-left">{`${addr?.first_name} ${addr?.last_name}`}</p>
                    <p className="section-content !text-left">{`${addr?.address}, ${addr?.city}`}</p>
                    <p className="section-content !text-left">{`${addr?.state}, ${addr?.country},  ${addr?.pin_code}`}</p>
                    <p className="section-content !text-left">
                   <strong>landmark:</strong>  {addr?.landmark}
                    </p>
                    <p className="section-content !text-left">
                   <strong>note:</strong>  {addr?.order_notes}
                    </p>
                    <p className="section-content !text-left">
                    <strong>email:</strong>  {addr?.email}
                    </p>
                    <p className="section-content !text-left">
                    <strong>Phone number:</strong>  {addr?.phone}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button type="text" icon={<EditOutlined />}
                  onClick={(e) => {
                    handleAddNeworEditAddre(true, addr)
                    e.stopPropagation();
                  }}
                />
                <Button
                  type="text"
                  icon={<DeleteOutlined />}
                  onClick={(e) => {
                    onDeleteAddress(addr.uid, addr.email)
                    e.stopPropagation();
                  }}
                  danger
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SelectDeliveryAddress;
