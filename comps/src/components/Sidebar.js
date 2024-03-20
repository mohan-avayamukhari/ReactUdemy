import Link from "./Link";

const Sidebar = () => {
  const links = [
    {label: "Dropdown", path:"/"},
    {label: "Accordion", path:"/accordion"},
    {label: "Buttons", path:"/button"},
    {label: "Modal", path:"/modal"},
    {label: "Table", path:"/table"},
    {label: "Counter", path:"/counter"}
  ]
  return(
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start ml-5">
      {links.map(link => <Link key={link.label} to={link.path} className={"mb-3"} activeClassName={"font-bold border-l-4 border-blue-500 pl-2"}>{link.label}</Link>)}
    </div>
  )
}
export default Sidebar;