//- Created by ryan.zhu on 2017/11/10.
//- ......(\_/)
//- ......( '_')
//- ..../"NOBUG"\======░ ▒▓▓█D
//- /"""""""""""""""""""\
//- \_@_@_@_@_@_@_@/
//-
<template lang='pug'>
    .page-marketing-list
        .m-top-block
            .m-input-block
                el-row(:gutter='20')
                    el-col(:span='12')
                        .m-grid
                            el-input.m-input(v-model='input', placeholder='请输入内容')
                            .m-label 订单类型
                    el-col(:span='12')
                        mod-select
                        .m-label 订单类型
                el-row(:gutter='20')
                    el-col(:span='12')
                        .m-grid
                            el-input.m-input(v-model='input', placeholder='请输入内容')
                            .m-label 订单类型
                    el-col(:span='12')
                        .m-grid
                            mod-select
                            .m-label 订单类型
            .m-btn-block
                el-button(type="primary")
                    .m-span 查询
        .m-buttom-table
            .m-table
                mod-table

</template>

<script>
    import modInput from '::mod/mod-input';
    import modSelect from '::mod/mod-select';
    import modTable from '::mod/mod-table';
    import Vue from 'vue';

    export default {
        data(){
            return {
                input: ''
            }
        },
        components: {
            modInput,
            modSelect,
            modTable
        }
    }
</script>
<style lang="stylus">
    @import '~::libs/hotcss/px2rem.styl'
    .page-marketing-list
        //background #cdcdcd
        overflow hidden
        padding $px2rem(0 30px)

    .m-top-block
        display flex
        padding $px2rem(20px 10px)
        overflow hidden
        background $color(gray-3)
        align-items center
        justify-content space-around
        .m-input-block
            //float left
            width $px2rem(760px)
            height $px2rem(100px)
        .m-btn-block
            //overflow hidden
            //float right
            //margin-top $px2rem(30px)
        .m-input
            float right
            width $px2rem(260px)
            height $px2rem(40px)
            line-height $px2rem(40px)
        .m-label
            text-align center
            font-size $px2rem(14px)
            height $px2rem(40px)
            line-height $px2rem(40px)
            overflow hidden
        .m-span
            padding $px2rem(0 80px 0 80px)

    .m-buttom-table
        .m-table
            margin-top $px2rem(20px)

    .el-row
        margin-bottom: $px2rem(20px);
        &:last-child
            margin-bottom: 0;

    .el-col
        border-radius: $px2rem(4px);

    .bg-purple-dark
        background: #99a9bf;

    .bg-purple
        background: #d3dce6;

    .bg-purple-light
        background: #e5e9f2;

    .grid-content
        border-radius: $px2rem(4px);
        min-height: $px2rem(36px);

    .row-bg
        padding: $px2rem(10px) 0;
        background-color: #f9fafc;
</style>
