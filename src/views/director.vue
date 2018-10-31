<style lang="sass">
    .director {
        .header-sign {
            background-color: #108EE9;
            height: 2.2rem;
            font-size: 0.7rem;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 2.2rem;
            .title {
                height: 2.2rem;
                font-size: 0.7rem;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 2.2rem;
            }
        }
        .content {
            .buttons-tab {
                .button {
                    height: 2.4rem;
                    line-height: 2.4rem;
                }
            }
            .content-block {
                padding: 0;
                margin: 0;
                .list-block {
                    margin: 0;
                    .list-group {
                        margin-bottom: 0.75rem;
                        &:last-child {
                            margin-bottom: 0;
                        }
                        .list-group-title {
                            background-color: #FFFFFF;
                            height: 2.2rem;
                            font-size:0.8rem;
                            font-family: PingFangSC-Semibold;
                            font-weight: 600;
                            color: #108EE9;
                            line-height: 1.8rem;
                            position: relative;
                            padding-left: 0.75rem;
                            margin-left: 0.9rem;
                            // border-bottom: 0.025rem solid #cccccc;
                            &:before {
                                content: '';
                                width: 0.2rem;
                                height: 2rem;
                                display: inline-block;
                                background-color: #108EE9;
                                margin-right: 0.45rem;
                                position: absolute;
                                left: 0;
                                top: 0.75rem;
                            }
                        }
                        .customer-li {
                            .item-content {
                                height: 3.4rem;
                                .head-img-media {
                                    padding: 0;
                                    border-radius: 0.2rem;
                                }
                                .item-inner {
                                    .item-title {
                                        font-size: 0.8rem;
                                        font-family: PingFangSC-Regular;
                                        font-weight: 400;
                                        color: #333333;
                                        margin-bottom: 0.1rem;
                                        .badge {
                                            background-color: #108EE9;
                                            color: #FFFFFF;
                                            margin-left: 0.4rem;
                                            padding: .1rem .25rem .15rem;
                                            border-radius: 0.2rem;
                                        }
                                    }
                                    .item-text {
                                        font-size: 0.6rem;
                                        font-family: PingFangSC-Regular;
                                        font-weight: 400;
                                        color: #808080;
                                        .group {
                                            display: inline-block;
                                            border: 1px solid #808080;
                                            border-radius: 0.1rem;
                                            text-align: center;
                                            vertical-align: middle;
                                            line-height: 0.85rem;
                                            padding: 0 0.3rem;
                                        }
                                        .area {
                                            display: inline-block;
                                            margin: 0 0.4rem;
                                            &:before {
                                                content: '';
                                                display:inline-block;
                                                width: 1px;
                                                height: 0.7rem;
                                                background-color: #CCCCCC;
                                                margin-right: 0.4rem;
                                                vertical-align: middle;
                                            }
                                        }
                                    }
                                    .right-content {
                                        vertical-align: middle;
                                        line-height: 2.2rem;
                                        .no-sign {
                                            display: inline-block;
                                            font-size: 0.7rem;
                                            font-family: PingFangSC-Regular;
                                            font-weight: 400;
                                            color: #CCCCCC;
                                        }
                                        .arrow-icon {
                                            display: inline-block;
                                            color: #CCCCCC;
                                            margin-left: 0.4rem;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .setting {
                position: fixed;
                bottom: 1.3rem;
                right: 1rem;
                width: 2.2rem;
                height: 2.2rem;
                border-radius: 50%;
                border: 0.075rem solid #108EE9;
                box-shadow: 0 0.125rem 0.4rem #9DD6FF;
                text-align: center;
                line-height: 2.05rem;
                background-color: #FFFFFF;
                z-index: 999;
            }
        }
    }
</style>

<template>
    <div class="director">
        <header class="bar bar-nav header-sign">
            <div class="pull-left">报名：{{applyTotalCount}}组</div>
            <div class="title">已签到：{{signinedCount}}组</div>
            <div class="pull-right">未签到：{{unsigninedCount}}组</div>
        </header>
        <div class="content">
            <div class="buttons-tab">
                <a href="#tab1" class="tab-link active button" @click="getGroupList">已分区</a>
                <a href="#tab2" class="tab-link button" @click="getNoGroupList">未分区</a>
            </div>
            <div class="content-block" style="padding: 0">
                <div class="tabs">
                    <div id="tab1" class="tab active">
                        <div class="list-block contacts-block media-list">
                            <div class="list-group" v-for="(item, index) in groupList" :key="index">
                                <ul>
                                    <li class="list-group-title">{{item.employeeName}}区</li>
                                    <li class="customer-li" v-for="(i, index) in item.customerInfoList" :key="index">
                                        <a class="item-content">
                                            <div class="item-media head-img-media"><img :src="i.customerFaceImage" style='width: 2.4rem;border-radius: 0.2rem;'></div>
                                            <div class="item-inner">
                                                <div class="pull-left">
                                                    <div class="item-title">{{i.customerName}}<div class="badge" v-if="i.togetherCount > 0">{{i.togetherCount}}</div></div>
                                                    <div class="item-text">
                                                        <div class="group">{{i.employeeName}}</div>
                                                        <div class="area">{{i.customerAddress}}</div>
                                                    </div>
                                                </div>
                                                <div class="pull-right right-content picker" :id="i.applyId" @click="pickerClick(i.applyId)">
                                                    <div class="no-sign">设置分区</div>
                                                    <div class="arrow-icon icon icon-right"></div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="tab2" class="tab">
                        <div class="list-block contacts-block media-list">
                            <div class="list-group" v-for="(item, index) in noGroupList" :key="index">
                                <ul>
                                    <li class="list-group-title">{{item.employeeName}}</li>
                                    <li class="customer-li" v-for="(i, index) in item.customerInfoList" :key="index">
                                        <a class="item-content">
                                            <div class="item-media head-img-media"><img :src="i.customerFaceImage" style='width: 2.4rem;border-radius: 0.2rem;'></div>
                                            <div class="item-inner">
                                                <div class="pull-left">
                                                    <div class="item-title">{{i.customerName}}<div class="badge" v-if="i.togetherCount > 0">{{i.togetherCount}}</div></div>
                                                    <div class="item-text">
                                                        <div class="group">未分区</div>
                                                        <div class="area">{{i.customerAddress}}</div>
                                                    </div>
                                                </div>
                                                <div class="pull-right right-content" :id="i.applyId" @click="pickerClick(i.applyId)">
                                                    <div class="no-sign">设置分区</div>
                                                    <div class="arrow-icon icon icon-right"></div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="setting" @click="goSetting">设置</div>
        </div>
    </div>
</template>

<script>
import { getHeaderInfo, getGroupList, getNoGroupList, updateApplyGroup, getGroupInfo } from '../service/director.service'
export default {
    data(){
        return {
            applyTotalCount: 0, // 报名的组数
            signinedCount: 0, // 已签到的组数
            unsigninedCount: 0, // 未签到的组数
            // 分组列表ABCDEFG
            groupArr: [],
            // 已分组客户
            groupList: [],
            // 未分组客户
            noGroupList: [],
            // 根据是否存在posterId判断设置页面是否已经设置
            posterId: ''
        }
    },
    mounted () {
        this.getHeaderInfo();
        this.getGroupList();
    },
    methods: {
        // picker初始化
        pickerInit() {
            // 分组选择器
            $("#picker").picker({
                toolbarTemplate: '<header class="bar bar-nav">\
                <button class="button button-link pull-right close-picker">完成</button>\
                <h1 class="title">分区</h1>\
                </header>',
                cols: [
                    {
                        textAlign: 'center',
                        values: this.groupArr
                    },
                    {
                        textAlign: 'center',
                        values: ['区']
                    }
                ],
                onClose: function() {
                    
                }
            });
        },

        // 弹选择框
        pickerClick(index) {
            var _self = this;
            var idStr = '#' + index ;
            $(idStr).picker({
                toolbarTemplate: '<header class="bar bar-nav">\
                <h1 class="title">分区</h1>\
                </header>',
                cols: [
                    {
                        textAlign: 'center',
                        values: _self.groupArr
                    },
                    {
                        textAlign: 'center',
                        values: ['区']
                    }
                ],
                onClose: function(picker) {
                    try {
                        // var area = $(idStr).val();
                        // area = area.substr(0, area.length-2);

                        // 设置分区
                        var area = picker.value[0];
                        updateApplyGroup($(picker.input).attr('id'), area)
                            .then(response => {
                                if(response.success) {
                                    $.toast("设置成功");
                                    _self.getGroupList();
                                    _self.getNoGroupList();
                                } else {
                                    $.alert(response.errMsg, '设置失败');
                                }
                            })
                            .catch(err => {
                                console.log(err);
                            })
                    } catch (error) {

                    }
                }
            });
        },

        // 获取标题栏是否已经签到的分组信息
        getHeaderInfo() {
            getHeaderInfo()
                .then(response => {
                    if(response.success) {
                        this.applyTotalCount = response.data.applyTotalCount;
                        this.signinedCount = response.data.signinedCount;
                        this.unsigninedCount = response.data.unsigninedCount;
                        this.posterId = response.data.posterId;
                        this.getGroupInfo(this.posterId);
                    } else {
                        $.alert(response.errMsg);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        },

        // 获取已分区列表
        getGroupList() {
            getGroupList()
                .then(response => {
                    if(response.success) {
                        this.groupList = response.data;
                    } else {
                        $.alert(response.errMsg);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        },

        // 获取分组的信息 如：ABCDEFG
        getGroupInfo(posterId) {
            getGroupInfo(posterId)
                .then(response => {
                    if(response.success) {
                        this.groupArr = response.data;
                        this.pickerInit();
                    } else {
                        $.alert(response.errMsg);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        },

        // 获取未分区列表
        getNoGroupList() {
            getNoGroupList()
                .then(response => {
                    if(response.success) {
                        this.noGroupList = response.data;
                    } else {
                        $.alert(response.errMsg);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        },

        // 跳转设置页面
        goSetting() {
            this.$router.push({
                path: '/setting',
                query: {
                    posterId: this.posterId
                }
            })
        }
    }
}
</script>
