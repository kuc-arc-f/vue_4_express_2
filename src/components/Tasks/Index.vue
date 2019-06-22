<template>
    <div>
        <h1>Tasks- Index:</h1>
        <hr />
        <router-link :to="'/tasks/new/'">[ add ]</router-link>
        <hr />
        <br />
        <ul v-for="task in tasks" v-bind:key="task._id">
            <li>{{ task.title }} / id: {{ task._id }}
                <p>{{ task.content }}</p>
                <router-link :to="'/tasks/show/' + task._id">{{ task.title }}</router-link>
                &nbsp;<router-link :to="'/tasks/edit/' + task._id">[ edit ]</router-link>
            </li>
        </ul>        
    </div>
</template>

<script>
import {Mixin} from '../../mixin'
import axios from 'axios'

export default {
  mixins:[Mixin],
  created () {
    this.getTasks()
  },
  data () {
    return {
      tasks: []
    }
  },
  methods: {
    getTasks () {
            axios.get("/api_books_index")
            .then(res =>  {
                this.tasks = res.data.docs
            })        
    }
  }
}
</script>
