import { useState, type FormEvent } from "react";
import { useLocation } from "react-router";
import { signIn } from "./utils";

const SignIn = () => {
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const query = new URLSearchParams(location.search);
  const status = query.get("status");
  const message = query.get("message");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await signIn(email, password);
  };

  return (
    <div>
      <h1>Sign In</h1>
      {status && message && (
        <p>
          [{status.toUpperCase()}] {decodeURIComponent(message)}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
