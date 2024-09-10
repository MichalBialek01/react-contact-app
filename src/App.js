import './App.css';
import React, {useEffect, useState} from "react";
import {getContacts} from "./api/ContactService";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import {Navigate, Route, Router, Routes} from "react-router-dom";

function App() {
    const [data, setData] = useState({});
    const [currentPage, setCurrentPage] = useState(0);

    const getAllContacts = async (page = 0, size = 10) => {
        try {
            setCurrentPage(page)
            const {data} = await getContacts(page, size)
            setData(data)
            console.log(data)
        } catch (error) {

        }
    }

    const toggleModal = (show) => {
        console.log(show)
    }


    useEffect(() => {
        getAllContacts();
    }, []);

    return (
        <>
            <Header toggleModal={toggleModal} numberOfContacts={data.totalElements}/>
            <main className='main'>
                <div className='container'>
                        <Routes>
                            <Route path="/" element={<Navigate to={'/contacts'}/>}/>
                            <Route path="/contacts" element={<ContactList data={data} currentPage={currentPage} getAllContacts={getAllContacts}/>}/>
                        </Routes>
                </div>
            </main>
        </>
    );
}

export default App;
