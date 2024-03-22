import classNames from "classnames"

const Skeleton = ({times, className}) => {
  const boxes = Array(times).fill(0).map((_,i) => {
    const outerClassName = classNames(
      "relative",
      "overflow-hidden",
      "bg-gray-200",
      "mb-2.5",
      className
    );
    const innerClassName = classNames(
      "animate-shimmer",
      "absolute",
      "inset-0",
      "-translate-x-full",
      "bg-gradient-to-r",
      "from-gray-200",
      "via-white",
      "to-gray-200"
    );
    return(
      <div className={outerClassName} key={i}>
        <div className={innerClassName}/>
      </div>
    )
  })
  return boxes
}
export default Skeleton;