<style lang="less">
</style>
<template>
  <div id="index_vue">
    <Collapse style=" font-size:16px;">
      <Panel name="0">
        使用内置后台服务器
        <p slot="content">
          npm start 可以同步开启内置后台服务器和vue-cli<br>
          服务器用nodejs编写，位于/service/app/service.js 在tools_home文件夹下 start-service.bat用来单独启动内置服务 <br>
          如对同级目录config.json中配置有改动 重启项目和内置服务器即可！
          <Collapse accordion>
            <Panel name="0-1">
              为什么使用内置服务器
              <p slot="content">
                我的IP地址总变,日记本和闹钟的使用受到了影响! <br />
                便于测试和抽离代码,更大程度的接近真实场景。
              </p>
            </Panel>
            <Panel name="0-2">
              关于内置服务器的使用
              <p slot="content">
                已经运行一次npm start,在未关闭上一个内置服务器的前提下，再次运行npm start因端口被占用,cmd仍然会弹出,但没有在其他端口运行内置服务器。 <br>
                至于如何判断是当前实例占用,还是其他程序占用,以便进一步的优化,计划后续执行。

              </p>
            </Panel>
          </Collapse>
        </p>
      </Panel>
      <Panel name="1">
        使用手机访问
        <p slot="content">
          手机和电脑在同一个局域网内，比如连接同一个wifi,如果你主机名是localhost、127.0.0.1,是无法使用手机访问的！

          <Collapse accordion>
            <Panel name="1-1">
              <span style="color:red;"> listen EADDRNOTAVAIL 报错</span>
              <p slot="content">项目每次启动时会动态的获取IP地址,如果IP地址在使用过程中发生变化,刷新会发生问题，需要重新启动</p>
            </Panel>
          </Collapse>
        </p>
      </Panel>
      <Panel name="2">
        关于程序
        <div slot="content">
          <p>
            sf-pc-web，主要服务于pc端，尽量让移动端也可以使用。
          </p>
          <p>
            这个版本的主要目标，是回到那个没被浮躁支配的自己，针对上一个版本的问题进行整改。<br>
            这可能是一个漫长的过程，好在我感觉浮躁正在慢慢褪去。
          </p>
          <p>
            它是一个逐渐成长的项目，我会从自身的实际需求出发，在这里实践web开发中的所感所悟、所学所想。

          </p>
          <p>
            它有机会成为未来的类库的孵化池，我以感受到神力的洪荒，也希望更多的人给与帮助，有些时候，个人的见解是单一的，有时候，明知道这样不好，却又找不到更好的办法。

          </p>
          <p>
            我不会主动的去做兼容性测试,对于我自己，它不构成刚性需求。当然，我会主动的去使用兼容性好的写法。
          </p>
          <Collapse accordion>
            <Panel name="2-1">
              关于名字
              <div slot="content">
                <p>

                  sf是英文seven floor的缩写，对应中文7号楼，是大学时同班女生所在的宿舍楼。
                </p>
                <p>
                  这里是一个起点。
                </p>
              </div>

            </Panel>
          </Collapse>

        </div>

      </Panel>
      <Panel name="3">
        合作
        <p slot="content">
          欢迎提出见解，无论是易用性、样式、写法、命名等等。<br> 或者你有一个想做的小应用。
        </p>
      </Panel>
    </Collapse>
  </div>
</template>
<script>
export default {
  name: "index_vue",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

