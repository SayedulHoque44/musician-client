import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { ImSpinner6 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-hot-toast";
import { myAxios } from "../../Hooks/useAxiosSecure";
import useGetContext from "../../Hooks/useGetContext";
import loginImg from "../../assets/icon/undraw_secure_login_pdn4.svg";
const Login = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { googleIn, logIn, loading, setLoading } = useGetContext();
  // console.log(loading);
  const {
    register,
    handleSubmit,
    reset,

    watch,
    formState: { errors },
  } = useForm();
  //
  const onSubmit = (data) => {
    logIn(data.email, data.password)
      .then((res) => {
        const currentUser = res.user;
        // console.log(currentUser);
        toast.success(`${currentUser.displayName} Logged!`);
        setLoading(false);
        reset();
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  // googleIn
  const handleGoogleIn = () => {
    googleIn()
      .then((res) => {
        const currentUser = res.user;
        // console.log(currentUser);
        // send user to mongodb usersCollection
        const newUser = {
          email: currentUser.email,
          role: "student",
          Name: currentUser.displayName,
          image: currentUser.photoURL,
        };
        myAxios
          .post("/users", newUser)
          .then((res) => {
            if (res.data.exits) {
              toast.success(`Welcome Back ${currentUser.displayName} !`);
              navigate("/");
            } else {
              toast.success(`Welcome  ${currentUser.displayName}`);
              navigate("/");
            }
          })
          .catch((err) => toast.error(err.message));
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 w-full">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="text-center lg:text-left w-1/2">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <img className="md:block hidden" src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0  md:max-w-sm shadow-2xl bg-base-100 w-full lg:mr-10">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                required
                className="input input-bordered w-full"
                {...register("email")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className=" relative">
                <input
                  type={show ? "text" : "password"}
                  placeholder="password"
                  required
                  {...register("password")}
                  className="input input-bordered w-full"
                />
                {!show ? (
                  <AiFillEyeInvisible
                    size={20}
                    onClick={() => setShow(!show)}
                    className="cursor-pointer absolute bottom-3 right-2"
                  />
                ) : (
                  <AiFillEye
                    size={20}
                    onClick={() => setShow(!show)}
                    className="cursor-pointer absolute bottom-3 right-2"
                  />
                )}
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                disabled={loading}
                type="submit"
                className="btn btn-primary">
                {loading ? <ImSpinner6 /> : "Login"}
              </button>
            </div>
            <p>
              Haven't Account?{" "}
              <Link className="text-primary" to={`/register`}>
                Register
              </Link>{" "}
            </p>
          </form>
          <button
            disabled={loading}
            className="btn normal-case"
            onClick={handleGoogleIn}>
            {loading ? (
              <ImSpinner6 />
            ) : (
              <>
                <FcGoogle className="text-2xl" />
                Google In
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
