//- Created by ryan.zhu on 2017/11/7.
//- ......(\_/)
//- ......( '_')
//- ..../"NOBUG"\======░ ▒▓▓█D
//- /"""""""""""""""""""\
//- \_@_@_@_@_@_@_@/
//-
<template lang='pug'>
    .page-customer
        div | customer.page
        keep-alive
            router-view
</template>

<script>
    export default {

    }
</script>
<style lang="stylus">
    @import '~::libs/hotcss/px2rem.styl'
    .page-customer
        background gray
        overflow hidden
</style>
