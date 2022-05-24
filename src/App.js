import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import Navbar from './components/Navbar';
import NameForm from './components/NameForm';
import Footer from './components/Footer';

function App() {
    return (
        <MDBContainer fluid style={{ backgroundImage: `linear-gradient(to bottom, #fbc2eb, #a6c1ee)` }}>
            <Navbar />
            <NameForm />
            <Footer />
        </MDBContainer>
    );
}

export default App;

// background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
