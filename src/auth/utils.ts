import supabase from "@/utils/supabase";
import { useNavigate } from "react-router";
import { signUpPath, signInPath, protectedPath, forgotPasswordPath } from "./constants";

const hasEnvVars =
  process.env.VITE_SUPABASE_URL && process.env.VITE_SUPABASE_ANON_KEY;

const isUserAuth = async () => {
  const user = await supabase.auth.getUser();

  return user.error !== null;
};

// Helper to simplify navigation and status passing (can be replaced with context or other mechanism)
const handleRedirect = (
  type: "error" | "success",
  path: string,
  message: string,
) => {
  const navigate = useNavigate();
  navigate(path + `?status=${type}&message=${encodeURIComponent(message)}`);
};

const signUp = async (email: string, password: string) => {
  if (!email || !password) {
    return handleRedirect(
      "error",
      signUpPath,
      "Email and password are required",
    );
  }

  const { error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    console.error(error.message);
    return handleRedirect("error", signUpPath, error.message);
  }

  return handleRedirect(
    "success",
    signUpPath,
    "Thanks for signing up! Please check your email for a verification link.",
  );
};

const signIn = async (email: string, password: string) => {
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return handleRedirect("error", signInPath, error.message);
  }

  const navigate = useNavigate();

  navigate(protectedPath);
};

const forgotPassword = async (email: string, callbackUrl?: string) => {
  if (!email) {
    return handleRedirect("error", forgotPasswordPath, "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    return handleRedirect(
      "error",
      forgotPasswordPath,
      "Could not reset password",
    );
  }

  if (callbackUrl) {
    const navigate = useNavigate();
    navigate(callbackUrl);
  } else {
    handleRedirect(
      "success",
      forgotPasswordPath,
      "Check your email for a reset link.",
    );
  }
};

const signOut = async () => {
  await supabase.auth.signOut();
  const navigate = useNavigate();
  navigate(signInPath);
};

export {
  hasEnvVars,
  isUserAuth,
  handleRedirect,
  signUp,
  signIn,
  forgotPassword,
  signOut,
};
