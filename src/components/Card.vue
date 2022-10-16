<template>
    <div class="card">
        <div class="card-body d-flex justify-content-between">
            <h5 class="card-title">{{ data.name }}</h5>
            <a href="#" class="btn btn-sm btn-danger" v-if="removable" @click.prevent="removeItem">
                x
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card',
    props: ['data', 'removable'],
    methods: {
        removeItem(){
            this.$emit('remove-item')
        }
    }
}
</script>

<style>
    .card{
        cursor: pointer;
    }
</style>