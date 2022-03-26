<template>
  <div>
    <v-card max-width="800" class="mx-auto">
      <v-container fluid>
        <v-row dense>
          <v-col cols="12">
            <v-text-field
              label="Search"
              :rules="rules"
              hide-details="auto"
              v-model="searchQuery"
              @keydown="searchAdvices"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-if="consejos.length > 0" dense>
          <v-col v-for="(consejo, index) in consejos" :key="index" cols="6">
            <advice-card :date="consejo.date" :text="consejo.advice" ></advice-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import AdviceCard from "@/components/AdviceCard.vue";
import adviceService from "@/services/adviceService";
export default {
  components: {
    AdviceCard,
  },
  data() {
    return {
      searchQuery: null,
      consejos: [],
    };
  },
  methods: {
    searchAdvices() {
      adviceService.searchQuery(this.searchQuery).then((res) => {
        this.consejos = res.data.slips;
      });
    },
  },
};
</script>

<style scoped>
.search {
  max-width: 400px;
  margin: auto;
  border: 1px solid;
}
</style>