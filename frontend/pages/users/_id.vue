<template>
    <div>
        <h1>Ползователь {{ id }}</h1>
    </div>
</template>

<script>
   export default {
        computed: {
            id() {
                return this.$route.params.id
            }
        }
   }
</script>

