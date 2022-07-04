<template>
    <v-main>
        <v-container fluid fill-height>
            <v-form @submit.prevent="auth(form)">
                <v-card class="elevation-12">
                    <v-toolbar color="primary">
                        <v-toolbar-title>Registration form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>

                        <v-text-field
                            prepend-icon="person"
                            name="Email"
                            label="Email"
                            type="text"
                            v-model="form.email"
                            :error-messages="errors.email"
                        ></v-text-field>
                        <v-text-field
                            prepend-icon="person"
                            name="Nickname"
                            label="Nickname"
                            type="text"
                            v-model="form.nickname"
                            :error-messages="errors.nickname"
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
                        <v-text-field
                            id="password_confirmation"
                            prepend-icon="lock"
                            name="password_confirmation"
                            label="Confirm password"
                            type="password"
                            v-model="form.password_confirmation"
                            :error-messages="errors.password_confirmation"
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" type="submit" v-text="'Register'" variant="outlined"/>
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
    nickname: null,
    password: null,
    password_confirmation: null
})
const errors = reactive({
    email: [],
    nickname: [],
    password: [],
    password_confirmation: [],
})

const auth = (data) => {
    Object.assign(errors, {
        email: [],
        nickname: [],
        password: [],
        password_confirmation: [],
    })

    const response = store.dispatch('user/register', data)

    response.then(() => {
        router.push({name: 'dashboard'})
    }).catch(_errors => {
        Object.assign(errors, _errors.errors)
    })
}
</script>