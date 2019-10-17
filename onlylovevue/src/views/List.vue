<template>
  <div class="list">
    <div class="container">
      <div class="row">
        <div class="col-md-7 col-xs-12" id="rankContainer">
          <div class="col-xs-12">
            <div class="col-xs-4 rankHead rankHot" style="background-color: #e27c31">
              <i class="fa fa-heartbeat" aria-hidden="true"></i>狂热榜
            </div>
            <div class="col-xs-4 rankHead rankBeaut">
              <i class="fa fa-fire" aria-hidden="true"></i>魅力榜
            </div>
            <div class="col-xs-4 rankHead rankLove">
              <img src="../assets/imgs/一箭穿心.png" alt srcset style="width: 25px;height: 25px;" />比翼榜
            </div>
          </div>
          <div class="col-xs-12 hotRank1" >
            <div class="col-xs-12" >
              <div class="col-xs-3 rankThree" v-for="(key,index) in carzyList.slice(1, 2)" :key="'info-1'+ index">
                <ul>
                  <li class="col-xs-12">
                    <div class="col-xs-12">
                      <div class="headerPic second-one">
                        <img src="../assets/imgs/4.jpg" alt srcset />
                      </div>
                    </div>
                  </li>
                  <li class="col-xs-12">
                    <i
                      class="fa fa-trophy"
                      aria-hidden="true"
                      style="color:#7b7b7b;font-size: 20px"
                    >{{key.rowno}}</i>
                  </li>
                  <li class="col-xs-12" style="color:#7b7b7b">{{key.昵称}}</li>
                  <li class="col-xs-12">
                    <b>魅力值</b>
                    <i class="fa fa-arrow-up" aria-hidden="true" style="color:red">{{key.sweet_score}}</i>
                  </li>
                </ul>
              </div>
              <div class="col-xs-6 rankThree" v-for="(key,index) in carzyList.slice(0, 1)" :key="'info-2'+ index">
                <ul>
                  <li class="col-xs-12">
                    <div class="col-xs-12">
                      <div class="headerPic first-one">
                        <img src="../assets/imgs/4.jpg" alt srcset />
                      </div>
                    </div>
                  </li>
                  <li class="col-xs-12">
                    <i
                      class="fa fa-trophy"
                      aria-hidden="true"
                      style="color:goldenrod;text-indent: 0.5em;font-size: 25px"
                    >{{key.rowno}}</i>
                  </li>
                  <li class="col-xs-12" style="color:goldenrod">{{key.昵称}}</li>
                  <li class="col-xs-12">
                    <b>魅力值</b>
                    <i class="fa fa-arrow-up" aria-hidden="true" style="color:red">{{key.sweet_score}}</i>
                  </li>
                </ul>
              </div>
              <div class="col-xs-3 rankThree" v-for="(key,index) in carzyList.slice(2, 3)" :key="'info-3'+ index">
                <ul>
                  <li class="col-xs-12">
                    <div class="col-xs-12">
                      <div class="headerPic third-one">
                        <img src="../assets/imgs/4.jpg" alt srcset />
                      </div>
                    </div>
                  </li>
                  <li class="col-xs-12">
                    <i class="fa fa-trophy" aria-hidden="true" style="color:peru;font-size: 20px">{{key.rowno}}</i>
                  </li>
                  <li class="col-xs-12" style="color:peru">{{key.昵称}}</li>
                  <li class="col-xs-12">
                    <b>魅力值</b>
                    <i class="fa fa-arrow-up" aria-hidden="true" style="color:red">{{key.sweet_score}}</i>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xs-12 rankNumber" style="margin-top: -10px" v-for="(key,index) in carzyList.slice(3, 4)" :key="'info-4'+ index">
              <ul>
                <li>
                  <span>{{key.rowno}}</span>
                  <img src="../assets/imgs/4.jpg" alt />
                  <a href>{{key.昵称}}</a>
                  <i class="fa fa-arrow-up" aria-hidden="true" style="color:red">{{key.sweet_score}}</i>
                  <b>魅力值</b>
                </li>
                <li>
                  <span>5</span>
                  <img src="../assets/imgs/4.jpg" alt />
                  <a href>涂山雅雅</a>
                  <i class="fa fa-arrow-down" aria-hidden="true" style="color:green">300</i>
                  <b>魅力值</b>
                </li>
                <li>
                  <span>6</span>
                  <img src="../assets/imgs/4.jpg" alt />
                  <a href>涂山容容</a>
                  <i class="fa fa-arrow-down" aria-hidden="true" style="color:green">300</i>
                  <b>魅力值</b>
                </li>
                <li>
                  <span>7</span>
                  <img src="../assets/imgs/4.jpg" alt />
                  <a href>涂山苏苏</a>
                  <i class="fa fa-arrow-up" aria-hidden="true" style="color:red">300</i>
                  <b>魅力值</b>
                </li>
                <li>
                  <span>8</span>
                  <img src="../assets/imgs/4.jpg" alt />
                  <a href>涂山乐乐</a>
                  <i class="fa fa-arrow-down" aria-hidden="true" style="color:green">300</i>
                  <b>魅力值</b>
                </li>
              </ul>
            </div>
            <div class="col-xs-12 rinkPage">
              <div class="block">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage3"
                  :page-size="100"
                  layout="prev, pager, next, jumper"
                  :total="1000"
                ></el-pagination>
              </div>
            </div>
          </div>
          <div class="col-xs-12 beautRank1">
            <div class="col-xs-12">
              <div class="col-xs-3 rankThree" v-for="(key,index) in charmList.slice(1, 2)" :key="'info-5'+index">
                <ul>
                  <li class="col-xs-12">
                    <div class="col-xs-12">
                      <div class="headerPic second-one">
                        <img src="../assets/imgs/4.jpg" alt srcset />
                      </div>
                    </div>
                  </li>
                  <li class="col-xs-12">
                    <i
                      class="fa fa-trophy"
                      aria-hidden="true"
                      style="color:#7b7b7b;font-size: 20px"
                    >{{key.rowno}}</i>
                  </li>
                  <li class="col-xs-12" style="color:#7b7b7b">{{key.昵称}}</li>
                  <li class="col-xs-12">
                    <b>魅力值</b>
                    <i class="fa fa-arrow-up" aria-hidden="true" style="color:red">{{key.sweet_score}}</i>
                  </li>
                </ul>
              </div>
              <div class="col-xs-6 rankThree" v-for="(key,index) in charmList.slice(0, 1)" :key="'info-6'+index">
                <ul>
                  <li class="col-xs-12">
                    <div class="col-xs-12">
                      <div class="headerPic first-one">
                        <img src="../assets/imgs/4.jpg" alt srcset />
                      </div>
                    </div>
                  </li>
                  <li class="col-xs-12">
                    <i
                      class="fa fa-trophy"
                      aria-hidden="true"
                      style="color:goldenrod;text-indent: 0.5em;font-size: 25px"
                    >{{key.rowno}}</i>
                  </li>
                  <li class="col-xs-12" style="color:goldenrod">{{key.昵称}}</li>
                  <li class="col-xs-12">
                    <b>魅力值</b>
                    <i class="fa fa-arrow-up" aria-hidden="true" style="color:red">{{key.sweet_score}}</i>
                  </li>
                </ul>
              </div>
              <div class="col-xs-3 rankThree" v-for="(key,index) in charmList.slice(2, 3)" :key="'info-7'+index">
                <ul>
                  <li class="col-xs-12">
                    <div class="col-xs-12">
                      <div class="headerPic third-one">
                        <img src="../assets/imgs/4.jpg" alt srcset />
                      </div>
                    </div>
                  </li>
                  <li class="col-xs-12">
                    <i class="fa fa-trophy" aria-hidden="true" style="color:peru;font-size: 20px">{{key.rowno}}</i>
                  </li>
                  <li class="col-xs-12" style="color:peru">{{key.昵称}}</li>
                  <li class="col-xs-12">
                    <b>魅力值</b>
                    <i class="fa fa-arrow-up" aria-hidden="true" style="color:red">{{key.sweet_score}}</i>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xs-12 rankNumber" style="margin-top: -10px" v-for="(key,index) in charmList.slice(3, 4)" :key="'info-8'+index">
              <ul>
                <li>
                  <span>{{key.rowno}}</span>
                  <img src="../assets/imgs/4.jpg" alt />
                  <a href>{{key.昵称}}</a>
                  <i class="fa fa-arrow-up" aria-hidden="true" style="color:red">{{key.sweet_score}}</i>
                  <b>魅力值</b>
                </li>
                <li>
                  <span>5</span>
                  <img src="../assets/imgs/4.jpg" alt />
                  <a href>东方秦兰</a>
                  <i class="fa fa-arrow-down" aria-hidden="true" style="color:green">300</i>
                  <b>魅力值</b>
                </li>
                <li>
                  <span>6</span>
                  <img src="../assets/imgs/4.jpg" alt />
                  <a href>东方月初</a>
                  <i class="fa fa-arrow-down" aria-hidden="true" style="color:green">300</i>
                  <b>魅力值</b>
                </li>
                <li>
                  <span>7</span>
                  <img src="../assets/imgs/4.jpg" alt />
                  <a href>欢都擎天</a>
                  <i class="fa fa-arrow-up" aria-hidden="true" style="color:red">300</i>
                  <b>魅力值</b>
                </li>
                <li>
                  <span>8</span>
                  <img src="../assets/imgs/4.jpg" alt />
                  <a href>欢都落兰</a>
                  <i class="fa fa-arrow-down" aria-hidden="true" style="color:green">300</i>
                  <b>魅力值</b>
                </li>
              </ul>
            </div>
            <div class="col-xs-12 rinkPage">
              <div class="block">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage3"
                  :page-size="100"
                  layout="prev, pager, next, jumper"
                  :total="1000"
                ></el-pagination>
              </div>
            </div>
          </div>
          <div class="col-xs-12 loveRank1">
            <div class="col-xs-12" v-for="(key,index) in sweetList.slice(0, 1)" :key="'info-9'+index">
              <div class="col-xs-6 rankThree">
                <ul>
                  <li class="col-xs-12">
                    <div class="col-xs-12">
                      <div class="headerPic first-one">
                        <img src="../assets/imgs/4.jpg" alt srcset />
                      </div>
                    </div>
                  </li>
                  <li class="col-xs-12">
                    <i
                      class="fa fa-trophy"
                      aria-hidden="true"
                      style="color:goldenrod;text-indent: 0.5em;font-size: 25px"
                    >{{key.rowno}}</i>
                  </li>
                  <li class="col-xs-12" style="color:goldenrod">{{key.情侣1名字}}</li>
                  <li class="col-xs-12">
                    <b>{{key.sweet_score}}</b>
                    <i class="fa fa-arrow-up" aria-hidden="true" style="color:red">300</i>
                  </li>
                </ul>
              </div>
              <div class="col-xs-6 rankThree">
                <ul>
                  <li class="col-xs-12">
                    <div class="col-xs-12">
                      <div class="headerPic first-one">
                        <img src="../assets/imgs/4.jpg" alt srcset />
                      </div>
                    </div>
                  </li>
                  <li class="col-xs-12">
                    <i
                      class="fa fa-trophy"
                      aria-hidden="true"
                      style="color:goldenrod;text-indent: 0.5em;font-size: 25px"
                    >1</i>
                  </li>
                  <li class="col-xs-12" style="color:goldenrod">{{key.情侣2名字}}</li>
                  <li class="col-xs-12">
                    <b>{{key.sweet_score}}</b>
                    <i class="fa fa-arrow-up" aria-hidden="true" style="color:red">300</i>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xs-12 rankNumber" style="margin-top: -10px">
              <ul>
                <li>
                  <span>2</span>
                  <img src="../assets/imgs/4.jpg" alt />
                  <a href>东方月初</a>
                  <img src="../assets/imgs/4.jpg" alt />
                  <a href>涂山红红</a>
                  <i class="fa fa-arrow-up" aria-hidden="true" style="color:red">300</i>
                  <b>魅力值</b>
                </li>
                <li>
                  <span>3</span>
                  <img src="../assets/imgs/4.jpg" alt />
                  <a href>东方淮竹</a>
                  <img src="../assets/imgs/4.jpg" alt />
                  <a href>王权霸业</a>
                  <i class="fa fa-arrow-down" aria-hidden="true" style="color:green">300</i>
                  <b>魅力值</b>
                </li>
                <li>
                  <span>4</span>
                  <img src="../assets/imgs/4.jpg" alt />
                  <a href>欢都落兰</a>
                  <img src="../assets/imgs/4.jpg" alt />
                  <a href>平且月初</a>
                  <i class="fa fa-arrow-down" aria-hidden="true" style="color:green">300</i>
                  <b>魅力值</b>
                </li>
                <li>
                  <span>5</span>
                  <img src="../assets/imgs/4.jpg" alt />
                  <a href>翠玉鸣鸾</a>
                  <img src="../assets/imgs/4.jpg" alt />
                  <a href>翠玉小昙</a>
                  <i class="fa fa-arrow-up" aria-hidden="true" style="color:red">300</i>
                  <b>魅力值</b>
                </li>
                <li>
                  <span>6</span>
                  <img src="../assets/imgs/4.jpg" alt />
                  <a href>翠玉小昙</a>
                  <img src="../assets/imgs/4.jpg" alt />
                  <a href>翠玉鸣鸾</a>
                  <i class="fa fa-arrow-down" aria-hidden="true" style="color:green">300</i>
                  <b>魅力值</b>
                </li>
              </ul>
            </div>
            <div class="col-xs-12 rinkPage">
              <div class="block">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage3"
                  :page-size="100"
                  layout="prev, pager, next, jumper"
                  :total="1000"
                ></el-pagination>
              </div>
            </div>
          </div>
        </div>
        <AsideNav class="col-md-offset-1 col-md-4 col-xs-12"></AsideNav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      carzyList: [],
      charmList: [],
      sweetList: [],
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
   created() {
    this.$axios
      .get("http://localhost:3000/list/crazy")
      .then(res => {
        //拿到后台数据赋值给前端
        this.carzyList = res.data.data;
        console.log(this.carzyList)
      })
      .catch(err => {
        console.log("错误信息：" + err);
      });
    this.$axios
      .get("http://localhost:3000/list/charm")
      .then(res => {
        //拿到后台数据赋值给前端
        this.charmList = res.data.data;
        console.log(this.charmList)
      })
      .catch(err => {
        console.log("错误信息：" + err);
      });
    this.$axios
      .get("http://localhost:3000/list/sweetChart")
      .then(res => {
        //拿到后台数据赋值给前端
        this.sweetList = res.data.data;
        console.log(this.sweetList);
      })
      .catch(err => {
        console.log("错误信息：" + err);
      });
  }
};
</script>
<style scoped>
.list{
  margin-top: 100px;
}
</style>
