import { FcGoogle } from "react-icons/fc";
import { FaRegCopyright } from "react-icons/fa6";

import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center text-text-color md:pr-5">
      <h1 className="text-4xl font-medium text-title-color">Fazer Login</h1>

      <button className="my-10 flex items-center justify-center rounded-full border border-solid border-white px-5 py-2.5 text-xl text-white">
        <FcGoogle size={26} />
        &nbsp;&nbsp;Sign in with Google
      </button>

      <LoginForm />

      <p className="absolute bottom-0 hidden items-center justify-center text-sm opacity-75 md:flex">
        <FaRegCopyright size={10} />
        &nbsp;2024 Arison. All Rights Reserved.
      </p>
    </div>
  );
};

export default Login;
