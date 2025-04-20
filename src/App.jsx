import { twMerge } from "tailwind-merge";

export const App = ({ className }) => {
  const baseClasses = "p-30 bg-blue-500 pt-6";
  const mergedClasses = twMerge(baseClasses, className); // className = "p-10"
  return <div className={mergedClasses}>...</div>;
};
