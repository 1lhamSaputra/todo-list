<template>
      <div class="item" v-if="item">
          <input type="checkbox" v-model="item.completed" @change="updateTodo()">
          <span :class="['itemText', item.completed ? 'completed' : '']">{{item.todo}}</span>
          <button class="editButton">
            <font-awesome-icon
            icon="edit"
            class="edit"
            />
            <font-awesome-icon
            icon="trash"
            class="trash"
            @click="deleteTodo()"
            />
          </button>
      </div>
</template>

<script>
export default {
    props:['item'],
    methods:{
        updateTodo(){
            axios.post(`api/todo/update/${this.item.id}`,{
                completed: this.item.completed
            })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err); 
            })
        },

        deleteTodo(){
            axios.get(`api/todo/delete/${this.item.id}`)
            .then(res => {
                console.log(res)
                this.$emit('reloadTodos')
            })
            .catch(err => {
                console.error(err); 
            })
        }
    }
}
</script>

<style scoped>
    .item{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .completed{
        text-decoration: line-through;
        color: #999999;
    }

    .itemText{
        width:100%;
        margin-left:20px;
    }

    .editButton{
        color: blue;
        border-radius: 5px;
        border: none;
        outline: none;
        margin-right: 5px;
        background-color:white;
        font-size: 17px;
    }

    .edit{
        color: blue;
        border-radius: 5px;
        border: none;
        outline: none;
        margin-right: 5px;
        background-color:white;
        font-size: 17px;
    }

    .trash{
        color: red;
        border-radius: 5px;
        border: none;
        outline: none;
        margin-right: 5px;
        background-color:white;
        font-size: 17px;
    }
</style>