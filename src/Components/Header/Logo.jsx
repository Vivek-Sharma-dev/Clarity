import { Link } from 'react-scroll'
const Logo = () => {
  return (
    <span className="flex-1 lg:flex-initial">
      
    <Link to='home' spy={true} smooth={true} offset={-70} duration={500}><span aria-label='Clarity Logo' className={`cursor-pointer  font-medium lg:text-3xl text-2xl text-white`}>Clarity</span></Link>
    </span>
  )
}

export default Logo
