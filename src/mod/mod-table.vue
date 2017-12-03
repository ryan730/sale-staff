//- Created by ryan.zhu on 2017/11/8.
//- ......(\_/)
//- ......( '_')
//- ..../"NOBUG"\======░ ▒▓▓█D
//- /"""""""""""""""""""\
//- \_@_@_@_@_@_@_@/
//-
<template lang='pug'>
    .mod-table
        el-table(:data='tableData', border='', style='width: 100%')
            el-table-column(prop='name', label='姓名', width='200')
            el-table-column(prop='type', label='类型', width='200')
            el-table-column(prop='tel', label='电话', width='200')
            el-table-column(prop='master', label='所有人', width='200')
            el-table-column(prop='action', label='操作')
                template(slot-scope='scope')
                    el-button(@click='handleClick(scope.row)', type='text', size='small') 查看
                    el-button(type='text', size='small') 编辑
</template>

<script>
    import conf from '@/config/conf';
    function $jsonToParams(data){
        var param = "";
        for (var prop in data) {
            param += prop + "=" + data[prop] + "&";
        }
        param = param.substring(0, param.length - 1);
        return param;
    }
    export default {
        data() {
            return {
                tableData: [{
                    name: '王小虎',
                    type: '类型一',
                    tel: '1380000000',
                    master: '老王',
                    action: 'go'
                }, {
                    name: '王小虎',
                    type: '类型一',
                    tel: '1380000000',
                    master: '老王',
                    action: 'go'
                }, {
                    name: '王小虎',
                    type: '类型一',
                    tel: '1380000000',
                    master: '老王',
                    action: 'go'
                }, {
                    name: '王小虎',
                    type: '类型一',
                    tel: '1380000000',
                    master: '老王',
                    action: 'go'
                }]
            }
        },
        methods:{
            handleClick(...arg){
                console.log('mod-table-click:',arg);
                let params = $jsonToParams(arg[0]);
                this.$router.push('/customer/details'+ '?' + params)
            }
        }
    }
</script>
<style lang='stylus'>
    @import '~::libs/hotcss/px2rem.styl'
    .m-select
        float right
        width $px2rem(260px)
        height $px2rem(40px)
        line-height $px2rem(40px)
    .mod-table
        .el-table__header-wrapper
            table
                thead
                    tr
                        background $color(s-car)
                        color white

</style>
