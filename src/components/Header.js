import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import { Container ,Jumbotron,
    } from 'reactstrap';
function Header(){
    return(
        <div >
        <Container >
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
        
            </Nav>
            </Navbar>
        </Container>          
       
       
       </div> 
      
    );
}
export default Header;