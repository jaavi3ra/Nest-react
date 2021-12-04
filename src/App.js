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
    </BrowserRouter>
  );
}

export default App;
