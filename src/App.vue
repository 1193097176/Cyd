<template>
      <div id="app">
          <mt-header fixed title="我的未来我的梦" style="font-size:26px"></mt-header>
         <transition mode="out-in">
           <router-view></router-view>
         </transition>
         
         <FooterGider></FooterGider>
      </div>
</template>
<script>
     import FooterGider from './components/FooterGider/FooterGider.vue';
    export  default{
        components:{
            FooterGider
        }
    }

</script>
<style lang="stylus">
#app
    width 100%
    height 100%
    background #f5f5f5
    overflow-x hidden
    padding-top 40px
    padding-bottom 60px
.v-enter
    opacity 0
    transform translateX(100%)
.v-leave-to
     opacity 0
     transform translateX(-100%)
.v-enter-active
.v-leave-active 
        transition all 0.5s ease 

.footer_guide .guide_item span
       cursor pointer
</style>
