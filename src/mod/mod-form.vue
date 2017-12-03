//- Created by ryan.zhu on 2017/11/8.
//- ......(\_/)
//- ......( '_')
//- ..../"NOBUG"\======░ ▒▓▓█D
//- /"""""""""""""""""""\
//- \_@_@_@_@_@_@_@/
//-
<template lang='pug'>
    .mod-form
        el-form(ref='ruleForm',:model='ruleForm',label-width='100px',:rules="rules")(status-icon='')
            el-form-item(label='客户名称',prop='name')
                el-input(v-model='ruleForm.name')
            el-form-item(label='客户类型',prop='type')
                el-select(v-model='ruleForm.type', placeholder='请选择客户类型')
                    el-option(label='区域一', value='shanghai')
                    el-option(label='区域二', value='beijing')
            el-form-item(label='联系人手机号',prop='mobile')
                el-input(v-model='ruleForm.mobile',placeholder='请输入联系人手机号')
            el-form-item(label='电话',prop='tel')
                el-input(v-model='ruleForm.tel',placeholder='请输入电话')
            el-form-item(label='收货地址',prop='address')
                el-input(v-model='ruleForm.address',placeholder='请输入收货地址')
            el-form-item(label='收货人姓名',prop='consignee_name')
                el-input(v-model='ruleForm.consignee_name',placeholder='请输入收货人姓名')
            el-form-item(label='收货人手机号',prop='consignee_mobile')
                el-input(v-model='ruleForm.consignee_mobile',placeholder='请输入收货人手机号')
            el-form-item(label='状态',prop='consignee_state')
                el-select(v-model='ruleForm.consignee_state', placeholder='请选择状态')
                    el-option(label='区域一', value='shanghai')
                    el-option(label='区域二', value='beijing')
            el-form-item
                el-button(type='primary', @click='submitForm("ruleForm")') 提交
                el-button(@click='resetForm("ruleForm")') 重置
</template>

<script>
    import conf from '@/config/conf';
    export default {
        data() {
            let validatePass = (rule, value, callback) => {
                //console.log('sdfsdfsdfsdf=======>>>>',value,this.$refs.ruleForm.validateField('name'))
                let errotText = '请输入' + this.$el.querySelectorAll('label[for=' + rule.field + ']')[0].innerText;
                if (value === '') {
                    callback(new Error(errotText));
                }else {
                    if(rule.field.indexOf('mobile')!==-1||rule.field.indexOf('tel')!==-1){
                        setTimeout(() => {
                            if (!Number.isInteger(parseFloat(value))) {
                                callback(new Error('请输入数字值'));
                            } else {
                                callback();
                            }
                        }, 1000);
                    }else{
                        callback();
                    }
                }
            };
            return {
                ruleForm: {
                    name: '',
                    type: '',
                    mobile: '',
                    tel: '',
                    address: '',
                    consignee_name: '',
                    consignee_mobile: '',
                    consignee_state: ''
                },
                rules: {
                    name: [{validator: validatePass, trigger: 'blur'}],
                    type: [{validator: validatePass, trigger: 'blur'}],
                    mobile: [{validator: validatePass, trigger: 'blur'}],
                    tel: [{validator: validatePass, trigger: 'blur'}],
                    address: [{validator: validatePass, trigger: 'blur'}],
                    consignee_name: [{validator: validatePass, trigger: 'blur'}],
                    consignee_mobile: [{validator: validatePass, trigger: 'blur'}],
                    consignee_state: [{validator: validatePass, trigger: 'blur'}]
                }
            }
        },
        methods: {
            submitForm(formName) {
                console.log('validvalid:', this.$refs[formName])
                this.$refs[formName].validate((valid) => {
                    console.log('validvalid2:', valid)
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
<style lang='stylus'>
    @import '~::libs/hotcss/px2rem.styl'
    .mod-form
        .el-input
            width $px2rem(400px)

</style>
