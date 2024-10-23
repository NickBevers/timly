import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  return(
    <>
      <h1>Dashboard</h1>
      <div className='w-fit px-6 py-3' onClick={() => navigate('/')}>Dashboard</div>
      <div className='w-fit px-6 py-3' onClick={() => navigate('/test')}>Test</div>
    </>
  )
}

export default Dashboard