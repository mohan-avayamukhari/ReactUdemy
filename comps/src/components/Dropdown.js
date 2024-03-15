import { useState, useEffect, useRef } from "react";
import {GoChevronDown} from "react-icons/go"
import Panel from "./Panel";

const Dropdown = ({options, value, onChange}) => {
  const [isOpen, setIsOpen] = useState(false)
  const divEle = useRef();

  useEffect(() => {
    const handler = (event) =>{
      if(!divEle.current){
        return;
      }
      if(!divEle.current.contains(event.target)){
        setIsOpen(false)
      }
    };
    document.addEventListener("click",handler, true);
    return(() => {
      document.removeEventListener("click", handler)
    })
  },[])

  const handelOptionClick = (option) => {
    onChange(option.label)
    setIsOpen(false);
  }
  return(
    <div ref={divEle} className="w-48 relative">
      <Panel className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(true)}>{value || "Select..."}{<GoChevronDown className="text-lg"/>}</Panel>
      {isOpen && <Panel className="absolute top-full border">{options.map(option => <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handelOptionClick(option)} key={option.label}>{option.label}</div>)}</Panel>}
    </div>
  )
}
export default Dropdown;