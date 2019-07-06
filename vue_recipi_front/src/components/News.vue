<template>
    <div id="app">
		<div class="container">
			<div class="row">
				<table class="table">
					<tr>
						<td>
							<input type=text size=20 v-model="fd">
							<!--
								v-on : 이벤트명 => onClick, onChange
								@이벤트명 ==> @축약형 이벤트 처리
							!-->
							<input type="button" value="검색" @click="newsBtnClick">
						</td>
					</tr>
				</table>
				<table class="table">
				<tr>
					<td>
						<table class="table table-hover" v-for="(n,key) in news" :key = key>
							<tr>
								<th class="text-center danger">{{n.title}}({{n.author}})</th>
							</tr>
							<tr>
								<td><a v-bind:href="n.link">{{n.description}}</a></td>
							</tr>
						</table>
					</td>
				</tr>
				</table>
			</div>
		</div>
   </div>
</template>


<script>
    export default {
        el: '#app',

        props: {
            msg: String
        },
        
        data() {
            return {
                news:[],
                fd : '레시피'
            }
		},
		methods: {
		   // 사용자 정의 메소드 
		   newsBtnClick(){
                var _this = this;
				axios.get('http://localhost:3355/news',{
					params:{
						fd:_this.fd
					}
				}).then(function(result){
				    _this.news=result.data;
				})
		   }
		},
		beforeMount(){
			let _this = this;
			axios.get('http://localhost:3355/news', {
				params:{
					fd: _this.fd
				}
			}).then(function(result){
				console.log(result)
				_this.news = result.data
			})
			
		}
    
    
    }
</script>


<style lang="scss" scoped>

</style>