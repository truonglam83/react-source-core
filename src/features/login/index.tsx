import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginWithToken } from "@/store/auth/auth.service";
import { AppDispatch } from "@/store/store";

type FormValues = {
  token: string;
};

export const LoginPage = () => {
  const { register, handleSubmit, setValue } = useForm<FormValues>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  /**
   * Submit login
   */
  const onSubmit = (data: FormValues) => {
    try {
      dispatch(loginWithToken(data.token));
      navigate("/");
    } catch (e) {
      alert("Invalid token");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("token")} placeholder="Paste JWT here" />

        <button type="submit" style={{ marginTop: 10 }}>
          Login
        </button>
      </form>
    </div>
  );
};
