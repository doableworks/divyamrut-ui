"use client";

import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const AddDeliveryAddress = ({ userAddress, onEdit, onFillAddressFinish }) => {
  const [form] = Form.useForm();

  return (
    <div className="max-w-3xl mx-auto p-4">
        <div>
          <h2 className="text-xl font-bold mb-4">
            {userAddress ? "Edit Address" : "Add Delivery Address"}
          </h2>
          <Form
            form={form}
            onFinish={onFillAddressFinish}
            initialValues={userAddress || {}}
            name="validateOnly"
            layout="vertical"
            autoComplete="off"
            className="space-y-4"
          >
            <Form.Item
              label="Country"
              name="country"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input placeholder="Enter country" />
            </Form.Item>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Form.Item
                label="First name"
                name="firstname"
                rules={[{ required: true, message: "Name is required" }]}
              >
                <Input placeholder="Enter first name" />
              </Form.Item>
              <Form.Item
                label="Last name"
                name="lastname"
                rules={[{ required: true, message: "Name is required" }]}
              >
                <Input placeholder="Enter surname here" />
              </Form.Item>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
            <Form.Item
              label="Apartment/suite/unit/etc"
              name="house"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input placeholder="Apartment/suite/unit/etc" />
            </Form.Item>
            <Form.Item
              label="Street"
              name="street"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input placeholder="Enter street address" />
            </Form.Item>
            {/* </div> */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
            <Form.Item
              label="State"
              name="state"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input placeholder="Enter state" />
            </Form.Item>
            <Form.Item
              label="Town/City"
              name="city"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input placeholder="Enter Town/City" />
            </Form.Item>
            <Form.Item
              label="Pin Code"
              name="pin_code"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input placeholder="Enter pin code" />
            </Form.Item>
            <Form.Item
              label="Landmark"
              name="landmark"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input placeholder="E.g. near build/hospital/school" />
            </Form.Item>
            {/* </div> */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}

            {/* </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Email address is required." },
                ]}
              >
                <Input placeholder="Enter yout email" />
              </Form.Item>
              <Form.Item
                label="Number"
                name="mobile_no"
                rules={[
                  { required: true, message: "Contact number is required" },
                  {
                    pattern: /^\d{10}$/,
                    message: "Please enter a valid 10-digit mobile number",
                  },
                ]}
              >
                <Input placeholder="9979795588" />
              </Form.Item>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block font-jost text-[14px] md:text-[18px] font-[500] leading-[1.5em] text-primary"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                  // style={{
                  //   fontFamily:"jost",
                  //   fontSize:"16px",
                  //   color: "#4A5C24",
                  //   backgroundColor:"#F9F3EB",
                  //   borderColor:"#F9F3EB",
                  // }}
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block font-jost text-[14px] md:text-[18px] font-[500] leading-[1.5em] text-primary"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Company"
                  className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block font-jost text-[14px] md:text-[18px] font-[500] leading-[1.5em] text-primary"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone"
                  className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-jost text-[14px] md:text-[18px] font-[500] leading-[1.5em] text-primary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block font-jost text-[14px] md:text-[18px] font-[500] leading-[1.5em] text-primary"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block font-jost text-[14px] md:text-[18px] font-[500] leading-[1.5em] text-primary"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                className="w-full p-3  h-32 resize-none font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
              ></textarea>
            </div> */}

            <div className="flex justify-end space-x-2">
              {userAddress && (
                <button
                  className="site-button-primary"
                  onClick={() => onEdit()}
                >
                  Cancel
                </button>
              )}
              <button className="site-button-primary" htmlType="submit">
                {userAddress ? "Update Address" : "Save Address"}
              </button>
            </div>
          </Form>
        </div>
    </div>
  );
};

export default AddDeliveryAddress;
