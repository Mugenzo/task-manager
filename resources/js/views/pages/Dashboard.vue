<template>
    <div>
        hello users
        <pre>
            {{ users }}
        </pre>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const http = inject('http')

const users = await http().get('/app/dashboard');
</script>

<style scoped>

</style>