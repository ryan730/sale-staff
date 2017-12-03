//- Created by ryan.zhu on 2017/11/12.
//- ......(\_/)
//- ......( '_')
//- ..../"NOBUG"\======░ ▒▓▓█D
//- /"""""""""""""""""""\
//- \_@_@_@_@_@_@_@/
//-
//- Created by ryan.zhu on 2017/11/10.
//- ......(\_/)
//- ......( '_')
//- ..../"NOBUG"\======░ ▒▓▓█D
//- /"""""""""""""""""""\
//- \_@_@_@_@_@_@_@/
//-
<template lang='pug'>
    .page-hoppingCart
        .m-confirm-box
            .m-order-box
                mod-order(:orderData='orderData',orderType='edit')
            .m-total-title
                .m-total-text
                    .total 总计:&nbsp&nbsp{{totalData.total}}
                    .freight 运费:&nbsp&nbsp{{totalData.freight}}
                    .price 商品总价:&nbsp&nbsp{{totalData.price}}
            .m-btn-block
                el-button(type="primary")
                    .m-span 立即结算

</template>
<script>
    import modOrder from '::mod/mod-order';
    import {getCartList} from '@/api/api';
    export default {
        components: {
            modOrder
        },
        data() {
            return {
                totalData: {
                    price: '¥680.00',
                    discount: '¥680.00',
                    deal: '¥680.00',
                    advance: '¥680.00',
                    paid: '¥680.00',
                    total: '¥680.00',
                    freight: '¥680.00'
                },
                orderData:[],
                orderData_test: [
                    {
                        goods: {
                            img: '',
                            name: '750mltianlai'
                        },
                        unit: {
                            price1: '¥128.00',
                            price2: '¥128.00'
                        },
                        amount: '10',
                        subtotal: '¥ 4800.00',
                        gift: '古井贡酒年份原浆10年50度浓香型500ml  X 1'
                    },
                    {
                        goods: {
                            img: '',
                            name: '750mltianlai'
                        },
                        unit: {
                            price1: '¥128.00',
                            price2: '¥128.00'
                        },
                        amount: '10',
                        subtotal: '¥ 4800.00',
                        gift: '古井贡酒年份原浆10年50度浓香型500ml  X 1'
                    }
                ]
            }
        },
        created(){
            this.apiGetCartList();
        },
        methods: {
            async apiGetCartList(){
                let userID = this.$store.getters.userID;
                try {
                    const res = await getCartList({userID: userID});
                    //commit('saveAdminInfo', res)
                    if (res.result && res.result.length > 0) {
                        this.orderData = res.result;
                    } else {
                        throw new Error(res)
                    }
                } catch (err) {
                    console.log('err:', err);
                    this.$store.commit('showMassage', {type: 'ERRORMASSAGE', msg: err.message});

                }
            }
        }
    }
</script>
<style lang='stylus'>
    @import '~::libs/hotcss/px2rem.styl'
    .page-hoppingCart
        .m-confirm-box
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
                    div
                        padding $px2rem(0 20px)
                    .freight
                        color $color(font-3)
                    .price
                        color $color(font-3)

            .m-btn-block
                display flex
                justify-content flex-end
                padding $px2rem(20px 20px 20px 20px)
                .m-span
                    padding $px2rem(0 60px)
</style>

