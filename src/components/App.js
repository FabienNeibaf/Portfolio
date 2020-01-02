import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import Vitrine from './Vitrine';
import Contact from './Contact';
import Projects from './Projects';

const mapStateToProps = (state) => ({ theme: state });

const App = ({ theme }) => (
  <div id="App" className={theme}>
    <Header />
    <Vitrine />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

App.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(App);
