import {Login,StudentPageHome,AchievementForm,ActivityForm,Profile} from '../pages'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/studentPageHome' component={StudentPageHome}/>
        <Route path='/achievementForm' component={AchievementForm}/>
        <Route path='/activityForm' component={ActivityForm}/>
        <Route path='/profile' component={Profile}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
