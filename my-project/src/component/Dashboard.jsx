import React, { useEffect, useState } from 'react';
import Head from '../Scompn/Dash/Head';
import Balance from '../Scompn/Dash/Balance';
import User from '../Scompn/Dash/User';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const tokenString = `Bearer ${token}`;

      const fetchUserData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/v1/user/name', {
            headers: {
              Authorization: tokenString,
            },
          });
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchUserData();
    }
  }, []);
  const buttonHandle=()=>{
    localStorage.removeItem("token")
    navigate('/')
  }
  const userId = userData?.user?.userId;
  const balance = userData?.user?.balance;

  return (
    <div>
      <button className='absolute bottom-0 right-0 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold 
    hover:text-white py-2 px-4 border border-blue-500  hover:border-transparent rounded-full my-7 mr-7'
    onClick={buttonHandle}
    > Log out</button>
      <Head value={'Payments App'} userid={userId} />
      <Balance balance={balance ? balance.toFixed(2) : 'Loading...'} />
      <User />
    </div>
  );
}

export default Dashboard;
