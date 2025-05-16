<template>
    <div class="card">
        <div class="card-body d-flex justify-content-between">
            <h5 class="card-title">{{ cardData?.name || 'No Name' }}</h5>
            <button class="btn btn-sm btn-danger" v-if="removable" @click.prevent="removeItem">
                x
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Сard',
    props: {
        cardData: {
            type: Object,
            required: true
        },
        removable: {
            type: Boolean,
            default: false
        }
    },
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