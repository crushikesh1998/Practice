import { useState } from "react";

function App() {
  const[color,setcolor] = useState("orange");
  return ( 
      <div className=" w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-20 ">
          <div className="fixed flex flex-wrap gap-3 bg-white px-4 py-2 rounded-lg">
            <button onClick={() =>{ setcolor("red")}} className="outline-none px-4 py-1 shadow-sm rounded-lg text-white" style={{
              backgroundColor:"red"}}>Red</button>  
            <button onClick={() =>{ setcolor("blue")}} className="outline-none px-4 py-1 shadow-sm rounded-lg text-white" style={{
                backgroundColor:"blue"}}>blue</button>
            <button onClick={() =>{ setcolor("green")}} className="outline-none px-4 py-1 shadow-sm rounded-lg text-white" style={{
              backgroundColor:"green"}}>green</button>
            <button onClick={() =>{ setcolor("yellow")}} className="outline-none px-4 py-1 shadow-sm rounded-lg text-white" style={{
            backgroundColor:"yellow"}}>yellow</button>
            <button onClick={() =>{ setcolor("purple")}} className="outline-none px-4 py-1 shadow-sm rounded-lg text-white" style={{
            backgroundColor:"purple"}}>purple</button>
              
          </div>
        </div>
      </div>
  );
}

export default App;
