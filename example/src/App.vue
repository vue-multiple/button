<template>
  <div id="app">
    <vue-demonstration
      tag="h2"
      anchor="button-an-niu"
      title="Button 按钮">
      <template slot="description">
        常用的操作按钮。 （<a href="http://element.eleme.io/#/zh-CN/component/button" target="_blank">Element Button 按钮</a>）
      </template>
    </vue-demonstration>
    <!-- 基础用法 -->
    <vue-demonstration
      title="基础用法"
      anchor="ji-chu-yong-fa"
      description="基础的按钮用法。"
      :highlight="sourcecodeA">
      <template slot="source">
        <vm-button>默认按钮</vm-button>
        <vm-button type="primary">主要按钮</vm-button>
        <vm-button type="text">文字按钮</vm-button>
      </template>
      <template slot="explanation">
        <code>Button</code> 组件默认提供7种主题，由 <code>type</code> 属性来定义，默认为 <code>default</code>。
      </template>
    </vue-demonstration>
    <!-- 禁用状态 -->
    <vue-demonstration
      title="禁用状态"
      anchor="jin-yong-zhuang-tai"
      description="按钮不可用状态。"
      :highlight="sourcecodeB">
      <template slot="source">
        <vm-button :plain="true" disabled>默认按钮</vm-button>
        <vm-button :disabled="true" type="primary">主要按钮</vm-button>
        <vm-button :disabled="true" type="text">文字按钮</vm-button>
      </template>
      <template slot="explanation">
        你可以使用 <code>disabled</code> 属性来定义按钮是否可用，它接受一个 <code>Boolean</code> 值。
      </template>
    </vue-demonstration>
    <!-- 有颜色倾向 -->
    <vue-demonstration
      title="有颜色倾向"
      anchor="you-yan-se-qing-xiang"
      description="不同的颜色倾向代表不同的提示。"
      :highlight="sourcecodeC">
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-2 vd-demo__horizontal">
          <span class="vd-demo__demonstration">默认显示颜色</span>
          <div class="vd-demo__wrapper">
            <vm-button type="primary">默认按钮</vm-button>
            <vm-button type="success">成功按钮</vm-button>
            <vm-button type="warning">警告按钮</vm-button>
            <vm-button type="danger">危险按钮</vm-button>
            <vm-button type="info">信息按钮</vm-button>
          </div>
        </div>
        <div class="vd-demo__block vd-demo__block-2 vd-demo__horizontal">
          <span class="vd-demo__demonstration">hover 显示颜色</span>
          <div class="vd-demo__wrapper">
            <vm-button :plain="true">默认按钮</vm-button>
            <vm-button :plain="true" type="success">成功按钮</vm-button>
            <vm-button :plain="true" type="warning">警告按钮</vm-button>
            <vm-button :plain="true" type="danger">危险按钮</vm-button>
            <vm-button :plain="true" type="info">信息按钮</vm-button>
          </div>
        </div>
      </template>
      <template slot="explanation">
        朴素按钮同样设置了不同的 <code>type</code> 属性对应的样式（可选值同上），默认为 <code>primary</code>。设置 <code>plain</code> 属性，它接受一个 <code>Boolean</code>。注意，在该情况下，type虽然可以为text，但是是没有意义的，会显示为text
        button的样式。
      </template>
    </vue-demonstration>
    <!-- 图标按钮 -->
    <vue-demonstration
      title="图标按钮"
      anchor="tu-biao-an-niu"
      description="带图标的按钮可增强辨识度(有文字)或节省空间(无文字)。"
      :highlight="sourcecodeD">
      <template slot="source">
        <vm-button type="primary" icon="edit"></vm-button>
        <vm-button type="primary" icon="heart"></vm-button>
        <vm-button type="primary" icon="share"></vm-button>
        <vm-button type="primary" icon="search">搜索</vm-button>
        <vm-button type="primary">上传
          <vm-icon type="upload"></vm-icon>
        </vm-button>
      </template>
      <template slot="explanation">
        设置 <code>icon</code> 属性即可，<code>icon</code> 的列表可以参考 <a href="https://vue-multiple.github.io/icon/"
                                                               target="_blank"></a> 的 <code>icon</code> 组件，也可以设置在文字右边的
        <code>icon</code> ，只要使用 <code>i</code> 标签即可，可以使用自定义图标。
      </template>
    </vue-demonstration>
    <!-- 图标按钮 -->
    <vue-demonstration
      anchor="an-niu-zu"
      description="以按钮组的方式出现，常用于多项类似操作。"
      :highlight="sourcecodeE">
      <template slot="title">
        按钮组 <i class="vd-demo__new">（修改特性）</i>
      </template>
      <template slot="source">
        <vm-button-group>
          <vm-button type="primary" icon="chevron-left">上一页</vm-button>
          <vm-button type="primary">下一页
            <vm-icon type="chevron-right"></vm-icon>
          </vm-button>
        </vm-button-group>
        <vm-button-group size="small">
          <vm-button type="primary" icon="chevron-left">上一页</vm-button>
          <vm-button type="primary">下一页
            <vm-icon type="chevron-right"></vm-icon>
          </vm-button>
        </vm-button-group>
        <vm-button-group type="info">
          <vm-button icon="edit"></vm-button>
          <vm-button icon="share"></vm-button>
          <vm-button icon="heart"></vm-button>
        </vm-button-group>
        <vm-button-group type="info">
          <vm-button icon="edit"></vm-button>
          <vm-button type="warning" icon="share"></vm-button>
          <vm-button icon="heart"></vm-button>
        </vm-button-group>
        <vm-button-group type="primary" size="small">
          <vm-button icon="edit"></vm-button>
          <vm-button size="large" icon="share"></vm-button>
          <vm-button icon="heart"></vm-button>
        </vm-button-group>
        <vm-button-group :vertical="true">
          <vm-button type="primary" icon="edit"></vm-button>
          <vm-button type="primary" icon="share"></vm-button>
          <vm-button type="primary" icon="heart"></vm-button>
        </vm-button-group>
      </template>
      <template slot="explanation">
        使用 <code>&lt;el-button-group&gt;</code> 标签来嵌套你的按钮。可以指定属性 <code>type</code> 和 <code>size</code>，子组件 <code>&lt;el-button&gt;</code>
        继承父组件属性，也可为子组件指定相应属性覆盖父组件属性。
      </template>
    </vue-demonstration>
    <!-- 加载中 -->
    <vue-demonstration
      anchor="jia-zai-zhong"
      description="点击按钮后进行数据加载操作，在按钮上显示加载状态。"
      :highlight="sourcecodeF">
      <template slot="title">
        加载中 <i class="vd-demo__new">（修改特性）</i>
      </template>
      <template slot="source">
        <vm-button type="primary" :loading="true">加载中</vm-button>
        <vm-button type="primary" :loading="loading" loading-icon="load-b">{{ loading ? '加载中' : '点它 >>>' }}
        </vm-button>
        <vm-button type="primary" @click="loading = !loading">切换状态</vm-button>
      </template>
      <template slot="explanation">
        要设置为 <code>loading</code> 状态，只要设置 <code>loading</code> 属性为 <code>true</code> 即可。你也可以通过
        <code>loading-icon</code> 属性指定其它 loading 图标。
      </template>
    </vue-demonstration>
    <!-- 不同尺寸 -->
    <vue-demonstration
      title="不同尺寸"
      anchor="jia-zai-zhong"
      description="Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。"
      :highlight="sourcecodeG">
      <template slot="source">
        <vm-button type="primary" size="large">大型按钮</vm-button>
        <vm-button type="primary">正常按钮</vm-button>
        <vm-button type="primary" size="default">正常按钮</vm-button>
        <vm-button type="primary" size="small">小型按钮</vm-button>
        <vm-button type="primary" size="mini">超小按钮</vm-button>
      </template>
      <template slot="explanation">
        额外的尺寸：<code>large</code>、<code>small</code>、<code>mini</code>，通过设置 <code>size</code>属性来配置它们。
      </template>
    </vue-demonstration>
    <!-- Button Attributes -->
    <vue-demonstration
      title="Button Attributes"
      anchor="attributes"
      :show-content="false">
      <template slot="table">
        <table class="vd-demo__table">
          <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>size</td>
            <td>尺寸</td>
            <td>string</td>
            <td>large,default,small,mini</td>
            <td>—</td>
          </tr>
          <tr>
            <td>type</td>
            <td>类型</td>
            <td>string</td>
            <td>primary,success,warning,danger,info,text,default</td>
            <td>—</td>
          </tr>
          <tr>
            <td>plain</td>
            <td>是否朴素按钮</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>loading</td>
            <td>是否加载中状态</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>loadingIcon<i class="vd-demo__new">（新增）</i></td>
            <td>加载图标，已有的图标库中的图标名</td>
            <td>string</td>
            <td>load-a,load-b,load-c,load-d</td>
            <td>load-a</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用状态</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>图标，已有的图标库中的图标名</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>autofocus</td>
            <td>是否默认聚焦</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>native-type</td>
            <td>原生 type 属性</td>
            <td>string</td>
            <td>button,submit,reset</td>
            <td>button</td>
          </tr>
          </tbody>
        </table>
      </template>
    </vue-demonstration>
    <!-- Button Group Attributes -->
    <vue-demonstration
      title=""
      anchor="button-group-attributes"
      :show-content="false">
      <template slot="title">
        Button Group Attributes <i class="vd-demo__new">（新增特性）</i>
      </template>
      <template slot="table">
        <table class="vd-demo__table">
          <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>vertical</td>
            <td>是否垂直显示</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>size</td>
            <td>尺寸</td>
            <td>string</td>
            <td>large,default,small,mini</td>
            <td>—</td>
          </tr>
          <tr>
            <td>type</td>
            <td>类型</td>
            <td>string</td>
            <td>primary,success,warning,danger,info,text, default</td>
            <td>—</td>
          </tr>
          </tbody>
        </table>
      </template>
    </vue-demonstration>
  </div>
</template>

<script>
  import {sourcecodeA, sourcecodeB, sourcecodeC, sourcecodeD, sourcecodeE, sourcecodeF, sourcecodeG} from './template'
  export default {
    name: 'app',
    data () {
      return {
        sourcecodeA,
        sourcecodeB,
        sourcecodeC,
        sourcecodeD,
        sourcecodeE,
        sourcecodeF,
        sourcecodeG,
        loading: false
      }
    }
  }
</script>

<style>
  #app {
    margin: 60px auto;
  }
</style>
