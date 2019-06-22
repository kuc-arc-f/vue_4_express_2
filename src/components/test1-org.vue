<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />
    <a href="#"  v-on:click="send_post()">[ send_test ]</a>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
    data () {
        return {
            message : 'msg-123',
            msg : ""
        }
    },
    created () {
        //this.getMessage();
        this.get_foo()
    },
    methods: {
        getMessage () {
           //self = this
            const req = new XMLHttpRequest
//            let message = ''
            req.open('GET', '/foo', false)
            req.onload = function () {
                var dat = JSON.parse(req.responseText).msg
                console.log(dat)
                this.msg = dat
//                this.message = JSON.parse(req.responseText).msg
            }
            req.send(null)
//        return message
        },
        get_foo () {
            axios.get("/foo")
            .then(res =>  {
                //var items = res.data
                console.log(res.data)
                this.msg = res.data.msg
            })
        },
        send_post(){
            var task = {
                'title': "t1",
                'content': "C1"
            };
            axios.post('/bar' , task ).then(res => {
                console.log(res.data );
//                console.log(res.data.content);
            });
        },
    }
}
</script>
