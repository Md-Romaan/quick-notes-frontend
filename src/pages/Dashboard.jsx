import React from 'react'
import { useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';

const Dashboard = () => {

    const user = useSelector(state => state.user.user);

    return (
        <>


            <div className='flex flex-row gap-1'>

                <Sidebar />
                <div className=''>
                    
                    <h1>Dashboard {user.name}</h1>
                    <button className="btn">Click</button>

                </div>

            </div>


        </>
    )
}

export default Dashboard;