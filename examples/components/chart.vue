<template>
  <div class="content-box">
    <h2 class="demo-title">图表组件</h2>
    <p class="demo-introduction">常用图表组件介绍</p>

    <orange-anchor>
      <orange-anchor-link href="brokenline" title="折线图" />
      <orange-anchor-link href="histogram" title="柱状图" />
      <orange-anchor-link href="pie" title="饼状图" />
      <orange-anchor-link href="scatter" title="散点图" />
      <orange-anchor-link href="radar" title="雷达图" />
      <orange-anchor-link href="api" title="API" />
    </orange-anchor>

    <orange-demo-block :height="750" id="brokenline" :title="'折线图'">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-chart-brokenline 
          :title="brokenline.title"
          :legend="brokenline.legend"
          :xAxis="brokenline.xAxis"
          :yAxis="brokenline.yAxis"
          :series="brokenline.series"
          />
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(brokenline.code.html)}}</code>
      </template>
    </orange-demo-block>

    <orange-demo-block :height="850" id="histogram" :title="'柱状图'">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-chart-histogram 
          :title="histogram.title"
          :legend="histogram.legend"
          :xAxis="histogram.xAxis"
          :yAxis="histogram.yAxis"
          :series="histogram.series"
          :dataset="histogram.dataset"
          />
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(histogram.code.html)}}</code>
      </template>
    </orange-demo-block>

    <orange-demo-block :height="1050" id="pie" :title="'饼状图'">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-chart-pie 
          :title="pie.title"
          :tooltip="pie.tooltip"
          :legend="pie.legend"
          :series="pie.series"
          />
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(pie.code.html)}}</code>
      </template>
    </orange-demo-block>

    <orange-demo-block :height="2000" id="scatter" :title="'散点图'">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-chart-scatter 
          :title="scatter.title"
          :legend="scatter.legend"
          :xAxis="scatter.xAxis"
          :yAxis="scatter.yAxis"
          :series="scatter.series"
          />
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(scatter.code.html)}}</code>
      </template>
    </orange-demo-block>

    <orange-demo-block :height="1150" id="radar" :title="'雷达图'">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-chart-radar 
          :title="radar.title"
          :tooltip="radar.tooltip"
          :legend="radar.legend"
          :radar="radar.radar"
          :series="radar.series"
          />
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(radar.code.html)}}</code>
      </template>
    </orange-demo-block>

    <!-- API -->
    <div id="api">
      <h3 class="demo-table-title">API</h3>
      <P class="demo-table-introduction">属性说明如下：</P>
      <orange-table-simple :data="api" :thead="thead" />
    </div>
  </div>
