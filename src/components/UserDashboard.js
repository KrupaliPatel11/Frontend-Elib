import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {

    const [books, setBooks] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchBooks = async () => {
            console.log("localStorage.getItem('token')")
            if (!localStorage.getItem('token')) {
                alert('Please Login First');
                navigate('/');
            } else {
                try {
                    const response = await fetch('http://localhost:1337/user/books');
                    const data = await response.json();
                    console.log(response, data)
                    setBooks(data);
                } catch (error) {
                    console.error('Error fetching books:', error);
                }

            }

        };
        fetchBooks();
    }, []);


    return (
        <div>
            <div className="container">
                <h1>Books- You Can Download It From Here</h1>
                <ul>
                    {books.map ? ((book) => (
                        <li key={book.id}>{book.title}</li>
                    )) : "null"}
                </ul>
            </div>
        </div>
    )
}

export default UserDashboard;
