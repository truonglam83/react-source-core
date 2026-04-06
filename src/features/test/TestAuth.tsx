import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { loginMock, logout } from "@/store/auth/auth.service";

export const TestAuth = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div>
      <h3>User: {user?.role || "Guest"}</h3>

      <button onClick={() => dispatch(loginMock())}>Login Mock</button>

      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};
