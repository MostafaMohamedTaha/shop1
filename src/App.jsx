//import hocs ,component
import { useState,useEffect,useRef } from 'react'
import Layout from './component/shared/Layout';
import 'flowbite'
import  List  from './component/test/List.jsx';
function App() {
  //#region message 
    // hocs using
    // const [counter, setCounter] = useState(0);
    // // function CounterFn() { 
    // //   setCounter(counter + 1)
    // // }
    // const counterHandler=()=>setCounter( counter+1)
    // return (
    //   <div>
    //     <Layout/>
    //     {/* code component implement hocs  */}
    //     <div className="text-center text-[35px] text-bold text-red-600 bg-slate-300 p-3 m-3">soh</div>
    //     <section className='flex justify-center text-red-400 bg-slate-600 p-2 text-2xl'>
    //       <button onClick={()=>{return counterHandler()}}>
    //         {counter}
    //       </button>
    //     </section>
    //   </div>
    // )

  //#endregion
  //#region 2

    // const [counter, setCounter] = useState(0);
    // const [title, setTitle] = useState('react23')
    // const [color, setColor] = useState('#000')
    // const counterHandler = () => setCounter(counter + 1)
    // const titleHandler = () => setTitle('react' + (counter + 1)) 
    // const colorHandler = () => {
    //   setColor('#00' + (counter + 1))
    //   console.log(color)
    // }
    // const handle = () => {
    //   counterHandler()
    //   titleHandler()
    //   colorHandler()
    // }
    // const inputRef=useRef()
    // useEffect(()=>{},[])
    // useEffect(() => {
    //   document.title = title
    //   return () => {
    //     console.log('cleanup')
    //   }
    // }, [title, counter])
    // useEffect(() => {
    //   document.body.style.backgroundColor = color
    //   inputRef.current.focus()
    //   return () => {
    //     console.log('color up')

    //   }
    // }, [title, counter])
  //#endregion
  const fruit=[
    {id:1,name:'f1',category:'fruit'},
    {id:2,name:'f2',category:'fruit'},
    {id:3,name:'f3',category:'fruit'},
    {id:4,name:'f4',category:'fruit'}
  ]
  const vegetable=[
    {id:1,name:'v1',category:'vegetable'},
    {id:2,name:'v2',category:'vegetable'},
    {id:3,name:'v3',category:'vegetable'},
    {id:4,name:'v4',category:'vegetable'}
  ]
  return (
    <>
      <Layout/>
      {/* <section className='grid justify-center'>
        <button className='flex justify-center text-red-400 bg-slate-600 p-2 text-2xl' onClick={handle}>
          {counter}
        </button>
        <span className='flex justify-center text-gray-400 bg-sky-600 p-2 text-2xl'>
          {title}
        </span>
        <input type="text" ref={inputRef} /> 
      </section> */}
      <List/>
      {fruit.length>0?<List items={fruit} category="fruit"/>:null}
      {vegetable.length>0?<List items={vegetable} category="vegetable"/>:null}
        
    </>
  )
}


export default App
