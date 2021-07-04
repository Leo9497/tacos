import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
  media: {
    height: 440,
  },
  titulo: {
    height: 78,
    maxWidth: 400
  },
}));

function NavBar(props) {
const classes = useStyles();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  /*
  const about = useRef(null);
  const inicio = useRef(null);
  const portafolio = useRef(null);
  const contact = useRef(null);
 


  const gotoAbout = () =>
      window.scrollTo({
          top: about.current.offsetTop,
          behavior: "smooth"
      });

      const gotoInicio = () =>
      window.scrollTo({
          top: inicio.current.offsetTop,
          behavior: "smooth"
      });

      const gotoPortafolio = () =>
      window.scrollTo({
          top: portafolio.current.offsetTop,
          behavior: "smooth"
      });

      const gotoContact = () =>
      window.scrollTo({
          top: contact.current.offsetTop,
          behavior: "smooth"
      });
 */
  


  return (
     
    <>
      <nav className="navbar">
        <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
        <CardMedia
          className={classes.titulo}
          image="/images/titulo.png"
        />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/menu"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Menú
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/servicios"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Servicios
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/galería"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Galería
              </NavLink>
            </li>
           
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
        
    </>
   
  
  
  );
}

export default NavBar;