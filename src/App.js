import { FibonacciProvider } from "./context/FibonacciContext";
import FibonacciForm from "./components/FibonacciForm";
import FibonacciList from "./components/FibonacciList";
import Clock from './components/Clock'

function App() {
  return (
    <FibonacciProvider className="h-screen w-screen overflow-hidden p-0 m-0 bg-slate-900">
      <div className="h-screen w-screen overflow-hidden px-[2rem] py-[2rem] m-0 bg-slate-950">
        <Clock className="w-full"/>
        <FibonacciForm className="mx-auto w-fit"/>
        <FibonacciList className="h-full"/>
      </div>
    </FibonacciProvider>
  );
}

export default App;
