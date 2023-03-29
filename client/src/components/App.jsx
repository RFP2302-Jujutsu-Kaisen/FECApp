import React from 'react';
import styled from 'styled-components';
import QuestionsAndAnswers from './QAModule';
import Overview from './Overview/Overview';
import RatingsAndReviews from './ratings-and-reviews';
import { AppContextProvider } from './AppContext';
import logo from './jujulogo.png';

// Define colors used throughout the app
const colors = {
  primary: 'black',
  text: '#3C3C3C',
  lightGrey: '#FAFAFA',
  darkGrey: '#333333',
};

// Define a container for the banner and header
const BannerAndHeaderContainer = styled.div`
  position: relative;
  background-color: ${colors.primary};
`;

// Define a banner that goes above the header
const Banner = styled.div`
  background-color: ${colors.primary};
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: system-ui;
  text-align: center;
  padding: 10px;
`;

// Define the header that sits below the banner
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
`;

// Define the logo for the header
const Logo = styled.img`
  height: 64px;
`;

// Define the navigation links for the header
const Nav = styled.nav`
  display: flex;
`;

const NavItem = styled.a`
  color: ${colors.text};
  font-size: 16px;
  font-weight: 500;
  font-family: system-ui;
  margin-left: 20px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const MainWrapper = styled.div`
  background-color: ${colors.lightGrey};
  padding: 20px;
  font-family: system-ui;
`;

const FooterWrapper = styled.footer`
  background-color: ${colors.darkGrey};
  color: #ffffff;
  padding: 24px;
  text-align: right;
  font-size: 12px;
  font-family: system-ui;
`;

export default function App() {
  return (
    <BannerAndHeaderContainer>
      <Banner>Get Your Juju on with The Juju Store: Where Reacting is Always in Fashion!</Banner>
      <Header>
        <Logo src={logo} alt="The Juju Store Logo" />
        <Nav>
          <NavItem href="#">Home</NavItem>
          <NavItem href="#">Shop</NavItem>
          <NavItem href="#">About Us</NavItem>
          <NavItem href="#">Contact</NavItem>
        </Nav>
      </Header>
      <MainWrapper>
        <AppContextProvider>
          <Overview />
          <div className="questions-and-answers">
            <QuestionsAndAnswers />
          </div>
          <div>
            <RatingsAndReviews />
          </div>
        </AppContextProvider>
      </MainWrapper>
      <FooterWrapper>
        &copy; 2023 The Juju Store. All rights reserved.
      </FooterWrapper>
    </BannerAndHeaderContainer>
  );
}
