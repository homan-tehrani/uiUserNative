import React,{useState , useReducer} from "react"

export default function PointOfViewMultiMedia() {
    const initialState ={
        isShowNameActive:false,
        isShowEmailActive:false,
        isShowTextArea:false
    }
       
    

    const isActiveInputReducer=(state , action)=>{

        switch(action.type){

            case "ACTIV_INPUTNAME": {
                const newState= initialState
                newState.isShowNameActive=true
                
                return newState
            }

            case "ACTIVE_INPUTEMAIL":{
                const newState= initialState
                newState.isShowEmailActive=true
                
                return newState
            }

            case "ACTIVE_TEXTAREA":{
                const newState= initialState
                newState.isShowTextArea=true
                
                return newState
            }

            default : return state
        }

    }
   
    const [state , dispatch]=useReducer(isActiveInputReducer , initialState)

    

  return (
    <div className='w-full h-max bg-neutral-100 py-20'>
        <div className='container mx-auto h-max '>
            <div className='w-4/6 h-max  mx-auto flex flex-col items-center '>
                <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-10 fill-cyan-700' viewBox="0 0 24 24" ><path d="M5 11V13H19V11H5Z"></path></svg>
                    <h2 className='text-xl'>دیدگاه شما</h2>
                </div>
                <div className='w-full h-max flex flex-col items-center'>
                    <div className='flex flex-col w-full h-max gap-y-3'>
                    <p>دیدگاهتان را بنویسید</p>
                    <p className='opacity-70'>نشانی ایمیل شما منتشر نخواهد شد</p>
                    </div>
                    
                    <form className='w-full h-max   flex flex-col  '>
                        <div className='w-full  h-max flex flex-col gap-y-4 sm:flex-row items-center justify-center sm:gap-x-6 py-5' >
                        <fieldset  className={`${state.isShowNameActive ? 'border-cyan-700' : 'border-black '} border-2 opacity-70 flex items-center justify-center h-16  pr-3 rounded-xl w-full sm:w-1/2`}>
                            <legend className='px-2'>نام و نام خانوادگی</legend>
                            <input  onFocus={()=>dispatch({type:"ACTIV_INPUTNAME"})} className='w-full outline-0 h-full rounded-xl bg-inherit' type="text" />
                        </fieldset>

                        <fieldset className={`${state.isShowEmailActive ? 'border-cyan-700' : 'border-black'} border-2  opacity-70 flex items-center justify-center h-16  pr-3 rounded-xl w-full sm:w-1/2`}>
                            <legend className='px-2'>ایمیل</legend>
                            <input onFocus={()=>dispatch({type:"ACTIVE_INPUTEMAIL"})} className='w-full outline-0 h-full rounded-xl bg-inherit' type="email" />
                        </fieldset>
                        </div>

                        <div className='w-full h-max mt-4 flex flex-col gap-y-3 items-end'>
                            <textarea onFocus={()=>dispatch({type: "ACTIVE_TEXTAREA"})} className={` ${state.isShowTextArea ? 'border-cyan-700' : 'border-black'} border h-52 w-full pr-4 pt-2 rounded-xl resize-none outline-none `}></textarea>
                            <button className='border border-stone-300 w-40 h-10 rounded-lg'>ثبت و ارسال</button>
                        </div>

                    </form>


                </div>
                <div className="w-full h-max  mt-20 ">
                    <div className="w-full flex items-center gap-x-4 ">
                    <div className="  w-[100px] md:w-[90px] lg:w-[80px] xl:w-[70px] ">
                    <p className="xs:text-[12px]">دیدگاه ها</p>
                    </div>
                    <span className="xs:text-[10px] xs:w-14 xs:h-6 w-14 h-8 md:h-8 md:w-12 lg:w-12 lg:h-8 bg-cyan-700 rounded-md flex items-center justify-center text-white">32</span>
                    <div className="w-full  bg-stone-300 h-[1px] "></div>
                    </div>

                    <div className="border-b border-stone-300 pb-12">
                    <div className="flex flex-col  my-8 ">
                    <div className="flex items-center ">
                        <div className="w-full flex items-center gap-x-3">
                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-red-200"></div>
                        <div className="flex flex-col gap-y-1">
                            <p className="text-[12px] sm:text-base">عادل</p>
                            <p className="text-[10px] sm:text[12px] opacity-70 text-sm">۶شهریور ۱۴۰۱</p>
                        </div>
                        </div>

                        <div className="text-[8px] sm:text-base w-24  sm:w-36  sm:h-10 flex items-center justify-center">
                            <button className="w-full h-full  rounded-lg border flex items-center justify-center gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 sm:w-6" viewBox="0 0 24 24" width="24" height="24"><path d="M11 20L1 12L11 4V9C16.5228 9 21 13.4772 21 19C21 19.2727 20.9891 19.5428 20.9677 19.81C19.5055 17.0364 16.6381 15.119 13.313 15.0053L13 15H10.9999L11 20ZM8.99986 13H10.9999L13.0341 13.0003L13.3814 13.0065C14.6657 13.0504 15.9053 13.3165 17.0568 13.7734C15.5898 12.0749 13.4204 11 11 11H9V8.16125L4.20156 12L8.99992 15.8387L8.99986 13Z" fill="#000"></path></svg>
                                پاسخ دادن</button>
                        </div>
                    </div>

                    <div className="pr-[52px] h-max w-full mt-3 sm:pr-[65px]">
                        <p className="text-[12px] sm:text-base">مطالب این وبگاه با هدف روشنگری برای شما عزیزان تهیه شده</p>
                    </div>

                    

                    </div>

                    <div className="flex flex-col pr-[48px] sm:pr-[60px] my-8 ">
                    <div className="flex items-center ">
                        <div className="w-full flex items-center gap-x-3">
                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-red-200"></div>
                        <div className="flex flex-col gap-y-1">
                            <p className="text-[12px] sm:text-base">عادل</p>
                            <p className="text-[10px] sm:text[12px] opacity-70 text-sm">۶شهریور ۱۴۰۱</p>
                        </div>
                        </div>

                       
                    </div>

                    <div className=" h-max w-full mt-3 sm:pr-[65px]">
                        <p className="text-[10px] sm:text-base">مطالب این وبگاه با هدف روشنگری برای شما عزیزان تهیه شده</p>
                    </div>

                    

                    </div>

                    

                  
                    
                    </div>

                    <div className="border-b border-stone-300 pb-12">
                    <div className="flex flex-col  my-8 ">
                    <div className="flex items-center ">
                        <div className="w-full flex items-center gap-x-3">
                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-red-200"></div>
                        <div className="flex flex-col gap-y-1">
                            <p className="text-[12px] sm:text-base">عادل</p>
                            <p className="text-[10px] sm:text[12px] opacity-70 text-sm">۶شهریور ۱۴۰۱</p>
                        </div>
                        </div>

                        <div className="text-[8px] sm:text-base w-24  sm:w-36  sm:h-10 flex items-center justify-center">
                            <button className="w-full h-full  rounded-lg border flex items-center justify-center gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 sm:w-6" viewBox="0 0 24 24" width="24" height="24"><path d="M11 20L1 12L11 4V9C16.5228 9 21 13.4772 21 19C21 19.2727 20.9891 19.5428 20.9677 19.81C19.5055 17.0364 16.6381 15.119 13.313 15.0053L13 15H10.9999L11 20ZM8.99986 13H10.9999L13.0341 13.0003L13.3814 13.0065C14.6657 13.0504 15.9053 13.3165 17.0568 13.7734C15.5898 12.0749 13.4204 11 11 11H9V8.16125L4.20156 12L8.99992 15.8387L8.99986 13Z" fill="#000"></path></svg>
                                پاسخ دادن</button>
                        </div>
                    </div>

                    <div className="pr-[52px] h-max w-full mt-3 sm:pr-[65px]">
                        <p className="text-[12px] sm:text-base">مطالب این وبگاه با هدف روشنگری برای شما عزیزان تهیه شده</p>
                    </div>

                    

                    </div>

                    <div className="flex flex-col pr-[48px] sm:pr-[60px] my-8 ">
                    <div className="flex items-center ">
                        <div className="w-full flex items-center gap-x-3">
                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-red-200"></div>
                        <div className="flex flex-col gap-y-1">
                            <p className="text-[12px] sm:text-base">عادل</p>
                            <p className="text-[10px] sm:text[12px] opacity-70 text-sm">۶شهریور ۱۴۰۱</p>
                        </div>
                        </div>

                       
                    </div>

                    <div className=" h-max w-full mt-3 sm:pr-[65px]">
                        <p className="text-[10px] sm:text-base">مطالب این وبگاه با هدف روشنگری برای شما عزیزان تهیه شده</p>
                    </div>

                    

                    </div>

                    

                  
                    
                    </div>


                    

                    

                </div>
            </div>

            
        </div>
      
    </div>
  )
}
