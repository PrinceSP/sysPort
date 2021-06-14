import {AcaWaves,
BubMid,
BubLeft,
BubRight,
Flowers} from '../../assets'
import "./index.css"
import {Header} from '../../components'

const ActivityForm = () => {
  return (
    <div className='container'>
      <Header/>
      <div className='ImageContainer'>
        <img src={AcaWaves} alt='illustrations'/>
        <img src={BubMid} alt='illustrations'/>
        <img src={BubLeft} alt='illustrations'/>
        <img src={BubRight} alt='illustrations'/>
        <img src={Flowers} alt='illustrations'/>
      </div>
    </div>
  )
}

export default ActivityForm
