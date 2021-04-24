import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {Button} from '../../globalStyles'
import {Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, 
    NavItem, NavLink, NavItemBtn, NavBtnLink
} from './Navbar.elements'

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => {
        setClick(false)
    }
    const showButton = () => {
        if (window.innerWidth < 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)
    
    return (
        <>
        <IconContext.Provider value={{color: 'white'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={closeMobileMenu} click={click}>
                        <NavIcon />
                        Magda
                    </NavLogo>
                    <MobileIcon
                    onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </NavItem>
                    

                        <NavItem>
                            <NavLink to='/gallery'>
                                Gallery
                            </NavLink>
                        </NavItem>
                    

                        <NavItem>
                            <NavLink to='/books'>
                                Books
                            </NavLink>
                        </NavItem>
                    

                        <NavItem>
                            <NavLink to='/contact'>
                                Contact
                            </NavLink>
                        </NavItem>

                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/contact-me">
                                    <Button primary>Message me!</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='./contact-me'>
                                    <Button fontBig primary>
                                    Message me!
                                    </Button>
                                </NavBtnLink>
                            )
                            }
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
