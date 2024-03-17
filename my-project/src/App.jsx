import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Signin from './component/Signin';
import Signup from './component/Signup';
import Dashboard from './component/Dashboard';
import Send from './component/Send';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path='/' element = {<Signin/>}/>
          <Route path='/signup' element = {<Signup/>} />
          <Route path='/dashboard' element = {<Dashboard/>}/>
          <Route path='/send' element= {<Send/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
