import { Component } from '@angular/core';

// TODO GTB-1: * 基本需求都有实现
// TODO GTB-1: * 初始没有获取分组列表
// TODO GTB-1: * 组名没有居中
// TODO GTB-3: * 有划分列表组件，列表元素没有进一步抽象公共组件
// TODO GTB-3: * http运用熟练，Observable基础理解到位
// TODO GTB-3: * 组件交互理解到位，参数传递和事件调用运用合理
// TODO GTB-4: * 组件划分合理，不过可以抽象渲染层
// TODO GTB-4: * 小步提交做得不错
// TODO GTB-4: * 大量lint错误没有处理，html缩进混乱

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-final-quiz';
}
