// "use client";

// import React, { useState, useRef } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import CONSTANTS from "@/contants/contants";
// import { signIn } from "next-auth/react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   setOpenLoginModal,
//   setOpenRegisterModal,
// } from "@/redux/feature/authModalSlice";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { Button, Form, message, Input, Row, Col, Modal } from "antd";

// const RegisterModal = () => {
//   const [form] = Form.useForm();
//   const [capcha, setCapcha] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const { openRegisterModal } = useSelector((state) => state.authModal);
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const recaptcha = useRef(null);
//   const [messageApi, contextHolder] = message.useMessage();

//   const showResponseMessage = (type, content) => {
//     messageApi.open({
//       type: type,
//       content: content,
//     });
//   };

//   const handleCancel = () => {
//     dispatch(setOpenRegisterModal(false));
//   };

//   const showLoginModal = () => {
//     dispatch(setOpenLoginModal(true));
//     dispatch(setOpenRegisterModal(false));
//   };

//   const onSubmit = async (values) => {
//     if (capcha) {
//       setLoading(true);
//       try {
//         const data = {
//           email: values.email,
//           first_name: values.firstName,
//           last_name: values.lastName,
//           password1: values.password,
//           password2: values.confirm,
//           recaptcha: capcha,
//         };

//         const response = await fetch(
//           CONSTANTS.NGROK_URL + `api/account/auth/register/`,
//           {
//             method: "POST",
//             body: JSON.stringify(data),
//             headers: {
//               "Content-Type": "application/json",
//               "Accept-Language": "en-US",
//             },
//           }
//         );
//         const responseData = await response.json();
//         setLoading(false);
//         if (response.ok && responseData) {
//           // console.log("Success!");
//           showResponseMessage(
//             "success",
//             "You are successfully signed up. Please check your email address for verification."
//           );

//           dispatch(setOpenRegisterModal(false));
//           router.push("/accounts/confirm-email/");

//           // signIn("credentials", { redirect: false, email: values.email, password: values.password })
//           //     .then(({ ok, error }) => {
//           //         if (ok) {
//           //             message.success('You are successfully logged in');
//           //         } else {
//           //             message.error('Invalid details');
//           //             form.resetFields();
//           //         }
//           //     })
//         } else {
//           const errs = [];
//           Object.entries(responseData).forEach((entry) => {
//             const [key, value] = entry;
//             errs.push(`${key}: ${value}`);
//           });
//           console.log("error", errs);
//           showResponseMessage("error", errs);
//           // setServerErrors(errs)
//         }
//         return true;
//       } catch (error) {
//         showResponseMessage(
//           "error",
//           "Something went wrong, please try again later!"
//         );
//         setLoading(false);
//         return false;
//       }
//     }
//   };

//   const onCaptchaChange = (token) => {
//     if (token) {
//       setCapcha(token);
//     }
//   };

//   const onGoogle = () => {
//     dispatch(setOpenLoginModal(false));
//     signIn("google");
//   };

//   return (
//     <>
//       {contextHolder}
//       <Modal
//         open={openRegisterModal}
//         onCancel={handleCancel}
//         footer={null}
//         className="login_modal"
//       >
//         <Row justify={"center"} align={"middle"} style={{ height:'100%', marginTop:"25px"}}>
//         <Col xs={0} sm={0} md={12} lg={12} xl={12} xxl={12} style={{height:"100%"}}>
//               <Image
//                  src="/asset/home/img1.png"
//                  alt="Login"
//                  className="h-full w-auto object-cover rounded-2xl"
//                  fill
//               />
//           </Col>
//           <Col
//             xs={24}
//             sm={24}
//             md={12}
//             lg={12}
//             xl={12}
//             xxl={12}
//             className="flex flex-col items-end pl-2 pb-5 w-full h-full"
//           >
//             <Form
//               name="register"
//               onFinish={onSubmit}
//               // labelCol={{ span: 0 }}
//               wrapperCol={{ span: 24 }}

