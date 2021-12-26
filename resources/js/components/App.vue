<template>
    <div>
        <h1 style="margin-top200px; text-align:center">LIST TODO</h1>

        <div class="todoList">
            <add-item-form></add-item-form>
            <list-view></list-view>
        </div>
    </div>
</template>

<script>
import addItemForm from './addItemForm.vue';
import listView from './listView.vue';

export default {
    components:{
        addItemForm,
        listView
    }
}
</script>

<style scoped>
    .todoList{
        width: 400px;
        margin:auto;
        margin-top:50px;
    }
</style>