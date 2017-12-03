//- Created by ryan.zhu on 2017/11/7.
//- ......(\_/)
//- ......( '_')
//- ..../"NOBUG"\======░ ▒▓▓█D
//- /"""""""""""""""""""\
//- \_@_@_@_@_@_@_@/
//-
<template lang='pug'>
    #app.fillcontain
        .page-header
            mod-header
        .page-container
            mod-menus
            mod-container
        .page-global
</template>

<script>
    import modHeader from '@/mod/mod-header'
    import modMenus from '@/mod/mod-menus'
    import modContainer from '@/mod/mod-container'

    import {mapActions, mapState, mapMutations} from 'vuex'

    export default {
        name: 'app',
        components: {
            modHeader,
            modMenus,
            modContainer
        },
        created(){
            this.setCustomGlobal({'globalVM': this});
            this.setUserID('703d065b0b684ae9bf4fa3be67a4726c');
        },
        methods: {
            //...mapActions(['getCustomGlobal']),
            ...mapMutations(['setCustomGlobal','setUserID']),
        }
    }
</script>

<style lang="stylus">
    @import './App.styl';
    @import '~::libs/hotcss/px2rem.styl'
    .page-container
        background $color(c-bg)
</style>
