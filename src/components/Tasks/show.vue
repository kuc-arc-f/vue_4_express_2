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
            //this.$route.params.id
            //var items = []
            axios.get("/api_books_show/" +this.$route.params.id )
            .then(res =>  {
                var dat = res.data.docs
                this.item = dat[0];
                console.log( dat )
            })

        },
    }
}
</script>


