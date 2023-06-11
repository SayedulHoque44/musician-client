import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useGetContext from "./useGetContext";

const usePaidClasses = (email, sort) => {
  const { user, loading, tokenLoading } = useGetContext();
  const [axiosSecure] = useAxiosSecure();
  //
  const {
    data: Paidclasses = [],
    refetch,
    isLoading: isPaidLoading,
  } = useQuery({
    queryKey: ["PaidClass"],
    enabled: !loading && !tokenLoading,
    queryFn: async () => {
      if (email && !sort) {
        const response = await axiosSecure.get(`/payments/${email}`);

        return response.data;
      } else if (email && sort) {
        const response = await axiosSecure.get(
          `/paymentsSort?email=${email}&sort=${sort}`
        );

        return response.data;
      } else {
        const response = await axiosSecure.get("/payments");
        // console.log(response);
        return response.data;
      }
    },
  });

  return [Paidclasses, refetch, isPaidLoading];
};

export default usePaidClasses;
