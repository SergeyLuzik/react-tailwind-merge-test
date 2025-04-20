import { twMerge } from "tailwind-merge";

export const App = ({ className }) => {
  const baseClasses = "p-20 bg-blue-500";
  const mergedClasses = twMerge(baseClasses, className); // className = "p-10"
  return <div className={mergedClasses}>...</div>;
};
