export const sourcecodeA = `<vm-button>默认按钮</vm-button>
<vm-button type="primary">主要按钮</vm-button>
<vm-button type="text">文字按钮</vm-button>`

export const sourcecodeB = `
<vm-button :plain="true" disabled>默认按钮</vm-button>
<vm-button :disabled="true" type="primary">主要按钮</vm-button>
<vm-button :disabled="true" type="text">文字按钮</vm-button>`

export const sourcecodeC = `<div class="block" style="width: 100%;">
  <span class="demonstration" style="margin-right: 20px;">默认显示颜色</span>
  <vm-button type="primary">默认按钮</vm-button>
  <vm-button type="success">成功按钮</vm-button>
  <vm-button type="warning">警告按钮</vm-button>
  <vm-button type="danger">危险按钮</vm-button>
  <vm-button type="info">信息按钮</vm-button>
</div>
<div class="block" style="width: 100%;">
  <span class="demonstration" style="margin-right: 20px;">hover 显示颜色</span>
  <vm-button :plain="true">默认按钮</vm-button>
  <vm-button :plain="true" type="success">成功按钮</vm-button>
  <vm-button :plain="true" type="warning">警告按钮</vm-button>
  <vm-button :plain="true" type="danger">危险按钮</vm-button>
  <vm-button :plain="true" type="info">信息按钮</vm-button>
</div>`

export const sourcecodeD = `<vm-button type="primary" icon="edit"></vm-button>
<vm-button type="primary" icon="heart"></vm-button>
<vm-button type="primary" icon="share"></vm-button>
<vm-button type="primary" icon="search">搜索</vm-button>
<vm-button type="primary">上传 <vm-icon type="upload"></vm-icon></vm-button>`

export const sourcecodeE = `
<vm-button-group>
  <vm-button type="primary" icon="chevron-left">上一页</vm-button>
  <vm-button type="primary">下一页<vm-icon type="chevron-right"></vm-icon></vm-button>
</vm-button-group>
<vm-button-group size="small">
  <vm-button type="primary" icon="chevron-left">上一页</vm-button>
  <vm-button type="primary">下一页<vm-icon type="chevron-right"></vm-icon></vm-button>
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
</vm-button-group>`

export const sourcecodeF = `
<vm-button type="primary" :loading="true">加载中</vm-button>
<vm-button type="primary" :loading="loading" loading-icon="load-b">{{ loading ? '加载中' : '点它 >>>' }}</vm-button>
<vm-button type="primary" @click="loading = !loading">切换状态</vm-button>`

export const sourcecodeG = `
<vm-button type="primary" size="large">大型按钮</vm-button>
<vm-button type="primary">正常按钮</vm-button>
<vm-button type="primary" size="default">正常按钮</vm-button>
<vm-button type="primary" size="small">小型按钮</vm-button>
<vm-button type="primary" size="mini">超小按钮</vm-button>`

