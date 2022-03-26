<template>
  <v-carousel v-model="model" class="smaller">
    <v-carousel-item v-for="(consejo, i) in consejos" :key="i" :src="fotos[i]" class="carousel-item">
      <v-row class="fill-height" align="center" justify="center">
        <div class="text-h2 advice-text">{{ consejo }}</div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import adviceService from "@/services/adviceService";
export default {
  data() {
    return {
      consejos: [],
      fotos: [
        "https://i.picsum.photos/id/1033/2048/1365.jpg?hmac=zEuPfX7t6U866nzXjWF41bf-uxkKOnf1dDrHXmhcK-Q",
        "https://i.picsum.photos/id/1031/5446/3063.jpg?hmac=Zg0Vd3Bb7byzpvy-vv-fCffBW9EDp1coIbBFdEjeQWE",
        "https://i.picsum.photos/id/1035/5854/3903.jpg?hmac=DV0AS2MyjW6ddofvSIU9TVjj1kewfh7J3WEOvflY8TM",
        "https://i.picsum.photos/id/1036/4608/3072.jpg?hmac=Tn9CS_V7lFSMMgAI5k1M38Mdj-YEJR9dPJCyeXNpnZc",
        "https://i.picsum.photos/id/1037/5760/3840.jpg?hmac=fZe213BcO2KPQEJKChsdHnVYg-6kAtQMTZV24f1fS94",
      ],
      model: 0,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    };
  },
  beforeMount () {
    async function getRandomAdvice () {
      const response = await adviceService.getRandom()
      return response
    }
    const timerId = setInterval(() => {
      if (this.consejos.length < 5) {
        getRandomAdvice()
          .then(response => {
            this.consejos.push(response.data.slip.advice)
          })
      }
    }, 2000)
    if (this.consejos.length === 5) {
      clearInterval(timerId)
    }
  }
};
</script>

<style scoped>
.smaller {
  max-width: 1200px;
  margin: auto;
}
.advice-text {
  color: white;
  text-shadow: 2px 2px 2px #555;
  margin: auto;
  max-width: 90%;
}
</style>