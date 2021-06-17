import {AcaWaves,
BubMid,
BubLeft,
BubRight,
Flowers} from '../../assets'
import "./index.css"
import {Header,Inputs,ActivityDetails} from '../../components'

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

      <ActivityDetails col='2' row='4'isActivity='true' height='360px' width='650px' left='100px' top='182px' title='Activity Details' display='grid'/>
      <ActivityDetails col='1' row='3'height='360px' width='450px' right='100px' top='182px' title='Activity Details' display='flex'/>
    </div>
  )
}

export default ActivityForm
