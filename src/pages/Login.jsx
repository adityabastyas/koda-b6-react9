import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "../redux/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";

const validation = yup.object({
  email: yup.string().email("Email tidak valid").required("Email wajib diisi"),

  password: yup.string().required("Password wajib diisi"),
});

function Login() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(validation),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userValid = useSelector((state) => state.auth.userValid);
  const [error, setError] = React.useState("");

  const onSave = (data) => {
    if (
      data.email === userValid.email &&
      data.password === userValid.password
    ) {
      dispatch(login(data));
      navigate("/");
    } else {
      setError("Email atau password salah");
    }
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
          {formState.errors.email && (
            <span className='text-sm text-red-700'>
              {formState.errors.email.message}
            </span>
          )}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='password'>Password</label>
          <input
            {...register("password")}
            className='border  rounded-lg'
            id='password'
            type='password'
          />
          {formState.errors.password && (
            <span className='text-sm text-red-700'>
              {formState.errors.password.message}
            </span>
          )}
          {error && <span className='text-sm text-red-700'>{error}</span>}
        </div>
        <button className='cursor-pointer border rounded-lg'>Login</button>
      </form>
    </div>
  );
}

export default Login;
