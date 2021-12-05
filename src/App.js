import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter
} from 'react-router-dom'
import { AuthProvider } from './components/context/AuthContext';
import Router from './components/Routes';



function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
