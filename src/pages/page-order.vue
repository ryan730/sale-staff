//- Created by ryan.zhu on 2017/11/14.
//- ......(\_/)
//- ......( '_')
//- ..../"NOBUG"\======░ ▒▓▓█D
//- /"""""""""""""""""""\
//- \_@_@_@_@_@_@_@/
//-
<template lang='pug'>
    .page-order
        .m-orderType-box
            .m-orderType-header ▌ 订单类型确认
            .m-orderType-content
                el-radio-group(v-model='radioIndex')
                    el-radio(:label='0') 会员订单
                    el-radio(:label='1') 签单订单
                    el-radio(:label='2') 宴会订单
                    el-radio(:label='3') 内欠订单

        .m-orderInfor-box
            .m-orderInfor-header ▌ 确认客户信息
            .m-orderInfor-content
                .m-content
                    .m-select1
                        .m-label 客户名称
                        mod-select
                    .m-select2
                        .m-label 手机号
                        mod-select
                    .m-address
                        span 送货地址
                        span 安徽省六安市金寨县胜利路3号底商1808
        .m-confirm-box
            mod-order(:orderData='orderData',orderType='check')

        .m-introducer-box
            .m-introducer-header ▌ 介绍人信息
            .m-total-infor
                .m-input-1
                    .m-label 客户姓名
                    el-input.m-input(v-model='inputName', placeholder='请输入内容')
                .m-input-2
                    .m-label 手机号
                    el-input.m-input(v-model='inputPhone', placeholder='请输入内容')

            .m-total-title
                .m-total-text
                    .price 商品金额:&nbsp&nbsp{{totalData.price}}
                    .discount 优惠: &nbsp&nbsp{{totalData.discount}}
            .m-total-content
                .deal 应付:&nbsp&nbsp{{totalData.deal}}
                .advance 预付:&nbsp&nbsp{{totalData.advance}}
                .paid 实收:&nbsp&nbsp{{totalData.paid}}
                .instruction
                    | 添加备注
                    i.el-icon-plus
            .m-btn-block
                el-button(type="primary")
                    .m-span 结算

</template>
<script>
    import modSelect from '::mod/mod-select';
    import modOrder from '::mod/mod-order';
    export default {
        components:{
            modSelect,
            modOrder
        },
        data () {
            return {
                inputName:'',
                inputPhone:'',
                radioIndex: 1,
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
            };
        }
    }
</script>
<style lang='stylus'>
    @import '~::libs/hotcss/px2rem.styl'
    haderBox()
        height $px2rem(33px)
        line-height $px2rem(33px)
        color $color(font-1)
        border-bottom 1px solid $color(line-2)

    .page-order
        .m-orderType-box
            padding $px2rem(20px)
            .m-orderType-header
                haderBox()
            .m-orderType-content
                padding $px2rem(20px 20px 0 20px)

        .m-orderInfor-box
            padding $px2rem(20px)
            .m-orderInfor-header
                haderBox()
            .m-orderInfor-content
                padding $px2rem(20px)
                .m-content
                    display flex
                    flex-direction column
                    justify-content space-between
                    width 100%
                    height $px2rem(180px)
                    background $color(gray-3)
                    padding $px2rem(20px 40px)
                    box-sizing border-box
                    color $color(font-2)
                    font-size $px2rem(14px)
                    .m-select1
                        display flex
                        align-items center
                        .m-label
                            width $px2rem(84px)
                            padding-right $px2rem(20px)
                    .m-select2
                        display flex
                        align-items center
                        .m-label
                            width $px2rem(84px)
                            padding-right $px2rem(20px)
                    .m-address
                        display flex
                        span
                            padding-right $px2rem(10px)

        .m-confirm-box
            padding $px2rem(10px)

        .m-introducer-box
            padding $px2rem(20px)
            .m-introducer-header
                haderBox()
            .m-total-infor
                display flex
                //justify-content space-around
                font-size $px2rem(14px)
                color $color(font-2)
                padding $px2rem(10px,0)
                .m-label
                    width $px2rem(120px)
                    text-align center
                .m-input-1
                    display flex
                    align-items center
                    width $px2rem(300px)
                    height $px2rem(40px)
                .m-input-2
                    display flex
                    align-items center
                    width $px2rem(300px)
                    height $px2rem(40px)
            .m-total-title
                //padding $px2rem(0 20px)
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
