import React from 'react';
import Head from '../Scompn/Dash/Head';
import Balance from '../Scompn/Dash/Balance';
import User from '../Scompn/Dash/User';
function Dashboard() {
  return (
    <div>
      <Head value= {'Payments App'}/>
      <Balance />
      <User />
    </div>
  )
}

export default Dashboard
