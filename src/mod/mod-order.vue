//- Created by ryan.zhu on 2017/11/12.
//- ......(\_/)
//- ......( '_')
//- ..../"NOBUG"\======░ ▒▓▓█D
//- /"""""""""""""""""""\
//- \_@_@_@_@_@_@_@/
//-
<template lang='pug'>
    .mod-order
        .m-confirm-box
            .m-confirm-header ▌ 确认订单
            .m-confirm-title
                .goods 商品
                .unit 单价
                .amount 数量
                .subtotal 小计
                .contrl(v-if='orderType==="edit"') 操作
        .m-order-box
            ul.m-order-content
                li.m-order-item(v-for='(item,index) in orderData')
                    .m-order-cont
                        .goods
                            img(:src='getProductPic(item.commodity.pic)',width='180px',height='180px')
                            .name {{item.commodity.commodityName}}
                        .unit
                            .price1 指导价:{{item.commodity.price}}
                            .price2 会员价:{{item.commodity.price}}
                        .amount(v-if='orderType==="edit"')
                            el-input-number(v-model='inputNumber', @change='handleChange', :min='1', :max='10', label='描述文字',size='mini')
                        .amount(v-else)
                            | {{item.totalAmount}}
                        .subtotal {{item.totalAmount}}
                        .contrl(v-if='orderType==="edit"',@click='delCommodityHandler(item.commodity.commodityID,index)') 删除
                    .activity
                        .name
                            i(class='el-icon-goods')
                            | 多买多送，买六送一
                        .gift
                            | [赠品] {{item.gift}}
                li.m-order-item(v-for='(item,index) in orderData')
                    .m-order-cont
                        .goods.m-gift
                            img(:src='getProductPic(item.commodity.pic)',width='180px',height='180px')
                            .name {{item.commodity.commodityName}}
                        .amount
                            | x {{item.totalAmount}}
</template>

<script>
    import conf from '@/config/conf';
    import {delCommodity} from '@/api/api';
    //delCommodity
    export default {
        props:{
            orderData:{
                type:[Array],
                required: true,
                default: []
            },
            orderType:{
                type:[String],
                required: true,
                default: 'check'
            }
        },
        data() {
            return {
                inputNumber: 1
            }
        },
        created(){
        },
        updated(){
        },
        methods:{
            delCommodityHandler(commodityID,index){

                let promise = this.apiDelCommodity(commodityID);
                if(promise){
                    promise.then(
                        ()=>{
                            let findex = this.orderData.findIndex((item)=>{
                                return item.commodity.commodityID === commodityID;
                            });
                            //console.log('删除购物车数据1:',commodityID,index,findex,this.orderData.length,promise);
                            this.orderData.splice(findex,1);
                        },
                        ()=>{
                        })
                }
                //console.log('删除购物车数据2:',commodityID,index,findex,this.orderData.length);
            },
            async apiDelCommodity(commodityID){
                let userID = this.$store.getters.userID;
                let state = false;
                try {
                    const res = await delCommodity({commodityID: commodityID});
                    if (res) {
                        this.$message({type: 'success', message: res.msg});
                        state=true;
                    } else {
                        throw new Error(res)
                    }
                } catch (err) {
                    console.log('err:', err);
                    this.$store.commit('showMassage', {type: 'ERRORMASSAGE', msg: err.message});
                }
                return new Promise((resolve, reject) => {
                    if(state){
                        resolve();
                    }else {
                        reject();
                    }
                })
            },
            getProductPic(url){
                return url?conf.baseURL+url:'';
            },
            handleChange(value) {
                console.log(value);
            }
        }
    }
</script>
<style lang='stylus'>
    @import '~::libs/hotcss/px2rem.styl'
    .mod-order
        .m-confirm-box
            .m-confirm-header
                height $px2rem(33px)
                line-height $px2rem(33px)
                color $color(font-1)
                border-bottom 1px solid $color(line-2)
            .m-confirm-title
                display flex
                justify-content space-around
                height $px2rem(40px)
                line-height $px2rem(40px)
                text-align center
                color $color(font-3)
                background $color(gray-3)
                margin $px2rem(20px 0 0 0)
                .goods
                    flex 4
                .unit
                    flex 2
                .amount
                    flex 2
                .subtotal
                    flex 2
                .contrl
                    flex 2

        .m-order-box
            .m-order-content
                .m-order-item
                    display flex
                    flex-direction column
                    border-bottom 1px solid $color(line-2)
                    .m-order-cont
                        display flex
                        align-items center
                        text-align center
                        color $color(font-1)
                        font-size $px2rem(14px)
                        .goods
                            display flex
                            flex 5
                            align-items center
                            img
                                padding $px2rem(20px 0)
                                margin-left $px2rem(100px)
                            .name
                                width 100%
                                margin-left $px2rem(10px)
                        .unit
                            flex 2
                            .price1
                                text-decoration line-through
                        .amount
                            flex 2
                        .subtotal
                            flex 2
                        .contrl
                            flex 2
                            text-indent $px2rem(30px)
                    .activity
                        display flex
                        justify-content space-around
                        align-items center
                        margin  $px2rem(0 0 20px 0)
                        height $px2rem(27px)
                        background $color(yellow-1)
                        font-size $px2rem(14px)
                        .name
                            margin-left $px2rem(-200px)
                            i
                                padding $px2rem(0 14px)
                                color red
                        .gift
                            color $color(font-3)
                    .m-gift
                        &::before
                            content:'订单赠品'
                            position absolute
                            width $px2rem(93px)
                            height $px2rem(32px)
                            line-height $px2rem(32px)
                            background $color(red-1)
                            color white
                            align-self flex-start
                            margin-top $px2rem(10px)
                        &::after
                            content:''
                            position absolute
                            width 100%
                            height $px2rem(200px)
                            z-index -1
                            background $color(yellow-1)
                        .name
                            width 155px !important
</style>
