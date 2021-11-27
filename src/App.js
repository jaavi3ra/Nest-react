import {
  BrowserRouter
  
} from 'react-router-dom'
import MainLayout from './components/layout/MainLayout';
import Home from './components/pages/Home';

import Router from './components/Router';



function App() {
  return (
    <BrowserRouter>  
      <MainLayout >
        <Home>
          <Router />
        </Home>
      </MainLayout>
    </BrowserRouter> 
  );
}

export default App;
