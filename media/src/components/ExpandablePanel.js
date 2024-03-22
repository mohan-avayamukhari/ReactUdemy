import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const ExpandablePanel = ({header, children}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return(
    <div className="mb-2 border rounded">
    <div className="flex p-2 justify-between items-center ">
      <div className="flex flex-row items-center justify-between">
        {header}
      </div>
      <div className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>{isExpanded? <GoChevronLeft/>:<GoChevronDown/>}</div>
      </div>
      {isExpanded && <div className="p-2 border-t">{children}</div>}
    </div>
  )
}
export default ExpandablePanel;