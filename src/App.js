import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import Navbar from './components/Navbar';
import NameForm from './components/NameForm';

function App() {
    return (
        <MDBContainer fluid>
            <Navbar />
            <NameForm />
        </MDBContainer>
    );
}

export default App;
