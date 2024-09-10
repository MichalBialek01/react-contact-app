// wiecej w abbreviation settings
//  rsf - normal function
// rsc - arrow function



export default Header;


import React from 'react';

const Header = ({toggleModal, numberOfContacts}) => {
    return (
        <header className='header'>
            <div className='container'>
                <h3>Contact List ({numberOfContacts})</h3>
                <button className='btn' onClick={() => {toggleModal(true)}}>
                    <i className='bi bi-plus-square'></i>New Contact</button>
            </div>
        </header>
    );
};

export default Header;

