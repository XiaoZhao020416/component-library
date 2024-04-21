<template>
    <div class="orange_chart_map">
		<div id="Map" style="width: 600px;height:400px;">
			
		</div>
    </div>
</template>
<script>
export default {
    name: 'orange-chart-map',
    props: {
		title: {
			type: Object,
			// require: true
		},
		bmap: {
			type: Object,
			// require: true
		},
		tooltip: {
			type: Object,
			// require: true
		},
		geo: {
			type: Object,
			// require: true
		},
		series: {
			type: Array,
			require: true
		}
    },
    data() {
        return {
			
        };
    },
    methods: {
		myEcharts() {
			// 基于准备好的dom，初始化echarts实例
			var myChart = this.$echarts.init(document.getElementById('Map'));

			// 指定图表的配置项和数据
			var option = {
				// titel: this.titel,
				geo: this.geo,
				// bmap: this.bmap,
				// tooltip: this.tooltip,
				series: this.series
			};

			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
		}
    },
    mounted() {
        this.myEcharts();
    }
}
</script>
<style lang="scss" scoped>

</style>