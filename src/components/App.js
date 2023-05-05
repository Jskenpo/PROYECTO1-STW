import React from 'react';
import NavBar from './navbar/navbar.js';
import Buscador from './buscador-nav/buscador.js';
import Info from './carrouselUno/Info.js';
import Danza from './Danza/Danza.js';
import Zapas from './carrouselDos/zapatos.js';
import Trend from './tendencias/trend.js';


class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Buscador />
                <Info />
                <Danza />
                <Zapas />
                <Trend />
            </div>
        );
    }
}
export default App;