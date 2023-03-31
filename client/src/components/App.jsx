import React from 'react';
import styled from 'styled-components';
import Overview from './Overview/Overview';
import OtherProducts from './OtherProducts';
import { AppContextProvider } from './AppContext';
import logo from './jujulogo.png';
import easterEgg from './film-white.gif';
import easterEgg2 from './soccer-ball.gif';

const LazyQuestionsAndAnswers = React.lazy(() => import('./QAModule'));
const LazyRatingsAndReviews = React.lazy(() => import('./ratings-and-reviews'));

// Define colors used throughout the app
const colors = {
  primary: '#222222',
  text: '#3C3C3C',
  lightGrey: '#FAFAFA',
  darkGrey: '#333333',
};

// Define a container for the banner and header
const BannerAndHeaderContainer = styled.div`
  position: relative;
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
  margin-left: 15%;
  margin-right: 15%;

  @media (max-width: 1024px) {
    margin-left: 5%;
    margin-right: 5%;
  }

  @media (max-width: 768px) {
    margin-left: 2%;
    margin-right: 2%;
  }
`;

// Define the logo for the header
const Logo = styled.img`
  height: 64px;
  width: 231px;
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
  margin-left: 15%;
  margin-right: 15%;

  @media (max-width: 1024px) {
    margin-left: 5%;
    margin-right: 5%;
  }

  @media (max-width: 768px) {
    margin-left: 2%;
    margin-right: 2%;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${colors.darkGrey};
  color: #ffffff;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-family: system-ui;
  margin-left: 15%;
  margin-right: 15%;

  @media (max-width: 1024px) {
    margin-left: 5%;
    margin-right: 5%;
  }

  @media (max-width: 768px) {
    margin-left: 2%;
    margin-right: 2%;
  }
`;

const FooterText = styled.div`
  margin-right: 20px;
`;

const Fun = styled.img`
  height: 24px;
`;

export default function App() {
  return (
    <BannerAndHeaderContainer>
      <Banner>Get Your Juju on with The Juju Store: Where Reacting is Always in Fashion!</Banner>
      <Header>
        <Logo src={logo} alt="The Juju Store Logo" width="auto" height="64" />
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
          <OtherProducts />
          <div className="questions-and-answers">
            <React.Suspense fallback={<div>Loading Questions & Answers...</div>}>
              <LazyQuestionsAndAnswers />
            </React.Suspense>
          </div>
          <div>
            <React.Suspense fallback={<div>Loading Ratings & Reviews...</div>}>
              <LazyRatingsAndReviews />
            </React.Suspense>
          </div>
        </AppContextProvider>
      </MainWrapper>
      <FooterWrapper>
        <div>
          <Fun src={easterEgg} alt="" width="24" height="24" />
          <Fun src={easterEgg2} alt="" width="12" height="24" />
          {'   Footy Corner'}
        </div>
        <FooterText>
          &copy; 2023 The Juju Store. All rights reserved.
        </FooterText>
      </FooterWrapper>
    </BannerAndHeaderContainer>
  );
}
