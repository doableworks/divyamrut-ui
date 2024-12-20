'use client'
import React, {useState} from "react"
import axios from "axios"
import {Button, Result, Input, Form, Skeleton, message, Row, Col} from 'antd';
import { useParams, useRouter } from 'next/navigation';
import Image from "next/image";
import CONSTANTS from '@/contants/contants'
import {
    setOpenLoginModal,
  } from "@/redux/feature/authModalSlice";
  import {useDispatch } from "react-redux";


export const Page = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { uid, token } = params;
    const [password1, setFirstPassword] = useState('')
    const [password2, setSecondPassword] = useState('')
    const [isPasswordResetSuccesfull, setIsPasswordResetSuccessful] = useState(null)
    const handleLoginModel = () => {
        dispatch(setOpenLoginModal(true));
    }
    const [showhide, setShowHide] = useState(false);
    const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();



    const onFinish = async (data) => {
        try {
            setLoading(true)
            data['uid'] = uid;
            data['token'] = token;
            const res = await axios.post(CONSTANTS.NGROK_URL + `api/account/auth/password/reset/confirm/`,
                data
            )
            if (res.status == 200) {
                setIsPasswordResetSuccessful(true)
                setShowHide(true)
                showResponseMessage("success","Password change successfully!")
            } else {
                showResponseMessage("error","Something went wrong!")
                setIsPasswordResetSuccessful(false)
            }
        } catch (err) {
            if (err.response.status == 400) {
                showResponseMessage("error","Something went wrong!")
                message.error(err.response.data.token);
            } else {
                showResponseMessage("error","Something went wrong!")
                message.error(err.response.data);
            }
        }
        finally{
            setLoading(false)
        }
    }

    const showResponseMessage = (type, content) => {
        messageApi.open({
          type: type,
          content: content,
        });
      };
    return (
        <>
        {contextHolder}
        <div className="reset_pass_container ">
            <Row justify={"center"} align={"middle"} style={{marginTop:'10rem', width:"100%"}}>
            <Col
            xs={22}
            sm={16}
            md={12}
            lg={10}
            xl={8}
            xxl={6}
             >
            {(showhide == false) ?
                        <Form
                            name="basic"
                            wrapperCol={{
                                span: 24,
                            }}
                            onFinish={onFinish}
                            autoComplete="off"
                            // style={{width:"100%"}}
                        >
                            <h1 className="reset_heading" style={{marginBottom:"10px"}}>Reset Password </h1>
                            <Form.Item
                                // label="Password1"
                                name="new_password1"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter new password ',
                                    },
                                    {
                                        min: 8,
                                        message: 'Password must contain at least 8 characters!',
                                    },
                                ]}
                            >
                                <Input.Password className="reset_input" placeholder="Enter Password" onChange={setFirstPassword}/>
                            </Form.Item>

                            <Form.Item
                                // label="Password2"
                                name="new_password2"
                                dependencies={['new_password1']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter confirm password ',
                                    },
                                    ({getFieldValue}) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('new_password1') === value) {
                                                return Promise.resolve();
                                            }

                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password className="reset_input" placeholder="Re-enter Password" onChange={setSecondPassword}/>
                            </Form.Item>
                            <Form.Item
                                    wrapperCol={{
                                        span: 24,
                                    }}
                                >
                                    <Button htmlType="submit"
                                    className="reset_email_btn1"
                                    loading={loading}
                                    > Submit </Button>
                                </Form.Item>
                        </Form>
                : <>{isPasswordResetSuccesfull
                    ? <Result
                        icon={ 
                        <Image
                            src={"/asset/Check_icon.svg"}
                            alt="check"
                            width={40}
                            height={40}
                          />}

                        className="reset_heading"
                        title="Reset Successfully"
                        extra={<>
                            <div className="reset_sub_text" style={{marginBottom:"15px"}}>Congratulations! your new password set is succesfully now you can login</div>
                            <Button  size='large' 
                            className="reset_email_btn1" onClick={handleLoginModel}>Login Now</Button>
                            </>
                        }
                    />
                    : <Skeleton active/>
                }</>
            }
            </Col>
            </Row>
        </div>
        </>
    )
}
export default Page;