import React from "react";
import { useForm } from "react-hook-form";
import { ImSpinner6 } from "react-icons/im";
import useGetContext from "../../../Hooks/useGetContext";

const AddClass = () => {
  const { loading, user } = useGetContext();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  //
  const onSubmit = (data) => {
    console.log(data);

    // filledSets = 0 , status=pending
    const newClass = {
      ...data,
      instructorName: user.displayName,
      instructorEmail: user.email,
      filledSets: 0,
      status: "pending",
    };
    console.log(newClass);
  };
  return (
    <div className="py-5">
      <h1 className="uppercase text-3xl text-center">Add a class</h1>
      <div className="card flex-shrink-0   shadow-2xl bg-base-100  lg:mr-10">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="flex gap-3">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Class Name</span>
              </label>
              <input
                type="text"
                placeholder="Class name"
                required
                className="input input-bordered"
                {...register("name")}
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Class Image</span>
              </label>
              <input
                type="text"
                placeholder="Image Url"
                required
                className="input input-bordered"
                {...register("imageUrl")}
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Instructor Name</span>
              </label>
              <input
                type="text"
                placeholder="Instructor Name"
                defaultValue={user?.displayName}
                readOnly
                required
                className="input input-bordered"
                // {...register("instructorName")}
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Instructor Email</span>
              </label>
              <input
                type="text"
                placeholder="Instructor Email"
                required
                readOnly
                defaultValue={user?.email}
                className="input input-bordered"
                // {...register("instructorEmail")}
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Available Sets</span>
              </label>
              <input
                type="text"
                placeholder="Available Sets"
                required
                className="input input-bordered"
                {...register("availableSets")}
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                required
                className="input input-bordered"
                {...register("price")}
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button
              disabled={loading}
              type="submit"
              className="btn btn-primary">
              {loading ? <ImSpinner6 /> : "Add Item"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
