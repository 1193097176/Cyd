<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
*{
    font-size: 22px;
}
.ivu-card-head p, .ivu-card-head-inner{
    font-size: 24px;
    overflow: unset;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                           学习
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            生活
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            工作
                        </MenuItem>
                        
                    </div>
                </Menu>
            </Header>
            <Layout :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>现在</BreadcrumbItem>
                    <BreadcrumbItem>未来</BreadcrumbItem>
                    <BreadcrumbItem>ing</BreadcrumbItem>
                </Breadcrumb>
                <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
                    <Layout>
                        <Sider hide-trigger :style="{background: '#fff'}">
                            <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                                <Submenu name="1">
                                    <template slot="title">
                                        <Icon type="ios-navigate"></Icon>
                                        学习
                                    </template>
                                    <MenuItem name="1-1">专业技能</MenuItem>
                                    <MenuItem name="1-2">学做人</MenuItem>
                                    <MenuItem name="1-3">学做事</MenuItem>
                                </Submenu>
                                <Submenu name="2">
                                    <template slot="title">
                                        <Icon type="ios-keypad"></Icon>
                                        生活
                                    </template>
                                    <MenuItem name="2-1">学感恩</MenuItem>
                                    <MenuItem name="2-2">学感知</MenuItem>
                                </Submenu>
                                <Submenu name="3">
                                    <template slot="title">
                                        <Icon type="ios-analytics"></Icon>
                                        工作
                                    </template>
                                    <MenuItem name="3-1">学技巧</MenuItem>
                                    <MenuItem name="3-2">学战略</MenuItem>
                                </Submenu>
                            </Menu>
                        </Sider>
                        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                            
                             <Row style="background:#eee;padding:20px">
        <Col span="11">
            <Card :bordered="false">
                <p slot="title">做有学问的人</p>
                <p>时刻保持着学习的理念加强专业技能</p>
                <p>学习新的技术栈，了解市场行情</p>
                <p>学习别人的优点，深刻了解自己</p>
            </Card>
        </Col>
        <Col span="11" offset="2">
            <Card shadow>
                <p slot="title">做懂感恩的人</p>
                <p>试着去做一次公益活动，体谅父母辛劳</p>
                <p>尽自己的努力去帮助生活照每一位需要帮助的人</p>
                <p>从小事做起，感恩，感知，感性</p>
            </Card>
        </Col>
    </Row>
     <Row style="background:#eee;padding:20px">
        <Col span="11">
            <Card :bordered="false">
                <p slot="title">做富有诗意的人  </p>
                <p>每天读一本好书</p>
                <p>每天对一句英语单词</p>
                <p>每天对自己说一句我能行！</p>
            </Card>
        </Col>
        <Col span="11" offset="2">
            <Card shadow>
                <p slot="title">做爱生活的人</p>
                <p>努力参加锻炼</p>
                <p>经常去有趣的地方看看</p>
                <p>无论生在何处，记得常打电话回家</p>
            </Card>
        </Col>
    </Row>
                        </Content>
                         
                    </Layout>
                </Content>
            </Layout>
            <Footer class="layout-footer-center">2018-2019 &copy; 桂林理工大学南宁分校</Footer>
        </Layout>
    </div>
</div>
</template>
<script>

  
    export default {
         
    }
</script>
<style scoped>

  .ivu-menu{
      z-index:0 !important;
  }
  .layout[data-v-d486588e]{
      border:none;
  }
</style>

