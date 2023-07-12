import {
    Button,
    Grid,
    Paper,
    TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const AdminDashboard = () => {

    const papeStyle = {
        padding: 20,
        height: "50vh",
        width: 300,
        margin: "45px auto",
    };

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState(null);
    const [pdf, setFile] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('image', image);
        formData.append('pdf', pdf);

        fetch('http://127.0.0.1:1337/admin/book/upload', {
            method: "POST",
            headers: {
                'Authorization': localStorage.getItem('token')
            },
            body: formData
        }).then((response) => response.json()).then((data) => {
            console.log(data);
            alert("Book Created");
            navigate('/admin/dashboard')
        }).catch((e) => {
            console.log(e)
        })
    }
    return (
        <Grid>
            <Paper elevation={10} style={papeStyle}>
                <Grid align={"center"} marginTop={4}>
                    <h3>
                        <b>Upload Book</b>
                    </h3>
                </Grid>
                <form
                    onSubmit={handleSubmit}
                >
                    <TextField
                        style={{ marginTop: 5 }}
                        onChange={(e) => setTitle(e.target.value)}
                        id="title"
                        label="Title"
                        variant="standard"
                        placeholder="Book Title"
                        type="text"
                        fullWidth
                        required
                    />
                    <TextField
                        style={{ paddingTop: 3 }}
                        id="author"
                        label="Author"
                        variant="standard"
                        placeholder="Book Author"
                        type="text"
                        fullWidth
                        required
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <TextField
                        style={{ paddingTop: 3 }}
                        id="book"
                        label="Book"
                        variant="standard"
                        placeholder="Book Pdf"
                        type="file"
                        fullWidth
                        required
                        accept=".pdf"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <TextField
                        style={{ paddingTop: 3 }}
                        id="image"
                        label="Image"
                        variant="standard"
                        placeholder="Book Cover Image"
                        type="file"
                        fullWidth
                        required
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                    <Button
                        style={{ marginTop: 15 }}
                        type="submit"
                        color="primary"
                        fullWidth
                        variant="contained"
                    >
                        Create
                    </Button>
                </form>
            </Paper>
        </Grid>
    );
};

export default AdminDashboard;