import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const reducer = (state, action) => {
  switch(action.type){
    case "currentValue":{
      return {...state, currentValue: action.payload}
    }
    case "AddALot":{
      return {...state, count: state.count+parseInt(state.currentValue || 0), currentValue: ""}
    }
    default:{
      return {...state, count: state.count+action}
    }
  }
}

const CounterPage = ({initialCount}) => {
  const [state, dispatch] = useReducer(reducer, {count:initialCount, currentValue:""})
  
  const handelClick = (event) => {
    event.preventDefault();
    dispatch({
      type:'AddALot'
    });
  }
  const HandelChange = (event) => {
    dispatch({
      type:"currentValue",
      payload: event.target.value
    })
  }
  return(
    <Panel className="m-3">
      <h1 className="text-lg">Current Count: {state.count}</h1>
      <div className="flex flex-row">
      <Button onClick={() => dispatch(1)}>Increment</Button>
      <Button onClick={() => dispatch(-1)}>Decrement</Button>
      </div>
      <form>
        <label htmlFor="bigNumber">Add a lot</label>
        <input id="bigNumber" className="p-1 m-3 bg-gray-50 border border-gray-300" onChange={HandelChange} value={state.currentValue} type="number"/>
        <Button onClick={(event) => handelClick(event)}>Add it</Button>
      </form>
    </Panel>
  )
}
export default CounterPage;