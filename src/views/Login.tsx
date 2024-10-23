import React from "react";
import LoginForm from "../components/forms/loginForm/LoginForm";

const handleFormSubmit = () => {
  console.log('Form submitted')
}

const Login: React.FC = () => {
  return (
    <div className="flex gap-0">
      {/* 3D clock (or smth) */}

      {/* Login Form */}
      <LoginForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default Login;