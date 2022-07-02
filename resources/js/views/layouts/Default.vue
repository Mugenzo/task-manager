<template>
    <v-layout>
        <v-navigation-drawer></v-navigation-drawer>
        <v-app-bar color="grey-lighten-2"></v-app-bar>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-layout>
</template>

<script>
export default {
    name: "Default"
}
</script>

<style scoped>

</style>