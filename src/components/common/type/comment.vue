<template>
  <div class="comment">
    <label for>
      本次评分:
      <el-rate v-model="value"></el-rate>
    </label>
    <br />
    <el-input type="textarea" v-model="desc"></el-input>
    <button @click="postcomment">提 交 评 论</button>

    <div class="com-content">
      <div class="user-com" v-for="item in comlist" :key="item.date">
        <div class="user-title">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573465040514&di=7a47f2c2a27ef4b4923bc1811299612a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201705%2F07%2F20170507160739_8tNSP.thumb.700_0.jpeg"
            alt
          />
        </div>
        <div class="user-info">
          <div class="name">
            <h6>匿名用户</h6>
            <span class="time">{{ item.date }}</span>
          </div>
          <el-rate
            :value="parseInt(item.rate)"
            disabled
            show-score
            text-color="#ff9900"
            :score-template="item.rate+'分'"
          ></el-rate>
          <div class="user-content">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      value: 5,
      desc: null,
      shopid: this.$route.params.id,
      comlist: []
    };
  },
  methods: {
    getcomment() {
      axios
        .get("/getcomment/" + this.shopid)
        .then(suc => {
          this.comlist = suc.data[0].comment
          this.comlist.reverse()
        })
        .catch(err => {
          console.log(err);
        });
    },
    postcomment() {
      if (this.desc.length == 0) {
        this.$message({
          message: "不允许提交空评论，请填写评论哦！",
          type: "warning"
        });
        return
      }
      let data = {
        rate: this.value,
        content: this.desc,
        date: new Date().toLocaleString()
      };
      axios
        .post("/sendcomment/" + this.shopid, qs.stringify(data))
        .then(suc => {
          if (suc.status == 200) {
            this.$message({
              message: "评论成功！",
              type: "success"
            });
            let date = {
              date: new Date().toLocaleString(),
              rate: this.value,
              content: this.desc
              
            }
            this.comlist.unshift(data)
            this.desc = ""
            this.value = 0
            console.log(this.comlist)
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getcomment();
  }
};
</script>

<style lang="less">
.comment {
  margin-top: 10px;
  label {
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .el-rate {
      display: flex;
      align-items: center;
      margin-top: -3px;
      margin-left: 10px;
    }
  }
  .el-textarea__inner {
    height: 80px;
  }
  button {
    background-color: #409eff;
    padding: 6px 0;
    margin: 5px 0;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    border-radius: 8px;
  }
}
.com-content {
  .user-com {
    display: flex;
    border-top: 1px solid #dcdfe6;
    border-bottom: 1px solid #dcdfe6;
    padding: 3px 0;
    .user-title {
      flex: 1;
      img {
        width: 45px;
        height: 45px;
      }
    }
    .user-info {
      flex: 4;

      .name {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 25px;
      }
      .el-rate {
        margin-top: 0;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-size: 12px;
        i {
          font-size: 11px;
          margin-right: 0;
        }
      }
      .user-content {
        font-size: 12px;
        text-align: left;
        margin-top: 5px;
      }
    }
  }
}
</style>