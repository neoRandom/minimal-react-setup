import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/app/index.css";
import AppRouter from "@/app/AppRouter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);
