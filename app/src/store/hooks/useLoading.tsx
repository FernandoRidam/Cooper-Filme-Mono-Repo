import { useMemo, useState } from "react";

export function useLoading() {
  const [ loading, setLoading ] = useState<boolean>( false );

  const openLoading = () => setLoading( true );

  const closeLoading = () => setLoading( false );

  return useMemo(() => ({
    loading,
    openLoading,
    closeLoading,
  }), [
    loading,
  ]);
};
