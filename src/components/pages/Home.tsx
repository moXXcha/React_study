import React, { useEffect } from 'react'
import { useState } from 'react'
import { Header } from '../organisms/Header'
import { Fotter } from '../organisms/Fotter'
import { Content } from '../templates/Content'
const Home = () => {

  type dataType = {taskName:string, dueDate:string}

//   // const [count,setCount] = useState(0);
  const [task, setTask] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const [data, setData] = useState<dataType[]>([]);
  
  useEffect(() => {  
    console.log(data.length)
  }, [data]);

  

  

  return (
  <div className="mx-auto max-w-xl">
    <div className="bg-gray-300">
      <div id="view">
        {data.map(data => (
          <div key={data.taskName}><input type="checkbox"/>{data.taskName}{data.dueDate}</div>
        ))}
      </div>
  </div>

    <div className="mt-">
      <input className="border mx-2" type="text" name="taskName" value={task} onChange={(event) => setTask(event.target.value)}/>
      <input className="border mx-2" type="date" name="date" value={date} onChange={(event) => setDate(event.target.value)}/>
      <button onClick={() => setData([...data, { taskName: task, dueDate: date }])}>保存</button>
    </div>
  




    {/* {count}
    <div className="block mt-4">
      <button className="border px-2 py-1" onClick={() => {setCount(count + 1)}}>
        Increment
      </button>
      <button className="border px-2 py-1" onClick={() => {setCount(count - 1)}}>
        Decrement
      </button>
    </div> */}






    {/* <Header/>

    <Content/>

    <Fotter/> */}
  </div>
  )
}

export default Home