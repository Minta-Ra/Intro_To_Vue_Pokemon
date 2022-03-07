<template>
  <div id="app">
    <h1>Pokemon Selector!</h1>
    <!-- Pass props in pokemon-list v-bind is same as : -->
    <selected-pokemon v-if="selectedPokemon" :pokemon="selectedPokemon"></selected-pokemon>
    <pokemon-list :allPokemon="allPokemon"></pokemon-list>
  </div>
</template>

<script>
import PokemonList from "./components/PokemonList.vue";
// import SelectedPokemon from "./components/SelectedPokemon.vue";
import SelectedPokemon from "./components/SelectedPokemon";
import {eventBus} from "./main.js";

export default {
  name: 'App',
  components: {
    'pokemon-list': PokemonList,
    'selected-pokemon': SelectedPokemon,
  },
  data() {
    return{
      allPokemon: [],
      selectedPokemon: null,
    };
  },
  methods: {
    fetchPokemon: function() {
      // This fetch return type promise
      fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(res => res.json())
      .then(data => (this.allPokemon = data.results));
    },
    fetchPokemonDetail: function(url) {
      fetch(url)
      .then(res => res.json())
      .then(data => this.selectedPokemon = data)
    }
  },
  mounted() {
    this.fetchPokemon();
    // when it hears send-pokemon, it triggens function
    eventBus.$on("send-pokemon", (pokemon) => {
      // console.log(pokemon);
      // this.selectedPokemon = pokemon;
      this.fetchPokemonDetail(pokemon.url)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
