import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { loginMock, logout } from "@/store/auth/auth.service";
import styles from "./styles.module.scss";
export const TestAuth = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className={styles.test_container}>
      <h3>User: {user?.role || "Guest"}</h3>

      <button onClick={() => dispatch(loginMock())} className={styles.test_css}>
        Login Mock
      </button>

      <button onClick={() => dispatch(logout())} className={styles.test_css}>
        Logout
      </button>
    </div>
  );
};
