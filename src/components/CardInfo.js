import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader } from 'mdb-react-ui-kit';

export default function CardInfo({ title, number, details, current }) {
    return (
        <MDBCard border={current ? 'primary' : 'success'} shadow="3">
            <MDBCardBody>
                <MDBCardHeader tag="h3" className="mb-3">
                    {title}: <span className="fw-bold text-danger">{number}</span>
                </MDBCardHeader>

                <div
                    dangerouslySetInnerHTML={{
                        __html: details
                    }}
                ></div>
            </MDBCardBody>
        </MDBCard>
    );
}
