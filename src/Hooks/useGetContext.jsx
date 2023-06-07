import { useContext } from "react";
import { musicianContext } from "../Provider/ContextProvider";

const useGetContext = () => {
  const contextValue = useContext(musicianContext);
  return contextValue;
};

export default useGetContext;
