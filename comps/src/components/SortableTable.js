import Table from "./Table"
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import UseSorting from "./Hooks/UseSorting";

const SortableTable = (props) => {
  const {data, config} = props;
  const {HandelSort, sortBy,sortOrder, sortedData} = UseSorting(data, config);
  
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