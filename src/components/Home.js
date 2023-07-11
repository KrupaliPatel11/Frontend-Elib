import React from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate('/login')
    }
    return (
        <div className="hero-section">
            <div className="hero-image">
                <img src="https://media.istockphoto.com/id/1015149600/photo/book-hall-in-library.jpg?s=612x612&w=0&k=20&c=DzbHaOg_iLwRAU96BzzpZ7a70xCGj3XBTVQ_HmqiN3A=" alt="Hero" />
            </div>
            <div className="hero-content">
                <h1 className='mx-5'>Welcome to Our Library</h1>
                <p>Discover a world of knowledge and inspiration.</p>
                <button onClick={handleClick}>Get Started</button>
            </div>
        </div>
    )
}

export default Home;
