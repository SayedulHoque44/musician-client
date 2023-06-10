import { useQuery } from "@tanstack/react-query";
import { myAxios } from "./useAxiosSecure";
import useGetContext from "./useGetContext";

const useGetEnroll = (email) => {
  const { loading } = useGetContext();
  const { data: enrolledClasses = [], isLoading } = useQuery({
    queryKey: ["enrolled"],
    enabled: !loading,
    queryFn: async () => {
      const response = await myAxios.get(`/enroll/${email}`);

      //   console.log(response);
      return response.data;
    },
  });

  return [enrolledClasses, isLoading];
};

export default useGetEnroll;
