"use client";

import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, Space } from "antd";
import axios from "axios";
import CustomButton from "@/components/common/CustomButton";


const AddDeliveryAddress = ({ isLoading, userAddress, userData, onFillAddressFinish, onEditAddress, onCancel }) => {
  const [form] = Form.useForm();
  const [loader, setloader] = useState({ country: false, state: false })
  const [stateList, setStateList] = useState(null)
  const [countryList, setCountryList] = useState(null)
  const [state, setState] = useState(null)
  const [country, setCountry] = useState({ code: "IN", value: 'India', label: 'India' })

  useEffect(() => {
    getCountryListData()
  }, [])

  useEffect(() => {
    getSateData()
  }, [state])

  const getCountryListData = async () => {
    setloader({ ...loader, country: true });
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/countries/`;

      const response = await axios.get(url, {
        next: { revalidate: 60 },
      });

      // console.log("getCountryListData response", response)
      if (response.status == 200) {
        const data = response.data;
        setCountryList(data)
      }
      else {
        throw new Error("Failed to fetch country data");
      }
    } catch (err) {
      console.log("getCountryListData", err);
      message.error({
        content: "Unable to get state List, Please try again!",
      });
    } finally {
      setloader({ ...loader, country: false });
    }
  };


  const getSateData = async () => {
    setloader({ ...loader, state: true });
    const countryCode = country.code
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/states/${countryCode}/`;

      const response = await axios.get(url, {
        next: { revalidate: 60 },
      });
      // console.log("getSateData response", response)
      if (response.status == 200) {
        const data = response.data;
        setStateList(data)
      }
      else {
        throw new Error("Failed to fetch country data");
      }
    } catch (err) {
      console.log("getSateData", err);
      message.error({
        content: "Unable to get state List, Please try again!",
      });
    } finally {
      setloader({ ...loader, state: false });
    }
  };


  const handleCountryChange = (value, option) => {
    setCountry(option)
  };

  const handleStateChange = (value, option) => {
    setState(option)
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div>
        <h2 className="text-xl font-bold mb-4">
          {userAddress ? "Edit Address" : "Add Delivery Address"}
        </h2>
        <Form
          form={form}
          onFinish={userAddress ? onEditAddress : onFillAddressFinish}
          // initialValues={userAddress || {}}
          initialValues={{
            ...userAddress,
            first_name: userData?.first_name,
            last_name: userData?.last_name,
            country: country.value
          }}

          name="validateOnly"
          layout="vertical"
          autoComplete="off"
          className="space-y-4"
        >
          <Form.Item
            label="Country"
            name="country"
            rules={[{ required: true, message: "Country is required" }]}
          >
            <Select
              // defaultValue={country.value}
              style={{ width: "100%" }}
              onChange={(value, option) => handleCountryChange(value, option)}
              disabled
              showSearch
              value={country.value}
              options={countryList}
            />
          </Form.Item>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Form.Item
              label="First name"
              name="first_name"
              rules={[{ required: true, message: "First name is required" }]}
            >
              <Input placeholder="Enter first name" value={userData?.first_name} disabled />
            </Form.Item>
            <Form.Item
              label="Last name"
              name="last_name"
              rules={[{ required: true, message: "Last name is required" }]}
            >
              <Input placeholder="Enter surname here" value={userData?.last_name} disabled />
            </Form.Item>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
          <Form.Item
            label="Apartment/suite/unit/etc"
            name="apartment"
            rules={[{ required: true, message: "this is required" }]}
          >
            <Input placeholder="Apartment/suite/unit/etc" />
          </Form.Item>
          <Form.Item
            label="Street"
            name="street"
            rules={[{ required: true, message: "Street is required" }]}
          >
            <Input placeholder="Enter street address" />
          </Form.Item>
          {/* </div> */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
          <Form.Item
            label="State"
            name="state"
            rules={[{ required: true, message: "State is required" }]}
          >
            {/* <Input placeholder="Enter state" /> */}
            <Select
              placeholder="Select your state"
              // defaultValue={state.value}
              style={{ width: "100%" }}
              onChange={(value, option) => handleStateChange(value, option)}
              // disabled
              showSearch
              // loading={true}
              options={stateList}
            />
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
          <Form.Item
            label="AddressType"
            name="address_type"
            rules={[{ required: true, message: "This is required" }]}
          >
            <Input placeholder="E.g. Home/Office/Other" />
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
              name="phone"
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

          <div className="flex justify-end gap-5 space-x-2">

            {/* <button
              className="site-button-primary"
              onClick={() => onCancel()}
            >
              Cancel
            </button> */}

            <CustomButton
              // htmlType="submit"
              className="site-button-primary !m-0 capitalize"
              title={"Cancel"}
              loading={isLoading}
              onClick={() => onCancel()}
              // type="submit"
            />


            {/* <button className="site-button-primary" htmlType="submit">
              {userAddress ? "Update Address" : "Save Address"}
            </button> */}

            <CustomButton
              htmlType="submit"
              className="site-button-primary !m-0 capitalize"
              title={userAddress ? "Update Address" : "Save Address"}
              loading={isLoading}
              type="submit"
            />

          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddDeliveryAddress;
