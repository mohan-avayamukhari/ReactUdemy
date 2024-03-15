import { useState } from "react"
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const Accordion = ({items}) => {
  const [currentAccordion, setCurrentAccordion] = useState(-1);

  const handleAccordionClick = (index) => {
    setCurrentAccordion((currentAccordion) => currentAccordion === index? -1:index)
  }

  return(
    <div className="border-x border-t rounded">
      {items.map((item,index) => {
        return(
          <div key={item.id}>
            <div className="flex p-3 justify-between bg-gray-100 border-b items-center cursor-pointer" onClick={()=>handleAccordionClick(index)}>
              {item.label}
              <span className="text-2xl">{currentAccordion === index? <GoChevronUp/>:<GoChevronDown/>}</span>
              </div>
            {currentAccordion === index? <div className="border-b p-5">{item.content}</div>: <div></div>}
          </div>
        )
      })}
    </div>
  )
}
export default Accordion;