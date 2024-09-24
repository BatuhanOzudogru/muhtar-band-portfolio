// import logo from '../assets/muhtarLogo.png'
import { FaYoutube} from 'react-icons/fa6';
import {FaInstagram,FaSpotify } from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shring-0 items-center">
            {/* <img className="mx-2 w-10" src={logo} alt="muhtar" /> */}
            <h1>Muhtar</h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
         
    
        <a href="https://www.instagram.com/muhtarmuzik" target="_blank" rel="noopener noreferrer" className="text-pink-500">
          <FaInstagram />
        </a>
      
        <a href="https://www.youtube.com/channel/UCr36llltlYF1GF1nMAg93Zw" target="_blank" rel="noopener noreferrer" className="text-red-500">
          <FaYoutube />
        </a>
        <a href="https://open.spotify.com/intl-tr/artist/6sCYiCPIeqCEKKe4RswOOV" target="_blank" rel="noopener noreferrer" className="text-green-500">
          <FaSpotify />
        </a>
        </div>
    </nav>
  )
}

export default Navbar