"use client";

import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, Space } from "antd";
import axios from "axios";
import CustomButton from "@/components/common/CustomButton";
import Divider from "./Divider";

const AddDeliveryAddress = ({
  isLoading,
  userAddress,
  userData,
  onFillAddressFinish,
  onEditAddress,
  onCancel,
}) => {
  const [form] = Form.useForm();
  const [loader, setloader] = useState({ country: false, state: false });
  const [stateList, setStateList] = useState(null);
  const [countryList, setCountryList] = useState(null);
  const [state, setState] = useState(null);
  const [country, setCountry] = useState({
    code: "IND",
    label: "India",
    value: "India",
  });

  // useEffect(() => {
  //   getCountryListData();
  //   getSateData();
  // }, []);

  useEffect(() => {
    getSateData();
  }, [state]);

  const getCountryListData = async () => {
    setloader({ ...loader, country: true });
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/countries/`;

      const response = await axios.get(url, {
        next: { revalidate: 60 },
      });
      if (response.status == 200) {
        const data = response.data;
        setCountryList(data);
      } else {
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
    const countryCode = country.code;
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/states/${countryCode}/`;

      const response = await axios.get(url, {
        next: { revalidate: 60 },
      });
      if (response.status == 200) {
        const data = response.data;
        setStateList(data);
      } else {
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
    setCountry(option);
  };

  const handleStateChange = (value, option) => {
    setState(option);
  };

  return (
    <div className="space-y-4">
      <div className="md:w-[80%] m-auto py-5 space-y-8">
        <Form
          form={form}
          onFinish={userAddress ? onEditAddress : onFillAddressFinish}
          initialValues={{
            ...userAddress,
            first_name: userData
              ? userData?.first_name
              : userAddress?.first_name,
            last_name: userData ? userData?.last_name : userAddress?.last_name,
            email: userData ? userData?.email : userAddress?.email,
            country: country.value,
          }}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
          className="space-y-6"
        >
          <h2 className="text-xl font-semibold text-[--neutral]">
            Contact Information
          </h2>
          <Divider />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Email address is required." },
              ]}
            >
              <Input
                placeholder="Enter yout email"
                disabled={userData || userAddress?.email}
              />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                { required: true, message: "Contact number is required" },
                {
                  pattern: /^\d{10}$/,
                  message: "Please enter a valid 10-digit mobile number",
                },
              ]}
            >
              <Input placeholder="Enter contact number" />
            </Form.Item>
          </div>

          <h2 className="text-xl font-semibold text-[--yellow]">
            {userAddress ? "Edit Delivery Address" : "Add Delivery Address"}
          </h2>
          <Divider />

          <Form.Item
            name="country"
            rules={[{ required: true, message: "Country is required" }]}
          >
            <Select
              style={{ width: "100%" }}
              onChange={(value, option) => handleCountryChange(value, option)}
              disabled
              showSearch
              value={country.value}
              options={countryList}
              size="large"
            />
          </Form.Item>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Form.Item
              name="first_name"
              rules={[{ required: true, message: "First name is required" }]}
            >
              <Input
                placeholder="Enter first name"
                value={userData?.first_name}
              />
            </Form.Item>
            <Form.Item
              name="last_name"
              rules={[{ required: true, message: "Last name is required" }]}
            >
              <Input
                placeholder="Enter lastname here"
                value={userData?.last_name}
              />
            </Form.Item>
          </div>
          <Form.Item
            name="address"
            rules={[{ required: true, message: "this is required" }]}
          >
            <Input.TextArea placeholder="Apartment/unit/street/etc" />
          </Form.Item>

          <Form.Item
            name="city"
            rules={[{ required: true, message: "Name is required" }]}
          >
            <Input placeholder="Enter Town/City" />
          </Form.Item>
          <Form.Item
            name="state"
            rules={[{ required: true, message: "State is required" }]}
          >
            <Select
              placeholder="Select your state"
              style={{ width: "100%" }}
              onChange={(value, option) => handleStateChange(value, option)}
              showSearch
              options={stateList}
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="pin_code"
            rules={[{ required: true, message: "Name is required" }]}
          >
            <Input placeholder="Enter pin code" />
          </Form.Item>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Form.Item name="landmark">
              <Input placeholder="Landmark e.g. near build/hospital/school (optional)" />
            </Form.Item>
            <Form.Item name="address_type">
              <Input placeholder="Address Type e.g. Home/Office" />
            </Form.Item>
          </div>

          <Form.Item name="order_notes">
            <Input.TextArea placeholder="E.g. enter a note for order (optional)" />
          </Form.Item>

          <div className="flex justify-end mt-4 gap-5">
            <CustomButton
              className="site-button-primary !m-0 capitalize"
              title={"Cancel"}
              loading={isLoading}
              onClick={() => onCancel()}
            />

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
