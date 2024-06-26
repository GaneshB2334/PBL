import React from 'react'
import ExpandRight from "/ExpandRight.svg"
import { Link,useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  return (<>
    <div className='overflow-y-scroll m-4'>
      <div className='w-[50%] h-[30vh] m-auto mt-3 flex justify-evenly items-center rounded-xl bg-[#529add] text-[23px] '>
        <p className=''>
          Check for the nearest pet clinic
        </p>
        <img className='w-[30px] h-[30px] cursor-pointer' component={Link} onClick={()=>{navigate('/home/fnby')}}  src={ExpandRight} alt="" />
      </div>
      <div className='w-[50%] h-[30vh] m-auto mt-3 flex justify-evenly items-center rounded-xl bg-[#529add] text-[23px] '>
        <p className=''>
          Book an appointment
        </p>
        <img className='w-[30px] h-[30px] cursor-pointer' component={Link} onClick={()=>{navigate('/home/bookappnt')}}  src={ExpandRight} alt="" />
      </div>
      <div className='w-[50%] h-[30vh] m-auto mt-3 flex justify-evenly items-center rounded-xl bg-[#529add] text-[23px] '>
        <p className=''>
          Yet to be implemented
        </p>
        <img className='w-[30px] h-[30px] cursor-pointer' component={Link} onClick={()=>{navigate('/nothing')}}  src={ExpandRight} alt="" />
      </div>
    </div>
  </>
  )
}

export default Home
