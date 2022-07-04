<template>
    <v-layout>
        <v-navigation-drawer v-model="store.getters['application/drawer']">
            <v-list density="comfortable">
                <v-list-item link to="/">
                    <v-list-item-avatar start>
                        <v-icon icon="mdi-view-dashboard"/>
                    </v-list-item-avatar>
                    <v-list-item-title v-text="'Dashboard'"/>
                </v-list-item>

                <v-list-item link to="/users">
                    <v-list-item-avatar start>
                        <v-icon icon="mdi-account-group"/>
                    </v-list-item-avatar>
                    <v-list-item-title v-text="'Users'"/>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar>
            <v-app-bar-nav-icon variant="text" @click.stop="toggleDrawer"/>
            <v-spacer/>
            <v-btn @click.stop="toggleDarkMode" :icon="`mdi-brightness-${brightness}`" class="mr-2"/>
            <v-btn @click.prevent="logout" icon="mdi-logout" class="mr-2"/>
        </v-app-bar>

        <v-main>
            <suspense>
                <router-view/>
            </suspense>
        </v-main>
    </v-layout>
</template>

<script setup lang="ts">
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()

const logout = () => store.dispatch('user/logout')
const toggleDarkMode = () => store.dispatch('application/toggleDarkTheme')
const toggleDrawer = () => store.dispatch('application/toggleDrawer')

const brightness = computed(() => {
    return store.getters["application/darkTheme"] ? 4 : 7
})
</script>

<style scoped>

</style>