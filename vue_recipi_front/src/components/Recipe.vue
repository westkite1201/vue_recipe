<template>
<div id="app">
    <div class="container-fluid">
		<div class="row">
			<div class="col-sm-8">
			<!--
				recipe=[{},{},{},{},{},{}...]
				r={"poster":"http",title:""}
			-->
              <div class="col-md-3" v-for="(r, key) in recipe" :key=key>
				<div class="thumbnail">
				<a href="#">
					<img :src="r.poster" alt="Lights" style="width:100%"
					 	  v-on:click="recipeDetail(r.link.substring(8))"
					>
					<div class="caption">
						<p>{{r.title.substring(0,15)}}</p>
					</div>
				</a>
				</div>
			  </div>
			  <!--
				  btn-lg btn-sm - btn-md - btn-xs
			  -->
			  <div class="text-center">
				  <input type="button" value="이전"
				   class="btn btn-sm btn-success" v-on:click="prevPage">
				   {{page}} page / {{total}} pages
				  <input type="button" value="다음"
				   class="btn btn-sm btn-danger" v-on:click="nextPage">
			  </div>
			</div>
			<div class="col-sm-4">
			  <!--Vue 데이터 출력 -->
			  <!--
                 "_id" : ObjectId("5d1ee7c199bc820f7962ac73"),
			"no" : "6915297",
			"poster" : "http://recipe1.ezmember.co.kr/cache/recipe/2019/07/05/a9e3f18bd5924f220ddae2522ebd6ea41.jpg",
			"chef" : "얀들JandL",
			"chef_poster" : "http://recipe1.ezmember.co.kr/cache/rpf/2019/03/05/c7985fe367bb60623368e2b17c6553461.jpg",
			"chef_profile" : "저희는 얀들이라고 합니다. 독일에서 살면서 요리에 관심이 많아 이런저런 독일과 유럽의 식문화도 배워가면서 나름대로 요리를 하는 것을 즐겨하고 있습니다.",
			"info1" : "4인분",
			"info2" : "20분 이내",
			"info3" : "초급",
			"content" : "안녕하세요 얀들입니다. 해외에 살다보면 너무너무나 땡기게 되는 음식들이 있죠.. 한인들이 많이 살고 있는 곳에 살게 되면 그나마 한식당이라든지 적어도 한두개는 있어서 어느정도 해소가 되긴 합니다만. 그렇지 못한 지역에 살아서 한식을 직접 해 먹지 않는 이상 전혀 먹지 못하시는 분들도 많습니다. 물론 요즘엔 물류도 그렇고 어느정도 어디에서든 해외에서 한국재료들을 공급받으실수 있습니다만. 그렇다고 모든 요리를 다 잘 해 낼 수 있는 것은 아니죠.. 그러한 요리 중에 가장 대표적인 것이 있다면 아마도 짜장면이 아닐까 싶어요! 쉽게는 짜파게티로 해소할 수도 있고, 춘장을 직접 사서 대충 해 먹을 수도 있지만.. 하아.... 여전히 한국에서 먹었던 짜장면에 대한 그리움은 높아져만 가죠 ㅜㅜ 그래서 그나마 가장 가깝게 싱크로율 95프로 이상을 장담할 수 있는 짜장면을 소개해 드리겠습니다.",
			"foodmake"

			   {{}} => v-if="" 
			  -->
			  <table class="table" v-show="isShow">
                 <tr>
				  <td class="text-center" colspan="3">
					<img :src="recipe_detail.poster" class="img-rounded" width="500"
					 height="250">
				  </td>
				 </tr>
				 <tr>
					 <th class="text-center success" colspan="3">
						 {{recipe_detail.content}}
					 </th>
				 </tr>
				 <tr>
					 <td class="text-center" colspan="3">
						 <img :src="recipe_detail.chef_poster" class="img-circle" width=100 height=100>
						 <br>
						 {{recipe_detail.chef_profile}}
					</td>
				 </tr>
				 <tr>
					<td class="text-center">
						<img src="1.png">{{recipe_detail.info1}}
					</td>
					<td class="text-center">
                        <img src="2.png">{{recipe_detail.info2}}
					</td>
					<td class="text-center">
                        <img src="3.png">{{recipe_detail.info3}}
					</td>
				 </tr>
				 <tr>
					 <td colspan="3">
						 <template>
							 <div>
								 <template v-for="(value, index) in content" >
									 <br :key="index">{{value}}
								 </template>
							 </div>
						 </template>
					 </td>
				 </tr>
			  </table>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  //name: '.card',
  el: '#app',
  props: {
    msg: String
  },
  data() {
    return {
		recipe:[],
		page:1,
		total:0,
		isShow:false,/* v-show */
		contentData:'',
        recipe_detail:{}
    }
  },
  methods:{
    prevPage(){
			   this.page=this.page>1?this.page-1:this.page;
			   var _this=this;
			   axios.get('http://localhost:3355/recipe',{
				params:{
					page:_this.page
				}
			  })
			  .then(function(result){
               _this.recipe=result.data
			  });
			},// prevPage
	nextPage(){
			   this.page=this.page<this.total?this.page+1:this.page;
			   var _this=this;
			   axios.get('http://localhost:3355/recipe',{
				params:{
					page:_this.page
				}
		})
			.then(function(result){
               _this.recipe=result.data
			});
			},// nextPage
			/*
				  result.data=[{},{}]
								0  1
								
				  /recipe/6915298
			*/
			recipeDetail(no){
				this.isShow=true;// v-show
                var _this=this;
			    axios.get('http://localhost:3355/recipe_detail',{
					params:{
						no:no
					}
			    }).then(function(result){
                   _this.recipe_detail=result.data[0];
				});
				this.contentData=this.recipe_detail.foodmake;
			},
			// 저장이 완료된데이터를 가지고 올때 watch
			// 계산된 데이터 
    },
    	// componentWillMount()
    beforeMount:function(){
        var _this = this;
        axios.get('http://localhost:3355/recipe',{
            params:{
                page:_this.page
            }
        })
        .then(function(result){
            _this.recipe = result.data
        })

        axios.get('http://localhost:3355/total')
        .then(function(result){
            _this.total = result.data.total
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
