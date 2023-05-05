import React from 'react';
import NavBar from './navbar/navbar.js';
import Buscador from './buscador-nav/buscador.js';
import Info from './carrouselUno/Info.js';


class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Buscador />
                <Info />
            </div>
        );
    }
}
export default App;