import React, { useState } from 'react'
import { Layout, LayoutImage, PageContent } from '../../components/layout/Layout.css'
import { Contact } from '../../pages/contact/Contact'
import { Forum } from '../../pages/forum/Forum'
import { Gallery } from '../../pages/gallery/Gallery'
import { Support } from '../../pages/support/Support'
import { Footer } from '../footer/Footer'
import { Menu } from '../menu/Menu'
import { users } from '../../database/users/users'
import { comments } from '../../database/forum/forum'

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
            page === "Soporte" && <Support />
          }
        </PageContent>
      </Layout>
      
      {page === "Inicio" && <Footer/>}

      
        
    </>
  )
}
