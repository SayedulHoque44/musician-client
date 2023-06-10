import { myAxios } from "./useAxiosSecure";
import useGetContext from "./useGetContext";

const usePaidClasses = (email) => {
  const { user, loading } = useGetContext();

  //
  const {
    data: Paidclasses = [],
    refetch,
    isLoading: isClassLoading,
  } = useQuery({
    queryKey: ["classes"],
    enabled: !loading,
    queryFn: async () => {
      if (email) {
        const response = await myAxios.get(`/payments/${email}`);
        return response.data;
      } else {
        const response = await myAxios.get("/payments");
        return response.data;
      }
    },
  });

  return [Paidclasses, refetch, isClassLoading];
};

export default usePaidClasses;
