<template>
    <div class="container-fluid pt-4 pb-4">
        <div class="row mb-3">
            <div class="col-sm-6 border">
                <h2 class="mb-3">
                    Left column (Top)
                </h2>
                <div class="row" v-if="selectedItems.length > 0">
                    <div class="col-md-3" v-for="item in selectedItems" :key="item.id">
                        <v-card class="mb-2 mt-2"
                                :card-data="item"
                                removable="true"
                                @remove-item="() => removeItem(item)"
                        ></v-card>
                    </div>
                </div>
                <h4 v-else>
                    Please select item!
                </h4>
            </div>
            <div class="col-sm-6 border">
                <h2 class="mb-3">
                    Right column (top)
                </h2>
                <v-card class="mb-2 mt-2"
                        v-if="selectedItem"
                        :card-data="selectedItem"
                        removable="true"
                        @remove-item="() => removeItem(selectedItem)"
                ></v-card>
                <h4 v-else>
                    Please select item!
                </h4>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 border pt-2 pb-2">
                <h2 class="mb-3">
                    Left column (bottom)
                </h2>

                <div class="row">
                    <div class="col-md-3" v-for="item in leftItems" :key="item.id">
                        <v-card class="mb-2 mt-2"
                                :card-data="item"
                                :class="{'bg-light': selectedItems.indexOf(item) !== -1 }"
                                @click="selectItem(item, true)"
                        ></v-card>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 border pt-2 pb-2">
                <h2 class="mb-3">
                    Right column (bottom)
                </h2>

                <div class="row">
                    <div class="col-md-3" v-for="item in rightItems" :key="item.id">
                        <v-card class="mb-2 mt-2"
                                :class="{'bg-light': selectedItem.id === item.id}"
                                :card-data="item"
                                @click="selectItem(item)"
                        ></v-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from "@/store";
import Card from "@/components/Card";

export default {
    name: 'App',
    components: {
        'v-card': Card
    },
    data(){
        return {
            selectedItem: false,
            selectedItems: [],
        }
    },
    mounted() {
        this.init()
    },
    computed: {
        rightItems() {
            return store.state.rightItems
        },
        leftItems() {
            return store.state.leftItems
        },
    },
    methods: {
        init() {
            this.getItems('/data/right.json', 'setRightItems')
            this.getItems('/data/left.json', 'setLeftItems')
        },
        async getItems(url, action) {
            if (!url || !action) {
                console.warn('URL и/или действие не указаны.');
                return;
            }

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP ошибка: ${response.status}`);
                }

                const data = await response.json();
                store.dispatch(action, data);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error.message);
            }
        },
        selectItem(item, multiple) {
            if(multiple){
                if (this.selectedItems.length < 6 && !this.selectedItems.some(i => i.id === item.id)) {
                    this.selectedItems.push(item)
                }
            }
            else{
                this.selectedItem = item
            }
        },
        removeItem(item) {
            if (this.selectedItems.includes(item)) {
                this.selectedItems = this.selectedItems.filter(i => i.id !== item.id)
            } else if (this.selectedItem === item) {
                this.selectedItem = false
            }
        }
    }
}
</script>