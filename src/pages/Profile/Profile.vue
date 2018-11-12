<template>
    <div>
         <div>
        <Row>
        <Col span="11">
            <Card>
                <p slot="title">励志名言</p>
                <p>美丽的花虽然会凋谢，可是盛开的时刻值得欣赏。要在美好的时候创造出美好的东西，人生才会充满意义。</p>
                
                <p>处事不必求功，无过便是功。为人不必感德，无怨便是德。</p>
               
                <p>必须不断汲取专业知识但不要以专家自居以专家自居的想法会损害产生新思想、运用新思想的能力</p>
               <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">方向发展</p>
            <p>致力于前端技术的研究,机器学习,深度学习,目前正在尝试Python的开发，
                数据库的开发，曾与上海市互联网科技公司实习，担任的职位前端开发工程师
            </p>
        </Card>
    </div>
            </Card>
        </Col>
        <Col span="11" offset="2">
            <Card dis-hover>
                <p slot="title">爱看的书</p>
                <Row>
        <Col span="12">
          <img src="./images/1.jpg" alt="" style="width:50%;height:50%">
        </Col>
        <Col span="12">
          <p>　　在《chao越自己（励志珍藏）》中，刘墉以一封封亲切的亲笔信，写给刚考上纽约史岱文森高中的儿子刘轩，信中针对儿子每日生活所遭遇的事件加以发挥及引导，寄理于情的字字句句间，充满了父亲对儿子的关爱、教诲与期许。《chao越自己（励志珍藏）》这些刘氏家书影响了千万家长、老师的育子方针与教育理念，也改变了千万学子的人生态度和生命视野。</p>
        </Col>
    </Row>
            </Card>
        </Col>
        
    </Row>     
      <Row>
        <Col span="11">
            <Card>
                <p slot="title">所获荣誉</p>
                <Table stripe :columns="columns1" :data="data1"></Table>
            </Card>
        </Col>
        <Col span="11" offset="2">
            <Card dis-hover>
                <p slot="title">未来对自己的要求</p>
                 <p>不忘初心,砥砺前行</p>
                 <p>为自己将来的事业努力拼搏</p>
                <p>做人做事沉稳,细心对待生活中每一个知己</p>
                <p>做好生活中的每一个小细节</p>
              <Button @click="value4 = true" type="primary" class="but">关于笔者</Button>
        <Drawer :closable="false" width="640" v-model="value4">
            <p :style="pStyle">个人简介</p>
            <p :style="pStyle">Personal</p>
            <div class="demo-drawer-profile">
                <Row>
                    <Col span="12">
                       姓名：江华
                    </Col>
                    <Col span="12">
                       政治面貌：中共党员
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        籍贯：江西省
                    </Col>
                    <Col span="12">
                        国家：中国
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                       出生日期：1996-02-07
                    </Col>
                    <Col span="12">
                       个人网站： <a href="https://www.cyd101.com" target="_blank">https://www.cyd101.com</a>
                        </Col>
                </Row>
               喜欢的一句话：让学习成为一种习惯！
            </div>
            <Divider />
            <p :style="pStyle">公司</p>
            <div class="demo-drawer-profile">
                <Row>
                    <Col span="12">
                        职位: 前端开发工程师
                    </Col>
                    <Col span="12">
                        职责：前端开发技术
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        所属部门：前端开发组
                    </Col>
                </Row>
                技能：Java,Html，Css,JavaScript,Jquery,React.js,Node.js,Vue.js
            </div>
            <Divider />
            <p :style="pStyle">联系方式</p>
            <div class="demo-drawer-profile">
                <Row>
                    <Col span="12">
                        电子邮箱：1193097176@qq.com
                    </Col>
                    <Col span="12">
                        电话号码：13635991870
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        GitHub: <a href="https://github.com/iview/iview" target="_blank">https://github.com/iview/iview</a>
                    </Col>
                </Row>
            </div>
        </Drawer>
               
            </Card>
               
        </Col>
        
    </Row>
       
    </div>
      <BackTop :height="100" :bottom="100">
        <div class="top bot boot" style="border-radius:2px;background:rgba(0, 153, 229, .7);padding:10px;text-align:center;color:#fff">返回顶端</div>
    </BackTop>
    </div>
    
</template>
<script>
export default {
       
      data () {
           
            return {
                 value4: false,
                pStyle: {
                    fontSize: '16px',
                    color: 'rgba(0,0,0,0.85)',
                    lineHeight: '24px',
                    display: 'block',
                    marginBottom: '16px'
                },
                columns1: [
                    {
                        title: '获奖时间',
                        key: '获奖时间'
                    },
                    {
                        title: '所获荣誉',
                        key: '所获荣誉'
                    },
                    {
                        title: '授奖单位',
                        key: '授奖单位'
                    }
                ],
                data1: [
                    {
                        获奖时间: '2017年5月',
                        所获荣誉: '全国大学生英语竞赛一等奖',
                        授奖单位: '全国大学生英语教研研究会',
                       
                    },
                    {
                        获奖时间: '2017年6月',
                        所获荣誉: '桂林理工大学特等奖学金',
                        授奖单位: '桂林理工大学',
                       
                    },
                    {
                        获奖时间: '2017年9月',
                        所获荣誉: '桂林理工大学特等奖学金',
                        授奖单位: '桂林理工大学',
                       
                    },
                    {
                        获奖时间: '2017年12月',
                        所获荣誉: '桂林理工大学优秀团员',
                        授奖单位: '桂林理工大学',
                       
                    },
                    {
                        获奖时间: '2017年6月',
                        所获荣誉: '桂林理工大学特等奖学金',
                        授奖单位: '桂林理工大学',
                       
                    }
                    
                ]
            }
        }

}
</script>

<style scoped>
.ivu-table-tbody{
    font-size: 24px !important;
}
  body{
      background: rgba(255,145,245, 0.4);
      
  }
  *{
      font-size: 20px;
  }
  .ivu-row{
      margin-top: 20px;
      padding: 10px;
  }
  p{
      text-indent: 2em;
  }
  .demo-drawer-profile{
        font-size: 14px;
    }
    .demo-drawer-profile .ivu-col{
        margin-bottom: 12px;
    }
    .but{
        margin-left: 40px;
        margin-top: 10px;
    }
 
  .ivu-card-head p{
      font-size: 24px;
      overflow:unset;
  }
  
</style>

