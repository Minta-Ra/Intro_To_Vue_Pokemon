<template>
  <!-- Setting up event listener -->
  <div v-on:click="sendPokemon">
      <p>{{ pokemon.name }}</p>
  </div>
</template>

<script>
import {eventBus} from "../main.js"

export default {
    name: "PokemonListItem",
    props: ["pokemon"],
    methods: {
        sendPokemon: function() {
            // Send signal, pass "send-pokemon" and this.pokemon whole object
            eventBus.$emit("send-pokemon", this.pokemon);
        }
    }
};
</script>

<style>

</style>