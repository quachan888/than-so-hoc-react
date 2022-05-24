import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter bgColor="light" className="text-center text-lg-left mt-5">
            <div className="text-center p-3 bg-dark text-light">
                Thần Số Học - ReactJS App. © 2022 Copyright:{' '}
                <a className="text-white" href="https://anquach.com/">
                    {' '}
                    AnQuach.com
                </a>
            </div>
        </MDBFooter>
    );
}
