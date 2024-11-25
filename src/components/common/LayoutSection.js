"use client";
import { useState } from "react";
import { Footer, Navbar } from "@/components/common";
// import { Layout } from "antd";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setOpenLoginModal,
  setResetModalSlice,
} from "@/redux/feature/authModalSlice";
import {
  fetchUserData,
  setResetAuthSlice,
  setUserSession,
} from "@/redux/feature/authSlice";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React from "react";

// const { Content } = Layout;

export const LayoutSection = ({ children, sessionData }) => {
  const { data: session, status } = useSession();
  const { userSession } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (userSession === null && !session) {
      dispatch(setResetAuthSlice());
      dispatch(setUserSession(null));
    } else {
      dispatch(setUserSession(session));
      dispatch(fetchUserData(session));
    }
  }, [session]);

  const setReduxState = async () => {
    await dispatch(setOpenLoginModal(false));
  };

  useEffect(() => {
    try {
      const loginPopup = searchParams.get("loginpopup");
      const nextUrl = searchParams.get("next");

      if (loginPopup === "true" && !session) {
        dispatch(setOpenLoginModal(true));
      }

      if (nextUrl && session) {
        router.push(`${nextUrl}`);
        setReduxState();
      } else if (session) {
        setReduxState();
      }
    } catch (eror) {
      console.log("redirect error", eror);
    }
  }, [session]);

  return (
    <>
      <div>
        {/* Header */}
        <Navbar />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />

        <style jsx>{`
          header {
            background-color: #333;
            color: white;
            padding: 10px;
          }

          nav ul {
            display: flex;
            list-style-type: none;
            padding: 0;
          }

          nav a {
            color: white;
            text-decoration: none;
          }

          nav a.active {
            font-weight: bold;
            border-bottom: 2px solid #fff;
          }

          footer {
            background-color: #222;
            color: white;
            padding: 20px;
          }
        `}</style>
      </div>
    </>
  );
};
