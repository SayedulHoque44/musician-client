import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useGetContext from "./useGetContext";

const useUserRole = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading, tokenLoading } = useGetContext();
  const { data: userRole = [], isLoading: userRoleoading } = useQuery({
    queryKey: ["users"],
    enabled: !loading && !tokenLoading,
    queryFn: async () => {
      // TODO:Token
      const response = await axiosSecure.get(`/usersRole/${user?.email}`);

      return response.data.role;
    },
  });
  return [userRole, userRoleoading];
};

export default useUserRole;
