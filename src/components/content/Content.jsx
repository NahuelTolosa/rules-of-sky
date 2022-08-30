import React, { useState, useEffect } from 'react'
import { Layout, PageContent } from '../../components/layout/Layout.css'
import { Contact } from '../../pages/contact/Contact'
import { Forum } from '../../pages/forum/Forum'
import { Gallery } from '../../pages/gallery/Gallery'
import { Support } from '../../pages/support/Support'
import { Footer } from '../footer/Footer'
import { Menu } from '../menu/Menu'
import { Profile } from '../../pages/profile/Profile'
import { Register } from '../register/Register'
import { userLogged } from '../../firebase/auth'
import { LogIn } from '../../pages/logIn/LogIn'

export const Content = ( ) => {

  //esto deberia hacerse con redux por si
  //hay que redirigir en algun otro punto de
  //la pagina
  const [page, setPage] = useState("Inicio")
  const [user, setUser] = useState(null);

  useEffect(() => {
    userLogged(setUser);
  }, []);

  return (
    <>
      <Menu setPage={setPage} page={page} user={user}/>
      <Layout bg={page === "Inicio"}>
        <PageContent bg={page === "Inicio"}>
          {/* <Register/> */}
          {
            page === "Galeria" && <Gallery /> ||
            page === "Foro" && <Forum /> ||
            page === "Contacto" && <Contact /> ||
            page === "Soporte" && <Support /> ||
            page === "Perfil" && <Profile /> ||
            page === "Iniciar Sesion" && <LogIn/>
          }
        </PageContent>
      </Layout>
      
      {page === "Inicio" && <Footer/>}
    </>
  )
}
