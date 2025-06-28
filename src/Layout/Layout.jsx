import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Router from "../routes/Router";
import Spinner from "../components/Spinner";

const Layout = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {isLoading && <Spinner />}

      <Header />

      <main
        className={`transition-opacity duration-300 ${
          isLoading ? "opacity-50 pointer-events-none" : "opacity-100 flex-grow"
        }`}
      >
        <Router />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
