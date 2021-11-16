<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <el-button @click='textIndex'> 测似 axios </el-button>
    </div>
  </div>
</template>

<script>
import {getIndex} from '../api/index'
export default {
  name: "Home",
  // components: {

  // }

  data() {
    return {
      index: "index"
    }
  },
  methods: {
    textIndex() {
      getIndex().then(resp => {
        console.log(resp);
      })
    }
  },
  created() {

  }
};
</script>
