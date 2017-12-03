//- Created by ryan.zhu on 2017/11/7.
//- ......(\_/)
//- ......( '_')
//- ..../"NOBUG"\======░ ▒▓▓█D
//- /"""""""""""""""""""\
//- \_@_@_@_@_@_@_@/
//-

<template lang='pug'>
    .page-marketing
        router-view(:listData="tableData")
</template>

<script>
    export default {
        data(){
            return {
                tableData:{},
                input: ''
            }
        },
        components: {
        }
    }
</script>
<style lang="stylus">
    @import '~::libs/hotcss/px2rem.styl'
    .page-marketing
        overflow hidden
        padding $px2rem(10px 30px)
</style>
