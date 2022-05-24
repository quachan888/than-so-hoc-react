import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

export default function CardInfo({ title, number, details }) {
    return (
        <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBCardBody>
                <MDBCardTitle>
                    {title}: <span className="fw-bold text-danger">{number}</span>
                </MDBCardTitle>
                <MDBCardText>{details}</MDBCardText>
            </MDBCardBody>
        </MDBCard>
    );
}
