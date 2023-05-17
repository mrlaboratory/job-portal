import React from "react";
import { useState } from "react";
import "./SocialLoginBtn.css";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const SocialLoginBtn = () => {

  return (
    <div className=" social-button-container w-50 mt-3">
      <div onClick={() => signInWithPopup(auth,provider)} className="">
        <img
        
          className=" social-button"
          src="https://i.ibb.co/gSTHXZJ/google-btn.png"
          alt=""
        />
      </div>
      <div className="">
        <img
          className=" social-button"
          src="https://i.ibb.co/g9f4P0S/github-btn.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SocialLoginBtn;
