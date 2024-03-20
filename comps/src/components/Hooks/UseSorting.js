import { useState } from "react";
const UseSorting = (data, config) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const HandelSort = (label) => {
    if(label !== sortBy){
      setSortOrder("asc")
      setSortBy(label)
      return;
    }
    if(sortOrder === null){
      setSortOrder("asc")
      setSortBy(label)
    }else if(sortOrder === "asc"){
      setSortOrder("desc")
      setSortBy(label)
    }else{
      setSortOrder(null)
      setSortBy(null)
    }
  }

  let sortedData = data;
  if(sortBy && sortOrder){
    const {sortValue}  = config.find(header => header.label === sortBy);
    sortedData = [...data].sort((a,b) => {
      const sortValueA = sortValue(a)
      const sortValueB = sortValue(b)
      const reverseOrder = sortOrder === "asc"? 1:-1
      if(typeof(sortValueA) === "number"){
        return (sortValueA-sortValueB)*reverseOrder;
      }else{
        return sortValueA.localeCompare(sortValueB)*reverseOrder;
      }
    })
  }
  return {config, HandelSort, sortBy,sortOrder, sortedData}
}
export default UseSorting;