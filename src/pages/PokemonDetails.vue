<template>

    <div class="card text-center" id="cardImg">
        <h1>{{ pokemon.name }}</h1>
        <img :src="pokemon.imgUrl" class="img-responsive mx-auto">
        <h4>Weight: {{ pokemon.weight }}</h4>
        <h4>Height: {{ pokemon.height }}</h4>
    </div>

</template>
<script>

import endpoints from '../endpoints';

export default {
    data() {
        return {
            pokemon: {
                name: "",
                imgUrl: "",
                height: "",
                weight: ""
            }
        }
    },
    created() {
        endpoints.getPokemonIndividual(this.$route.params.id).then((pokemon) => {
            let info = pokemon.data
            this.pokemon.name = info.name;
            this.pokemon.imgUrl = info.sprites.front_default;
            this.pokemon.height = info.height;
            this.pokemon.weight = info.weight;
            console.log(this.pokemon)
        })
    },
}
</script>
<style>
    #cardImg{
        width: 300px;
    }
</style>