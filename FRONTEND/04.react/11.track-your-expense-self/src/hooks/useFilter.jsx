import { useState } from "react";

export const useFilter = (dataToBeFiltered, callback) => {
  const [query, setQuery] = useState("");

  const filterData = dataToBeFiltered.filter((item) =>
    callback(item).includes(query),
  );

  return [filterData, setQuery];
};
