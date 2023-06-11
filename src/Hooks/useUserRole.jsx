import { useQuery } from "@tanstack/react-query";
import { myAxios } from "./useAxiosSecure";
import useGetContext from "./useGetContext";

const useUserRole = () => {
  const { user, loading } = useGetContext();
  const { data: userRole = [], isLoading: userRoleoading } = useQuery({
    queryKey: ["users"],
    // enabled: !loading && user?.email ? true : false,
    queryFn: async () => {
      // TODO:Token
      const response = await myAxios.get(`/usersRole/${user?.email}`);

      return response.data.role;
    },
  });
  return [userRole, userRoleoading];
};

export default useUserRole;
