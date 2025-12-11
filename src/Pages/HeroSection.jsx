import { useRef } from 'react'
import { motion} from 'motion/react'
import Counter from '../Components/Counter'
import { primaryBtn, transparentBtn } from '../Style/ComponentsStyle'
import hero from '../assets/hero.png'

const HeroSection = () => {
  return (
    <section id='home' className='pt-30 pb-20 lg:pt-0 bg-(--primary-color)/98 '>
      <div className="container lg:pt-20 mx-auto flex flex-col lg:flex-row lg:gap-10 gap-y-10 lg:h-screen overflow-hidden lg:items-center">
        <motion.div  initial= {{x: '-100%', opacity: 0}} animate={{x: 0, opacity: 1 }} transition={{duration: .5, delay: .5}} className="w-full lg:w-1/2">
          <h1 className='font-medium text-2xl lg:text-5xl md:text-3xl font-serif '>Transform Your Digital Presence</h1>
          <p className='text-gray-400 my-5 lg:my-10  font-medium md:text-xl'>We create innovative digital solutions that drive growth and elevate your brand. From web development to digital marketing, we're your partners in digital transformation.</p>
          <button className={primaryBtn}>Get Started</button>
          <button className={transparentBtn}>Our Work</button>
          <div className='flex justify-between lg:gap-7'>
            <Counter end={150} title='Projects Completed'/>
            <Counter end={95} title='Clients Satisfaction'/>
            <Counter end={24} title='Team Members'/>
          </div>
        </motion.div>
        <motion.div initial= {{x: '100%', opacity: 0}} animate={{x: 0, opacity: 1 }} transition={{duration: .5, delay: .5}} className="w-full lg:w-1/2">
          <img src={hero} alt="hero image" className=''/>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
