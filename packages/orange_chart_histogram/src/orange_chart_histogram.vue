<template>
    <div class="orange_chart_histogram">
		<div id="Histogram" style="width: 800px;height:400px;">
			
		</div>
    </div>
</template>
<script>
export default {
    name: 'orange-chart-histogram',
    props: {
        title: {
			type: Object,
			require: true
		},
		tooltip: {
			type: Object,
			require: true
		},
		legend: {
			type: Object
		},
		xAxis: {
			type: Object,
			require: true
		},
		yAxis: {
			type: Object,
			require: true
		},
		series: {
			type: Array,
			require: true
		},
		dataset: {
			type: Object,
			require: true
		}
    },
    data() {
        return {
			
        };
    },
    methods: {
        myEcharts(){
		// 基于准备好的dom，初始化echarts实例
		var myChart = this.$echarts.init(document.getElementById('Histogram'));

		// 指定图表的配置项和数据
		var option = {
			title: this.title,
			tooltip: this.tooltip,
			legend: this.legend,
			xAxis: this.xAxis,
			yAxis: this.yAxis,
			series: this.series,
			dataset: this.dataset
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