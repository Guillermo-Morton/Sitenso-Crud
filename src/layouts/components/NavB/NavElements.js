import styled from "styled-components"
import { NavLink as Link } from 'react-router-dom'

export const NavBar = styled.nav`
    display:flex;
    padding:2rem 0;
    margin: 3rem 0 0 1rem;
`
export const NavLink = styled(Link)`
    color: $primary;
    display:flex;
    align-items:center;
    &.activeStyle{
            color:grey;
        }
    }
    &.hidden{
        visibility: hidden;
    }
`