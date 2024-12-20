"use client";

import React from 'react';
import Head from 'next/head';
import { Row, Col, Result, Button, Typography } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";
import { setOpenLoginModal} from "@/redux/feature/authModalSlice";


const { Paragraph } = Typography;

const Page =()=>{
  const dispatch = useDispatch();

  const onLogin = ()=>{
    dispatch(setOpenLoginModal(true))
  }
  
  return (
    <div className="confirm-email-container" style={{ marginTop: "6rem" }}>
      <Head>
        <title>Verify your email-address</title>
      </Head>
      <div style={{ paddingTop: "15px" }}>
        <Row>
          <Col
            xs={{
              span: 22,
              offset: 1,
            }}
            sm={{
              span: 22,
              offset: 1,
            }}
            md={{
              span: 22,
              offset: 1,
            }}
            lg={{
              span: 20,
              offset: 2,
            }}
            xl={{
              span: 18,
              offset: 3,
            }}
            xxl={{
              span: 16,
              offset: 4,
            }}
          >
            <Result
              icon={<SmileOutlined />}
              title={(
                <Paragraph>
                  We have sent an e-mail to you for verification. Follow the link provided to finalize the signup process. Please <Link href="/contact/">contact us</Link> if you do not receive it within a few minutes.
                </Paragraph>
              )}
              extra={<Button size="large" shape='round' type="primary" onClick={onLogin}>Login Now</Button>}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Page;
