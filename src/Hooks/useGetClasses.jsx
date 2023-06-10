import { useQuery } from "@tanstack/react-query";
import { myAxios } from "./useAxiosSecure";
import useGetContext from "./useGetContext";

const useGetClasses = (email, status) => {
  const { user, loading } = useGetContext();

  //
  const {
    data: classes = [],
    refetch,
    isLoading: isClassLoading,
  } = useQuery({
    queryKey: ["classes"],
    enabled: !loading,
    queryFn: async () => {
      if (email) {
        const response = await myAxios.get(`/classes/${email}`);
        return response.data;
      } else if (status) {
        const response = await myAxios.get(`/StatusClasses/${status}`);
        return response.data;
      } else {
        const response = await myAxios.get("/AllClasses");
        return response.data;
      }
    },
  });

  return [classes, refetch, isClassLoading];
};

export default useGetClasses;
