<template>
    <v-app :theme="theme">
        <router-view/>
    </v-app>
</template>

<script setup>
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()

store.commit('application/initializeStore')
store.dispatch('user/me')

const theme = computed(() => {
    return store.getters["application/darkTheme"] ? 'dark' : 'light';
})
</script>

<style scoped>

</style>