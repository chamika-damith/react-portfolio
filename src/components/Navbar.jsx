import { SiGmail } from 'react-icons/si';
import logo from '../assets/mylogonew.webp';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
function Navbar() {
  return (
    <nav className=" flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt='logo' className='' width={60} height={50} />
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href='https://www.linkedin.com/in/chamika-damith/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'>
          <FaLinkedin />
        </a>

        <a href='https://github.com/chamika-damith'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Github'>
          <FaGithub />
        </a>

        <a href='https://www.instagram.com/chamika.damith71/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Instagram'>
          <FaInstagram />
        </a>

        <a href='chamikadamith9@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Gmail'>
          <SiGmail />
        </a>
      </div>
    </nav>
  )
}

export default Navbar