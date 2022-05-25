import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebaseinit";
import "react-toastify/dist/ReactToastify.css";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";
import { toast, ToastContainer } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import useToken from "../../Hooks/useToken";

const Login = () => {
      const navigate = useNavigate();
      const location = useLocation();
  const from = location.state?.from?.pathname || "/";
    const emailRef = useRef("");
  const email = emailRef.current.value;


      const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
   
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
   const [token] = useToken(user || gUser);

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  let signInError;
  if (error || gError) {
    signInError = (
      <p className="text-red-500">{error?.message || gError?.message}</p>
    );
      }
      
  if (token) {
    navigate(from, { replace: true });
  }
    const handelReset = async () => {
      const email = emailRef.current.value;
      if (email) {
        await sendPasswordResetEmail(email);
        toast.success("Sent Email");
      } else {
        toast.warning("Please Enter a Email");
      }
    };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            {signInError}
            <input
              className="btn w-full btn-primary text-white"
              type="submit"
              value="Login"
            />
          </form>
          <p>
            <small>
              New to Website?{" "}
              <Link className="text-primary" to="/register">
                Create New Account
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={handelReset}
            className="btn btn-link text-decoration-none"
          >
            Forget Password
          </button>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-success"
          >
            Continue with Google
          </button>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default Login;
