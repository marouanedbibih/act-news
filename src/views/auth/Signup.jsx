import React, { createRef, useRef, useState } from "react";
import {Link } from "react-router-dom";
import axiosClient from "../../api/axios";
import { useStateContext } from "../../contexts/ContextProvider";
function Signup() {
  const { setUser, _setToken, _setRole, setNotification } = useStateContext();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const [message, setMessage] = useState(null);

  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };
    console.log(payload);
    axiosClient
      .post("/signup", payload)
      .then(({ data }) => {
        console.log(data);
        setUser(data.user);
        _setRole(data.user.role);
        _setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message);
        }
      });
  };

  return (
    <div className="grid grid-cols-1">
      {message && (
        <div class="font-regular relative mb-4 block w-full rounded-lg bg-gradient-to-tr from-red-600 to-red-400 p-4 text-base leading-5 text-white opacity-100">
          <i class="fas fa-exclamation mr-2"></i>
          {message}
        </div>
      )}

      <form
        className="w-[439px] h-auto p-6 bg-white rounded-lg shadow flex-col justify-center items-center gap-6 inline-flex"
        onSubmit={onSubmit}
      >
        <div className="flex-col justify-center items-center gap-3 flex">
          <div className="text-neutral-800 text-2xl font-bold font-['Roboto'] leading-9">
            Signup into your account
          </div>
          <div className="w-[372px] text-center text-slate-500 text-base font-bold font-['Roboto'] leading-7">
            Welcome! Enter your details to signup.
          </div>
        </div>

        <div className="self-stretch h-auto flex-col justify-center items-start gap-3 flex">
          {/* name input */}
          <div className="self-stretch h-[71px] justify-start items-start gap-3 inline-flex">
            <div className="grow shrink basis-0 h-[42px] flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch text-gray-800 text-sm font-bold font-['Roboto'] leading-[21px]">
                Full Name
              </div>
              <input
                className="self-stretch h-10 p-4 py-3 bg-white bg-opacity-0 rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex outline outline-0 focus:border-2 focus:border-primary focus:transition"
                placeholder="Entre your name"
                type="text"
                ref={nameRef}
              />
            </div>
          </div>
          {/* email input */}
          <div className="self-stretch h-[71px] justify-start items-start gap-3 inline-flex">
            <div className="grow shrink basis-0 h-[42px] flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch text-gray-800 text-sm font-bold font-['Roboto'] leading-[21px]">
                Email
              </div>
              <input
                className="self-stretch h-10 p-4 py-3 bg-white bg-opacity-0 rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex outline outline-0 focus:border-2 focus:border-primary focus:transition"
                placeholder="name@example.com"
                type="email"
                ref={emailRef}
              />
            </div>
          </div>
          {/* password input */}
          <div className="self-stretch h-[71px] justify-start items-start gap-3 inline-flex">
            <div className="grow shrink basis-0 h-[42px] flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch text-gray-800 text-sm font-bold font-['Roboto'] leading-[21px]">
                Password
              </div>
              <input
                className="self-stretch h-10 p-4 py-3 bg-white bg-opacity-0 rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex outline outline-0 focus:border-2 focus:border-primary focus:transition"
                placeholder="Entre you password"
                type="password"
                ref={passwordRef}
              />
            </div>
          </div>

          {/* password confirmation input */}
          <div className="self-stretch h-[71px] justify-start items-start gap-3 inline-flex">
            <div className="grow shrink basis-0 h-[42px] flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch text-gray-800 text-sm font-bold font-['Roboto'] leading-[21px]">
                Password Confirmation
              </div>
              <input
                className="self-stretch h-10 p-4 py-3 bg-white bg-opacity-0 rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex outline outline-0 focus:border-2 focus:border-primary focus:transition"
                placeholder="Entre you password confirmation"
                type="password"
                ref={passwordConfirmationRef}
              />
            </div>
          </div>
        </div>
        <button className="self-stretch px-[18px] py-2.5 bg-primary rounded-lg shadow justify-center items-center gap-2 inline-flex hover:bg-violet-700 active:bg-violet-900">
          <div className="text-white text-sm font-bold font-['Roboto'] uppercase leading-[21px]">
            Sign Up
          </div>
        </button>
        <p class=" block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          Already have an account? {" "}
          <Link
            class="font-medium text-primary transition-colors hover:text-blue-700"
            to="/login"
          >
             Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
