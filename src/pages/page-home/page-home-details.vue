//- Created by ryan.zhu on 2017/11/7.
//- ......(\_/)
//- ......( '_')
//- ..../"NOBUG"\======░ ▒▓▓█D
//- /"""""""""""""""""""\
//- \_@_@_@_@_@_@_@/
//-
<template lang='pug'>
    .page-home-details
        .m-goods-box
           .m-goods-top
               .m-left
                    img(:src='getProductPic(infoData.pic)',width='500px',height='500px')
               .m-right
                     .m-title {{infoData.commodityName}}
                     .m-content
                         .m-text1
                             | 官方指导价：¥{{infoData.price}}
                         .m-text2
                             | 商品编号:{{infoData.commodityCode}}
                         .m-text3
                             | 商品品牌:{{getProductType()}}
                     .m-amount
                         .m-text 购买数量：
                         el-input-number(v-model='inputNumber', @change='handleChange', :min='1', :max='10', label='描述文字',size='mini')
                     .m-btn
                         el-button(type="primary",@click='submitHandler')
                            .m-span + 加入购物车
           .m-goods-bottom
                .m-load-page
                    .m-assets
                        //img(:src='assetPath')
                        .commodityImgs
                            .product-item(v-for='item in infoData.commodityImgs',:style='{order:item.sequenceNumber}')
                                img(:src='getProductPic(item.imgUrl)')
                        .brandImgs
                            .product-item(v-for='item in infoData.brandImgs',:style='{order:item.sequenceNumber}')
                                img(:src='getProductPic(item.imgUrl)')
                        .companyImgs
                            .product-item(v-for='item in infoData.companyImgs',:style='{order:item.sequenceNumber}')
                                img(:src='getProductPic(item.imgUrl)')
</template>
<script>
    import conf from '@/config/conf';
    import util from '@/utils/util';
    import {addCommodityToCart,getCommodityChannelByID} from '@/api/api';

    export default {
        props:{
        },
        data() {
            return {
                inputNumber: 1,
                assetPath:require('@/assets/temp-details.png'),
                infoData:{}
            }
        },
        created(){
            this.apiGetCommodityChannelByID();
        },
        methods:{
            submitHandler(){
                this.apiAddCommodityToCart();
            },
            getProductPic(url){
                //return url?conf.baseURL+url:'';
                return util.getProductPic(url);
            },
            getProductType(){
                let type = this.$route.query.id;
                let name = '香格里拉';
                switch ( type ) {
                    case '1010':
                        name='口子窖';
                        break;
                    case '1020':
                        name='香格里拉';
                        break;
                    case '1030':
                        name='土特产';
                        break;
                }
                return name;
            },
            async apiAddCommodityToCart(){
                try {
                    let userID =this.$store.getters.userID;
                    const res = await addCommodityToCart({userID:userID,commodityID: 'e9ae793335844215a602b4c6c0542567',num:this.inputNumber});
                    if (res) {
                        this.$message({type: 'success', message: res.msg});
                    } else {
                        throw new Error(res.msg)
                    }
                } catch (err) {
                    console.log('err!!:', err);
                    this.$store.commit('showMassage',{type:'ERRORMASSAGE',msg:err.message});
                }
            },
            async apiGetCommodityChannelByID(){
                try {
                    let userID =this.$store.getters.userID;
                    let commodityID = this.$route.query.commodityID;
                    const res = await getCommodityChannelByID({userID:userID,commodityID: commodityID});
                    if (res.result && res.result) {
                        this.infoData = res.result;
                    } else {
                        throw new Error(res.msg)
                    }
                } catch (err) {
                    console.log('err!!:', err);
                    this.$store.commit('showMassage',{type:'ERRORMASSAGE',msg:err.message});
                }
            },
            handleChange(value) {
                console.log(value);
            }
        }
    }
</script>
<style lang='stylus'>
    @import '~::libs/hotcss/px2rem.styl'
    .page-home-details
        .m-goods-box
            margin 0 auto
            color $color(font-1)
            width $px2rem(1180px)
            .m-goods-top
                display flex
                justify-content space-around
                align-items center
                padding $px2rem(20px)
                //.m-left
                    //img
                .m-right
                    font-size $px2rem(14px)
                    .m-title
                        font-size $px2rem(26px)
                        padding $px2rem(20px 0)
                    .m-content
                        display flex
                        flex-direction column
                        justify-content space-between
                        width $px2rem(450px)
                        height $px2rem(114px)
                        background $color(line-2)
                        padding $px2rem(10px)
                        box-sizing border-box
                        .m-text1
                            font-size $px2rem(14px)
                        .m-text2
                            font-size $px2rem(14px)
                        .m-text3
                            font-size $px2rem(14px)
                    .m-amount
                        padding $px2rem(20px 0)
                        .m-text
                            padding $px2rem(0 0 20px 0)
                    .m-btn
                        padding $px2rem(20px 0)
            .m-goods-bottom
                .m-load-page
                    display flex
                    justify-content center
                    .m-assets
                        width $px2rem(850px)
                        height 100%
                        padding 10px 0
                        .commodityImgs,.brandImgs,.companyImgs
                            display flex
                            flex-direction column
                            .product-item
                                width 850px
                                display: flex
                                justify-content: center
                                padding 0

</style>