</template>
<script>
export default {
  name: "chart-demo",
  data() {
    return {
      thead: ["参数", "说明", "类型", "可选值", "默认值", "支持组件"],
      api: [
        {
          parameter: "title",
          description: "Echarts标题",
          dataTypes: "Object",
          optional: "",
          default: "",
          support: "通用"
        },
        {
          parameter: "legend",
          description: "图例",
          dataTypes: "Object",
          optional: "",
          default: "null",
          support: "通用"
        },
        {
          parameter: "xAxis",
          description: "x轴",
          dataTypes: "Object",
          optional: "",
          default: "null",
          support: "通用"
        },
        {
          parameter: "yAxis",
          description: "y轴",
          dataTypes: "Object",
          optional: "",
          default: "null",
          support: "通用"
        },
        {
          parameter: "series",
          description: "系列列表",
          dataTypes: "Array",
          optional: "",
          default: "null",
          support: "通用"
        },
        {
          parameter: "tooltip",
          description: "提示框",
          dataTypes: "Object",
          optional: "",
          default: "null",
          support: "通用"
        },
        {
          parameter: "dataset",
          description: "数据集",
          dataTypes: "Object",
          optional: "",
          default: "null",
          support: "通用"
        },
        {
          parameter: "radar",
          description: "雷达图坐标系",
          dataTypes: "Object",
          optional: "",
          default: "null",
          support: "雷达图"
        },
      ],
      brokenline: {
        title: {
          text: '折线图'
        },
        legend: {

        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          },
          {
            data: [82, 93, 91, 230, 450, 200, 1520],
            type: 'line'
          }
        ],
        code: {
          html: `
              <orange-chart-brokenline 
              :title="brokenline.title"
              :legend="brokenline.legend"
              :xAxis="brokenline.xAxis"
              :yAxis="brokenline.yAxis"
              :series="brokenline.series"
              />
              javascript: 
              data() {
                return {
                  brokenline: {
                    title: {
                      text: '折线图'
                    },
                    legend: {

                    },
                    xAxis: {
                      type: 'category',
                      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                      type: 'value'
                    },
                    series: [
                      {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line'
                      },
                      {
                        data: [82, 93, 91, 230, 450, 200, 1520],
                        type: 'line'
                      }
                    ],
                  }
                }
              }
              `
        }
      },
      histogram: {
        title: {
          text: '柱状图'
        },
        legend: {
          orient: 'vertical',
          right: 'right',
          data: ['2015', '2016', '2017']
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          type: 'value'
        },
        series: [
          { type: 'bar' },
          { type: 'bar' },
          { type: 'bar' }
        ],
        dataset: {
          dimensions: ['product', '2015', '2016', '2017'],
          source: [
            { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
            { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
            { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
            { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
          ]
        },
        code: {
          html: `
              <orange-chart-histogram 
              :title="histogram.title"
              :legend="histogram.legend"
              :xAxis="histogram.xAxis"
              :yAxis="histogram.yAxis"
              :series="histogram.series"
              :dataset="histogram.dataset"
              />
              javascript: 
              data() {
                return {
                  histogram: {
                    title: {
                      text: '柱状图'
                    },
                    legend: {
                      orient: 'vertical',
                      right: 'right',
                      data: ['2015', '2016', '2017']
                    },
                    xAxis: {
                      type: 'category'
                    },
                    yAxis: {
                      type: 'value'
                    },
                    series: [
                      {type: 'bar'},
                      {type: 'bar'},
                      {type: 'bar'}
                    ],
                    dataset: {
                      dimensions: ['product', '2015', '2016', '2017'],
                      source: [
                        {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
                        {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
                        {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
                        {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
                      ]
                    }
                  }
                }
              }
              `
        }
      },
      pie: {
        title: {
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ],
        code: {
          html: `
              <orange-chart-pie 
              :title="pie.title"
              :tooltip="pie.tooltip"
              :legend="pie.legend"
              :series="pie.series"
              />
              javascript: 
              data() {
                return {
                  title: {
                    text: '某站点用户访问来源',
                    subtext: '纯属虚构',
                    left: 'center'
                  },
                  tooltip: {
                      trigger: 'item',
                      formatter: '{a} <br/>{b} : {c} ({d}%)'
                  },
                  legend: {
                      orient: 'vertical',
                      left: 'left',
                      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                  },
                  series: [
                      {
                          name: '访问来源',
                          type: 'pie',
                          radius: '55%',
                          center: ['50%', '60%'],
                          data: [
                              {value: 335, name: '直接访问'},
                              {value: 310, name: '邮件营销'},
                              {value: 234, name: '联盟广告'},
                              {value: 135, name: '视频广告'},
                              {value: 1548, name: '搜索引擎'}
                          ],
                          emphasis: {
                              itemStyle: {
                                  shadowBlur: 10,
                                  shadowOffsetX: 0,
                                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                              }
                          }
                      }
                  ],
                }
              }
              `
        }
      },
      scatter: {
        title: {
          text: '散点图'
        },
        legend: {

        },
        xAxis: {
          scale: true
        },
        yAxis: {
          scale: true
        },
        series: [
          {
            type: 'effectScatter',
            symbolSize: 20,
            data: [
              [172.7, 105.2],
              [153.4, 42]
            ]
          },
          {
            type: 'scatter',
            data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
            [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
            [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
            [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
            [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
            [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
            [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
            [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
            [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
            [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
            [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
            [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
            [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
            [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
            [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
            [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
            [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
            [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
            [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
            [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
            [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
            [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
            [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
            [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
            [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
            [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
            [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
            [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
            [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
            [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
            [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
            [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
            [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
            [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
            [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
            [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
            [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
            [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
            [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
            [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
            [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
            [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
            [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
            [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
            [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
            [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
            [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
            [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
            [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
            [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
            [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
            [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
            ],
          }
        ],
        code: {
          html: `
              <orange-chart-histogram 
              :title="histogram.title"
              :xAxis="histogram.xAxis"
              :yAxis="histogram.yAxis"
              :series="histogram.series"
              :dataset="histogram.dataset"
              />
              javascript: 
              data() {
                return {
                  title: {
                    text: '散点图'
                  },
                  legend: {

                  },
                  xAxis: {
                    scale: true
                  },
                  yAxis: {
                      scale: true
                  },
                  series: [
                    {
                      type: 'effectScatter',
                      symbolSize: 20,
                      data: [
                          [172.7, 105.2],
                          [153.4, 42]
                      ]
                    }, 
                    {
                      type: 'scatter',
                      data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                          [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                          [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                          [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
                          [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                          [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
                          [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
                          [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
                          [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
                          [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
                          [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
                          [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
                          [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
                          [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
                          [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
                          [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
                          [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
                          [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
                          [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
                          [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
                          [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
                          [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
                          [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
                          [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
                          [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
                          [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
                          [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
                          [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
                          [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
                          [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
                          [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
                          [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
                          [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
                          [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
                          [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
                          [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
                          [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
                          [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
                          [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
                          [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
                          [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
                          [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
                          [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
                          [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
                          [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
                          [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
                          [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
                          [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
                          [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
                          [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
                          [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
                          [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
                      ],
                    }
                  ],
                }
              }
              `
        }
      },
      radar: {
        title: {
          text: '手机性能对比雷达图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          left: 'right',
          data: ['某主食手机', '某水果手机']
        },
        series: [
          {
            type: 'radar',
            data: [
              {
                value: [85, 90, 90, 95, 95],
                name: '某主食手机'
              },
              {
                value: [95, 80, 95, 90, 93],
                name: '某水果手机'
              }
            ]
          }
        ],
        radar: [
          {
            indicator: [
              { text: '外观', max: 100 },
              { text: '拍照', max: 100 },
              { text: '系统', max: 100 },
              { text: '性能', max: 100 },
              { text: '屏幕', max: 100 }
            ],
            radius: 80,
            center: ['50%', '60%']
          }
        ],
        code: {
          html: `
              <orange-chart-radar 
              :title="radar.title"
              :tooltip="radar.tooltip"
              :legend="radar.legend"
              :radar="radar.radar"
              :series="radar.series"
              />
              javascript: 
              data() {
                return {
                  title: {
                    text: '手机性能对比雷达图'
                  },
                  tooltip: {
                      trigger: 'axis'
                  },
                  legend: {
                    left: 'right',
                    data: ['某主食手机', '某水果手机']
                  },
                  series: [
                    {
                      type: 'radar',
                      data: [
                          {
                              value: [85, 90, 90, 95, 95],
                              name: '某主食手机'
                          },
                          {
                              value: [95, 80, 95, 90, 93],
                              name: '某水果手机'
                          }
                      ]
                    }
                  ],
                  radar: [
                    {
                      indicator: [
                          {text: '外观', max: 100},
                          {text: '拍照', max: 100},
                          {text: '系统', max: 100},
                          {text: '性能', max: 100},
                          {text: '屏幕', max: 100}
                      ],
                      radius: 80,
                      center: ['50%', '60%']
                    }
                  ],
                }
              }
              `
        }
      },
      map: {
        
        code: {
          html: `
              <orange-chart-histogram 
              :title="histogram.title"
              :xAxis="histogram.xAxis"
              :yAxis="histogram.yAxis"
              :series="histogram.series"
              :dataset="histogram.dataset"
              />
              javascript: 
              data() {
                return {
                  histogram: {
                    title: {
                      text: '柱状图'
                    },
                    xAxis: {
                      type: 'category'
                    },
                    yAxis: {
                      type: 'value'
                    },
                    series: [
                      {type: 'bar'},
                      {type: 'bar'},
                      {type: 'bar'}
                    ],
                    dataset: {
                      dimensions: ['product', '2015', '2016', '2017'],
                      source: [
                        {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
                        {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
                        {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
                        {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
                      ]
                    }
                  }
                }
              }
              `
        }
      },
    }
  },
  methods: {
    getCurrentPosition() {
      // 使用 HTML5 Geolocation API 获取用户当前位置
      // navigator.geolocation.getCurrentPosition(position => {
      //   const { longitude, latitude } = position.coords
      //   // 同步经纬度信息
      //   this.map.series[0].center = [[longitude, latitude]]
      // }, error => {
      //   console.error('获取地理位置失败:', error)
      // })
    },
  },
  mounted() {
    this.getCurrentPosition()
  }

}
</script>

