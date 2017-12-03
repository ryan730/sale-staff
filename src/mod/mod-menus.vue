<template>
    <div class="page-menus">
        <el-menu :default-active="activePath()" class="el-menu-vertical-demo" unique-opened router>
            <template v-for="bitem in billitem">
                <template v-if="bitem.sublist&&bitem.isShow">
                    <el-submenu :index="bitem.index">
                        <!--<template slot="title"><i :class="bitem.icon"></i>{{bitem.title}}</template>-->
                        <template slot="title"><i :class="bitem.icon"></i>{{bitem.name}}</template>
                        <el-menu-item v-for="(subitem,myindex) in bitem.sublist" v-if='subitem.isShow' :index="subitem.topath" :key="myindex">
                            <!--{{subitem.title}}-->
                            {{subitem.name}}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else-if='bitem.isShow'>
                    <el-menu-item :index="bitem.index">
                        <i :class="bitem.icon"></i>
                        <!--{{bitem.title}}-->
                        {{bitem.name}}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import conf from '@/config/conf';
    export default {
        name: '',
        data: function () {
            return {
                billitem: conf.pages,
                activePath:()=>{
                    //home下的商品，菜单状态全为高亮
                    let path = (this.$route.path.indexOf('/home')!==-1)?'/home':this.$route.path;
                    return path;
                }
            }
        },
        created(){
            console.log('sdfsdfsd---$route.path:',this.$route.path)
        },
        computed: {
            onRoutes: function () {
                console.log(this.$route.path)
                return this.$route.path.replace('/', '');  //$route.path表示当前路由，:index能直接跳转路由
            }
        }
    }
</script>

<style lang='stylus'>
    @import '~::libs/hotcss/px2rem.styl'
    .page-menus
        display: block;
        float: left;
        width: $px2rem(200px);

    .page-menus > ul
        height 100%

    .page-menus
        .el-menu
            background $color(menu-bg)
        .el-menu-item.is-active
            color white
            background $color(menu-active)
        .el-submenu .el-menu-item
            background $color(menu-sub-bg)
        .el-submenu .el-menu-item.is-active
            color white
            background $color(menu-active)
        .el-menu-item, .el-submenu__title
            height $px2rem(48px)
            line-height $px2rem(48px)

</style>

