import React from "react";

type TIFProps = {
  condition: boolean;
  children: React.ReactNode;
};

export default function IF({ condition, children }: TIFProps) {
  if (condition) return children;
  return null;
}
