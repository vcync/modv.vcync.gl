<template>
  <ul v-if="$store.getters.upcoming_workshops.length">
    <li v-for="(workshop, i) in $store.getters.upcoming_workshops" :key="i">
      {{ workshop.title }} - {{ workshop.location }}.
      <a v-if="workshop.url" :href="workshop.url" target="_blank" rel="noopener noreferrer">Sign up<OutboundLink /></a>
    </li>
  </ul>
  <p v-else>
    We have no upcoming workshops right now. Please register interest for our next workshop at <a href="https://visualandlightworkshop.com/" target="_blank" rel="noopener noreferrer">https://visualandlightworkshop.com/<OutboundLink /></a>
  </p>
</template>
