import { useQuery } from "@tanstack/react-query";
import { myAxios } from "./useAxiosSecure";
import useGetContext from "./useGetContext";

const usePaidClasses = (email, sort) => {
  const { user, loading } = useGetContext();

  //
  const {
    data: Paidclasses = [],
    refetch,
    isLoading: isPaidLoading,
  } = useQuery({
    queryKey: ["PaidClass"],
    enabled: !loading && user?.email ? true : false,
    queryFn: async () => {
      if (email && !sort) {
        const response = await myAxios.get(`/payments/${email}`);

        return response.data;
      } else if (email && sort) {
        const response = await myAxios.get(
          `/paymentsSort?email=${email}&sort=${sort}`
        );

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
