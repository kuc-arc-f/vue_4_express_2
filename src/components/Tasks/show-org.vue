<template>
    <div>
        <h1>title : {{ item.title }}</h1>
        <div v-text="item.content"></div>
    </div>
</template>

<script>
//import firebase from 'firebase'
import axios from 'axios'
//
export default {
    created() {
//        this.database = firebase.firestore()
    },
    data: function( ) {
        var itemDat = {title : '', content : ''}
        return {
            item: itemDat,
            editFlg: false,
            updated: false,
        }
    },
    mounted: function() {
        this.getItem()
    },
    methods: {
        getItem: function() {
            var items = []
            var docRef = this.database.collection("tasks").doc( this.$route.params.id )
            var self = this
            docRef.get().then(function(doc) {
                var task = doc.data()
                items.push({
                    title: task.title
                })
                self.item = task
            }).catch(function(error) {
                console.log("Error getting document:", error);
            })
        },
    }
}
</script>


