import { updateProfile } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { ImSpinner6 } from "react-icons/im";
import { Link } from "react-router-dom";
import { myAxios } from "../../Hooks/useAxiosSecure";
import useGetContext from "../../Hooks/useGetContext";
import registerImg from "../../assets/icon/undraw_mobile_login_re_9ntv.svg";
const Register = () => {
  const { createUser, loading, setLoading } = useGetContext();
  //
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  //
  const onSubmit = (data) => {
    // console.log(data);
    if (data.password !== data.Cpassword) {
      return toast.error("Password Not Matched!");
    }

    //createUser
    createUser(data.email, data.password)
      .then((res) => {
        const currentUser = res.user;

        //updateProfile
        updateProfile(currentUser, {
          displayName: data.name,
          photoURL: data.PhotoUrl,
        }).then((res) => {
          setLoading(false);

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
                toast.success(`Welcome Back ${data.email} !`);
              } else {
                toast.success(`Welcome  ${data.email}`);
              }
            })
            .catch((err) => toast.error(err.message));

          reset();
        });
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-1/2">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <img src={registerImg} alt="" />
        </div>
        <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-1/2 lg:mr-10">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="input input-bordered"
                {...register("name")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                required
                className="input input-bordered"
                {...register("email")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                required
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[\W_]).+$/,
                    message:
                      "Password must contain at least one capital letter and one special character",
                  },
                })}
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-error">{errors.password.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                required
                {...register("Cpassword")}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="Photo Url"
                required
                {...register("PhotoUrl")}
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button
                disabled={loading}
                type="submit"
                className="btn btn-primary">
                {loading ? <ImSpinner6 /> : "Register"}
              </button>
            </div>
            <p>
              Already Have Account?{" "}
              <Link className="text-primary" to={`/login`}>
                Login
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
