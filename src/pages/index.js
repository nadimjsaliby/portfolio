import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Education, Jobs, Featured, Projects, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
    .main{
    width:100%;
    height: 100vh;

  }
  video{
    width:100%;
    height: 100%;
    object-fit: cover;
  }
`;

const IndexPage = ({ location }) => (
  
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      
      <Hero />
      
      <About />
      <Education />
      <Jobs />
      <Featured />
      <Projects />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
