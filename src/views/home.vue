<style>

</style>

<template>
    <div>
        <h3 class="home">{{title}}</h3>
    </div>
</template>

<script>
import { getCode } from '../service/home.service'
export default {
    data(){
        return {
            title:'首页'
        }
    },
    mounted () {
        getCode('13819457176').then((res) => {
            console.log(res);
        })
    }
}
</script>
