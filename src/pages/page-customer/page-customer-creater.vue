//- Created by ryan.zhu on 2017/11/7.
//- ......(\_/)
//- ......( '_')
//- ..../"NOBUG"\======░ ▒▓▓█D
//- /"""""""""""""""""""\
//- \_@_@_@_@_@_@_@/
//-
<template lang='pug'>
    .page-customer-details
        .m-block
            mod-form
</template>

<script>
    import modForm from '::mod/mod-form';
    export default {
        data(){
            return {
            }
        },
        components: {
            modForm
        }
    }
</script>

<style lang="stylus">
    @import '~::libs/hotcss/px2rem.styl'
    .page-customer-details
        //background gray
        overflow hidden
        .m-block
            padding $px2rem(10px 30px)
            overflow hidden
</style>
