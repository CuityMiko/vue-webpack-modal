<style lang="sass">
    .content {
        .bar-div {
            background-color: #ffffff;
            .invitation {
                height: 2.2rem;
                font-size: 0.8rem;
                font-family: PingFangSC-Semibold;
                font-weight: 600;
                color: rgba(16,142,233,1);
                line-height: 2.2rem;
                padding: 0;
                background-color: #ffffff;
                margin-left: 0.75rem;
                position: static;
                .blue-block {
                    position: relative;
                    padding-left: 0.75rem;
                    &:before {
                        content: '';
                        width: 0.2rem;
                        height: 0.75rem;
                        display: inline-block;
                        background-color: #108EE9;
                        margin-right: 0.45rem;
                        position: absolute;
                        left: 0;
                        top: 0.75rem;
                    }
                }
            }
        }
        .list-block {
            margin: 0;
            font-size: 0.8rem;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: #333333;
            margin-bootom: 0.75rem;
            input[type=text] {
                font-size: 0.8rem;
            }
            ul {
                &:before {
                    height: 0;
                }
                &:after {
                    height: 0;
                }
                li {
                    .item-content {
                        height: 2.7rem;
                        .item-inner {
                            .item-title {
                            }
                            .label {
                                width: 15%;
                            }
                            .label-width {
                                width: 35%;
                            }
                            .process-label {
                                margin: 0;
                            }
                            .item-input {
                                input {
                                    text-align: right;
                                }
                                input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
                                    color: #cccccc;
                                }
                                input::-moz-placeholder,textarea::-moz-placeholder {   /* Mozilla Firefox 19+ */
                                    color: #cccccc;
                                }
                                input:-moz-placeholder,textarea:-moz-placeholder {    /* Mozilla Firefox 4 to 18 */
                                    color: #cccccc;
                                }
                                input:-ms-input-placeholder,textarea:-ms-input-placeholder {  /* Internet Explorer 10-11 */
                                    color: #cccccc;
                                }
                            }
                        }
                    }
                    .process-textarea {
                        height: 5rem;
                    }
                }
            }
        }
        .dark-block {
            width: 100%;
            height: 0.75rem;
            background-color: #F4F4F4;
        }
        .content-block {
            .row {
                .empty-data {
                    border-color: #ffffff;
                    background-color: #ffffff;
                }
            }
        }
    }
</style>

