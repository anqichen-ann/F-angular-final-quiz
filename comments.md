### 完成度：
* 基本需求都有实现
* 初始没有获取分组列表
* 组名没有居中

__Details:__



### 测试：


__Details:__



### 知识点：
* 有划分列表组件，列表元素没有进一步抽象公共组件
* http运用熟练，Observable基础理解到位
* 组件交互理解到位，参数传递和事件调用运用合理

__Details:__
+ \+ Service层处理通用错误，operator运用合理。
- \- 创建接口只需要名字，方法参数不应该是Person类型，可以是name字符串类型或者{name: string}形式的对象字面量类型
- \- 此处可以用keyup.enter直接绑定到具体按键
- \- dto对应接口的id不应为optional
- \- 不应该使用ngIf控制列表是否渲染，数组初始化为空ngFor就能识别

### 工程实践：
* 组件划分合理，不过可以抽象渲染层
* 小步提交做得不错
* 大量lint错误没有处理，html缩进混乱

__Details:__
+ \+ BASIC_URL实践合理
- \- 不应该出现无意义的空标签
- \- 应该用模版字符串复用BASIC_URL
- \- console.log不应出现在最终代码里
- \- attr命名规范应该是kebab-case
- \- magic number
- \- 变量命名不合理，逻辑不清晰
- \- 相似处理函数可以考虑提取通用工具方法

### 综合：


__Details:__



