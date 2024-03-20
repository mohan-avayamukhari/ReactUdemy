import { useState, useEffect } from "react";
const UseCounter = (initialCount) => {

  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count])

  const increment = () => {
    setCount(count+1);
  }

  return {count, increment};
}
export default UseCounter;