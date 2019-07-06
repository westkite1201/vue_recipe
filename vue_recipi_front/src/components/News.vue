<template>
   <div class="container">
	   <div class="row">
		   <table class="table">
			   <tr>
				   <td>
					   <input type=text size=20>
					   <input type="button" value="검색">
				   </td>
			   </tr>
		   </table>
		   <table class="table">
             <tr>
				 <td>
					 <table class="table table-hover">
						 <tr>
							 <th class="text-center danger"></th>
						 </tr>
						 <tr>
							 <td></td>
						 </tr>
					 </table>
				 </td>
			 </tr>
		   </table>
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
		beforeMount(){
			//console.log('beforeMount')		
			
		}
    
    
    }
</script>


<style lang="scss" scoped>

</style>