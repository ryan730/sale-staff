//- Created by ryan.zhu on 2017/11/7.
//- ......(\_/)
//- ......( '_')
//- ..../"NOBUG"\======░ ▒▓▓█D
//- /"""""""""""""""""""\
//- \_@_@_@_@_@_@_@/
//-
<template lang='pug'>
    .page-customer-list
        .m-block
            mod-info
</template>

<script>
    import modInfo from '::mod/mod-info';
    export default {
        data(){
            return {
            }
        },
        components: {
            modInfo
        }
    }
</script>

<style lang="stylus">
    @import '~::libs/hotcss/px2rem.styl'
    .page-customer-list
        //background gray
        overflow hidden
        .m-block
            padding $px2rem(10px 30px)
            overflow hidden
</style>
