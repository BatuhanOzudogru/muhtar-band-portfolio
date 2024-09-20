// import logo from '../assets/muhtarLogo.png'
import {FaSquareXTwitter} from 'react-icons/fa6';
import {FaInstagram} from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shring-0 items-center">
            {/* <img className="mx-2 w-10" src={logo} alt="muhtar" /> */}
            <h1>Muhtar</h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaSquareXTwitter/>
            <FaInstagram/>
        </div>
    </nav>
  )
}

export default Navbar