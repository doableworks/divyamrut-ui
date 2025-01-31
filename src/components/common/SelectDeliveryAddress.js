"use client";
import { useState } from "react";
import { Card, Radio, Button } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import CustomButton from "@/components/common/CustomButton";

const SelectDeliveryAddress = ({addressList, handleAddressDelete, onFillAddressFinish}) => {
  const [selectedAddress, setSelectedAddress] = useState();

  const temp = (value)=>{
    console.log("hhhhhh temp", value)
  }

  return (
    <div className="w-full mx-auto p-4 space-y-4">
      <h2 className="text-xl font-semibold">Select Delivery Address</h2>

      <CustomButton
        htmlType="submit"
        className="site-button-primary !w-[200px] !mt-4 w-[-webkit-fill-available] capitalize"
        title="Add New Address"
        loading={false}
        icon={<PlusOutlined />}
        // onClick={handleAddItem}
      />
      <Radio.Group
        onChange={(e) => temp(e.target.value)}
        value={selectedAddress}
        className="w-full"
      >
        <div className="flex flex-row gap-10 w-full flex-wrap">
        {addressList?.map((addr) => (
          <Card
            key={addr.id}
            className={`p-8 border rounded-lg cursor-pointer  transition-all ${
              selectedAddress === addr.id
                ? "border-blue-500 shadow-md"
                : "border-gray-300"
            }`}
            onClick={() => setSelectedAddress(addr.id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <Radio value={addr.id} />
                <div>
                  <p className="section-title !text-left">{addr.label}</p>
                  <div className="mt-3 text-gray-700 space-y-1">
                    <p className="section-content !text-left">{`${addr?.address?.firstname} ${addr?.address?.lastname}`}</p>
                    <p className="section-content !text-left">{`${addr?.address?.house}, ${addr?.address?.street}`}</p>
                    <p className="section-content !text-left">{`${addr?.address?.area}, ${addr?.address?.sector}`}</p>
                    <p className="section-content !text-left">
                      {addr?.address?.landmark}
                    </p>
                    <p className="section-content !text-left">{`${addr?.address?.city}, ${addr?.address?.state}`}</p>
                    <p className="section-content !text-left">{`${addr?.address?.city} ${addr?.address?.state},  ${addr?.address?.pin_code}`}</p>
                    <p className="section-content !text-left">{`email : ${addr?.address?.email}`}</p>
                    <p className="section-content !text-left">{`Phone number :  ${addr?.address?.mobile_no}`}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button type="text" icon={<EditOutlined />} />
                <Button
                  type="text"
                  icon={<DeleteOutlined />}
                  onClick={() => handleAddressDelete(addr.id)}
                  danger
                />
              </div>
            </div>
          </Card>
        ))}
        </div>
      </Radio.Group>
    </div>
  );
};

export default SelectDeliveryAddress;
