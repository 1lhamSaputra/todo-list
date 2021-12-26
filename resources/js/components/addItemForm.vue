<template>
    <div class="addItem">
        <input type="text" placeholder="Add Todo" class="input" v-model="item.todo">
        <button class="addButton" @click="addItem()">
            <font-awesome-icon
            icon="plus"
            class="plus"
            />
        </button>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            item:{
                todo : ''
            }
        }
    },
    methods:{
        addItem(){
            if (this.item.todo) {
                axios.post('api/todo/store',{todo:this.item.todo})
                .then(res => {
                    if (res.data.status == 'success') {
                        this.item.todo = ""
                        this.$emit('reloadTodos')
                    }
                })
                .catch(err => {
                    console.error(err); 
                })
            }
        }
    }

}
</script>

<style scoped>
    .addItem{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 25px;
    }

    .input{
        border-style: solid;
        border-color: blue;
        border-bottom-left-radius: 3px;
        border-bottom-top-radius: 3px;
        border-width: 1px;
        outline: none;
        padding:5px;
        height:35px;
        width: 100%;
    }

    .addButton {
        height:47px;
        width: 42px;
        border-style: solid;
        border-color: blue;
        border-radius: 3px;
        border-width: 1px;
        background-color:white;
    }
</style>