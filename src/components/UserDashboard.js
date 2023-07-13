
import React, { useEffect, useState } from 'react'
import ComplexGrid from './common/BookCard';
import { Button } from '@mui/material';

const UserDashboard = () => {
    const [token] = useState(localStorage.getItem('token'));
    const [booksData, setBooksData] = useState([]);
    const [currrentPage, setCurrentPage] = useState(1);
    const limit = 5;

    useEffect(() => {
        fetch(`http://localhost:1337/user/books?page=${currrentPage}&limit=${limit}`, {
            method: "GET",
            headers: {
                "Authorization": token
            }
        }).then(response => response.json())
            .then(data => {
                console.log("data", data)
                setBooksData(data.books);
            })
            .catch(e => {
                console.log(e);
            });
    }, [currrentPage, limit, token]);


    const handlePrevClick = () => {
        setCurrentPage(prevPage => prevPage - 1)
    }

    const handleNextClick = () => {
        console.log("click")
        setCurrentPage(prevPage => prevPage + 1)
    }

    return (
        <div>
            <div className="container my-3">
                <h1 >Books- You Can Download Books From Here</h1>
                <div className='row'>
                    {
                        booksData ? booksData.map((bookData) => {
                            return (<>
                                <ComplexGrid key={bookData.id} data={bookData} />
                            </>)
                        }) : <div className="container">NO ANY BOOK</div>
                    }
                </div>
                <div className="container d-flex justify-content-between">
                    <Button disabled={currrentPage <= Number(1)} type="submit" color="primary" variant='contained' onClick={handlePrevClick}> &larr; Previous</Button>
                    <Button type="submit" disabled={booksData.length < limit} color="primary" variant='contained' onClick={handleNextClick}>Next &rarr;</Button>
                </div>

            </div>

        </div>
    )
}

export default UserDashboard;
