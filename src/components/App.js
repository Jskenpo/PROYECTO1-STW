import React from 'react';
import NavBar from './navbar/navbar.js';
import Buscador from './buscador-nav/buscador.js';
import Info from './carrouselUno/Info.js';
import Danza from './Danza/Danza.js';
import Zapas from './carrouselDos/zapatos.js';
import Trend from './tendencias/trend.js';
import Descubrir from './Descubrir/descubrir.js';
import Deportes from './Deportes/deportes.js';
import Aplicaciones from './Aplicaciones/aplicaciones.js';
import Member from './Membership/membership.js';
import Footer from './Footer/footer.js';


import './App.css';


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
                <Descubrir />
                <Deportes />
                <Aplicaciones />
                <Member />
                <Footer />
            </div>
        );
    }
}
export default App;