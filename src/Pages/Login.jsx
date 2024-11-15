import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-12">
        <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Don't have account? <Link className="text-red-500" to="/auth/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
