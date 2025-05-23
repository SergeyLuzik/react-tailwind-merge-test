import { twMerge } from "tailwind-merge";

export const App = ({ className }) => {
  const baseClasses = "pb-3 p-30 bg-blue-500 pt-6 pt-1";
  const mergedClasses = twMerge(baseClasses, className);
  return <div className={mergedClasses}>...</div>;
};
