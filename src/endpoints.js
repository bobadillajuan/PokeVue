import axios from 'axios'

export default{
    getPokemonList(){
        return axios.get(`https://pokeapi.co/api/v2/pokemon`)
            .then((list) => {
                return list
            })
    },
    getPokemonIndividual(id){
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((pokemon) => {
                return pokemon
            })
    },


    
}