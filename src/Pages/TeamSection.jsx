import Team from '../Components/TeamComponents/Team'
import TeamCarousel from '../Components/TeamComponents/TeamCarousel'
import { sectionBaseStyle } from '../Style/ComponentsStyle'

const TeamSection = () => {
  return (
    <section id='team' className={sectionBaseStyle}>
        <div className='container mx-auto flex flex-col gap-15'>
      <Team />
      <TeamCarousel />
        </div>
    </section>
  )
}

export default TeamSection
