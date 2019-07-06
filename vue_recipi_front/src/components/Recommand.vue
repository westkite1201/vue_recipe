<template>
    <div id ="app">
     <div class="container">
		<div class="row">
		  <ul style="list-style-type: none;">
			  <li v-for="(m,key) in menu" :key=key style="display: inline-block;margin-left:2px "><input type="button" 
				v-bind:value="m" v-on:click="recommand(m)"
				class="btn btn-sm btn-success"></li>
		  </ul>
		</div>
		<div class="row">

		  <div class="col-md-3" v-for="(r, key) in recipe" :key=key>
		   <div class="thumbnail">
				<a href="#">
					<img :src="r.poster" alt="Lights" style="width:100%">
					<div class="caption">
					    <p>{{r.title.substring(0,15)}}</p>
					</div>
				</a>
			</div>
		    </div>
        </div>
	
	 </div>
    </div>
</template>

<script>
    export default {
        el: '#app',
        data(){
            return {
                menu : ["감자", "비빔국수", "떡볶이", "오이냉국", "볶음밥",
                "감자전", "닭볶음밥", "감자", "김치볶음밥", "백종원"],
                recipe:[]
            }
        },
        methods :{
            recommand(m){
                let _this = this;
                axios.get('http://localhost:3355/recommand',{
                    params:{
                        fd : m
                    }
                }).then((result)=>{
                    _this.recipe = result.data;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>