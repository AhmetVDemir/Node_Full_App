
import {BiMenu} from "react-icons/bi"

const Navbar = () => {
    return (
        <nav className='p-5 bg-white shadow md:flex md:items-center md:justify-between'>
            <div className='flex justify-between items-center'>
                <span className='text-2xl font-[Poppins] cursor-pointer'>Mydium</span>

                <span className='text-3xl cursor-pointer mx-2 md:hidden block'>
                        <BiMenu onClick={()=>{alert("deneme")}} />
                </span>
            </div>
            <ul className='md:flex md:items-center md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
                <li className='mx-4 my-6 md:my-0'>
                    <a href="#" className='text-xl  hover:text-yellow-500 duration-500'>Ana Sayfa</a>
                </li>

                <li className='mx-4 my-6 md:my-0'>
                    <a href="#" className='text-xl  hover:text-yellow-500 duration-500'>Makaleler</a>
                </li>

                <li className='mx-4 my-6 md:my-0'>
                    <a href="#" className='text-xl  hover:text-yellow-500 duration-500'>Hakkımızda</a>
                </li>

                <li className='mx-4 my-6 md:my-0'>
                    <a href="#" className='text-xl  hover:text-yellow-500 duration-500'>İletişim</a>
                </li>
            </ul>

        </nav>
    );
}


export default Navbar;