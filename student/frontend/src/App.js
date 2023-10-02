
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Dashboard from './Dashboard'
import Studentlist from './student/Studentlist';
import AddStudent from './Add/Add';
import Edit from './Edit/Edit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/All' element={<Studentlist/>}/>
      <Route path='/add' element={<AddStudent/>}/>
      <Route path='/Edit/:id' element={<Edit/>}/>
      
      </Routes>
    
    </>
  );
}

export default App;