<template>
    <div>
        <div class="content">
            <div class="bar-div">
                <header class="bar bar-nav invitation">
                    <div class="blue-block">邀请函内容设置</div>
                </header>
            </div>
            <div class="list-block">
                <ul>
                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title label">主题</div>
                                <div class="item-input">
                                    <input type="text" placeholder="请输入主题" v-model="poster.posterTheme" :disabled="!isNew">
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item-content item-link">
                            <div class="item-inner">
                                <div class="item-title label">时间</div>
                                <div class="item-input">
                                    <input type="text" id='datetime-picker' value="请选择时间" :disabled="!isNew">
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title label">地址</div>
                                <div class="item-input">
                                    <input type="text" placeholder="请输入地址" v-model="poster.activityAddress" :disabled="!isNew">
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="align-top">
                        <div class="item-content process-textarea">
                            <div class="item-inner">
                                <div class="item-title label process-label">流程</div>
                                <div class="item-input">
                                    <textarea placeholder="请输入流程" v-model="poster.activityProcess" :disabled="!isNew"></textarea>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="dark-block"></div>
            <div class="bar-div">
                <header class="bar bar-nav invitation">
                    <div class="blue-block">分区设置</div>
                </header>
            </div>
            <div class="list-block">
                <ul>
                    <li>
                        <div class="item-content item-link">
                            <div class="item-inner">
                                <div class="item-title label label-width">总分组</div>
                                <div class="item-input">
                                    <input type="text" placeholder="请选择总分组" id="group-picker" :disabled="!isNew">
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item-content item-link">
                            <div class="item-inner">
                                <div class="item-title label label-width">每区人数</div>
                                <div class="item-input">
                                    <input type="text" placeholder="请选择每区人数" id="amount-picker" :disabled="!isNew">
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="content-block">
                <div class="row">
                <!-- <div class="col-50" @click="empty"><a class="button button-big button-danger empty-data">清空客户数据</a></div> -->
                <div class="col-100" @click="save"><a class="button button-big button-fill" v-show="isNew">保存数据</a></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { createPoster, getPosterDetail } from '../service/setting.service'
    export default {
        data(){
            return {
                poster: {
                    posterTheme: '', // 海报主题
                    activityTime: '', // 活动时间
                    activityAddress: '', // 活动地址
                    activityProcess: '', // 流程
                    totalGroup: '', // 总组数
                    eachGroup: '', // 每组人数
                },
                // 海报id
                posterId: '',
                // 判断是新增还是详情
                isNew: true
            }
        },
        mounted() {
            this.posterId = this.$route.query.posterId;
            // 接收从主管页面带过来的参数id
            if(this.posterId) {
                this.isNew = false;
                this.getPosterDetail(this.posterId);
            }
            this.pickerInit();
        },
        methods: {
            // picker初始化
            pickerInit() {
                var groupArr = [];
                var amountArr = [];
                for(var i = 1;i <= 26;i++) {
                    groupArr.push(i);
                }
                for(var i = 1;i <= 20;i++) {
                    amountArr.push(i);
                }
                // 日期选择器
                $("#datetime-picker").datetimePicker({
                    
                });
                // 分组选择器
                $("#group-picker").picker({
                    toolbarTemplate: '<header class="bar bar-nav">\
                    <button class="button button-link pull-right close-picker">完成</button>\
                    <h1 class="title">分区</h1>\
                    </header>',
                    cols: [
                        {
                            textAlign: 'center',
                            values: groupArr
                        },
                        {
                            textAlign: 'center',
                            values: ['组']
                        }
                    ]
                });
                // 人数选择器
                $("#amount-picker").picker({
                    toolbarTemplate: '<header class="bar bar-nav">\
                    <button class="button button-link pull-right close-picker">完成</button>\
                    <h1 class="title">分区</h1>\
                    </header>',
                    cols: [
                        {
                            textAlign: 'center',
                            values: amountArr
                        },
                        {
                            textAlign: 'center',
                            values: ['人']
                        }
                    ]
                });
            },

            // 清空客户数据
            empty() {
                $.confirm('将会清空所有客户数据', '确认', function () {
                    $.alert('客户数据已清空');
                });
            },

            // 保存数据
            save() {
                var _self = this;
                _self.poster.activityTime = $("#datetime-picker").val();
                var totalGroup = $("#group-picker").val();
                var eachGroup = $("#amount-picker").val();
                _self.poster.totalGroup = totalGroup.substr(0, totalGroup.length-2);
                _self.poster.eachGroup = eachGroup.substr(0, eachGroup.length-2);

                if(!_self.poster.posterTheme) {
                    $.alert('主题不能为空');
                    return;
                }
                if(!_self.poster.activityTime) {
                    $.alert('时间不能为空');
                    return;
                }
                if(!_self.poster.activityAddress) {
                    $.alert('地址不能为空');
                    return;
                }
                if(!_self.poster.activityProcess) {
                    $.alert('流程不能为空');
                    return;
                }
                if(!_self.poster.totalGroup) {
                    $.alert('请选择总分组');
                    return;
                }
                if(!_self.poster.eachGroup) {
                    $.alert('请选择每组人数');
                    return;
                }
                $.confirm('保存后将不可修改，确认保存吗？', '确认', function () {
                    createPoster(_self.poster)
                        .then(response => {
                            if(response.success) {
                                $.alert('保存成功！');
                                _self.posterId  = response.data.posterId;
                                if(_self.posterId) {
                                    _self.isNew = false;
                                    getPosterDetail(_self.posterId);
                                }
                                // location.reload('/setting');
                            } else {
                                $.alert('保存失败，请重试');
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        })
                });
            },
            // 获取海报详情
            getPosterDetail(id) {
                getPosterDetail(id)
                    .then(response => {
                        if(response.success) {
                            this.poster = response.data;
                            $("#datetime-picker").val(response.data.activityTime);
                            $("#group-picker").val(response.data.totalGroup+'组');
                            $("#amount-picker").val(response.data.eachGroup+'人');
                        } else {
                            $.alert(response.errMsg);
                        }
                    })
                    .catch(err => {
                        console.log(error);
                    })
            }
        }
    }
</script>
