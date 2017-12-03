//- Created by ryan.zhu on 2017/11/7.
//- ......(\_/)
//- ......( '_')
//- ..../"NOBUG"\======░ ▒▓▓█D
//- /"""""""""""""""""""\
//- \_@_@_@_@_@_@_@/
//- 面包屑组件
<template lang='pug'>
    .mod-crumb(:class='{content:getPathArray.length>1}')
        el-breadcrumb(v-if='getPathArray.length>1',separator-class='el-icon-arrow-right')
            el-breadcrumb-item(v-for="(it, index) in getPathArray",:key='index',:to="{path:it.toPath}")
                //-| {{it.title}}
                | {{it.name}}
                //-| {{it}}
</template>
<script>
    import conf from '@/config/conf';
    export default {
        data(){
            return {
                test: ['a', 'b', 'c'],
                addressURL: this.$route.path
            }
        },
        methods:{
        },
        computed: {
            getPathArray:function(){
                return this.$route?this.$route.meta:[];
            },
            // 计算属性的 getter,通过url获取面包屑节点
            getPathArray1:function(){
                // `this` 指向 vm 实例
                let path = this.$route.path;
                let fullPath = this.$route.fullPath;
                let arr = path.split('/');
                let tempArr = [];
                let item = arr[1];
                //比对一级
                if (item && String(item) !== '') {
                    let real = null;
                    conf.pages.some((it) => {
                        let index = it.index;
                        let title = it.title;
                        let name = it.name;
                        if (('/' + item) === index) {
                            real = {'title': title, 'toPath': index,'name':name};
                            tempArr.push(real);
                            return true;
                        }
                    });
                }
                //比对二级
                if (arr.length > 2 && String(path) !== '') {
                    let real = null;
                    conf.pages.some((it) => {
                        let index = it.index.split('?')[0];
                        let title = it.title;
                        let name = it.name;
                        if (path === index) {
                            real = {'title': title, 'toPath': index,'name':name};
                            tempArr.push(real);
                            return true;
                        }
                        if (it.sublist && it.sublist.length) {
                            it.sublist.map((i) => {
                                let topath = i.topath.split('?')[0];
                                let title = i.title;
                                let name = i.name;
                                //console.log('比对二级====>', i, path, topath)
                                if (path === topath) {
                                    real = {'title': title, 'toPath': topath,'name':name};
                                    tempArr.push(i);
                                    return true;
                                }
                            })
                        }
                        if (it.drillList && it.drillList.length) {
                            it.drillList.map((i) => {
                                let topath = i.topath;
                                let title = i.title;
                                let name = i.name;
                                //console.log('比对二级====>', this.$route, i, fullPath, topath,fullPath.indexOf(topath) !== -1)
                                if (fullPath.indexOf(topath) !== -1) {
                                    real = {'title': title, 'toPath': topath,'name':name};
                                    tempArr.push(i);
                                    return true;
                                }
                            })
                        }

                    });
                }
                return tempArr;
            }
        },
        watch: {
            //监听路由，只要路由有变化(路径，参数等变化)都有执行下面的函数
            $route: {
                handler: function (val, oldVal) {
                    let urlParams = this.$route.params;
                    this.addressURL = this.$route.path;
                    //created事件触发的函数可以在这里写,都是componentA组件，声明周期还在
                },
                deep: true
            }
        }
    };
</script>
<style lang='stylus'>
    @import '~::libs/hotcss/px2rem.styl'
    .mod-crumb.content
        display flex
        flex-direction column
        justify-content center
        padding $px2rem(20px 30px)
</style>
