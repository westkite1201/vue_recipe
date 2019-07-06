<template>
  <div id ="app">
        <div class="container-fluid">
            <h3 class="text-center">쉐프 목록</h3>
            <div class="row">
                <div class="col-sm-4">
                    <Chef v-bind:chef_data = "chef_data"/>
                </div>
                
                <div class="col-sm-8">
          
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 import Chef from '@/components/Chef.vue'
    export default {
        name: 'chef',
        components: {
            Chef
        },
        data(){
            return{
                page:1,
                chef_data : []
            }
        },
        beforeMount:function(){
                var _this=this;
                axios.get('http://localhost:3355/chef',{
                    params:{
                        page:_this.page
                    }
                }).then(function(result){
                    _this.chef_data=result.data;
                })
        }
    }
</script>

<style lang="scss" scoped>

</style>