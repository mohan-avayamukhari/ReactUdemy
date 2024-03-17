import { Fragment } from "react"
const Table = ({data, config, keyFn}) => {
  const rows = data.map((rowData) => {
    return(
      <tr className="border-b" key={keyFn(rowData)}>
        {config.map(row => <td key={row.label} className="p-3">{row.render(rowData)}</td>)}
      </tr>
    )
  })

  const Headers = config.map((column) => {
    if(column.sort){
      return <Fragment key={column.label}>{column.sort()}</Fragment>
    }
    return(
      <th key={column.label}>{column.label}</th>
    )
})

  return(
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {Headers}
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}
export default Table;