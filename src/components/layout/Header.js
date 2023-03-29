import React,{useState , useEffect} from 'react'
import Loading from '../loading'
import Navbar from '../NavBar'
import {imgeProfile} from "../../db.json"

export default function Header() {
    const [imageProfile , setImageProfile]=useState(null)
    useEffect(()=>{
        setImageProfile(imgeProfile)
    },[])

  if(!imageProfile){
    return <Loading/>
  }
  return (
    <header>
    
    <div  className="bg-cyan-800  text-md w-full h-12 flex   items-center justify-center">
    <p className="text-white">1:26:45 مانده تا پخش qdkjjvjfvyucdyuf</p>
    </div>
    <div className=" flex items-center justify-between w-10/12 mx-auto my-4 ">
      
      <div
        
        className="flex items-center "
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='text-black  ' width="40" height="40"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"/></svg>
        <div className="flex items-center justify-center h-10 bg-gray-100 border border-zinc-200 rounded mr-10">
        <svg xmlns="http://www.w3.org/2000/svg" className='fill-slate-400 mr-2' viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg>
          <input
            placeholder="جستجو بین ۱۲۰۰ ویدیو"
            type="text"
            className="xs:w-36 w-96 px-2 mx-1 outline-0 h-full bg-inherit rounded-md"
          />
        </div>
      </div>

      <div className=" w-1/2 justify-end w-full w-1/2 flex items-center   ">
        <div className=" w-2/4 justify-around items-center   md:w-1/4  h-full flex items-center justify-evenly">
      
          <p className="text-sm sm:text-md cursor-pointer ">دیجی کالا</p>
          <div className="  w-12 h-12 rounded-full">
            <img
              src={imageProfile[0].src}
              alt={imageProfile[0].alt}
              className="w-full h-full rounded-full "
            />
          </div>
          
          <svg xmlns="http://www.w3.org/2000/svg" className='fill-teal-300' viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z"/></svg>
        </div>
      
      </div>
    </div>
    <Navbar/>
    </header>
  )
}
