import { Routes, Route, BrowserRouter } from "react-router";
import RootLayout from "@/pages/layout";
import RootPage from "@/pages";
import App from "@/pages/app";
import NotFound from "@/pages/misc/NotFound";
import SignIn from "@/auth/SignIn";
import SignUp from "@/auth/SignUp";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<RootPage />} />

          {/* App / Dashboard */}
          <Route path="/app" element={<App />} />

          {/* Authentication */}
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          {/* Misc / Other */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
