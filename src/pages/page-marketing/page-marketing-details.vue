//- Created by ryan.zhu on 2017/11/10.
//- ......(\_/)
//- ......( '_')
//- ..../"NOBUG"\======░ ▒▓▓█D
//- /"""""""""""""""""""\
//- \_@_@_@_@_@_@_@/
//-
<template lang='pug'>
    .page-marketing-details
        .m-block
            .m-member-box
                .m-header
                    .m-header-text1 leixin leixin
                    .m-header-text2 dingdanhao 123123123123
                    .m-header-text3 dingdanzhuangtai: yifahuo
                .m-content
                    .m-content-left
                        el-table(:data='tableData1', style='width: 100%')
                            el-table-column(prop='date', label='日期',width='120px')
                            el-table-column(prop='name', label='姓名')
                    .m-content-center
                        el-table(:data='tableData1', style='width: 100%')
                            el-table-column(prop='date', label='日期',width='120px')
                            el-table-column(prop='name', label='姓名')
                    .m-content-right
                        el-table(:data='tableData1', style='width: 100%')
                            el-table-column(prop='date', label='日期',width='120px')
                            el-table-column(prop='name', label='姓名')
                .m-timeline
                    mod-timeline

            .m-introducer-box
                .m-introducer-header ▌ 介绍人信息
                ul.m-introducer-content
                   li.m-introducer-item(v-for='(item,index) in introducerData')
                        .name 客户名称：{{item.name}}
                        .mobile 手机号：{{item.mobile}}
            .m-confirm-box
                .m-order-box
                    mod-order(:orderData='orderData',orderType='check')
                .m-total-title
                    .m-total-text
                        .price 商品金额:&nbsp&nbsp{{totalData.price}}
                        .discount 优惠: &nbsp&nbsp{{totalData.discount}}
                .m-total-content
                    .deal 应付:&nbsp&nbsp{{totalData.deal}}
                    .advance 预付:&nbsp&nbsp{{totalData.advance}}
                    .paid 实收:&nbsp&nbsp{{totalData.paid}}
                    .instruction
                        | 宴会结束退换部分金额
                        i.el-icon-remove-outline
                .m-btn-block
                    el-button(type="primary")
                        .m-span 结算

</template>
<script>
    import modTimeline from '::mod/mod-timeline';
    import modOrder from '::mod/mod-order';
    export default {
        components:{
            modTimeline,
            modOrder
        },
        data() {
            return {
                totalData:{
                    price:'¥680.00',
                    discount:'¥680.00',
                    deal:'¥680.00',
                    advance:'¥680.00',
                    paid:'¥680.00'
                },
                orderData:[
                    {
                        goods:{
                            img:'',
                            name:'750mltianlai'
                        },
                        unit:{
                            price1:'¥128.00',
                            price2:'¥128.00'
                        },
                        amount:'10',
                        subtotal:'¥ 4800.00',
                        gift:'古井贡酒年份原浆10年50度浓香型500ml  X 1'
                    },
                    {
                        goods:{
                            img:'',
                            name:'750mltianlai'
                        },
                        unit:{
                            price1:'¥128.00',
                            price2:'¥128.00'
                        },
                        amount:'10',
                        subtotal:'¥ 4800.00',
                        gift:'古井贡酒年份原浆10年50度浓香型500ml  X 1'
                    }
                ],
                introducerData:[
                    {
                        name: '2016-05-02',
                        mobile: '王小虎',
                    }
                ],
                tableData1: [
                    {
                        date: '2016-05-02'
                    },
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                    },
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                    },
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                    },
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                    },
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                    }
                ]
            }
        }
    }
</script>
<style lang='stylus'>
    @import '~::libs/hotcss/px2rem.styl'
    .page-marketing-details
        .m-block
            .m-member-box
                margin 0 auto
                width auto
                height auto
                //height $px2rem(223px)
                padding $px2rem(20px)
                background white
                .m-header
                    display flex
                    width 100%
                    height $px2rem(40px)
                    background $color(gray-3)
                    border-bottom 1px solid white
                    & > div
                        flex 1
                        height $px2rem(40px)
                        line-height $px2rem(40px)
                        padding $px2rem(0 20px 0 20px)
                    .m-header-text2
                        flex 4
                    .m-header-text3
                        flex 2
                        text-align right
                .m-content
                    display flex
                    width 100%
                    height $px2rem(183px)
                    background $color(gray-3)
                    & > div
                        width $px2rem(380px)
                        height $px2rem(183px)
                   .m-content-left
                       border-right 1px solid white
                    .m-content-center
                        border-right 1px solid white
                    .m-content-right
                        overflow hidden

                    .el-table__header-wrapper ///***重构table,把表格搞成list->start***/
                        display none
                    .el-table
                        background-color rgba(0,0,0,0)
                        border 0
                        td
                            height $px2rem(30px)
                            padding 0
                            border 0
                        tr
                            background-color rgba(0,0,0,0)
                        .cell
                            line-height 1
                        &::after,&::before
                            width 0 !important  ///***重构table,把表格搞成list->end***/

            .m-introducer-box
                padding $px2rem(20px)
                .m-introducer-header
                    height $px2rem(33px)
                    line-height $px2rem(33px)
                    color $color(font-1)
                    border-bottom 1px solid $color(line-2)
                .m-introducer-content
                    .m-introducer-item
                        display flex
                        font-size $px2rem(14px)
                        color $color(font-2)
                        height $px2rem(40px)
                        line-height $px2rem(40px)
                        div
                            padding $px2rem(0 14px)
            .m-confirm-box
                //padding $px2rem(20px)
                .m-order-box
                    padding $px2rem(0 20px 20px 20px)
                .m-total-title
                    padding $px2rem(0 20px)
                    .m-total-text
                        display flex
                        justify-content flex-end
                        height $px2rem(40px)
                        line-height $px2rem(40px)
                        background $color(gray-3)
                        font-size $px2rem(14px)
                        .price
                            padding $px2rem(0 20px)
                        .discount
                            padding $px2rem(0 20px)
                            color $color(font-3)
                .m-total-content
                    display flex
                    align-items flex-end
                    flex-direction column
                    font-size $px2rem(14px)
                    padding $px2rem(20px)
                    div
                        padding $px2rem(10px)
                    .instruction
                        i
                            padding $px2rem(10px)
                            color red
                .m-btn-block
                        display flex
                        justify-content flex-end
                        padding $px2rem(0 20px 20px 20px)
                        .m-span
                            padding $px2rem(0 60px)
</style>
