<style>

</style>

<template>
    <div>
        {{title}}
        <a href="javascript:;" class="button" @click="saveIamge">我的邀请码</a>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title:'首页'
        }
    },
    mounted () {
    },
    methods: {
        onPlusReady(e) {
            console.log(e);
        },
        saveIamge() {
            dd.biz.util.previewImage({
                urls: ['http://img.alicdn.com/tps/i3/TB1kt4wHVXXXXb_XVXX0HY8HXXX-1024-1024.jpeg'],
                current: 'http://img.alicdn.com/tps/i3/TB1kt4wHVXXXXb_XVXX0HY8HXXX-1024-1024.jpeg',
                onSuccess : function(result) {
                },
                onFail : function(err) {}
            })
        }
    }
}
</script>
