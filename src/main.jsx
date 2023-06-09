import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import Container from "./Pages/Shared/Container/Container.jsx";
import ContextProvider from "./Provider/ContextProvider.jsx";
import { routes } from "./Routes/Routes.jsx";
import "./index.css";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <Container>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
        <Toaster />
      </QueryClientProvider>
    </Container>
  </ContextProvider>
);
