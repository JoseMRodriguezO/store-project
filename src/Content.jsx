import { Signup } from "./Signup";
import { Login } from "./Login";

export function Content() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      {<Signup />}
      {<Login />}
    </div>
  );
}
