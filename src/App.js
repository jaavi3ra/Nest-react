import {
  BrowserRouter
  
} from 'react-router-dom'
import MainLayout from './components/layout/MainLayout';
import HomeContext from './components/layout/MainLayout/HomeLayout';


import Router from './components/Router';



function App() {
  return (
    <BrowserRouter>  
      <MainLayout >
        <HomeContext>
          <Router />
        </HomeContext>
      </MainLayout>
    </BrowserRouter> 
  );
}

export default App;
