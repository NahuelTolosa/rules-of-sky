import React, { useState } from 'react'
import { Layout, PageContent } from '../../components/layout/Layout.css'
import { Contact } from '../../pages/contact/Contact'
import { Forum } from '../../pages/forum/Forum'
import { Gallery } from '../../pages/gallery/Gallery'
import { Support } from '../../pages/support/Support'
import { Footer } from '../footer/Footer'
import { Menu } from '../menu/Menu'
import { Profile } from '../../pages/profile/Profile'

export const Content = ( ) => {

  //esto deberia hacerse con redux por si
  //hay que redirigir en algun otro punto de
  //la pagina
  const [page, setPage] = useState("Inicio")

  return (
    <>
      <Menu setPage={setPage} page={page}/>

      <Layout bg={page === "Inicio"}>
        <PageContent bg={page === "Inicio"}>
          {
            page === "Galeria" && <Gallery /> ||
            page === "Foro" && <Forum /> ||
            page === "Contacto" && <Contact /> ||
            page === "Soporte" && <Support /> ||
            page === "Perfil" && <Profile />
          }
        </PageContent>
      </Layout>
      
      {page === "Inicio" && <Footer/>}
    </>
  )
}
