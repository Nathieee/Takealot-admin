
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProductCreatePage from './pages/ProductCreatePage';
import UsersCreatePage from './pages/UsersCreatePage';
import ProductDisplayPage from './pages/ProductDisplayPage';
import UserDisplayPage from './pages/UsersDisplayPage';


function App(){
  return(  
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardPage />}/>
        <Route path='/create-product' element={<ProductCreatePage />}/>
        <Route path='/create-user' element={<UsersCreatePage />}/>
        <Route path='/view-products' element={<ProductDisplayPage />}/>
        <Route path='/view-users' element={<UserDisplayPage />}/>        
      </Routes>
    </BrowserRouter>  
  )
}


export default App;