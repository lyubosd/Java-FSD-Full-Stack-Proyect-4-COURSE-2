import {useEffect, useState} from 'react'
import './App.css'
import {SearchBar} from "./components/SearchBar/SearchBar.jsx";
import {Pokemons} from "./components/Pokemons/Pokemons";
import {Paginator} from "./components/Paginator/Paginator";

function App() {
    const [pokemons, setPokemons] = useState(0);
    const [page, setPage] = useState(1);
    const [name, setName] = useState('');
    const [total, setTotal] = useState(0);


    const loadPokemons = async () => {
        let url = `http://localhost:3000/pokemons?_page=${page}&_limit=12`;
        if(name)url += `&name_like=${name}`;
        let r = await fetch(url);
        setPokemons(await r.json());
        setTotal(r.headers.get('X-Total-Count'));
    }

    useEffect(() => {
        loadPokemons();
    }, [name, page]);
    useEffect(() => {
        setPage(1);
    }, [name]);

    return (
        <div>
            <SearchBar onSearch={name => setName(name)}/>
            <Paginator el_per_page={12} page={page} setPage={setPage} total={total} onChange={page => setPage(page)}/>
            {pokemons.length > 0 ? <Pokemons pokemons={pokemons}/> : <div>No pokemons found</div> }
            <Paginator el_per_page={12} page={page} setPage={setPage} total={total} onChange={page => setPage(page)}/>

        </div>
    )
}

export default App
