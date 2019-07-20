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
 /* chef view 컴포넌트 */
    export default {
        name: 'chef',
        components: {
            Chef
        },
        data(){
            return{
                page:1,
                chef_data : [],
                chef_detail : [],
            }
        },
        methods:{
            showPrePage(){
                this.page=this.page>1?this.page-1:this.page;
                var _this=this;
                axios.get('http://localhost:3355/chef',{
                    params:{
                        page:_this.page
                    }
                }).then(function(result){
                    _this.chef_data=result.data
                })
            },
            showNextPage(){
            this.page=this.page<20?this.page+1:this.page;
                var _this=this;
                axios.get('http://localhost:3355/chef',{
                    params:{
                        page:_this.page
                    }
                }).then(function(result){
                    _this.chef_data=result.data
                })
            }
	    },
        beforeMount:function(){
                let _this=this;
                axios.get('http://localhost:3355/chef',{
                    params:{
                        page:_this.page
                    }
                }).then(function(result){
                    console.log(result.data)
                    _this.chef_data = result.data;
                })
        },
        updated:function(){
          console.log('updated')
		  let _this = this;
		//   this.$on('showChefEvent',function(value){
		// 	  alert("하위 컴포넌트로 부터 받은 값:"+value);
		// 	  _this.chef_name=value;
		//   })
		  axios.get('http://localhost:3355/chef_detail',{
			  params:{
				  chef:_this.chef_name
			  }
		  }).then(function(result){
			  _this.chef_detail = result.data
		  })
	  }
    }
</script>

<style lang="scss" scoped>

</style>