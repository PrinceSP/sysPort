import {Header,DetailsForm} from '../../../components'
import {StAchiev} from '../../../assets'
import './index.css'

const AchievementForm = () => {
  return (
    <div id='containerAchiev'>
      <Header/>
      <DetailsForm/>
      <img src={StAchiev} alt="student achievement page's illustrations" id='stachievImg'/>
    </div>
  )
}

export default AchievementForm
