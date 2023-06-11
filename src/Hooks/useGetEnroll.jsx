import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useGetContext from "./useGetContext";

const useGetEnroll = (email) => {
  const { loading, tokenLoading } = useGetContext();
  const [axiosSecure] = useAxiosSecure();
  const {
    data: enrolledClasses = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["enrolled"],
    enabled: !loading && !tokenLoading,
    queryFn: async () => {
      const response = await axiosSecure.get(`/enroll/${email}`);

      //   console.log(response);
      return response.data;
    },
  });

  return [enrolledClasses, isLoading, refetch];
};

export default useGetEnroll;
