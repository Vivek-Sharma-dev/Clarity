import { Link } from 'react-scroll'
const Logo = () => {
  return (
    <Link to='home' spy={true} smooth={true} offset={-70} duration={500}><span className={`cursor-pointer  font-medium lg:text-3xl text-2xl text-white`}>Clarity</span></Link>
  )
}

export default Logo
