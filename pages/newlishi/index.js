// pages/newlishi/index.js
var api=require("../../api/api.js");
var common = require("../../api/common.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    res: [],
    multiArray:[],
    multiIndex: [0],
    zongkemu:[],
    shuxue:[],
    hanyu:[],
    yingyu:[],
    wuli:[],
    huaxue:[],
    shengwu:[],
    zhengzhi:[],
    lishi:[],
    dili:[],
    newshuxue: [],
    newhanyu: [],
    newyingyu: [],
    newwuli: [],
    newhuaxue: [],
    newshengwu: [],
    newzhengzhi: [],
    newlishi: [],
    newdili: [],
    newshuxue1:[],
    newshuxue2: [],
    newshuxue3: [],
    newshuxue4: [],
    newhanyu1: [],
    newhanyu2: [],
    newhanyu3: [],
    newhanyu4: [],
    newyingyu1: [],
    newyingyu2: [],
    newwuli1: [],
    newwuli2: [],
    newwuli3: [],
    newhuaxue1: [],
    newhuaxue2: [],
    newhuaxue3: [],
    newshengwu1: [],
    newshengwu2: [],
    newshengwu3: [],
    newzhengzhi1: [],
    newzhengzhi2: [],
    newzhengzhi3: [],
    newzhengzhi4: [],
    newlishi1: [],
    newlishi2: [],
    newlishi3: [],
    newdili1: [],
    newdili2: [],
    newdili3: [],
    nandu:['书童','童生','秀才','案首','举人','解元','亚元','贡生','经元','会元','同进士出身','进士出身','探花','榜眼','状元','连中三元','翰林供奉','翰林学士'],
  },
  lower() {
    var currentPage = this.data.currentPage;
    var totalPage = this.data.totalPage;
    if (parseInt(currentPage) + 1 <= totalPage) {
      wx.showLoading({
        title: '正在加载...',
      })
      var that = this;
      wx.request({
        url: api.getLianList(),
        data: { type: "selectAll", page: parseInt(currentPage) + 1, limit: 10 },
        success: function (data) {
          var oldList = that.data.res;
          var newList = data.data.list;
          var finalList = oldList.concat(newList);
          that.setData({
            res: finalList,
            totalPage: data.data.page.totalPage,
            currentPage: data.data.page.currentPage,
          });
          setTimeout(function () {
            wx.hideLoading();
          }, 1000);
        }
      })
    } else {
      wx.showToast({
        title: '已经到底了',
        icon: '',
        duration: 1000
      })
    }
  },
  bindPickerChange: function (e) {
    wx.showToast({
      title: '确定了',
      icon: '',
      duration: 1000
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
    
    
  },
  wangqi:function(e){
    var userOpen = wx.getStorageSync("userOpen");
    var openid = userOpen.openid;
    var lessionid=e.currentTarget.dataset.lessionid;
    var levelid = e.currentTarget.dataset.levelid;
    var url = "https://wrlinkeradmin.applinzi.com/thinkphp/index.php/Home/MiniProgram/dealMathJax/lessionid/"+lessionid +"/openid/" + openid + "/levelid/" + levelid;
    wx.navigateTo({
       url: '/pages/newdati/index?url=' + url, 
    });
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      wx.showLoading({
          title: '正在加载211...',
      })
      this.setData({
          zongkemu: [],
          shuxue: [],
          hanyu: [],
          yingyu: [],
          wuli: [],
          huaxue: [],
          shengwu: [],
          zhengzhi: [],
          lishi: [],
          dili: [],
          newshuxue: [],
          newhanyu: [],
          newyingyu: [],
          newwuli: [],
          newhuaxue: [],
          newshengwu: [],
          newzhengzhi: [],
          newlishi: [],
          newdili: [],
          newshuxue1:[],
          newshuxue2: [],
          newshuxue3: [],
          newshuxue4: [],
          newhanyu1: [],
          newhanyu2: [],
          newhanyu3: [],
          newhanyu4: [],
          newyingyu1: [],
          newyingyu2: [],
          newwuli1: [],
          newwuli2: [],
          newwuli3: [],
          newhuaxue1: [],
          newhuaxue2: [],
          newhuaxue3: [],
          newshengwu1: [],
          newshengwu2: [],
          newshengwu3: [],
          newzhengzhi1: [],
          newzhengzhi2: [],
          newzhengzhi3: [],
          newzhengzhi4: [],
          newlishi1: [],
          newlishi2: [],
          newlishi3: [],
          newdili1: [],
          newdili2: [],
          newdili3: [],
      });

      var that = this;
      var userOpen = wx.getStorageSync("userOpen");
      wx.request({
          url: api.getLianList(),
          data: { openid: userOpen.openid },
          success: function (data) {
              var arr = data.data;
              for (var i = 0; i < arr.length; i++) {
                  var oddmath = arr[i].math;
                  var newmath = (oddmath * 100.00).toFixed(2) + "%";
                  arr[i].math = newmath;
                  if (arr[i].lessionname == "数学") {
                      var kemu = new Array();
                      var kemu = arr[i];
                      that.setData({
                          'shuxue': that.data.shuxue.concat(kemu),
                      });
                  } else if (arr[i].lessionname == "汉语") {
                      var kemu = new Array();
                      var kemu = arr[i];
                      that.setData({
                          'hanyu': that.data.hanyu.concat(kemu),
                      });
                  } else if (arr[i].lessionname == "英语") {
                      var kemu = new Array();
                      var kemu = arr[i];
                      that.setData({
                          'yingyu': that.data.yingyu.concat(kemu),
                      });
                  } else if (arr[i].lessionname == "物理") {
                      var kemu = new Array();
                      var kemu = arr[i];
                      that.setData({
                          'wuli': that.data.wuli.concat(kemu),
                      });
                  } else if (arr[i].lessionname == "化学") {
                      var kemu = new Array();
                      var kemu = arr[i];
                      that.setData({
                          'huaxue': that.data.huaxue.concat(kemu),
                      });
                  } else if (arr[i].lessionname == "生物") {
                      var kemu = new Array();
                      var kemu = arr[i];
                      that.setData({
                          'shengwu': that.data.shengwu.concat(kemu),
                      });
                  } else if (arr[i].lessionname == "政治") {
                      var kemu = new Array();
                      var kemu = arr[i];
                      that.setData({
                          'zhengzhi': that.data.zhengzhi.concat(kemu),
                      });
                  } else if (arr[i].lessionname == "历史") {
                      var kemu = new Array();
                      var kemu = arr[i];
                      that.setData({
                          'lishi': that.data.lishi.concat(kemu),
                      });
                  } else if (arr[i].lessionname == "地理") {
                      var kemu = new Array();
                      var kemu = arr[i];
                      that.setData({
                          'dili': that.data.dili.concat(kemu),
                      });

                  }
              }
              var shuxue = that.data.shuxue;
              for(var i=0; i<shuxue.length; i++){
                if(shuxue[i].nianji=="小学"){
                  var nandus=new Array();
                  nandus=shuxue[i].levelname;
                  that.setData({
                    'newshuxue1': that.data.newshuxue1.concat(nandus),
                  });
                }
                if (shuxue[i].nianji == "初中") {
                  var nandus1 = new Array();
                  nandus1 = shuxue[i].levelname;
                  that.setData({
                    'newshuxue2': that.data.newshuxue2.concat(nandus1),
                  });
                }
                if (shuxue[i].nianji == "高中") {
                  var nandus2 = new Array();
                  nandus2 = shuxue[i].levelname;
                  that.setData({
                    'newshuxue3': that.data.newshuxue3.concat(nandus2),
                  });
                }
                if (shuxue[i].nianji == "考研") {
                  var nandus3 = new Array();
                  nandus3 = shuxue[i].levelname;
                  that.setData({
                    'newshuxue4': that.data.newshuxue4.concat(nandus3),
                  });
                }
                
              } 
              
              var shuxiaoxue = that.data.newshuxue1.length;
              var shuchuzhong = that.data.newshuxue2.length;
              var shugaozhong = that.data.newshuxue3.length;
              var shukaoyan = that.data.newshuxue4.length;
              var shuxiaonan = that.data.nandu[shuxiaoxue - 1]
              var shuxiaonan1 = that.data.nandu[shuchuzhong - 1]
              var shuxiaonan2 = that.data.nandu[shugaozhong - 1]
              var shuxiaonan3 = that.data.nandu[shukaoyan - 1]
              for(var i=0; i<arr.length;i++){
                if (arr[i].lessionname == "数学" && arr[i].levelname==shuxiaonan && arr[i].nianji=="小学") {
                  var newkemu1 = new Array();
                  var newkemu1 = arr[i];
                  that.setData({
                    'newshuxue': that.data.newshuxue.concat(newkemu1),
                  });
                } else if (arr[i].lessionname == "数学" && arr[i].levelname == shuxiaonan1 && arr[i].nianji == "初中") {
                  var newkemu2 = new Array();
                  var newkemu2 = arr[i];
                  that.setData({
                    'newshuxue': that.data.newshuxue.concat(newkemu2),
                  });
                } else if (arr[i].lessionname == "数学" && arr[i].levelname == shuxiaonan2 && arr[i].nianji == "高中") {
                  var newkemu3 = new Array();
                  var newkemu3 = arr[i];
                  that.setData({
                    'newshuxue': that.data.newshuxue.concat(newkemu3),
                  });
                }else if (arr[i].lessionname == "数学" && arr[i].levelname == shuxiaonan3 && arr[i].nianji == "考研") {
                  var newkemu4 = new Array();
                  var newkemu4 = arr[i];
                  that.setData({
                    'newshuxue': that.data.newshuxue.concat(newkemu4),
                  });
                }
              }
              var newshuxues = that.data.newshuxue;
              var hanyu = that.data.hanyu;
              for (var i = 0; i < hanyu.length; i++) {
                if (hanyu[i].nianji == "基础语文") {
                  var nanduh = new Array();
                  nanduh = hanyu[i].levelname;
                  that.setData({
                    'newhanyu1': that.data.newhanyu1.concat(nanduh),
                  });
                }
                if (hanyu[i].nianji == "唐诗宋词") {
                  var nanduh1 = new Array();
                  nanduh1 = hanyu[i].levelname;
                  that.setData({
                    'newhanyu2': that.data.newhanyu2.concat(nanduh1),
                  });
                }
                if (hanyu[i].nianji == "汉语听力") {
                  var nanduh2 = new Array();
                  nanduh2 = hanyu[i].levelname;
                  that.setData({
                    'newhanyu3': that.data.newhanyu3.concat(nanduh2),
                  });
                }
                if (hanyu[i].nianji == "字词及成语练习") {
                  var nanduh3 = new Array();
                  nanduh3 = hanyu[i].levelname;
                  that.setData({
                    'newhanyu4': that.data.newhanyu4.concat(nanduh3),
                  });
                }

              }
              var hanjichu = that.data.newhanyu1.length;
              var hanshici = that.data.newhanyu2.length;
              var hantingli = that.data.newhanyu3.length;
              var hanzici = that.data.newhanyu4.length;
              var hanxiaonan = that.data.nandu[hanjichu - 1]
              var hanxiaonan1 = that.data.nandu[hanshici - 1]
              var hanxiaonan2 = that.data.nandu[hantingli - 1]
              var hanxiaonan3 = that.data.nandu[hanzici - 1]
              for (var i = 0; i < arr.length; i++) {
                if (arr[i].lessionname == "汉语" && arr[i].levelname == hanxiaonan && arr[i].nianji == "基础语文") {
                  var newkemu1 = new Array();
                  var newkemu1 = arr[i];
                  that.setData({
                    'newhanyu': that.data.newhanyu.concat(newkemu1),
                  });
                } else if (arr[i].lessionname == "汉语" && arr[i].levelname == hanxiaonan1 && arr[i].nianji == "唐诗宋词") {
                  var newkemu2 = new Array();
                  var newkemu2 = arr[i];
                  that.setData({
                    'newhanyu': that.data.newhanyu.concat(newkemu2),
                  });
                } else if (arr[i].lessionname == "汉语" && arr[i].levelname == hanxiaonan2 && arr[i].nianji == "汉语听力") {
                  var newkemu3 = new Array();
                  var newkemu3 = arr[i];
                  that.setData({
                    'newhanyu': that.data.newhanyu.concat(newkemu3),
                  });
                } else if (arr[i].lessionname == "汉语" && arr[i].levelname == hanxiaonan3 && arr[i].nianji == "字词及成语练习") {
                  var newkemu4 = new Array();
                  var newkemu4 = arr[i];
                  that.setData({
                    'newhanyu': that.data.newhanyu.concat(newkemu4),
                  });
                }
              }
              var newhanyus = that.data.newhanyu; 
              var yingyu = that.data.yingyu;
              for (var i = 0; i < yingyu.length; i++) {
                if (yingyu[i].nianji == "词汇与基础语法") {
                  var nanduy = new Array();
                  nanduy = yingyu[i].levelname;
                  that.setData({
                    'newyingyu1': that.data.newyingyu1.concat(nanduy),
                  });
                }
                if (yingyu[i].nianji == "英语听力") {
                  var nanduy1 = new Array();
                  nanduy1 = yingyu[i].levelname;
                  that.setData({
                    'newyingyu2': that.data.newyingyu2.concat(nanduy1),
                  });
                }

              }
              var yingcihui = that.data.newyingyu1.length;
              var yingtingli = that.data.newyingyu2.length;
              var yingxiaonan = that.data.nandu[yingcihui - 1]
              var yingxiaonan1 = that.data.nandu[yingtingli - 1]
              for (var i = 0; i < arr.length; i++) {
                if (arr[i].lessionname == "英语" && arr[i].levelname ==yingxiaonan && arr[i].nianji == "词汇与基础语法") {
                  var newkemu1 = new Array();
                  var newkemu1 = arr[i];
                  that.setData({
                    'newyingyu': that.data.newyingyu.concat(newkemu1),
                  });
                }else if (arr[i].lessionname == "英语" && arr[i].levelname == yingxiaonan1 && arr[i].nianji == "英语听力") {
                  var newkemu4 = new Array();
                  var newkemu4 = arr[i];
                  that.setData({
                    'newyingyu': that.data.newyingyu.concat(newkemu4),
                  });
                }
              }
              var newyingyus = that.data.newyingyu; 
              var wuli = that.data.wuli;
              for (var i = 0; i < wuli.length; i++) {
                if (wuli[i].nianji == "小学") {
                  var nanduw = new Array();
                  nanduw = wuli[i].levelname;
                  that.setData({
                    'newwuli1': that.data.newwuli1.concat(nanduw),
                  });
                }
                if (wuli[i].nianji == "初中") {
                  var nanduw1 = new Array();
                  nanduw1 = wuli[i].levelname;
                  that.setData({
                    'newwuli2': that.data.newwuli2.concat(nanduw1),
                  });
                }
                if (wuli[i].nianji == "高中") {
                  var nanduw2 = new Array();
                  nanduw2 = wuli[i].levelname;
                  that.setData({
                    'newwuli3': that.data.newwuli3.concat(nanduw2),
                  });
                }
              }

              var wuxiaoxue = that.data.newwuli1.length;
              var wuchuzhong = that.data.newwuli2.length;
              var wugaozhong = that.data.newwuli3.length;
              var wuxiaonan = that.data.nandu[wuxiaoxue - 1]
              var wuxiaonan1 = that.data.nandu[wuchuzhong - 1]
              var wuxiaonan2 = that.data.nandu[wugaozhong - 1]
              for (var i = 0; i < arr.length; i++) {
                if (arr[i].lessionname == "物理" && arr[i].levelname == wuxiaonan && arr[i].nianji == "小学") {
                  var newkemu1 = new Array();
                  var newkemu1 = arr[i];
                  that.setData({
                    'newwuli': that.data.newwuli.concat(newkemu1),
                  });
                } else if (arr[i].lessionname == "物理" && arr[i].levelname == wuxiaonan1 && arr[i].nianji == "初中") {
                  var newkemu2 = new Array();
                  var newkemu2 = arr[i];
                  that.setData({
                    'newwuli': that.data.newwuli.concat(newkemu2),
                  });
                } else if (arr[i].lessionname == "物理" && arr[i].levelname == wuxiaonan2 && arr[i].nianji == "高中") {
                  var newkemu3 = new Array();
                  var newkemu3 = arr[i];
                  that.setData({
                    'newwuli': that.data.newwuli.concat(newkemu3),
                  });
                }
              }
              var newwulis = that.data.newwuli;
              var huaxue = that.data.huaxue;
              for (var i = 0; i < huaxue.length; i++) {
                if (huaxue[i].nianji == "小学") {
                  var nandua = new Array();
                  nandua = huaxue[i].levelname;
                  that.setData({
                    'newhuaxue1': that.data.newhuaxue1.concat(nandua),
                  });
                }
                if (huaxue[i].nianji == "初中") {
                  var nandua1 = new Array();
                  nandua1 = huaxue[i].levelname;
                  that.setData({
                    'newhuaxue2': that.data.newhuaxue2.concat(nandua1),
                  });
                }
                if (huaxue[i].nianji == "高中") {
                  var nandua2 = new Array();
                  nandua2 = huaxue[i].levelname;
                  that.setData({
                    'newhuaxue3': that.data.newhuaxue3.concat(nandua2),
                  });
                }
              }
              var huaxiaoxue = that.data.newhuaxue1.length;
              var huachuzhong = that.data.newhuaxue2.length;
              var huagaozhong = that.data.newhuaxue3.length;
              var huaxiaonan = that.data.nandu[huaxiaoxue - 1]
              var huaxiaonan1 = that.data.nandu[huachuzhong - 1]
              var huaxiaonan2 = that.data.nandu[huagaozhong - 1]
              for (var i = 0; i < arr.length; i++) {
                if (arr[i].lessionname == "化学" && arr[i].levelname == huaxiaonan && arr[i].nianji == "小学") {
                  var newkemu1 = new Array();
                  var newkemu1 = arr[i];
                  that.setData({
                    'newhuaxue': that.data.newhuaxue.concat(newkemu1),
                  });
                } else if (arr[i].lessionname == "化学" && arr[i].levelname == huaxiaonan1 && arr[i].nianji == "初中") {
                  var newkemu2 = new Array();
                  var newkemu2 = arr[i];
                  that.setData({
                    'newhuaxue': that.data.newhuaxue.concat(newkemu2),
                  });
                } else if (arr[i].lessionname == "化学" && arr[i].levelname == huaxiaonan2 && arr[i].nianji == "高中") {
                  var newkemu3 = new Array();
                  var newkemu3 = arr[i];
                  that.setData({
                    'newhuaxue': that.data.newhuaxue.concat(newkemu3),
                  });
                }
              }
              var newhuaxues = that.data.newhuaxue;
              var zhengzhi = that.data.zhengzhi;
              for (var i = 0; i < zhengzhi.length; i++) {
                if (zhengzhi[i].nianji == "小学") {
                  var nanduz = new Array();
                  nanduz = zhengzhi[i].levelname;
                  that.setData({
                    'newzhengzhi1': that.data.newzhengzhi1.concat(nanduz),
                  });
                }
                if (zhengzhi[i].nianji == "初中") {
                  var nanduz1 = new Array();
                  nanduz1 = zhengzhi[i].levelname;
                  that.setData({
                    'newzhengzhi2': that.data.newzhengzhi2.concat(nanduz1),
                  });
                }
                if (zhengzhi[i].nianji == "高中") {
                  var nanduz2 = new Array();
                  nanduz2 = zhengzhi[i].levelname;
                  that.setData({
                    'newzhengzhi3': that.data.newzhengzhi3.concat(nanduz2),
                  });
                }
                if (zhengzhi[i].nianji == "考研") {
                  var nanduz3 = new Array();
                  nanduz3 = zhengzhi[i].levelname;
                  that.setData({
                    'newzhengzhi4': that.data.newzhengzhi4.concat(nanduz3),
                  });
                }

              }
              var zhengxiaoxue = that.data.newzhengzhi1.length;
              var zhengchuzhong = that.data.newzhengzhi2.length;
              var zhenggaozhong = that.data.newzhengzhi3.length;
              var zhengkaoyan = that.data.newzhengzhi4.length;
              var zhengxiaonan = that.data.nandu[zhengxiaoxue - 1]
              var zhengxiaonan1 = that.data.nandu[zhengchuzhong - 1]
              var zhengxiaonan2 = that.data.nandu[zhenggaozhong - 1]
              var zhengxiaonan3 = that.data.nandu[zhengkaoyan - 1]
              for (var i = 0; i < arr.length; i++) {
                if (arr[i].lessionname == "政治" && arr[i].levelname == zhengxiaonan && arr[i].nianji == "小学") {
                  var newkemu1 = new Array();
                  var newkemu1 = arr[i];
                  that.setData({
                    'newzhengzhi': that.data.newzhengzhi.concat(newkemu1),
                  });
                } else if (arr[i].lessionname == "政治" && arr[i].levelname == zhengxiaonan1 && arr[i].nianji == "初中") {
                  var newkemu2 = new Array();
                  var newkemu2 = arr[i];
                  that.setData({
                    'newzhengzhi': that.data.newzhengzhi.concat(newkemu2),
                  });
                } else if (arr[i].lessionname == "政治" && arr[i].levelname == zhengxiaonan2 && arr[i].nianji == "高中") {
                  var newkemu3 = new Array();
                  var newkemu3 = arr[i];
                  that.setData({
                    'newzhengzhi': that.data.newzhengzhi.concat(newkemu3),
                  });
                } else if (arr[i].lessionname == "政治" && arr[i].levelname == zhengxiaonan3 && arr[i].nianji == "考研") {
                  var newkemu4 = new Array();
                  var newkemu4 = arr[i];
                  that.setData({
                    'newzhengzhi': that.data.newzhengzhi.concat(newkemu4),
                  });
                }
              }
              var newzhengzhis = that.data.newzhengzhi; 
              var shengwu = that.data.shengwu;
              for (var i = 0; i < shengwu.length; i++) {
                if (shengwu[i].nianji == "小学") {
                  var nandun = new Array();
                  nandun = shengwu[i].levelname;
                  that.setData({
                    'newshengwu1': that.data.newshengwu1.concat(nandun),
                  });
                }
                if (shengwu[i].nianji == "初中") {
                  var nandun1 = new Array();
                  nandun1 = shengwu[i].levelname;
                  that.setData({
                    'newshengwu2': that.data.newshengwu2.concat(nandun1),
                  });
                }
                if (shengwu[i].nianji == "高中") {
                  var nandun2 = new Array();
                  nandun2 = shengwu[i].levelname;
                  that.setData({
                    'newshengwu3': that.data.newshengwu3.concat(nandun2),
                  });
                }
              }
              var shengxiaoxue = that.data.newshengwu1.length;
              var shengchuzhong = that.data.newshengwu2.length;
              var shenggaozhong = that.data.newshengwu3.length;
              var shengxiaonan = that.data.nandu[shengxiaoxue - 1]
              var shengxiaonan1 = that.data.nandu[shengchuzhong - 1]
              var shengxiaonan2 = that.data.nandu[shenggaozhong - 1]
              for (var i = 0; i < arr.length; i++) {
                if (arr[i].lessionname == "生物" && arr[i].levelname == shengxiaonan && arr[i].nianji == "小学") {
                  var newkemu1 = new Array();
                  var newkemu1 = arr[i];
                  that.setData({
                    'newshengwu': that.data.newshengwu.concat(newkemu1),
                  });
                } else if (arr[i].lessionname == "生物" && arr[i].levelname == shengxiaonan1 && arr[i].nianji == "初中") {
                  var newkemu2 = new Array();
                  var newkemu2 = arr[i];
                  that.setData({
                    'newshengwu': that.data.newshengwu.concat(newkemu2),
                  });
                } else if (arr[i].lessionname == "生物" && arr[i].levelname == shengxiaonan2 && arr[i].nianji == "高中") {
                  var newkemu3 = new Array();
                  var newkemu3 = arr[i];
                  that.setData({
                    'newshengwu': that.data.newshengwu.concat(newkemu3),
                  });
                }
              }
              var newshengwus = that.data.newshengwu;
              var lishi = that.data.lishi;
              for (var i = 0; i < lishi.length; i++) {
                if (lishi[i].nianji == "小学") {
                  var nandul = new Array();
                  nandul = lishi[i].levelname;
                  that.setData({
                    'newlishi1': that.data.newlishi1.concat(nandul),
                  });
                }
                if (lishi[i].nianji == "初中") {
                  var nandul1 = new Array();
                  nandul1 = lishi[i].levelname;
                  that.setData({
                    'newlishi2': that.data.newlishi2.concat(nandul1),
                  });
                }
                if (lishi[i].nianji == "高中") {
                  var nandul2 = new Array();
                  nandul2 = lishi[i].levelname;
                  that.setData({
                    'newlishi3': that.data.newlishi3.concat(nandul2),
                  });
                }
              }
              var lixiaoxue = that.data.newlishi1.length;
              var lichuzhong = that.data.newlishi2.length;
              var ligaozhong = that.data.newlishi3.length;
              var lixiaonan = that.data.nandu[lixiaoxue - 1]
              var lixiaonan1 = that.data.nandu[lichuzhong - 1]
              var lixiaonan2 = that.data.nandu[ligaozhong - 1]
              for (var i = 0; i < arr.length; i++) {
                if (arr[i].lessionname == "历史" && arr[i].levelname == lixiaonan && arr[i].nianji == "小学") {
                  var newkemu1 = new Array();
                  var newkemu1 = arr[i];
                  that.setData({
                    'newlishi': that.data.newlishi.concat(newkemu1),
                  });
                } else if (arr[i].lessionname == "历史" && arr[i].levelname == lixiaonan1 && arr[i].nianji == "初中") {
                  var newkemu2 = new Array();
                  var newkemu2 = arr[i];
                  that.setData({
                    'newlishi': that.data.newlishi.concat(newkemu2),
                  });
                } else if (arr[i].lessionname == "历史" && arr[i].levelname == lixiaonan2 && arr[i].nianji == "高中") {
                  var newkemu3 = new Array();
                  var newkemu3 = arr[i];
                  that.setData({
                    'newlishi': that.data.newlishi.concat(newkemu3),
                  });
                }
              }
              var newlishis = that.data.newlishi;
              var dili = that.data.dili;
              for (var i = 0; i < dili.length; i++) {
                if (dili[i].nianji == "小学") {
                  var nandud = new Array();
                  nandud = dili[i].levelname;
                  that.setData({
                    'newdili1': that.data.newdili1.concat(nandud),
                  });
                }
                if (dili[i].nianji == "初中") {
                  var nandud1 = new Array();
                  nandud1 = dili[i].levelname;
                  that.setData({
                    'newdili2': that.data.newdili2.concat(nandud1),
                  });
                }
                if (dili[i].nianji == "高中") {
                  var nandud2 = new Array();
                  nandud2 = dili[i].levelname;
                  that.setData({
                    'newdili3': that.data.newdili3.concat(nandud2),
                  });
                }
              }
              var dixiaoxue = that.data.newdili1.length;
              var dichuzhong = that.data.newdili2.length;
              var digaozhong = that.data.newdili3.length;
              var dixiaonan = that.data.nandu[dixiaoxue - 1]
              var dixiaonan1 = that.data.nandu[dichuzhong - 1]
              var dixiaonan2 = that.data.nandu[digaozhong - 1]
              for (var i = 0; i < arr.length; i++) {
                if (arr[i].lessionname == "地理" && arr[i].levelname == dixiaonan && arr[i].nianji == "小学") {
                  var newkemu1 = new Array();
                  var newkemu1 = arr[i];
                  that.setData({
                    'newdili': that.data.newdili.concat(newkemu1),
                  });
                } else if (arr[i].lessionname == "地理" && arr[i].levelname == dixiaonan1 && arr[i].nianji == "初中") {
                  var newkemu2 = new Array();
                  var newkemu2 = arr[i];
                  that.setData({
                    'newdili': that.data.newdili.concat(newkemu2),
                  });
                } else if (arr[i].lessionname == "地理" && arr[i].levelname == dixiaonan2 && arr[i].nianji == "高中") {
                  var newkemu3 = new Array();
                  var newkemu3 = arr[i];
                  that.setData({
                    'newdili': that.data.newdili.concat(newkemu3),
                  });
                }
              }
              var newdilis = that.data.newdili;
              that.setData({
                  'zongkemu': that.data.zongkemu.concat(newhanyus),
              });
              that.setData({
                  'zongkemu': that.data.zongkemu.concat(newshuxues),
              });
              that.setData({
                  'zongkemu': that.data.zongkemu.concat(newyingyus),
              });
              that.setData({
                  'zongkemu': that.data.zongkemu.concat(newwulis),
              });
              that.setData({
                  'zongkemu': that.data.zongkemu.concat(newhuaxues),
              });
              that.setData({
                  'zongkemu': that.data.zongkemu.concat(newshengwus),
              });
              that.setData({
                  'zongkemu': that.data.zongkemu.concat(newzhengzhis),
              });
              that.setData({
                  'zongkemu': that.data.zongkemu.concat(newlishis),
              });
              that.setData({
                  'zongkemu': that.data.zongkemu.concat(newdilis),
              });
              var arr = that.data.zongkemu;
              console.log(arr);
              that.setData({
                  res: arr,
              });
              wx.hideLoading();
          }
      });

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})