//               className="h-full w-auto"
//               initialValues={{ remember: true }}
//               autoComplete="off"
//             >
//               <h2 style={{ textAlign: "start" }}>Create an Account</h2>
//               <Row gutter={[8, 8]}>
//                 <Col span={12}>
//                   <Form.Item
//                     name="firstName"
//                     // label="firstName"
//                     tooltip="Please input your first name?"
//                     rules={[
//                       {
//                         required: true,
//                         message: "Please input your first name!",
//                         whitespace: true,
//                       },
//                     ]}
//                     className="margin_bottom"
//                   >
//                     <Input
//                       placeholder="First Name"
//                       className="email_input"
//                       style={{ width: "100%" }}
//                     />
//                   </Form.Item>
//                 </Col>
//                 <Col span={12}>
//                   <Form.Item
//                     name="lastName"
//                     // label="lastName"
//                     tooltip="Please input your last name?"
//                     rules={[
//                       {
//                         required: true,
//                         message: "Please input your last name!",
//                         whitespace: true,
//                       },
//                     ]}
//                     className="margin_bottom"
//                   >
//                     <Input
//                       placeholder="Last Name"
//                       className="email_input"
//                       style={{ width: "100%" }}
//                     />
//                   </Form.Item>
//                 </Col>
//               </Row>

//               <Form.Item
//                 name="email"
//                 // label="E-mail"
//                 rules={[
//                   {
//                     type: "email",
//                     message: "The input is not valid E-mail!",
//                   },
//                   {
//                     required: true,
//                     message: "Please input your E-mail!",
//                   },
//                 ]}
//                 className="margin_bottom"
//               >
//                 <Input placeholder="Email id" className="email_input" />
//               </Form.Item>

//               <Form.Item
//                 name="password"
//                 // label="Password"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please input your password!",
//                   },
//                 ]}
//                 hasFeedback
//                 className="margin_bottom"
//               >
//                 <Input.Password
//                   placeholder="Enter Password"
//                   className="pass_input"
//                 />
//               </Form.Item>

//               <Form.Item
//                 name="confirm"
//                 // label="Confirm Password"
//                 dependencies={["password"]}
//                 hasFeedback
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please confirm your password!",
//                   },
//                   ({ getFieldValue }) => ({
//                     validator(_, value) {
//                       if (!value || getFieldValue("password") === value) {
//                         return Promise.resolve();
//                       }
//                       return Promise.reject(
//                         new Error(
//                           "The new password that you entered do not match!"
//                         )
//                       );
//                     },
//                   }),
//                 ]}
//                 className="margin_bottom"
//               >
//                 <Input.Password
//                   placeholder="Re-enter Password"
//                   className="pass_input"
//                 />
//               </Form.Item>

//               <Form.Item className="captcha margin_bottom">
//                 <ReCAPTCHA
//                   size="small"
//                   sitekey={CONSTANTS.SITE_KEY}
//                   onChange={onCaptchaChange}
//                   ref={recaptcha}
//                 />
//               </Form.Item>

//               {capcha || true ? (
//                 <Form.Item style={{ marginBottom: "0px" }}>
//                   <Button
//                     loading={loading}
//                     htmlType="submit"
//                     size="large"
//                     shape="round"
//                     className="login_btn1"
//                     block
//                   >
//                     Sign up
//                   </Button>
//                 </Form.Item>
//               ) : null}
//             </Form>
//             <div style={{ width: "100%" }}>
//               <div className="or_line">
//                 <div className="left_line" />
//                 Or
//                 <div className="right_line" />
//               </div>
//               <div>
//                 <div className="google_div" onClick={onGoogle}>
//                   <Image
//                     src={"/asset/home/loginModalGoogle.png"}
//                     alt="Google icon"
//                     className={"googleSocialIcon"}
//                     width={24}
//                     height={24}
//                   />
//                   <div className="google_text">Continue with Google</div>
//                 </div>
//               </div>
//               <p className="not_a_member">
//                 Already a member? &nbsp;
//                 <span
//                   onClick={showLoginModal}
//                   style={{ color: "#3F4FE4", cursor: "pointer" }}
//                 >
//                   Log in
//                 </span>
//               </p>
//             </div>
//           </Col>
//         </Row>
//       </Modal>
//     </>
//   );
// };

// export default RegisterModal;

"use client";

import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import CONSTANTS from "@/contants/contants";
import { signIn } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import {
  setOpenLoginModal,
  setOpenRegisterModal,
} from "@/redux/feature/authModalSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button, Form, message, Input, Row, Col, Modal } from "antd";

