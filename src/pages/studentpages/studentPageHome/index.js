import './index.css'
import {Header,WelcomeText,Buttons} from '../../../components'
import {StudentWave,HumanInSP} from '../../../assets'
import {Link} from 'react-router-dom'

const StudentPageHome = () => {
  return (
    <div className='containerStudent'>
      <Header position='absolute'/>
      <div>
        <WelcomeText title='Welcome'
          color='#333333'
          descOne='Maria Jokic'
          font='Poppins' weight={600}
          size='1.875em'
          descTwo='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac mauris sagittis sem justo, lorem nunc.'
          sizeTwo='1.125em'
          weightTwo={300}
          align='flex-start'
          height='250px'
          justify='space-between'
          />
        <Link style={{textDecoration:'none'}} to='/profile'><Buttons title='View Profile' bg='#1C4EFF' rad={50} left={72} isTrue={true}/></Link>
      </div>
      <img className='studentWaves' src={StudentWave} alt='student page wave illustration'/>
      <img className='humanInSP' src={HumanInSP} alt='student page human illustration'/>
    </div>
  )
}

export default StudentPageHome
