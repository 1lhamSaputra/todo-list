<template>
    <div>
        <div v-for="item in items" :key="item.id">
            <list-item
            :item="item"
            class="item"
            v-on:reloadTodos="getTodos()"
            ></list-item>
        </div>
    </div>
</template>

<script>
import listItem from './listItem.vue'
export default {
    components:{
        listItem
    },
    data: function(){
        return {
            items: []
        }
    },
    methods:{
        getTodos(){
            axios.get('/api/todos')
            .then(res => {
                this.items = res.data.todos
            })
            .catch(err => {
                console.error(err); 
            })
        }
    },
    created(){
        this.getTodos()
    }
}
</script>

<style scoped>
    .item{
        padding:12px;
        margin-top: 5px;
        border-style: solid;
        border-color: blue;
        border-radius: 7px;
        border-width: 1px;
    }
</style>