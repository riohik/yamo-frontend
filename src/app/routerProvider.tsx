'use client'

import { ReactNode } from "react";
import { BrowserRouter as Router } from 'react-router-dom';


function RouterProvider({ children }: { children: ReactNode }) {
  return (
    <Router>{children}</Router>
  );
}

export default RouterProvider;
