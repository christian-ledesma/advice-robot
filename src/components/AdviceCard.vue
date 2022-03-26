<template>
  <div>
    <v-card color="grey lighten-4" class="mx-auto" height="150">
      <v-card-text>
        <div>{{ title }}</div>
        <p>{{ date }}</p>
        <div class="text--primary">
          {{ text }}
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    date: { required: true },
    text: { type: String, required: true },
  },
  data() {
    return {
      title: "Tip of the day!",
    };
  },
};
</script>

<style>
</style>