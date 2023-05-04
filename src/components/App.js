import React from 'react';
import NavBar from './navbar/navbar.js';
import Buscador from './buscador-nav/buscador.js';


class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Buscador />
            </div>
        );
    }
}
export default App;