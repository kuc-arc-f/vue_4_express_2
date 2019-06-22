<template>
    <div>
        <div id="flash_message" v-if="message">
            <span class="badge badge-success">
                <h3 id="h3_msg" style="margin : 15px;">{{ message }}</h3>
            </span>
        </div>

    </div>
</template>

<script>
    export default {
        created() {
            this.load_msg()
        },
        data() {
            return {
                message : '',
            }
        },
        methods: {
            load_msg() {
                var dat = exStorage.load( sysConst.STORAGE_KEY_flash )
                if(dat !=null){
                    this.message =dat.message;
                }
                exStorage.remove( sysConst.STORAGE_KEY_flash )
//                console.log(sysConst.STORAGE_KEY_flash )
                console.log(this.message )
            }            
        }
    }
</script>

<style>
</style>

