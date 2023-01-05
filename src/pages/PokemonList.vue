<template>

    <div class="d-flex flex-row flex-wrap container bg-dark">
        <PokemonCard v-for="pokemon in pokemons" :id="pokemon.id" :key="pokemon.id"/>
    </div>

</template>
<script>

import endpoints from '../endpoints'
import PokemonCard from '../components/PokemonCard.vue'

export default {
    name: "PokemonList",
    data(){
        return{
            pokemons: [],
        }
    },
    created (){

        endpoints.getPokemonList().then((list) => {
            console.log(list.data.results)
            this.pokemons = list.data.results.map((pokemon) => {
            const parts = pokemon.url.split('/')
            return {
                id: parseInt(parts[parts.length - 2]),
                name: pokemon.name
                }
            })
            console.log(this.pokemons)
        })

    },    
    components: {
        PokemonCard
    },

}
</script>
<style>
    
</style>