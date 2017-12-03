//- Created by ryan.zhu on 2017/11/7.
//- ......(\_/)
//- ......( '_')
//- ..../"NOBUG"\======░ ▒▓▓█D
//- /"""""""""""""""""""\
//- \_@_@_@_@_@_@_@/
//-
<template lang='pug'>
    .header
        .billlogo LOGO
        .userbox
            .m-orders-box(@click='orderHandler')
                .m-orders-text {{title('/order')}}
            .m-hoppingCart-box(@click='hoppingCartHandler')
                el-badge.item(:value='100', :max='10')
                    .m-hoppingCart-text {{title('/hoppingCart')}}
            .m-user-box
                el-dropdown(@visible-change='handleOpen')
                    span.el-dropdown-link
                        img.userimg(src='../assets/1.jpg')
                        .m-userimg-box name
                            i(v-bind:class='menuIconBool?"el-icon-caret-bottom":"el-icon-caret-right"')
                    el-dropdown-menu(slot='dropdown')
                        el-dropdown-item 账号设置
                        el-dropdown-item 我的主页
                        el-dropdown-item 安全退出

</template>

<script>
    import conf from '@/config/conf'
    export default {
        name: '',
        data: function () {
            return {
                menuIconBool:false
            }
        },
        computed:{

        },
        methods: {
            title:(name)=>{
                let res=conf.pages.find((val)=>{
                    return val.index===name;
                });
                return res.name?res.name:'111';
            },
            handleOpen(key, keyPath) {
                this.menuIconBool = !key;
            },
            orderHandler(){
                this.$router.push('/order');
            },
            hoppingCartHandler(){
                this.$router.push('/hoppingCart');
            }
        }
    }
</script>

<style lang='stylus'>
    @import '~::libs/hotcss/px2rem.styl'
    .header
        position:relative;
        top: 0;
        left: 0;
        width:100%;
        height $px2rem(80px)
        line-height $px2rem(78px)
        color: white;
        background: $color(blue-g-1);

        .el-badge
            vertical-align unset
        .el-badge__content.is-fixed
            top $px2rem(20px)
        .el-dropdown
            display block

        .billlogo
            text-align: left;
            margin-left: $px2rem(20px);
            float: left;

        .userbox
            float: right;

        .userimg
            width: $px2rem(30px);
            height: $px2rem(30px);
            border-radius: 100%;
            //margin-right: $px2rem(40px);
            vertical-align:middle

        .m-user-box
            float: left;
            padding $px2rem(0 20px)

        .m-orders-box
            float left
            padding $px2rem(0 20px)
            cursor pointer

        .m-hoppingCart-box
            float left
            padding $px2rem(0 20px)
            cursor pointer

        .m-userimg-box
            float  right
            padding $px2rem(0 20px 0 10px)
            color white
            height $px2rem(78px)
            line-height $px2rem(78px)
            i
                padding $px2rem(10px)
                vertical-align middle

</style>
