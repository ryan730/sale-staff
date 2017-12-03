//- Created by ryan.zhu on 2017/11/8.
//- ......(\_/)
//- ......( '_')
//- ..../"NOBUG"\======░ ▒▓▓█D
//- /"""""""""""""""""""\
//- \_@_@_@_@_@_@_@/
//-
<template lang='pug'>
    .mod-info
        el-table(:data='tableData', stripe='', style='width: 100%')
            el-table-column(prop='name', label='姓名', width='160')
            el-table-column(prop='infor', label='信息', width='1020')
</template>

<script>
    import conf from '@/config/conf';
    export default {
        methods: {
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            }
        },
        data() {
            return {
                tableData: [
                    {
                        name: '客户名称',
                        infor: '县后勤',
                    },
                    {
                        name: '客户类型',
                        infor: '县后勤',
                    },
                    {
                        name: '联系人手机',
                        infor: '1380000000',
                    },
                    {
                        name: '电话',
                        infor: '1380000000',
                    },
                    {
                        name: '收货地址',
                        infor: '县后勤',
                    },
                    {
                        name: '收货人姓名',
                        infor: '县后勤',
                    },
                    {
                        name: '收货人手机',
                        infor: '1380000000',
                    },
                    {
                        name: '状态',
                        infor: '无',
                    }
                ]
            }
        }
    }
</script>
<style lang='stylus'>
    @import '~::libs/hotcss/px2rem.styl'
    .mod-info
        .el-table::before
            height 0
        .el-table__header-wrapper
            display none
        .el-table td
            border 0
        .el-table__row
            td
                &:first-of-type
                    border-right 2px solid $color(line-white)
        .el-table__row--striped
            td
                background $color(gray-2) !important

</style>
