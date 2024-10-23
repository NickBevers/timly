import React from "react";
import { useNavigate } from "react-router-dom";

const Test: React.FC = () => {
  const navigate = useNavigate();
  return(
    <>
      <h1>Test</h1>
      <div className='w-fit px-6 py-3' onClick={() => navigate('/')}>Dashboard</div>
      <div className='w-fit px-6 py-3' onClick={() => navigate('/test')}>Test</div>
    </>
  )
}

export default Test