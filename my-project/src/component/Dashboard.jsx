import React, { useEffect, useState } from 'react';
import Head from '../Scompn/Dash/Head';
import Balance from '../Scompn/Dash/Balance';
import User from '../Scompn/Dash/User';
import axios from 'axios';

function Dashboard() {
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
  const userId = userData?.user?.userId;
  const balance = userData?.user?.balance;

  return (
    <div>
      <Head value={'Payments App'} userid={userId} />
      <Balance balance={balance ? balance.toFixed(2) : 'Loading...'} />
      <User />
    </div>
  );
}

export default Dashboard;
