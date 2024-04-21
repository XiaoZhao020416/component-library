<template>
  <div class="content-box">
    <h2 class="demo-title">Dialog 对话框</h2>

    <orange-anchor>
      <orange-anchor-link href="dialog1" title="基本用法" />
      <orange-anchor-link href="dialog2" title="嵌套表格" />
      <orange-anchor-link href="dialog3" title="嵌套表单" />
      <orange-anchor-link href="api" title="API" />
    </orange-anchor>

    <orange-demo-block :height="340" :title="'基本用法'" id="dialog1" introduction="Dialog 弹出一个对话框">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-button @click="dialog1.visible = true" style="border: 1px solid #3a8ee6;">点击打开 Dialog</orange-button>
          <orange-dialog title="提示" :visible.sync="dialog1.visible">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
              <orange-button @click="dialog1.visible = false">取 消</orange-button>
              <orange-button type="primary" @click="dialog1.visible = false">确 定</orange-button>
            </span>
          </orange-dialog>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{ fCode(dialog1.code.html) }}</code>
      </template>
    </orange-demo-block>

    <orange-demo-block :height="650" :title="'嵌套表格'" id="dialog2" introduction="Dialog 嵌套表格">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-button @click="dialog2.visible = true" style="border: 1px solid #3a8ee6;">打开嵌套表格的 Dialog</orange-button>
          <orange-dialog :title="'嵌套表格'" :visible.sync="dialog2.visible">
            <orange-table-simple :data="dialog2.tableData" :thead="dialog2.thead" />
          </orange-dialog>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{ fCode(dialog2.code.html) }}</code>
      </template>
    </orange-demo-block>

    <orange-demo-block :height="470" :title="'嵌套表单'" id="dialog3" introduction="Dialog 嵌套表单">
      <template v-slot:demo>
        <div class="codepadding">
          <orange-button @click="dialog3.visible = true" style="border: 1px solid #3a8ee6;">打开嵌套表单的 Dialog</orange-button>
          <orange-dialog :title="'表单'" :visible.sync="dialog3.visible">
            <div>
              <p>收货地址</p><orange-input placeholder="请输入" v-model="dialog3.inputvalue" :pattern="'frame'" style="margin-right: 40px;"/>
            </div>
            <div>
              <p>选项</p><orange-select v-model="dialog3.selectOption" :options="dialog3.selectOptions"></orange-select>
            </div>
            <span slot="footer" class="dialog-footer">
              <orange-button @click="dialog3.visible = false">取 消</orange-button>
              <orange-button type="primary" @click="dialog3.visible = false">确 定</orange-button>
            </span>
          </orange-dialog>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{ fCode(dialog3.code.html) }}</code>
      </template>
    </orange-demo-block>

    <!-- API -->
    <div id="api">
      <h3 class="demo-table-title">API</h3>
      <p class="demo-table-introduction">属性说明如下：</p>
      <orange-table-simple :data="api" :thead="thead" />
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: "timeline-demo",
    data() {
      return {
        thead: ["参数", "说明", "类型", "可选值", "默认值", "支持组件"],
        dialog1: {
          visible: false,
          code: {
            html: `
            <orange-button @click="visible = true">点击打开 Dialog</orange-button>
            <orange-dialog title="提示" :visible.sync="visible">
              <span>这是一段信息</span>
              <span slot="footer" class="dialog-footer">
                <orange-button @click="visible = false">取 消</orange-button>
                <orange-button type="primary" @click="visible = false">确 定</orange-button>
              </span>
            </orange-dialog>
            javascript：
            data() {
              return {
                visible: false
              }
            }
            `
          }
        },
        dialog2: {
          visible: false,
          thread: ["姓名", "年龄", "住址"],
          tableData: [
            {
              name: "胡歌",
              age: 40,
              address: "北京市"
            },
            {
              name: "胡歌",
              age: 40,
              address: "北京市"
            },
            {
              name: "胡歌",
              age: 40,
              address: "北京市"
            }
          ],
          code: {
            html: `
            <orange-button @click="dialog2.visible = true">打开嵌套表格的 Dialog</orange-button>
             <orange-dialog :title="'嵌套表格'" :visible.sync="visible">
              <orange-table-simple :data="tableData" :thead="thead" />
            </orange-dialog>
            javascript：
            data() {
              return {
                visible: false,
                thread: ["姓名", "年龄", "住址"],
                tableData: [
                  {
                    name: "胡歌",
                    age: 40,
                    address: "北京市"
                  },
                  {
                    name: "胡歌",
                    age: 40,
                    address: "北京市"
                  },
                  {
                    name: "胡歌",
                    age: 40,
                    address: "北京市"
                  }
                ],
              }
            }
            `
          }
        },
        dialog3: {
          visible: false,
          selectOption: "",
          selectOptions: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' }
          ],
          code: {
            html: `
              <orange-button @click="visible = true">打开嵌套表单的 Dialog</orange-button>
              <orange-dialog :title="'表单'" :visible.sync="visible">
                <p>收货地址</p><orange-input placeholder="请输入" v-model="inputvalue" :pattern="'frame'" style="margin-right: 40px;"/>
                <p>选项</p><orange-select v-model="selectOption" :options="selectOptions"></orange-select>
                <span slot="footer" class="dialog-footer">
                  <orange-button @click="visible = false">取 消</orange-button>
                  <orange-button type="primary" @click="visible = false">确 定</orange-button>
                </span>
              </orange-dialog>
              javascript：
              data() {
                return {
                  selectOption: "",
                  selectOptions: [
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' }
                  ],
                }
              }
             `
          }
        },
        api: [
          {
            parameter: "title",
            description: "Dialog 的标题",
            dataTypes: "string",
            optional: "",
            default: "",
            support: "Dialog"
          },
          {
            parameter: "visible",
            description: "是否显示 Dialog",
            dataTypes: "boolean",
            optional: "",
            default: "false",
            support: "Dialog"
          }
        ]
      };
    }
  };
  </script>
  