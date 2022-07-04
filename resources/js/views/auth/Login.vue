<template>
    <v-main>
        <v-container fluid fill-height>
            <v-form @submit.prevent="auth(form)">
                <v-card class="elevation-12">
                    <v-toolbar color="primary">
                        <v-toolbar-title>
                            Login form
                        </v-toolbar-title>
                        <v-spacer/>
                        <v-btn to="/register" variant="outlined">
                            Register
                        </v-btn>
                    </v-toolbar>
                    <v-card-text>

                        <v-text-field
                            prepend-icon="person"
                            name="login"
                            label="Login"
                            type="text"
                            v-model="form.email"
                            :error-messages="errors.email"
                        ></v-text-field>
                        <v-text-field
                            id="password"
                            prepend-icon="lock"
                            name="password"
                            label="Password"
                            type="password"
                            v-model="form.password"
                            :error-messages="errors.password"
                        ></v-text-field>

                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" type="submit" v-text="'Login'" variant="outlined"/>
                    </v-card-actions>
                </v-card>
            </v-form>
        </v-container>
    </v-main>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

const store = useStore()
const router = useRouter()

const form = reactive({
    email: null,
    password: null
})
const errors = reactive({
    email: [],
    password: []
})

const auth = (data) => {
    const response = store.dispatch('user/authorise', data)

    response.then(() => {
        router.push({name: 'dashboard'})
    }).catch(_errors => {
        Object.assign(errors, _errors.errors)
    })
}
</script>

<style scoped>

</style>