
> 测试浏览器为Chrome 71.0.3578.98

# fly


## 运行须知

start.bat  可以更快的启动项目

项目启动时会获取本机的IP地址，手机扫码访问的功能基于手机和电脑在同一个局域网内。




## 改动


移除了一些不需要的代码，一些为了用而用的库(Vuex、Vi8n),

采用新的封装模式、编码风格重构了一些应用，重构了DateHelper库。

使用node.js 编写的内置服务器来保存数据,使得在编写代码时无限接近于真实的项目开发。

重新规划了外在布局和内在组织，与旧版相比，可以说是焕然一新,封装的简化，使用的简化。

## 内置的node服务器

可以处理ajax请求,实现文件的上传和下载。
普通数据以json形式存储在后台,具体的运作逻辑可见应用内部。

## 应用介绍

### 四册运算题
 
一开始实现的版本是用java写的cmd应用,想要帮助弟弟练习20以内的两位数加减运算,那时还不能处理括弧嵌套。

可以配置难度,点击开始后自动生成式子,全部答对后才会回到初始状态。

### 闹钟

觉得华为meta9设置闹钟很麻烦,便打算自己做一个,主要是为了锻炼逻辑。

比如日期的格式化涉及到正则的应用,农历、阳历的转换,音乐的播放等。

以实现常见的需求,跳过法定节假日、循环、指定间隔响铃等。

自己添加的逻辑有,提示还有几天是假期、正处于什么假期、明天要补班这些。

闹钟关闭之后,铃声立即停止、还是播放完当前、还是把所有铃声都播放完等等。

### 记事本

这个是经常使用到的了,会记录一些事情在上面,然后定期检查完成情况。

可以上传下载文件，实现家、公司、手机的数据互通。

可以为记事添加标签,置顶记事等小功能。

### 图片转换器

严格践行了自己提出的命名规范,使用了async、await。

在工作中获知canvas有转换图片的能力,以实现对本地图片的转化,可以下载base64码以及图片，提供了配置功能。
网络图片的转换因跨域问题暂时搁置，提供了预览功能。

### Let's go

为了解决自己纠结的毛病，程序在设定好想做的任务后，根据给任务分配的阈值来分配不同的宽度，竖线停止移动后，落在的位置就是选中的任务。
其实在点击开始后，大概就知道自己想做什么了。


