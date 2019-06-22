<template>
    <div>
        <h1>tasks- test:</h1>
        <hr />
        test : {{ message }}
    </div>
</template>

<script>
    export default {
        created() {
            console.log( exStorage.load( sysConst.STORAGE_KEY_flash ) )
//            userState.check()
//            console.log(this.user)
//          myStorage.load()
//            myStorage.remove()
        },
        data() {
            return {
                user : [],
                message :''
            }
        },
        methods: {
        }
    }
</script>

