import { useDispatch, useSelector } from "react-redux";
import { IncreaseByAmount, decrement, increment, reset } from "./counterSlice";
import "../../style/counterview.css";
const CounterView=()=>{

const dispatch=useDispatch();

    const count=useSelector((state)=>state.counter.count);
    return(
        <div className="card">
<h2>Count:{count}</h2>
<button className="button increment" onClick={()=>{dispatch(increment())}}>Increment</button>
<button className="button decrement" onClick={()=>{dispatch(decrement())}}>Decrement</button>
<button className="button reset" onClick={()=>{dispatch(reset())}}>Reset</button>
<button className="button reset" onClick={()=>{dispatch((IncreaseByAmount(5)))}}>Reset</button>
        </div>
    )
}
export default CounterView;