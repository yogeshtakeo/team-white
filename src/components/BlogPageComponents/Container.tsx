import React from "react";
import clsx from "clsx";
import Navbar from "../Navbar";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className = "", children }) => {
  const containerClasses = clsx("container mx-auto px-4 h-screen", className);

  return (
    <>
      <Navbar />
      <div className={containerClasses}>{children}</div>
    </>
  );
};

export default Container;
