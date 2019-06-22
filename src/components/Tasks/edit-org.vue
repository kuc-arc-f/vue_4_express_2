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
import firebase from 'firebase'

export default {
    created() {
        this.database = firebase.firestore()
    },
    data() {
        return {
            title:'',
            content:''
        }
    },
    mounted: function() {
        this.getItem();
    },
    methods: {
        getItem: function() {
            var docRef = this.database.collection("tasks").doc( this.$route.params.id )
            var self = this
            docRef.get().then(function(doc) {
                var task = doc.data()
                self.title = task.title
                self.content = task.content
            }).catch(function(error) {
                console.log("Error getting document:", error);
            })                
        },
        updateTask: function () {
            var self = this
            var docRef = this.database.collection("tasks").doc( this.$route.params.id );
            docRef.update({
                title: self.title,
                content: self.content
            })
            .then(function() {
                console.log("Document successfully updated!");
            })
            .catch(function(error) {
                console.error("Error updating document: ", error);
            })
        },
        deleteTask: function () {
            var self = this
            var docRef = this.database.collection("tasks").doc(this.$route.params.id)
            docRef.delete().then(function() {
                console.log("Document successfully deleted!")
                self.$router.push('/tasks')
            }).catch(function(error) {
                console.error("Error removing document: ", error)
            })
        }
    }
}
</script>
