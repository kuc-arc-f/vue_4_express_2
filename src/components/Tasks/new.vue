<template lang="html">
    <div class="container">
            <div class="form-group">
                <label for="TopicTitle">タイトル</label>
                <input type="text" class="form-control" id="title" v-model="title">
            </div>
            <div class="form-group">
                <label for="TopicContent">content</label>
                <textarea class="form-control" id="content" rows="3" v-model="content"></textarea>
            </div>
            <button v-on:click="send_post">投稿</button>
    </div>
</template>

<script>
import axios from 'axios'
var tableName = 'tasks'

export default {
    created() {
//        this.database = firebase.firestore()
    },
    data() {
        return {
            title:'',
            content:''
        }
    },
    methods: {
        createTask: function() {
            console.log('#create')
            var self = this
            if (this.newTodoName == "") { return; }        
            this.database.collection(tableName).add({
                title: this.title,
                content: this.content
            }).then(function(docRef) {
                console.log("Document written with ID: ", docRef.id)
                self.$router.push('/tasks')
            }).catch(function(error) {
                console.log("Error adding document: ", error)
            })
            this.newTodoName = ""
        },
        send_post(){
            var task = {
                'title': this.title,
                'content': this.content
            };
            axios.post('/api_books_new' , task ).then(res => {
                console.log(res.data );
//                console.log(res.data.content);
            });
        },        
    }
}
</script>
