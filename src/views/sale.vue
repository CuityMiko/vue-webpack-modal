<style lang="sass">
@import '../style/animate.min.css';
    .content {
        .bar-div {
            background-color: #ffffff;
            .invitation {
                height: 2.2rem;
                font-size: 0.7rem;
                font-family: PingFangSC-Semibold;
                font-weight: 600;
                line-height: 2.2rem;
                padding: 0;
                background-color: #ffffff;
                margin-left: 0.75rem;
                position: static;
                .invitation-code {
                    color: #108EE9;
                    padding-right: 0.75rem;
                    .invitation-img {
                        width: 0.65rem;
                        height: 0.65rem;
                        margin-bottom: 0.1rem;
                        vertical-align: middle;
                        margin-right: 0.325rem;
                    }
                }
            }
        }
        .list-block {
            margin: 0;
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
                                &:after {
                                    content: '';
                                    display:inline-block;
                                    width: 1px;
                                    height: 0.7rem;
                                    background-color: #CCCCCC;
                                    margin-left: 0.4rem;
                                    vertical-align: middle;
                                }
                            }
                            .customer-phone {
                                color: #108EE9;
                                display: inline-block;
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
                            .already-sign {
                                display: inline-block;
                                width: 1.3rem;
                                height: 1.3rem;
                                background-image: url('../resources/images/already-sign.png');
                                background-size: 1.3rem 1.3rem;
                                vertical-align: middle;
                            }
                            .arrow-icon {
                                display: inline-block;
                                color: #CCCCCC;
                                margin-left: 0.4rem;
                            }
                            .arrow-visibile {
                                visibility: hidden;
                            }
                        }
                    }
                }
                .partner-div {
                    // height: auto;
                    &.list-show-enter-active,
                    &.list-show-leave-active {
                        transition: all 0.4s;
                        // height: 2.2rem * 2;
                        // height: 100%;
                    }
                    &.list-show-enter,
                    &.list-show-leave-to {
                        // transition: all 0.4s;
                        // height: 0;
                    }
                    .partner-li {
                        height: 2.2rem;
                        padding-left: 1.5rem;
                        .item-inner {
                            font-size: 0.7rem;
                            line-height: 1.25rem;
                            .item-title {
                                float: left;
                                position: relative;
                                padding-left: 0.45rem;
                                font-size: 0.7rem;
                                &:before {
                                    content: '';
                                    width: 0.2rem;
                                    height: 0.75rem;
                                    display: inline-block;
                                    background-color: #108EE9;
                                    margin-right: 0.45rem;
                                    position: absolute;
                                    top: 0.25rem;
                                    left: 0;
                                }
                            }
                            .item-after {
                                float: right;
                            }
                        }
                    }
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
                    <div class="pull-left">已邀约（{{customerLength}}人）</div>
                    <a class="pull-right invitation-code" @click="displayCode"><img class="invitation-img" src="../resources/images/qrCode.png"/>我的邀请码</a>
                </header>
            </div>
            <div class="list-block media-list">
                <ul>
                    <li class="customer-li" v-for="(item, index) in customerList" :key="index">
                        <a class="item-content">
                            <div class="item-media head-img-media"><img :src="item.customerFaceImage" style='width: 2.4rem;border-radius: 0.2rem;'></div>
                            <div class="item-inner">
                                <div class="pull-left">
                                    <div class="item-title">{{item.customerName}}<div class="badge" v-if="item.togetherCount > 0">{{item.togetherCount}}</div></div>
                                    <div class="item-text">
                                        <div class="group">{{item.groupArea || '未分'}}区</div>
                                        <div class="area">{{item.customerAddress}}</div>
                                        <div class="customer-phone"><a :href="'tel:'+item.customerPhone">{{item.customerPhone}}</a></div>
                                    </div>
                                </div>
                                <div class="pull-right right-content" @click="toggleList(index)">
                                    <div class="no-sign" v-if="item.signinStatus == 0">未签到</div>
                                    <div class="already-sign" v-else></div>
                                    <div class="arrow-icon icon" :class="[item.listShow?'icon-up':'icon-down', item.togetherCount>0?'':'arrow-visibile']"></div>
                                </div>
                            </div>
                        </a>
                        <!-- <transition mode="out-in" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp"> -->
                            <div class="list-block partner-div" v-show="item.listShow">
                                <ul>
                                    <li class="item-content partner-li" v-for="(i, index) in item.togetherInfoList" :key="index">
                                        <div class="item-inner">
                                            <div class="item-title">{{i.togetherName}}</div>
                                            <div class="item-after">{{i.togetherPhone}}</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        <!-- </transition> -->
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { getCustomerList, getConfig, getUserinfo, getMiniQrCode } from '../service/sale.service'
import { setTimeout } from 'timers';
export default {
    data(){
        return {
            //已邀约总人数
            customerLength: 0,
            // 客户列表
            customerList: [],
            // 获取code所需的id
            corpId: '',
            // 获取用户信息所需要的code
            code: '',
            // 用户信息id
            invitationCode: '',
            // 邀请码
            miniQrCode: ''
        }
    },
    mounted () {
        var _self = this;

        _self.getConfig();

        // 下拉刷新效果
        dd.ui.pullToRefresh.enable({
            onSuccess: function() {
                _self.getConfig();
                dd.ui.pullToRefresh.stop() 
            },
            onFail: function() {
            }
        })
    },
    methods: {
        // 获取钉钉的基本配置
        getConfig() {
            var _self = this;
            getConfig()
                .then(response => {
                    _self.corpId = response.corpId;
                    _self.getDingCode(_self.corpId);
                })
                .catch(err => {
                    console.log(err);
                })
        },
        // 获取客户列表
        getCustomerList(invitationCode) {
            var _self = this;
            $.showIndicator();
            getCustomerList(invitationCode)
                .then(response => {
                    if(response.success) {
                        $.hideIndicator();
                        var customerList = response.data;
                        _self.customerLength = customerList.length;
                        // 控制子列表的显示隐藏
                        if(customerList) {
                            customerList.forEach(element => {
                                element['listShow'] = false;
                            });
                        }
                        _self.customerList = customerList;
                    } else {
                        $.alert(response.errMsg);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        },
        // 二级列表的收缩与展开
        toggleList(index) {
            this.customerList[index].listShow = !this.customerList[index].listShow;
        },
        // 获取code
        getDingCode(id) {
            var _self = this;
            dd.runtime.permission.requestAuthCode({
                corpId : id,
                onSuccess : function(result) {
                    _self.code = result.code;
                    _self.getUserinfo(_self.code);
                },
                onFail : function(err) {
                    $.alert(JSON.stringify(err));
                }
            });
        },
        // 获取用户的基本信息
        getUserinfo(code) {
            var _self = this;
            getUserinfo(code)
                .then(response => {
                    _self.invitationCode = response.userid;
                    _self.getCustomerList(_self.invitationCode);
                    _self.getMiniQrCode(_self.invitationCode);
                })
                .catch(err => {
                    console.log(err);
                })
        },
        // 获取邀请码
        getMiniQrCode(code) {
            var _self = this;
            getMiniQrCode(code)
                .then(response => {
                    if(response.success) {
                        _self.miniQrCode = response.data;
                    } else {
                        console.log(response.errMsg);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        },

        // 保存图片到手机相册
        displayCode() {
            var _self = this;
            dd.biz.util.previewImage({
                urls: [_self.miniQrCode],
                current: _self.miniQrCode,
                onSuccess : function(result) {
                },
                onFail : function(err) {}
            })
        },

    }
}
</script>