const RegisterModal = () => {
  const [form] = Form.useForm();
  const [capcha, setCapcha] = useState(null);
  const [loading, setLoading] = useState(false);
  const { openRegisterModal } = useSelector((state) => state.authModal);
  const dispatch = useDispatch();
  const router = useRouter();
  const recaptcha = useRef(null);
  const [messageApi, contextHolder] = message.useMessage();

  const showResponseMessage = (type, content) => {
    messageApi.open({
      type: type,
      content: content,
    });
  };

  const handleCancel = () => {
    dispatch(setOpenRegisterModal(false));
  };

  const showLoginModal = () => {
    dispatch(setOpenLoginModal(true));
    dispatch(setOpenRegisterModal(false));
  };

  const onSubmit = async (values) => {
    if (capcha) {
      setLoading(true);
      try {
        const data = {
          email: values.email,
          first_name: values.firstName,
          last_name: values.lastName,
          password1: values.password,
          password2: values.confirm,
          recaptcha: capcha,
        };

        const response = await fetch(
          CONSTANTS.NGROK_URL + `api/account/auth/register/`,
          {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
              "Accept-Language": "en-US",
            },
          }
        );
        const responseData = await response.json();
        setLoading(false);
        if (response.ok && responseData) {
          showResponseMessage(
            "success",
            "You are successfully signed up. Please check your email address for verification."
          );
          dispatch(setOpenRegisterModal(false));
          router.push("/accounts/confirm-email/");
        } else {
          const errs = Object.entries(responseData).map(
            ([key, value]) => `${key}: ${value}`
          );
          showResponseMessage("error", errs);
        }
        return true;
      } catch (error) {
        showResponseMessage(
          "error",
          "Something went wrong, please try again later!"
        );
        setLoading(false);
        return false;
      }
    }
  };

  const onCaptchaChange = (token) => {
    if (token) {
      setCapcha(token);
    }
  };

  const onGoogle = () => {
    dispatch(setOpenLoginModal(false));
    signIn("google");
  };

  return (
    <>
      {contextHolder}
      <Modal
        open={openRegisterModal}
        onCancel={handleCancel}
        footer={null}
        className="login_modal"
      >
        <Row justify="center" className="h-full mt-6">
          <Col span={12} className="hidden lg:flex items-center">
            <Image
              src="/asset/home/img1.png"
              alt="Login"
              className="h-full w-auto object-cover rounded-2xl"
              fill
            />
          </Col>
          <Col xs={24} sm={24} md={12} className="flex flex-col justify-center">
            <Form
              name="register"
              onFinish={onSubmit}
              form={form}
              className="w-full"
              autoComplete="off"
            >
              <h2 className="text-xl font-semibold text-left">
                Create an Account
              </h2>
              <Row gutter={[16, 16]} className="mt-4">
                <Col span={12}>
                  <Form.Item
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your first name!",
                      },
                    ]}
                  >
                    {/* <Input placeholder="First Name" className="email_input" /> */}

                    <input
                      // type="email"
                      id="fist_name"
                      placeholder="First Name"
                      className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your last name!",
                      },
                    ]}
                  >
                    {/* <Input placeholder="Last Name" className="email_input" /> */}
                    <input
                      // type="email"
                      id="last_name"
                      placeholder="last Name"
                      className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "Invalid email!",
                  },
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                {/* <Input placeholder="Email Address" className="email_input" /> */}

                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                {/* <Input.Password placeholder="Password" className="pass_input" /> */}
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                />
              </Form.Item>
              <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("The passwords do not match!")
                      );
                    },
                  }),
                ]}
              >
                {/* <Input.Password
                  placeholder="ConfiInput.Password
                  placeholder="Confirm Password"
                  className="pass_input"
                />rm Password"
                  className="pass_input"
                /> */}

                <input
                  type="password"
                  id="password"
                  placeholder="Confirm Password"
                  className="w-full p-3 font-jost text-[12px] md:text-[16px] font-[400] leading-[1.4em] focus:bg-text focus:border-[#99C24A] text-secondary bg-[#F9F3EB] border-[#F9F3EB]"
                />
              </Form.Item>
              <Form.Item className="captcha">
                <ReCAPTCHA
                  sitekey={CONSTANTS.SITE_KEY}
                  onChange={onCaptchaChange}
                  ref={recaptcha}
                />
              </Form.Item>
              <Button
                loading={loading}
                htmlType="submit"
                className="w-full bg-blue-600 text-white font-semibold rounded-lg py-2"
              >
                Sign Up
              </Button>

              {/* <button
                type="submit"
                className="w-full bg-q4ca25af text-white p-4 rounded flex items-center justify-center gap-2"
              >
                Sign Up
              </button> */}
            </Form>
            <div className="text-center mt-4">
              <p>
                Already a member?{" "}
                <span
                  onClick={showLoginModal}
                  className="text-blue-600 cursor-pointer"
                >
                  Log in
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default RegisterModal;
