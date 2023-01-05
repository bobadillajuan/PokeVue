<template>
    <div class="card thumbnail" id="PokemonCard" @click="goToDetails">
        <h1>{{ pokemon.name }}</h1>
        <img :src="pokemon.imageUrl">
    </div>
</template>

<script>

import endpoints from '../endpoints';

export default {
    name: 'PokemonCard',
    data() {
        return {
            pokemon: {
                name: "",
                imageUrl: "",
            }
        }
    },
    props: {
        id:{
            type: Number,
            required: true,
        }
    },
    created() {
        console.log(this.id)
        endpoints.getPokemonIndividual(this.id).then((pokemon) => {
            this.pokemon = pokemon.data
            this.pokemon.imageUrl = pokemon.data.sprites.front_default
            console.log(this.pokemon)
        })
    },
    methods: {
        goToDetails(){
            this.$router.push({ name: 'PokemonDetails', params: { id: this.id }})
        }
    },
}
</script>

<style>
    
#PokemonCard{
    width: 30%;
    text-align: center;
    margin: 1em;
    background-color: blueviolet;
}

#PokemonCard:hover{
    background-color: brown;
}


</style>