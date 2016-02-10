import React from 'react';
import { Link } from 'react-router';
import packageJSON from '../../package.json';
import Footer from './Footer';

class App extends React.Component {
  render() {
    const version = packageJSON.version;
    return (
      <div>
        <header>
          <h1>React Starterify {version}</h1>
          <Link to="/about">About</Link>
          <Link to="/poweredby">Powered by</Link>
        </header>
        <section>
          {'Welcome to React Starterify'}
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
