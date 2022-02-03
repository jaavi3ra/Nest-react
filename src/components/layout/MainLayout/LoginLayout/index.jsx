import logoNest from '../../../../Image/nest2.png'


export default function LoginLayout({ children }) {
    return (

        <div className='login'>    
            <div className="titleLogin">
            <div>
            <img src={logoNest} />
            </div>
                <h1> Bienvenido a NEST</h1>
                <p /><h4> Portal de alumnos en línea</h4>
            </div>  
            {children}
        </div>

    )

}