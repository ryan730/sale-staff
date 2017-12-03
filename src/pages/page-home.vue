//- Created by ryan.zhu on 2017/11/7.
//- ......(\_/)
//- ......( '_')
//- ..../"NOBUG"\======░ ▒▓▓█D
//- /"""""""""""""""""""\
//- \_@_@_@_@_@_@_@/
//-
<template lang='pug'>
    .page-home
        .m-tabs
            el-tabs(v-model='activeId', @tab-click='handleClick')
                el-tab-pane(label='口子窖', name='1010',id='1010')
                el-tab-pane(label='香格里拉', name='1020',id='1020')
                el-tab-pane(label='土特产', name='1030',id='1030')
        .page-home-listGroup
            router-view(:listData="listData",:activeId='activeId')
</template>

<script>
    //import pageHomeList from '@/pages/page-home/page-home-list'
    import {getCommodityByType} from '@/api/api';
    import util from '@/utils/util';

    export default {
        data() {
            return {
                activeId:'1010',
                listData: []
            };
        },
        created(){
            let id= this.$route.params.id;
            this.activeId=id;
            console.log('this.activeName===>1',this.activeId)
            this.apiGetCommodityByType(id);
        },
        computed: {
            listData123: {
                get: function () {
                    return {'name': this.activeId}
                },
                set: function (v) {
                }
            }
        },
        mounted: function (...arg) {
            let id= this.$route.params.id;
            if (!id) {
                //this.$router.replace('/home/list' + '?name=' + 'first');
                this.$router.replace('/home/list' + '/' + '1010');
                //this.apiGetCommodityByType(1010);
                this.activeId = '1010';
                console.log('this.activeName===>2',this.activeId)
            }
        },
        methods: {
            parseListData(listData) {
                let colArr=[];
                for (let i = 0; i < listData.length; i++) {
                    if (i % 3 === 0) {
                        let rowArr = [];
                        listData[i] && rowArr.push(listData[i]);
                        listData[i + 1] && rowArr.push(listData[i + 1]);
                        listData[i + 2] && rowArr.push(listData[i + 2]);
                        colArr.push(rowArr);
                    }
                }
                return colArr;
            },
            async apiGetCommodityByType(commodityTypeID){
                commodityTypeID = parseInt(commodityTypeID)>0?commodityTypeID:'1010';
                this.listData=[];//置空之前数据
                try {
                    const res = await getCommodityByType({commodityTypeID:commodityTypeID,flag:'-1'});
                    //commit('saveAdminInfo', res)
                    console.log('result:',res.result);
                    if (res.result && res.result && res.result.length > 0) {
                        this.listData = this.parseListData(res.result)
                    } else {
                        throw new Error(res.msg)
                    }
                } catch (err) {
                    console.log('err:', err)

                }
            },
            handleClick(tab, event) {
                this.activeId = tab.$attrs.id;
                //this.$router.push('/home/list' + '/' + tab.$attrs.id+'?'+'userID='++'commodityID='+);
                this.$router.push('/home/list' + '/' + tab.$attrs.id);
                this.apiGetCommodityByType(tab.$attrs.id);
            }
        }
    };
</script>
<style lang="stylus">
    @import '~::libs/hotcss/px2rem.styl'
    .page-home
        background white
        .m-tabs
            .el-tabs__nav-scroll
                display flex
                justify-content center
</style>
