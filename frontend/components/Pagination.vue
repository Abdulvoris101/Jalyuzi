<template>
    <ul class="pagination pagination-md mt-3 ms-2">
        <li class="page-item">
            <a class="page-link"  aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
        <li class="page-item" 
        :class="{'active': page == currentPage}" v-for="(page, index) in totalPages" :key="index"
        >
            <a class="page-link"  @click="changePage(page)"
            :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages - 1 && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 0 && Math.abs(pageNumber - currentPage) > 3)}"
            v-if="Math.abs(page - currentPage) < 3 || page == totalPages - 1 || pageNumber == 0">
            {{ page }}</a>
        </li>
        <li class="page-item">

            <a class="page-link" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
        </li>
    </ul>
</template>


<script>
export default {
    props: ['total', 'item'],

    data() {
        return {
            currentPage: 1,
        }
    },
    computed: {
        totalPages() {
            console.log(this.total);
            return Math.ceil(this.total / this.item)
        }
    },

    methods: {
        changePage(pageNumber) {
            this.currentPage = pageNumber
            this.$emit('page-changed', pageNumber)
        }
    }
    
}
</script>


<style scoped>
.page-link {
    cursor: pointer;
}

a.first::after {
    content:'...'
  }
  
  a.last::before {
    content:'...'
  }
</style>