import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-[minmax(1rem,1fr)_minmax(0,1200px)_minmax(1rem,1fr)] w-full">
      <div className="col-start-2 w-full">
        {children}
      </div>
    </div>
  );
};

export default Container;



{/* GRID DEFINITION:
        grid-cols-[minmax(20px,1fr)_minmax(0,1200px)_minmax(20px,1fr)]
        Column 1: Left Gutter (Flexible)
        Column 2: Content Area (Max width of 1200px)
        Column 3: Right Gutter (Flexible)
      */}
