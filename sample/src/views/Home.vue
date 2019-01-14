<template>
  <div style="background-color:mintcream">
    <img alt="Vue logo" src="../assets/vue.jpg" style="width:57%; float:left">
     <div style="background-color:mintcream">
    <sui-card class="red link">
        <p is="sui-label" color="orange" ribbon="right">
          kendo ui
        </p>
      <sui-card-content>
        <img src="../assets/kendo-ui.jpg" class="ui tiny image">
      </sui-card-content>
      <sui-card-content>
        <span slot="right">
          Build Better Vue Apps Faster
        </span>
      </sui-card-content>
      <sui-card-content extra>
        <sui-input
          placeholder="Add Comment"
          icon="heart outline"
          icon-position="left"
          transparent
        />
      </sui-card-content>
    </sui-card>
    <sui-card class="teal link" id="card2">
      <p is="sui-label" color="teal" ribbon="right">
          semantic
        </p>
      <sui-card-content>
        <img src="../assets/semantic-ui.png" class="ui mini image" style="width:57px !important">
      </sui-card-content>
      <sui-card-content>
        <span slot="right">
             Semantic UI integration for Vue
        </span>
      </sui-card-content>
      <sui-card-content extra>
        <sui-input
          placeholder="Add Comment"
          icon="heart outline"
          icon-position="left"
          transparent
        />
      </sui-card-content>
    </sui-card>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style scoped lang="css">
.ui.card {
  padding:5%;
  width:21%;
  float:right;
  margin-right:0.8%;
}
#card2{
  /* transform:translate(40px, 165px); */
  margin-right:-30px !important;
  margin-top:170px;
}
.ui.label{
  transform:rotate(270deg) !important;
  margin-left:70% !important;
  position:unset !important;
  margin-top:-53.2% !important;
  margin-left:77% !important;
  padding:2%;
  writing-mode: vertical-rl;
}
.ui[class*="right ribbon"].label {
  padding-left: 1.7em ;
}
</style>