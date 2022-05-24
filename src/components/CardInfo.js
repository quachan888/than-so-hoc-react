import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

export default function CardInfo({ title, number, details }) {
    return (
        <MDBCard border="success" shadow="3">
            <MDBCardBody>
                <MDBCardTitle>
                    {title}: <span className="fw-bold text-danger">{number}</span>
                </MDBCardTitle>
                <div
                    dangerouslySetInnerHTML={{
                        __html: details
                    }}
                ></div>
            </MDBCardBody>
        </MDBCard>
    );
}
