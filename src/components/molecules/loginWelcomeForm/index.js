import './index.css'
import {WelcomeText,Buttons} from '../../../components'
import {TopRight,Eye,Person,Lock} from '../../../assets'
import {Link} from 'react-router-dom'

const style={
  textDecoration: 'none'
}

const WelcomeForm = () => {
  return (
    <div className='formContainer'>
      <WelcomeText title='Welcome'
        descOne='Sign in to your account' color='#000'
        font='Cairo' weight='normal' size='1.437em'
        align='center' height='150px' justify='center'/>
      <img src={TopRight} className='TopRight' alt='double wave gradient illustrations'/>
      <form>
        <img src={Eye} alt='straighthrought eye icon'/>
        <img src={Person} alt='person icon'/>
        <img src={Lock} alt='lock icon'/>
        <input name='email' placeholder='yourid@corporation.com'/>
        <input name='password' placeholder='password'/>
        <p>forgot your password?</p>
        <Link style={style} to='/studentPageHome'>
          <Buttons title='Login'/>
        </Link>
      </form>

    </div>
  )
}

export default WelcomeForm
