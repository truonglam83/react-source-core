import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { loginMock, logout } from "@/store/auth/auth.service";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
export const LoginPageTest = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log("login");

    dispatch(loginMock());
    navigate("/");
  };

  return (
    <div className={styles.test_container}>
      <h1>Login Page</h1>

      <button onClick={handleLogin} className={styles.test_css}>
        Login Mock
      </button>
    </div>
  );
};
