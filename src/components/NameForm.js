import React, { useState } from 'react';
import { MDBContainer, MDBInput, MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import CardInfo from './CardInfo';
import numCalculator from '../utils/numCalculator';

export default function NameForm() {
    const [fullname, setFullname] = useState('Quách Hà Chấn An');
    const [birthday, setBirthday] = useState('21031984');

    const result = numCalculator(fullname, birthday);

    return (
        <>
            <MDBContainer className="p-3 bg-light">
                <form>
                    <MDBInput
                        className="mb-4"
                        type="text"
                        id="fullname"
                        label="Họ tên"
                        onChange={(e) => setFullname(e.target.value)}
                    />
                    <MDBInput
                        className="mb-4"
                        type="text"
                        id="birthday"
                        label="Ngày sinh: ddmmyyyy"
                        onChange={(e) => setBirthday(e.target.value)}
                    />
                </form>
            </MDBContainer>

            <MDBContainer className="bg-light text-dark py-3 px-5">
                <h3>
                    Bạn <span className="text-primary">{fullname}</span>, ngày sinh{' '}
                    <span className="text-primary">{birthday}</span>
                </h3>
            </MDBContainer>

            <MDBContainer className="bg-light py-5 text-dark">
                <MDBRow className="row-cols-1 row-cols-lg-2 g-4 px-3">
                    {result.map((row) => (
                        <MDBCol key={row.title}>
                            <CardInfo
                                title={row.title}
                                number={row.number}
                                details={row.details}
                                current={row.current}
                            />
                        </MDBCol>
                    ))}
                </MDBRow>
            </MDBContainer>
        </>
    );
}
