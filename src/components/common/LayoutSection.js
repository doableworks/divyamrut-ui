"use client";
import { useState } from "react";
import { Footer, Navbar } from "@/components/common";
// import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setResetModalSlice,
} from "@/redux/feature/authModalSlice";
// import {
//   fetchUserData,
//   setResetAuthSlice,
//   setUserSession,
// } from "@/redux/feature/authSlice";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React from "react";

export const LayoutSection = ({ children, sessionData }) => {
  // const { data: session, status } = useSession();
  // const { userSession } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  // useEffect(() => {
  //   if (userSession === null && !session) {
  //     dispatch(setResetAuthSlice());
  //     dispatch(setUserSession(null));
  //   } else {
  //     dispatch(setUserSession(session));
  //     dispatch(fetchUserData(session));
  //   }
  // }, [session]);

  const setReduxState = async () => {
    await dispatch(setOpenLoginModal(false));
  };

  // useEffect(() => {
  //   try {
  //     const loginPopup = searchParams.get("loginpopup");
  //     const nextUrl = searchParams.get("next");

  //     if (loginPopup === "true" && !session) {
  //       dispatch(setOpenLoginModal(true));
  //     }

  //     if (nextUrl && session) {
  //       router.push(`${nextUrl}`);
  //       setReduxState();
  //     } else if (session) {
  //       setReduxState();
  //     }
  //   } catch (eror) {
  //     console.log("redirect error", eror);
  //   }
  // }, [session]);

  return (
    <>
      <div style={{position:"relative", minHeight:"100vh",display: "flex" ,flexDirection: "column",justifyContent: "space-between"  }}>
        <div>
        <Navbar />
        <main >{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};
