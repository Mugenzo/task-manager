<template>
    <v-card>
        <v-card-title>
            <v-tabs>
                <v-tab v-for="{id, title} in desks" v-key="id">
                    {{ title }}
                </v-tab>
            </v-tabs>
        </v-card-title>
        <v-card-text>
            <router-view>

            </router-view>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
export default {
    data: () => ({
        desks: [],
    }),
    mounted() {
        this.getDesks()
    },
    methods: {
        getDesks() {
            console.log(this.$router)
            // this.http.get(`/application/`)
        }
    }
}
</script>

<style scoped>

</style>