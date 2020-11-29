<template>
  <ul>
    <li v-for="(workshop, i) in $store.getters.previous_workshops" :key="i">
      {{ workshop.title }} - {{ workshop.location }}.
    </li>
  </ul>
</template>
