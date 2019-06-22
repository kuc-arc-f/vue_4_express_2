<template lang="html">
    <div class="container">
            <div class="form-group">
                <label for="TopicTitle">タイトル</label>
                <input type="text" class="form-control" id="title" v-model="title" >
            </div>
            <div class="form-group">
                <label for="TopicContent">content</label>
                <textarea class="form-control" id="content" rows="3" v-model="content"></textarea>
            </div>
            <button v-on:click="updateTask">投稿</button>
            <hr />
            <button v-on:click="deleteTask">[ delete ]</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    created() {
//        this.database = firebase.firestore()
    },
    data() {
        return {
            item: [],
            title:'',
            content:''
        }
    },
    mounted: function() {
        this.getItem();
    },
    methods: {
        getItem: function() {
            axios.get("/api_books_show/" +this.$route.params.id )
            .then(res =>  {
                var dat = res.data.docs
                this.item = dat[0];
                this.title = this.item.title
                this.content = this.item.content
                console.log( dat )
            })
        },
        updateTask: function () {
            // /api_books_update/:id'
        var task = {
                'id' : this.$route.params.id,
                'title': this.title,
                'content': this.content
            };
            axios.post('/api_books_update/', task ).then(res => {
                console.log(res.data );
//                console.log(res.data.content);
            });

        },
        deleteTask: function () {
            //api_books_delete
            axios.get("/api_books_delete/" +this.$route.params.id )
            .then(res =>  {
                console.log( res.data )
            })
        }
    }
}
</script>
