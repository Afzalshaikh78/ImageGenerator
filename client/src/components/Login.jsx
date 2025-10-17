/* eslint-disable no-unused-vars */
// Copyright 2025 PREM
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { User, Mail, Lock, X, Loader2 } from "lucide-react";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin, backendUrl, setToken, setUser } =
    useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (state === "Login") {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form
        onSubmit={onSubmitHandler}
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-white p-10 rounded-xl text-slate-500"
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state}
        </h1>
        <p className="text-sm">Welcome back! Please sign in to continue</p>

        {state !== "Login" && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
            <User size={20} className="text-gray-400" />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="outline-none text-sm"
              placeholder="Full Name"
              required
              disabled={isLoading}
            />
          </div>
        )}

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <Mail size={20} className="text-gray-400" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="outline-none text-sm"
            placeholder="Email Id"
            required
            disabled={isLoading}
          />
        </div>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <Lock size={20} className="text-gray-400" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="outline-none text-sm"
            placeholder="Password"
            required
            disabled={isLoading}
          />
        </div>

        <p className="text-sm text-red-600 my-4 cursor-pointer">
          Forgot password?
        </p>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 w-full text-white py-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              <span>
                {state === "Login" ? "Logging in..." : "Creating account..."}
              </span>
            </>
          ) : (
            <span>{state === "Login" ? "Login" : "Create account"}</span>
          )}
        </button>

        {state === "Login" ? (
          <p className="mt-5 text-center">
            Dont have an account?{" "}
            <span
              className="text-yellow-600 cursor-pointer"
              onClick={() => !isLoading && setState("Sign Up")}
            >
              Sign up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <span
              className="text-yellow-600 cursor-pointer"
              onClick={() => !isLoading && setState("Login")}
            >
              Login
            </span>
          </p>
        )}

        <X
          onClick={() => !isLoading && setShowLogin(false)}
          size={24}
          className="absolute top-5 right-5 cursor-pointer text-gray-500 hover:text-gray-700"
        />
      </motion.form>
    </div>
  );
};

export default Login;
