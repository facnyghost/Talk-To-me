import React from 'react'
import { Route,BrowserRouter as  Router, Switch } from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Chat from './components/Chat/Chat'
import Error from './components/Auth/Error';
import ProtectedRoute from './components/Route/ProtectRoute'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSmile, faImage } from '@fortawesome/free-regular-svg-icons'
import { faSpinner, faEllipsisV, faUserPlus, faSignOutAlt, faTrash, faCaretDown, faUpload, faTimes, faBell } from '@fortawesome/free-solid-svg-icons'
library.add(faSmile, faImage, faSpinner, faEllipsisV, faUserPlus, faSignOutAlt, faTrash, faCaretDown, faUpload, faTimes, faBell)

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
      <Route path='/login' component={Login} exact />
      <Route path='/register' component={Register} exact />
      <Route path='/error' component={Error} exact/> 
      <ProtectedRoute extact path='/chat' component={Chat} />
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
