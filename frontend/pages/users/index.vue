<template>
    <div>
        <h1>Hello</h1>
        <nuxt-link to="users/1">Go</nuxt-link>

        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    async asyncData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()

        return {
            users
        }
    },
    data() {
        return {
            users: []
        }
    },
}
</script>
