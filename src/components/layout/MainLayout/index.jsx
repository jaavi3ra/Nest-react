import { Container } from 'react-bootstrap';
import Navigation from './Navigation';


export default function MainLayout({ children }) {

   return (
      <div id='mainlayout'>

         <Navigation />
         <Container fluid >
            {children}
         </Container>

      </div>

   )
}
