//- Created by ryan.zhu on 2017/11/10.
//- ......(\_/)
//- ......( '_')
//- ..../"NOBUG"\======░ ▒▓▓█D
//- /"""""""""""""""""""\
//- \_@_@_@_@_@_@_@/
//-
<template lang='pug'>
    .mod-timeline
        .m-line(:style='{left:getLineLeft,width:getLineWidth}')
        ul.m-tl-box(ref='m_tl_box')
            li.m-item(v-for='(item,index) in time',ref='m_tl_item')
                .m-radius
                    i.el-icon-document
                .m-text
                    .name {{item.name}}
                    .date {{item.date}}
                    .time {{item.time}}

</template>
<script>
    //import historData from '../historData'
    import Vue from 'vue';
    export default {
        computed: {},
        data () {
            return {
                screenWidth: document.body.clientWidth,
                getLineLeft: '0px',
                getLineWidth: '1000px',
                time: [
                    {
                        name: '提交订单',
                        date: '2017-08-13',
                        time: '23:26:15'
                    },
                    {
                        name: '提交订单',
                        date: '2017-08-13',
                        time: '23:26:15'
                    },
                    {
                        name: '提交订单',
                        date: '2017-08-13',
                        time: '23:26:15'
                    },
                    {
                        name: '提交订单',
                        date: '2017-08-13',
                        time: '23:26:15'
                    },
                    {
                        name: '提交订单',
                        date: '2017-08-13',
                        time: '23:26:15'
                    }
                ],
                historIsShow: false,
                dragNum: 0
            }
        },
        mounted () {
            let that = this;
            this.computedRadiusLine();
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth;
                    that.screenWidth = window.screenWidth;
                })()
            }
        },
        watch: {
            /*监听屏幕宽度变化*/
            screenWidth (val) {
                if (!this.timer) {
                    this.screenWidth = val;
                    this.timer = true;
                    let that = this;
                    setTimeout(function () {
                        that.computedRadiusLine();
                        that.timer = false
                    }, 100)
                }
            }
        },
        methods: {
            /*计算时间轴位置和长度*/
            computedRadiusLine(){
                let mtlbox = this.$refs.m_tl_box.offsetLeft;
                let mtlitemfirst = this.$refs.m_tl_item[0].offsetLeft;
                let mtlitemend = this.$refs.m_tl_item[this.$refs.m_tl_item.length-1].offsetLeft;
                this.getLineLeft = mtlitemfirst+this.$refs.m_tl_item[0].offsetWidth/2+ 'px';
                this.getLineWidth= mtlitemend-mtlitemfirst+ 'px';
                //console.log('computedRadiusLine===>',this.getLineLeft,this.getLineWidth)
            },
        }
    }
</script>
<style lang='stylus'>
    @import '~::libs/hotcss/px2rem.styl'
    .mod-timeline
        margin-top $px2rem(60px)
        .m-tl-box
            display flex
            justify-content space-around
            position relative
            z-index 5
            .m-item
                display flex
                flex-direction column
                align-items center
                .m-radius
                    width $px2rem(32px)
                    height $px2rem(32px)
                    background $color(timeline-green)
                    border-radius 100%
                    i.el-icon-document
                        font-weight 200
                        font-size $px2rem(20px)
                        padding $px2rem(5px)
                        color white;
                .m-text
                    text-align center
        .m-line
            position relative
            top $px2rem(17px)
            width $px2rem(1000px)
            height $px2rem(2px)
            background $color(timeline-green)
            z-index 0
</style>
