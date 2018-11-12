<template>
    <div class="contain">
        <div class="top">
            <div class="left">
                <mt-swipe :auto="4000">
  <mt-swipe-item  class="one"></mt-swipe-item>
  <mt-swipe-item class="two"></mt-swipe-item>
  <mt-swipe-item class="three"></mt-swipe-item>
</mt-swipe>
            </div>
            <div class="right">
                    <h1 style="text-align:center">梦想从未停止</h1>
                <p>
                    有谁没有梦想，有谁不愿爬上梦想的峰巅？可又有几人梦圆，又有几人的梦想不被残酷的现实压成粉末，随风飘远？没有梦想，我们的心灵是残缺的；梦想断了，无异于幻想，只能编织一段伤心的记忆。所以梦想的高度，须你抬头可见，然后执着地攀登；梦想的距离，不要超出视角，然后努力地靠近。
                   未来追求自己的梦想，我作为一名即将毕业的中国大学生，时刻在为自己的梦想所奋斗着，
                   在学校的这段时光是最令我难忘的，高兴的是身边有老师得照顾，生活上有同学们的关心，回家之后有父母亲的关爱，
                   我想这是我最幸福的时刻，未来是美好的更是令我憧憬的，
                </p>
            </div>
        </div>
        <div class="bottom">
            <div class="bot-left">
                <video width="100%" height="100%" controls>  
                    <source src="./video/video.mp4" type="video/mp4"> 
                   
                </video> 
            </div>
            <div class="bot-right">
                  <video width="100%" height="100%" controls>  
                    <source src="./video/video2.mp4" type="video/mp4"> 
                   
                </video> 
            </div>
        </div>
       
    </div>
</template>
<script>
    
</script>
<style scoped>
     .contain{
        width: 100%;
        height: 100%;
        overflow: hidden;

     }
    
     .right p{
         text-indent: 2em;
         font-size: 22px;
         line-height: 30px;

     }
     .top .left{
         float: left;
         width:50%;
         height: 300px;
       
     }
     .top .right{
         float: left;
         width:50%;
         height: 300px;
          overflow: hidden;
         padding-right: 10px;
         padding-left: 10px;
     }
     .bot-left{
          float: left;
         width:50%;
         height: 300px;
         background:lightblue;
     }
     .bot-right{
          float: left;
         width:50%;
         height: 300px;
         background:lightcoral;
     }
     .one{
         background: url('./images/banner.jpg') no-repeat;
         background-size: cover;
         
     }
     .two{
         background: url('./images/banner2.jpg') no-repeat center center;
         background-size: cover;
     }
     .three{
          background: url('./images/banner4.jpg') no-repeat center center;
         background-size: cover;
     }
     .lat{
         width: 100%;
        height: auto;
     }
    
</style>
