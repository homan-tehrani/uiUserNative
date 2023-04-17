import React,{useState} from "react";

export default function teacherIinvitationForm() {
    const states = ["استان مرکزی" , "استان مازندران"]
    const cities = {
       "استان مرکزی":["اراک","تفرش","آشتیان"],
       "استان مازندران": ["بابلسر" , "ساری" , "نوشهر"]
    }
    const [selectedState , setSelectedState]=useState("")
    const handleStateChange = (event)=>{
        setSelectedState(event.target.value)
    }
    console.log(selectedState);
  return (
    <div className="w-full h-max bg-neutral-100 pt-8 sm:pt-16 pb-32">
      <div className="container h-max mx-auto sm:px-2 ">
        <div className="bg-white px-4 sm:px-6 h-max flex flex-col sm:border border-stone-300  sm:rounded-xl leading-7 sm:leading-8 text-sm sm:text-base">

        <div className='w-full  h-max flex flex-col items-center gap-y-3 pt-12'>
        <div className='flex items-center'>
            
        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 fill-cyan-700' viewBox="0 0 24 24" ><path d="M5 11V13H19V11H5Z"></path></svg>
            <h1 className='text-xl sm:text-2xl'>دریافت اطلاعات مجموعه درخواست کننده</h1>
        </div>
        <p>لطفا پیش از ارسال ایمیل یا تماس تلفنی، ابتدا <span className='text-cyan-600'>قوانین</span> را مشاهده کنید.</p>
        </div>

        <div className="w-full  h-36  flex flex-col gap-y-6 sm:gap-y-0  sm:flex-row justify-center gap-x-3 items-center flex-wrap" >
            
            <div className="w-full sm:w-[280px] md:w-[340px] lg:w-[470px] xl:w-[600px] 2xl:w-[720px] h-max  flex flex-col ">
            <div className="w-full  h-14 border rounded-xl flex items-center justify-between cursor-pointer px-2">
            <select value={selectedState} onChange={handleStateChange} className="w-full outline-none bg-inherit cursor-pointer h-full" name="" id="">
                <option value="">انتخاب استان</option>
                {states.map(state=>
                    <option key={state} value={state}>{state}</option>
                    )}
            </select>
            </div>

           
            </div>
            <div className="w-full sm:w-[280px] md:w-[340px] lg:w-[470px] xl:w-[600px] 2xl:w-[720px] h-max  flex flex-col ">
            <div className="w-full  h-14 border rounded-xl flex items-center justify-between cursor-pointer px-2">
            <select className="w-full outline-none bg-inherit cursor-pointer h-full" name="" id="">
                <option value="">انتخاب شهر</option>
                {selectedState && cities[selectedState].map(city=>
                    <option key={city} value={city}>{city}</option>
                    )}
            </select>
            </div>

           

            </div>

        </div>

        </div>
      </div>
    </div>
  );
}
