import {
  BrowserRouter
  
} from 'react-router-dom'
import MainLayout from './components/layout/MainLayout';

import Router from './components/Router';
import './css/mainlayout.css'


function App() {
  return (
    <BrowserRouter>  
      <MainLayout >
          <Router />
      </MainLayout>
    </BrowserRouter> 
  );
}

export default App;
