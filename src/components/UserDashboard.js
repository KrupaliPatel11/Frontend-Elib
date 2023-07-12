import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ComplexGrid from './common/BookCard';

const UserDashboard = () => {

    const navigate = useNavigate()


    const token = localStorage.getItem('token');
    console.log(token)

    const [booksData, setbooksData] = useState([])

    useEffect(() => {
        fetch('http://localhost:1337/user/books', {
            method: "GET",
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }).then((response) => response.json())
            .then((data) => {
                setbooksData(data.books)
            }).catch((e) => {
                console.log(e)
            })
        const token = localStorage.getItem('token')
        // }
    }, []);

console.log(booksData,"bookdata")
    return (
        <div>
            <div className="container">
                <h1 >Books- You Can Download Books From Here</h1>
                <div className='row'>
                    {
                        booksData? booksData.map((bookData) => {
                            return (<>
                              <ComplexGrid key={bookData.id} data={bookData}/>
                            </>)
                        }) : "null"
                    }
                </div>
            </div>
        </div>
    )
}

export default UserDashboard;
