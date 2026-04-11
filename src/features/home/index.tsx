import { useAppSelector } from "@/store/hooks";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div>
      <h2>Home</h2>

      <p>User ID: {user?.userId}</p>
      <p>Roles: {user?.roles.join(", ")}</p>
      <p>Permissions: {user?.permissions.join(", ")}</p>

      <div style={{ marginTop: 20 }}>
        <Link to="/test-role-a">Go to TestRoleA</Link>
      </div>

      <div>
        <Link to="/test-role-b">Go to TestRoleB</Link>
      </div>
    </div>
  );
};
