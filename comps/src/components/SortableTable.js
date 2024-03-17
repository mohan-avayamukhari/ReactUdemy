import { useState } from "react";
import Table from "./Table"
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const {config, data} = props;

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

  const getIcons = (label, sortBy, sortOrder) => {
    if(sortBy !== label)
    {
      return <div><GoChevronUp/><GoChevronDown/></div>
    }else if(sortOrder == null){
      return <div><GoChevronUp/><GoChevronDown/></div>
    }
    else if(sortOrder === "asc"){
      return <div><GoChevronUp/></div>
    }else if(sortOrder === "desc"){
      return <div><GoChevronDown/></div>
    }
  }


  const updatedConfig = config.map(header => {
    if(!header.sortValue){
      return header;
    }else{
      return {...header, sort:()=> <th className="cursor-pointer hover:bg-gray-100" onClick={() => HandelSort(header.label)}>
        <div className="flex items-center">
          {getIcons(header.label, sortBy, sortOrder)}
          {header.label}
        </div>
        </th>}
    }
  })
  return(
      <Table {...props} config={updatedConfig} data={sortedData}/>
  )
}

export default SortableTable;