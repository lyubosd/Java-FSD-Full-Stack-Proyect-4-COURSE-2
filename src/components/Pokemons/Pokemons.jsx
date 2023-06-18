import {Pokemon} from "../Pokemon/Pokemon";

export function Pokemons({pokemons}){
    return <div className="flex flex-wrap ">
        {pokemons.map(pokemon => <Pokemon key={pokemon.id} {...pokemon}/>)}
    </div>
}