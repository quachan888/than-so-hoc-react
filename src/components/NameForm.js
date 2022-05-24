import React, { useState } from 'react';
import { MDBContainer, MDBInput, MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import CardInfo from './CardInfo';
import numCalculator from '../utils/numCalculator';

export default function NameForm() {
    const [fullname, setFullname] = useState('Quách Hà Chấn An');
    const [birthday, setBirthday] = useState('03211984');

    const result = numCalculator(fullname, birthday);

    return (
        <>
            <MDBContainer className="p-5">
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
                        id="ddmmyyyy"
                        label="Ngày sinh: mmddyyyy"
                        onChange={(e) => setBirthday(e.target.value)}
                    />

                    {/* <MDBBtn type="submit" block>
                        Xem chi tiết
                    </MDBBtn> */}
                </form>
            </MDBContainer>

            <MDBContainer className="bg-primary text-white p-3">
                <h3 className="text-warning">Diễn giải</h3>
                <h5>Họ tên: {fullname}</h5>
                <h5>Ngày sinh: {birthday}</h5>
            </MDBContainer>

            <MDBContainer className="p-3">
                <MDBRow className="row-cols-1 row-cols-md-3 g-4">
                    {result.map((row) => (
                        <MDBCol key={row.title}>
                            <CardInfo title={row.title} number={row.number} details={row.details} />
                        </MDBCol>
                    ))}
                </MDBRow>
            </MDBContainer>
        </>
    );
}
