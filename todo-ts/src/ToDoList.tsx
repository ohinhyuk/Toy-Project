import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  username: string;
  id?: string;
  password: string;
  passwordConfirm?: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>();
  const onValid = (data: IForm) => {
    if (data.password !== data.passwordConfirm) {
      setError(
        "passwordConfirm",
        { message: "password is not same" }
        // { shouldFocus: false }
      );
    }
    // setError("extraError", { message: "Server offline" });
  };
  console.log(errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is Required",
            minLength: { value: 5, message: "Email : minlength is 5..!" },
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Email pattern is ***@naver.com",
            },
            validate: {
              noIan: (value) =>
                value.includes("ian") ? "no nicos allowed" : true,
            },
          })}
          type="text"
          placeholder="write a todo"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("username", { required: "Username is required..!" })}
          type="text"
          placeholder="write a todo"
        />
        <span>{errors?.username?.message}</span>
        <input {...register("id")} type="text" placeholder="write a todo" />
        <span>{errors?.id?.message}</span>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Password minLength is 5",
            },
          })}
          type="text"
          placeholder="write a todo"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("passwordConfirm")}
          type="text"
          placeholder="write a todo"
        />
        <span>{errors?.passwordConfirm?.message}</span>
        <button>submit</button>
        {errors?.extraError?.message}
      </form>
    </div>
  );
}

export default ToDoList;
