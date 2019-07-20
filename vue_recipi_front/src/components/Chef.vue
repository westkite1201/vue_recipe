<template>
    <table class="table">
        <tbody>
            <tr>
                <td>
                    <table class="table" v-for="(chef,key) in chef_data" :key=key>
                        <tr>
                            <td class="text-center" 
                                width="30%" 
                                rowspan="3">
                                <img :src="chef.poster" width="60" height="60" class="poster"/>
                            </td>
                            <td class="text-center"
                                width="70%"
                                colspan="4">
                                {{chef.chef}}
                            </td>
                        </tr>
                        <tr>
                            <td class="text-center"><img src="./mc1.png">{{chef.mc1}}</td>
                            <td class="text-center"><img src="./mc2.png">{{chef.mc2}}</td>
                            <td class="text-center"><img src="./mc7.png">{{chef.mc7}}</td>
                            <td class="text-center"><img src="./mc3.png">{{chef.mc3}}</td>
                        </tr>
                        <tr>
                            <td colspan="4" class="text-right">
                                <input type='button' 
                                       value='상세보기'
                                       class='btn btn-sm btn-primary'
                                       v-on:click="showChef(chef.chef)">
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </tbody>
        <tfoot>
				<tr>
					<td class="text-center">
					    <input type="button" 
                                value="이전" 
                                class="btn btn-sm btn-success"
                                v-on:click="this.$parent.showPrePage">
						<input type="button" 
                                value="다음" 
                                class="btn btn-sm btn-info" 
                                v-on:click="this.$parent.showNextPage">
					</td>
				</tr>
		</tfoot>
    </table>
</template>
 
<script>
/*chef 컴포넌트  */
    export default {
        name: 'chef',
          props: {
            chef_data: []
        },
        methods:{
			showChef:function(value){
				alert(value);
                //this.$emit("showChefEvent",value);
			}
		}
    }
</script>

<style lang="scss" scoped>

</style>