import React, { PureComponent } from 'react';
import { HeaderStyled, Logo }from './Header.styled';
import logo from './logo.svg';

class Header extends PureComponent {
    render() {
        return (
            <HeaderStyled>
                <Logo src={logo}/>
            </HeaderStyled>
        )
    };
};

export default Header;


