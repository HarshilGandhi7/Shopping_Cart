import img from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(){
    return (
        <div className='bg-opacity-100 bg-custom-dark-blue '>
            <div className= ' container w-[80%] mx-auto flex flex-row p-4 justify-between'>
                <NavLink  to='/'>
                    <img src={img} alt="" height={100} width={180}/>
                </NavLink>
                <div className='flex flex-row justify-center items-center gap-5'>
                    <NavLink to='/'>
                        <div className='text-white font-semibold text-lg hover:text-green-300 transition duration-300'>Home</div>
                    </NavLink>
                    <NavLink to='/Cart'>
                    <FontAwesomeIcon 
                        icon={faCartShopping} 
                        className='text-white transition duration-300 hover:text-green-300' 
                        size='lg'
                    />
                    </NavLink>
                </div>
            </div>
        </div>
    )

}