import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

const useThunk = (thunk) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const runThunk = useCallback((arg) => {
    setIsLoading(true);
    dispatch(thunk(arg))
    .unwrap()
    .catch((e) => setError(e))
    .finally(() => setIsLoading(false))
  }, [dispatch, thunk]);
  return [runThunk, isLoading, error]
}

export { useThunk };