
import HomeLayout from './HomeLayout';
import Navigation from './Navigation';


export default function MainLayout({ children }) {

   return (
      <div id='mainlayout'>
         <Navigation />
         <HomeLayout>
            {children}
         </HomeLayout>
      </div>

   )
}
