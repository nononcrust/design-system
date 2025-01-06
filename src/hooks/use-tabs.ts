import { useState } from "react";

export const useTabs = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (value: string) => {
    setValue(value);
  };

  return { value, onChange };
};
