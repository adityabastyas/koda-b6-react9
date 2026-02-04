import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSave = () => {
    navigate("/");
  };

  return (
    <div className='h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-purple-700'>
      <form
        onSubmit={handleSubmit(onSave)}
        className='flex flex-col gap-4 p-5 border rounded-2xl bg-white  w-full sm:max-w-sm md:max-w-md'
      >
        <h1 className='text-5xl font-bold'>Login</h1>
        <div className='flex flex-col'>
          <label htmlFor='email'>Email</label>
          <input
            {...register("email")}
            className='border  rounded-lg'
            type='email'
            id='email'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='password'>Password</label>
          <input
            {...register("password")}
            className='border  rounded-lg'
            id='password'
            type='password'
          />
        </div>
        <button className='cursor-pointer border rounded-lg'>Login</button>
      </form>
    </div>
  );
}

export default Login;
