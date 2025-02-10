"use client";
import { useState } from "react";
import { Card, Radio, Button } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import CustomButton from "@/components/common/CustomButton";

const SelectDeliveryAddress = ({addressList, SelectedDeliveryAddre, handleAddNeworEditAddre, onDeleteAddress, onSelectAddress}) => {
  const [AddressOptions, setAddressOptions] = useState(addressList.map(item=>{
    return {value: item.uid, label:""}
  }));

  const temp = (value)=>{
   
  }

  console.log("AddressOptions 33333", AddressOptions)

  return (
    <div className="w-full mx-auto p-4 space-y-4">
      <h2 className="text-xl font-semibold">Select Delivery Address</h2>

      <CustomButton
        htmlType="submit"
        className="site-button-primary !w-[200px] !mt-4 w-[-webkit-fill-available] capitalize"
        title="Add New Address"
        loading={false}
        icon={<PlusOutlined />}
        onClick={()=>handleAddNeworEditAddre(true, null)}
      />
      {/* <Radio.Group
        onChange={(e) => temp(e.target.value)}
        value={SelectedDeliveryAddre?.uid}
        options={AddressOptions}
        className="w-full"
      > */}
        <div className="flex flex-row gap-10 w-full flex-wrap">
        {addressList?.map((addr) => (
          <Card
            key={addr.id}
            className={`p-8 border rounded-lg cursor-pointer  transition-all ${
              SelectedDeliveryAddre?.uid === addr.uid
                ? "border-blue-500 shadow-md"
                : "border-gray-300"
            }`}
            onClick={() => onSelectAddress(addr)}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <Radio value={addr.uid} />
                <div>
                  <p className="section-title !text-left">{addr.address_type}</p>
                  <div className="mt-3 text-gray-700 space-y-1">
                    <p className="section-content !text-left">{`${addr?.first_name} ${addr?.last_name}`}</p>
                    <p className="section-content !text-left">{`${addr?.house}, ${addr?.street}`}</p>
                    <p className="section-content !text-left">{`${addr?.area}, ${addr?.sector}`}</p>
                    <p className="section-content !text-left">
                      {addr?.landmark}
                    </p>
                    <p className="section-content !text-left">{`${addr?.city} ${addr?.state},  ${addr?.pin_code}`}</p>
                    <p className="section-content !text-left">{`email : ${addr?.email}`}</p>
                    <p className="section-content !text-left">{`Phone number :  ${addr?.mobile_no}`}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button type="text" icon={<EditOutlined />}
                onClick={() => handleAddNeworEditAddre(true, addr)}
                 />
                <Button
                  type="text"
                  icon={<DeleteOutlined />}
                  onClick={() => onDeleteAddress(addr.uid)}
                  danger
                />
              </div>
            </div>
          </Card>
        ))}
        </div>
      {/* </Radio.Group> */}
    </div>
  );
};

export default SelectDeliveryAddress;
