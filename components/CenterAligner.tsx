import React from "react";

type Props = {
  children: React.ReactNode;
  className: string;
};

export default function CenterAligner({ children, className }: Props) {
  return (
    <section
      className={`flex items-center justify-center min-h-screen ${className}`}
    >
      <div className="max-w-[1200px] w-full mx-auto">{children}</div>
    </section>
  );
}