//- Created by ryan.zhu on 2017/11/8.
//- ......(\_/)
//- ......( '_')
//- ..../"NOBUG"\======░ ▒▓▓█D
//- /"""""""""""""""""""\
//- \_@_@_@_@_@_@_@/
//-
<template lang='pug'>
    .mod-select
        el-select.m-select(v-model='value4', clearable='', placeholder='请选择')
            el-option(v-for='item in options', :key='item.value', :label='item.label', :value='item.value')
</template>
<script>
    import conf from '@/config/conf';
    export default {
        data(){
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                },{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value4: ''
            }
        }
    };
</script>
<style lang='stylus'>
    @import '~::libs/hotcss/px2rem.styl'
    .m-select
        float right
        width $px2rem(260px)
        height $px2rem(40px)
        line-height $px2rem(40px)
</style>
