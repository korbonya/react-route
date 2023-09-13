import { Outlet } from 'react-router-dom';
import Sidebar from './../../components/sidebar';

export default function index() {
  return (
    <div className='flex'>
       <div>
         <Sidebar  />
       </div>

       <div className='w-full'>
        <Outlet />
       </div>
    </div>
  )
}
