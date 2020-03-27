<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newslist/newsinfo">
						<img class="mui-media-object mui-pull-left" src="http://www.ohhaha.top:8080/imgs/img_dazhaojishi.JPG">
						<div class="mui-media-body">
							幸福
							<p class="mui-ellipsis">
                                <span>发表时间： {{date | dateFormat}}</span>
                                <span>点击：0次</span>
                            </p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link to="javascript:;">
						<img class="mui-media-object mui-pull-left" src="http://www.ohhaha.top:8080/imgs/img_dazhaojishi.JPG">
						<div class="mui-media-body">
							幸福
							<p class="mui-ellipsis">
                                <span>发表时间： {{date | dateFormat}}</span>
                                <span>点击：0次</span>
                            </p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link to="javascript:;">
						<img class="mui-media-object mui-pull-left" src="http://www.ohhaha.top:8080/imgs/img_dazhaojishi.JPG">
						<div class="mui-media-body">
							幸福
							<p class="mui-ellipsis">
                                <span>发表时间： {{date | dateFormat}}</span>
                                <span>点击：0次</span>
                            </p>
						</div>
					</router-link>
				</li>

			</ul>
    </div>
</template>

<script>
export default{
    data() {
        return{
            date: new Date()
        }
    }
}
</script>

<style lang="scss" scoped>
.mui-ellipsis{
    color: #0796b9;
}

</style>