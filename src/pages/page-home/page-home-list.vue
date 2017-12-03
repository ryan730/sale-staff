//- Created by ryan.zhu on 2017/11/7.
//- ......(\_/)
//- ......( '_')
//- ..../"NOBUG"\======░ ▒▓▓█D
//- /"""""""""""""""""""\
//- \_@_@_@_@_@_@_@/
//-

<template lang='pug'>
    .page-home-list
        el-row.row-bg(v-if='item.length>0',type='flex', :justify='item.length===3?"space-around":"baseline"',v-for='(item,index) in listData',:key='index')
            el-col(v-if='it',:span='8',:id='item[0].commodityID',v-for='(it,num) in item',:key='num')
                .m-grid
                    img(@click='handleClick(it.commodityID)',:src='getProductPic(it.pic)',width='320px',height='320px')
                    .m-text
                        .m-txt2 {{it.commodityName}}
                        .m-txt3 ¥ {{it.price}}
                        .m-txt4(@click='apiAddCommodityToCart(it.commodityID)')  + 加入购物车
</template>

<script>
    import {addCommodityToCart} from '@/api/api';
    import util from '@/utils/util';
    import {mapActions, mapState, mapMutations} from 'vuex';
    export default {
        props: {
            listData: {
                type: Array,
                required: true,
                default: []
            },
            activeId:{
                type: [Number,String],
                required: true,
                default: 1010
            }
        },
        computed: {},
        created(){

        },
        methods: {
            getProductPic(url){
                return util.getProductPic(url);
            },
            async apiAddCommodityToCart(commodityID){
                let userID =this.$store.getters.userID;
                try {
                    const res = await addCommodityToCart({userID: userID, commodityID: commodityID, num: '1'});
                    if (res && res.msg === '添加商品到购物车成功！') {
                        this.$message({
                            type: 'success',
                            message: res.msg
                        });
                    } else {
                        throw new Error(res.msg);
                    }
                } catch (err) {
                    console.log('err:', err);
                    this.$store.commit('showMassage',{type:'ERRORMASSAGE',msg:err.message});

                }
            },
            handleClick(...arg) {
                let commodityID = arg[0];
                //let id = arg[0].srcElement.parentElement.getAttribute('id');
                let name = this.$route.query.name;
                this.$router.push('/home/details' + '/' + this.activeId+'?commodityID='+commodityID);
            }
        },
        created(){
        }
    }
</script>
<style lang="stylus">
    @import '~::libs/hotcss/px2rem.styl'
    .page-home-list
        padding $px2rem(20px)
        background white
        overflow hidden
        width $px2rem(1178px)
        margin 0 auto
        .row-bg.el-row
            padding 0
            margin 0
            background-color rgba(0,0,0,0)
        .m-grid
            min-width $px2rem(393px)
            min-height $px2rem(454px)
            text-align center
            border 1px solid $color(line-2)
            color $color(font-1)
            box-sizing border-box
            background white
            img
                padding $px2rem(10px 0)
            .m-text
                text-align center
                div
                    margin-top $px2rem(10x)
            .m-txt4
                cursor pointer
                color $color(s-car)
                &:active
                    color $color(red-1)

    //.m-txt2 150ml天籁干红
    //.m-txt3 ¥680.00
    //.m-txt4  + 购物车

        .el-row
            margin-bottom $px2rem(20px)
            &:last-child
                margin-bottom: 0

        .el-col
            border-radius $px2rem(4px)

        .bg-purple-dark
            background #99a9bf

        .bg-purple
            background #d3dce6

        .bg-purple-light
            background #e5e9f2

        .grid-content
            border-radius 4px
            min-width $px2rem(393px)
            min-height $px2rem(454px)

        .row-bg
        //padding: $px2rem(10px) 0;
            background-color #f9fafc
</style>
