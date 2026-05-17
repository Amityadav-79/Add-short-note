import React, { useState } from 'react'

const App = () => {


  const [title, setTitle] = useState('')

  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submithandler = ((e) => {
    e.preventDefault()
    // console.log(title);
    // console.log(details)

    const copyTask = [...task];
    copyTask.push({ title, details })
    setTask(copyTask)
    // console.log(copyTask)


    setTitle('')
    setDetails('')
  })

  const deletenote=((idx)=>{
    const copyTask = [...task]
    // console.log(copyTask[idx])
    copyTask.splice(idx,1)
    setTask(copyTask)
  })
  return (
    <div className='min-h-screen bg-black lg:flex text-white p-10 gap-10'>
      <form onSubmit={(e) => {
        submithandler(e)
      }} className='flex items-start gap-4  lg:w-1/2 flex-col '>
        <h1 className='font-bold text-3xl '>Add notes</h1>
        <input type="text"
          placeholder='Enter Your text'
          className='px-5 py-2 w-full border-2 font-medium rounded text-4xl outline-none'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea type="text"
          className='px-5 py-2  w-full h-40 font-medium flex flex-row items-start  border-2 rounded text-4xl outline-none'
          placeholder='Write Details'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />
        <button className='cursor-pointer bg-white text-black active:bg-gray-300 font-medium w-full px-5 py-2 border-2 rounded'>Add</button>

      </form>

      <div className='p-10 lg:border-l-2 lg:w-1/2'>
        <h1 className='font-bold text-3xl '>Recent notes</h1>
        <div className=' flex flex-wrap items-start justify-start  mt-5  gap-5 overflow-y-auto'>
          {task.map((ele, idx) => {
            return <div key={idx} className='h-52 w-40 bg-white  text-black justify-between relative flex flex-col rounded-2xl p-8 bg-[url("https://png.pngtree.com/background/20250201/original/pngtree-pink-watercolor-flower-rosehip-frame-page-border-picture-image_13243520.jpg")] bg-cover'>
              <div>
                <h3 className='text-xl font-bold leading-tight'>{ele.title}</h3>
                <p className='leading-tight text-xs font-semibold mt-2 text-gray-600'>{ele.details}</p>
              </div>
              <button onClick={()=>{
                deletenote(idx)
              }} className='bg-red-500 text-white font-bold rounded text-sm active:scale-95 cursor-pointer w-full py-1'>Delete</button>
            </div>
          })}


        </div>
      </div>
    </div>
  )
}

export default App
