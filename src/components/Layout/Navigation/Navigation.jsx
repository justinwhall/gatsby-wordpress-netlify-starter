import React, { Component } from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import { siteTitle } from '../../../../data/SiteConfig'
import Logo from '../../Accessories/Logo'

class TopNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <TitleSection>
          <Link to="/">
            <Logo />
          </Link>
          <Link to="/">
            <h3>{siteTitle}</h3>
          </Link>
        </TitleSection>
        <NavList>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://www.justinwhall.com/headless-wordpress-gatsby-netlifly-continous-deployment/">Get Started</a>
          </li>
        </NavList>
      </NavigationContainer>
    )
  }
}

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: auto;
  padding: 10px 100px;
  background: #93cef5;

  @media (max-width: 900px) {
    display: block;
    padding: 20px 20px;
  }
`

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h3 {
    font-size: 2.5rem;
  }

  div {
    margin-right: 10px;
  }

  @media (max-width: 900px) {
    h3 {
      font-size: 14px;
    }
  }
`

const NavList = styled.ul`
  display: flex;

  li a {
    font-size: 2rem;
  }

  @media (min-width: 900px) {
    display: block;

    li {
      margin-left: 50px;
    }
  }
`

export default TopNavigation
