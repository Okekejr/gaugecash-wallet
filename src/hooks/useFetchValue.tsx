import { useEffect, useState } from "react";

export const useFetchValue = (func: () => Promise<number>) => {
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    func().then((price) => setValue(price));
  }, [func]);

  return { value };
};
