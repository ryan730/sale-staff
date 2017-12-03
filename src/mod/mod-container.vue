//- Created by ryan.zhu on 2017/11/7.
//- ......(\_/)
//- ......( '_')
//- ..../"NOBUG"\======░ ▒▓▓█D
//- /"""""""""""""""""""\
//- \_@_@_@_@_@_@_@/
//-
<template lang='pug'>
    .mod-container
        mod-crumb
        router-view
</template>
<script>
    import modCrumb from '@/mod/mod-crumb'
    export default {
        components:{
            modCrumb
        }
    }
</script>
<style lang="stylus">
    @import '~::libs/hotcss/px2rem.styl'
    .mod-container
        //min-width 1024px
        min-height $px2rem(768px)
        background white
        overflow hidden
</style>
