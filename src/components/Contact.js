import React from 'react';
import {Link} from "react-router-dom";

const Contact = ({contact}) =>      {
    return (
        <Link to={`/contacts/${contact.id}`} className="contact__item">
            <div className="contact__header">
                <div className="contact__image">
                    <img src={contact.photoURL} alt={contact.name} />
                </div>
                <div className="contact__details">
                    <p className="contact__name">{contact?.name.substring(0,32)}</p>
                    <p className="contact__title">{contact?.title.substring(0,32)}</p>
                </div>
            </div>
            <div className="contact__body">
                {contact.email &&<p><i className="bi bi-envelope"></i> {contact?.email.substring(0,32)}</p>}
                {contact.address &&<p><i className="bi bi-geo"></i> {contact?.address.substring(0,32)}</p>}
                {contact.phone &&<p><i className="bi bi-telephone"></i> {contact?.phone.substring(0,32)}</p>}
                <p>
                    {contact.status === 'Active'
                     ?<i className="bi bi-check-circle"></i>
                    :<i className="bi bi-x-circle"></i>}

                    {contact.status}
                </p>

            </div>
        </Link>
    )
}

export default Contact;