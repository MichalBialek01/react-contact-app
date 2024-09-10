import React from 'react';
import Contact from "./Contact";

const ContactList = ({data, currentPage, getAllContacts}) => {
    return (
        <main className='main'>
            {/*W przypadku, gdy nie ma kontaktów z backendu, wyświetlamy informacje */}
            {data?.content?.length === 0 && <div>No Contacts !</div>}

            {/*Jeżeli jest jakikolwiek kontakt, iterujemy po iterujemy tworząc komponenty Contact*/}
            <ul className='contact_list'>
                {data?.content?.length > 0 && data.content.map((contact => <Contact contact={contact}
                                                                                    key={contact.id}/>))}
            </ul>

            {/*Dodajemy paginację z uwzględnieniem pierwszej i ostatniej strony*/}
            {data?.content?.length > 0 && data?.totalPages > 1 &&
                <div className='pagination'>
                    <a onClick={() => getAllContacts(currentPage - 1)}
                       className={0 === currentPage ? 'disabled' : ''}>&laquo;</a>

                    {/*Tworzymy tablicę o wielkości równej totalPages, np. 10 obiektowa tablica>Pobieramy klucze i mapujemy klucze*/}
                    {data && [...Array(data.totalPages).keys()]
                        .map((page, index) =>
                            <a onClick={getAllContacts(page)}
                               className={currentPage === page ? 'Acrtive' : ''}
                               key={page}>
                                {page + 1}
                            </a>)}


                    <a onClick={() => getAllContacts(currentPage + 1)}
                       className={data.totalPages === currentPage + 1 ? 'disabled' : ''}>&raquo;</a>
                </div>
            }

        </main>
    );
};

export default ContactList;