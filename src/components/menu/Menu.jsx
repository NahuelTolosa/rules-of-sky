import React from 'react'
import { StyledMenu } from './Menu.css'
import { MenuItem } from './MenuItem'

export const Menu = ({setPage, page}) => {

  return (
    <StyledMenu>
      <MenuItem setPage={setPage} page={page === "Inicio"} item={"Inicio"} />
      <MenuItem setPage={setPage} page={page === "Galeria"} item={"Galeria"} />
      <MenuItem setPage={setPage} page={page === "Foro"} item={"Foro"} />
      <MenuItem setPage={setPage} page={page === "Tienda"} item={"Tienda"} />
      <MenuItem setPage={setPage} page={page === "Contacto"} item={"Contacto"} />
      <MenuItem setPage={setPage} page={page === "Soporte"} item={"Soporte"} />
      <MenuItem setPage={setPage} page={page === "Perfil"} item={"Perfil"} />
    </StyledMenu>
  )
}
