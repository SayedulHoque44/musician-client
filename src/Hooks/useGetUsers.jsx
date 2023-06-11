import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useGetContext from "./useGetContext";

const useGetUsers = (email) => {
  const { user, loading } = useGetContext();
  const [axiosSecure] = useAxiosSecure();
  //
  const {
    data: Users = [],
    refetch,
    isLoading: isUserLoading,
  } = useQuery({
    queryKey: ["Users"],
    enabled: !loading,
    queryFn: async () => {
      if (email) {
        const response = await axiosSecure.get(`/users/${email}`);
        return response.data;
      } else {
        const response = await axiosSecure.get("/users");
        return response.data;
      }
    },
  });

  return [Users, refetch, isUserLoading];
};

export default useGetUsers;
