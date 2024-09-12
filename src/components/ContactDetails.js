import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getContact, saveContact, updatePhoto} from "../api/ContactService";

const ContactDetails = ({updateContact,updateImage}) => {


    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        title: '',
        status: '',
        photoUrl:''
    });


    const fetchSingleContact = async (id) => {
        try {
            const { data } = await getContact(id);
            setContact(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };



    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        fetchSingleContact(id);
    }, []);

    return (
        <div>ContactDetails</div>
    )
}

export default ContactDetails;