import { useMemo, useState } from "react";
import { User } from "../../models/UserModel";

export function useUser() {
  const [ user, setUser ] = useState<User | null>( null );

  const storeLogin = ( user: User ) => setUser( user );

  const storeLogout = () => setUser( null );

  return useMemo(() => ({
    user,
    storeLogin,
    storeLogout,
  }), [
    user,
  ]);
};
