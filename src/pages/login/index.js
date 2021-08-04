import {WelcomeForm,Header} from '../../components'
import {LoginHuman,LoginWaves,FormBoxVector,Tree} from '../../assets'
import './index.css'

const Login = () => {
  return (
    <div className='container'>
      <WelcomeForm className='formCon'/>
      <img src={LoginHuman} className='LoginHuman' alt='Human Boy Illustration While Sitting on Box'/>
      <img src={LoginWaves} className='LoginWaves' alt='waves illustration'/>
      <img src={FormBoxVector} className='FormBoxVector' alt='form box vector illustration'/>
      <img src={Tree} className='tree' alt='tree illustration vector'/>
    </div>
  )
}

export default Login
