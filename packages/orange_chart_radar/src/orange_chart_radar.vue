<template>
    <div class="orange_chart_radar">
		<div id="Radar" style="width: 800px;height:400px;">
			
		</div>
    </div>
</template>
<script>
export default {
    name: 'orange-chart-radar',
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
			type: Object,
			require: true
		},
		series: {
			type: Array,
			require: true
		},
		radar: {
			type: Array,
			require: true
		},
		dataset: {
			type: Array,
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
		var myChart = this.$echarts.init(document.getElementById('Radar'));

		// 指定图表的配置项和数据
		var option = {
			title: this.title,
			tooltip: this.tooltip,
			legend: this.legend,
			series: this.series,
			radar: this.radar,
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
.orange_chart_brokenline {
  
}
</style>