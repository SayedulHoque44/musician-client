import { useQuery } from "@tanstack/react-query";
import { myAxios } from "./useAxiosSecure";
import useGetContext from "./useGetContext";

const usePaidClasses = (email) => {
  const { user, loading } = useGetContext();

  //
  const {
    data: Paidclasses = [],
    refetch,
    isLoading: isPaidLoading,
  } = useQuery({
    queryKey: ["PaidClass", email],
    enabled: !loading && user?.email ? true : false,
    queryFn: async () => {
      if (email) {
        const response = await myAxios.get(`/payments/${email}`);

        return response.data;
      } else {
        const response = await myAxios.get("/payments");
        // console.log(response);
        return response.data;
      }
    },
  });

  return [Paidclasses, refetch, isPaidLoading];
};

export default usePaidClasses;
