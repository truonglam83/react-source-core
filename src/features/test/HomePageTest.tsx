import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { loginMock, logout } from "@/store/auth/auth.service";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
export const HomePageTest = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("log out");

    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className={styles.test_container}>
      <h1>Home Page</h1>
      {user && <p>Welcome user {user.id}</p>}
      <button onClick={handleLogout} className={styles.test_css}>
        Logout
      </button>
    </div>
  );
};
