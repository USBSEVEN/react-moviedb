import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from "react-router-dom";
import MyCard from './MyCard';
import './mov.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Mov() {
    const [mov, setMov] = useState([]);
    const [query, setQuery] = useState('');
    useEffect(() => {
        GetMov()
    }, [])

    const GetMov = () => {
        fetch("https://tame-erin-chimpanzee-ring.cyclic.app/movie")
            .then(res => res.json())
            .then(
                (result) => {
                    setMov(result)
                }
            )
    }

    const MovUpdate = number => {
        window.location = '/movUpdate/' + number
    }

    const DeleteMov = number => {
        var data = {
            'number': number
        }
        fetch('https://tame-erin-chimpanzee-ring.cyclic.app/movie', {
            method: 'DELETE',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(
                (result) => {
                    alert(result['message'])
                    if (result['status'] === 'OK') {
                        GetMov();
                    }
                }
            )
    }

    return (
        <>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <b class="navbar-brand">MOVIE DB [CRUD]</b>
                    <form class="d-flex">
                        <input
                            placeholder="Search"
                            className="btn btn-outline-light"
                            onChange={(event) => setQuery(event.target.value)}
                        />
                        <Box>
                            <Link to="/movCreate">
                                <Button variant="contained" color="primary">
                                    CREATE
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </div>
            </nav>
            {mov
                .filter((number) => {
                    if (query === '') {
                        return number;
                    } else if (
                        number.name_movie.toLowerCase().includes(query.toLowerCase())
                    ) {
                        return number;
                    }
                    return null; // Default return statement
                })
                .map((mov) => (
                    <ul className="grid-container" key={mov.number}>
                        <MyCard
                            key={mov.number}
                            name={mov.name_movie}
                            coverimage={mov.poster}
                            detail={mov.description}
                            releases={mov.release_date}
                        />
                        <ButtonGroup color="primary" aria-label="outlined primary button group">
                            <Button onClick={() => MovUpdate(mov.number)}>Edit</Button>
                            <Button onClick={() => DeleteMov(mov.number)}>Del</Button>
                        </ButtonGroup>
                    </ul>
                ))}


        </>





    );
}