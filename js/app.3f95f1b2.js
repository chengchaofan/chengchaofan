(function(){"use strict";var t={2731:function(t,e,s){var a=s(6369),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:["updateInfo","login","detail"]}},[e("router-view")],1)],1)},n=[],o={components:{},created(){this.$store.commit("aboutPerson/per_info",JSON.parse(localStorage.getItem("personInfo")))}},r=o,l=s(1001),c=(0,l.Z)(r,i,n,!1,null,null,null),d=c.exports,h=s(2631),p=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"fixTop"},[e("header",[e("div",{staticClass:"search",on:{click:t.toSearch}},[e("van-icon",{attrs:{name:"search",color:"#fff"}}),e("input",{attrs:{type:"text",value:"搜索"}})],1)]),e("div",{staticClass:"nav"},[e("van-tabs",{attrs:{"line-width":"18px","line-height":"4px","title-active-color":"#333"},on:{click:t.getId}},t._l(t.navList,(function(t){return e("van-tab",{key:t._id,attrs:{title:t.name}})})),1)],1)]),e("List"),e("Footer")],1)},m=[],u=(s(2986),s(2628)),v=(s(319),s(3481)),f=(s(446),s(8186)),_=(s(2763),s(5094)),g=(s(7658),s(70)),b=function(){var t=this,e=t._self._c;return e("div",[e("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了",offset:"50"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[e("ul",{staticClass:"list commonList"},t._l(t.listData,(function(s){return e("li",{key:s._id,on:{click:function(e){return t.toDetail(s)}}},[e("div",{staticClass:"list_top"},[e("p",[t._v(t._s(s.title))]),e("div",{directives:[{name:"show",rawName:"v-show",value:s.imageSrc.length,expression:"item.imageSrc.length"}]},t._l(s.imageSrc,(function(t,s){return e("img",{key:s,attrs:{src:t}})})),0)]),e("div",{staticClass:"list_bottom"},[e("span",[t._v("作者"),e("br"),t._v(" "+t._s(s.author))]),e("span",[t._v(t._s(s.comment)+" 评论")]),e("span",[t._v("发布日期："+t._s(new Date(s.time).toLocaleDateString())+" "+t._s(new Date(s.time).toLocaleTimeString()))])])])})),0)])],1)],1)},k=[],w=(s(6791),s(4269)),y=(s(6735),s(4319)),Z={components:{[y.Z.name]:y.Z,[w.Z.name]:w.Z},data(){return{listData:[],loading:!1,finished:!1,refreshing:!1,skip:0,limit:10,cate_Id:""}},methods:{onLoad(){(0,g.Z)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_article_list",data:{cate_id:this.cate_Id?this.cate_Id:"609e99e0f2e56f000175151f",skip:this.skip,limit:this.limit}}).then((t=>{this.listData=t.data.data,this.loading=!1,this.refreshing=!1,this.skip++,this.limit+=10,this.limit>50&&(this.finished=!0)}))},onRefresh(t){this.finished=!1,this.loading=!0,this.skip=0,this.limit=10,this.cate_Id=t?JSON.parse(JSON.stringify(t)):this.cate_Id,this.onLoad(this.cate_Id)}},mounted(){this.$bus.$on("cateId",this.onRefresh)}},x=Z,S=(0,l.Z)(x,b,k,!1,null,"28780fe0",null),P=S.exports,C={components:{List:P,[_.Z.name]:_.Z,[f.Z.name]:f.Z,[v.Z.name]:v.Z,[u.Z.name]:u.Z},data(){return{navList:[],active:0}},methods:{getId(t){this.$bus.$emit("cateId",this.navList[t]._id)},toSearch(){this.$router.push("/Search")}},mounted(){(0,g.Z)({method:"get",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_cate_list"}).then((t=>{this.navList=t.data.data}))}},L=C,N=(0,l.Z)(L,p,m,!1,null,"5be544f3",null),I=N.exports,$=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.person_info,expression:"person_info"}]},[e("header",{style:{background:t.mainColor}},[t._v(" 发布 ")]),e("van-cell-group",[e("van-field",{ref:"ipt",attrs:{placeholder:"请输入标题"},model:{value:t.value,callback:function(e){t.value="string"===typeof e?e.trim():e},expression:"value"}})],1),e("div",{staticClass:"popo"},[e("van-popover",{attrs:{trigger:"click",actions:t.actions},on:{select:t.onSelect},scopedSlots:t._u([{key:"reference",fn:function(){return[e("van-button",{attrs:{type:"primary"}},[t._v(t._s(t.title?t.title:"请选择你要发布的地方"))])]},proxy:!0}]),model:{value:t.showPopover,callback:function(e){t.showPopover=e},expression:"showPopover"}})],1),e("van-field",{attrs:{rows:"4",autosize:"",type:"textarea",placeholder:"请输入内容"},model:{value:t.message,callback:function(e){t.message="string"===typeof e?e.trim():e},expression:"message"}}),e("van-uploader",{attrs:{"max-count":1},model:{value:t.uploader,callback:function(e){t.uploader=e},expression:"uploader"}}),e("div",{staticClass:"btn"},[e("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.sendInfo}},[t._v("确定")])],1),e("Footer")],1)},D=[],O=(s(4889),s(5705)),T=(s(1640),s(9354)),F=(s(8),s(5263)),z=(s(1049),s(140)),M=s(691),A=s(3822),j={data(){return{value:"",message:"",uploader:[],title:"",showPopover:!1,actions:[],cate_id:""}},components:{[z.Z.name]:z.Z,[F.Z.name]:F.Z,[T.Z.name]:T.Z},methods:{onSelect(t){this.title=t.text},sendInfo(){this.value?this.message?this.title?((0,g.Z)({method:"get",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_cate_list"}).then((t=>{let e=t.data.data.find((t=>t.name===this.title));this.cate_id=e._id})),(0,g.Z)({method:"get",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/upload/token"}).then((t=>{let e=new FormData;e.append("key",(0,M.x0)()),e.append("token",t.data.token),e.append("file",this.uploader[0].file),(0,g.Z)({method:"post",url:"https://upload-z1.qiniup.com",data:e}).then((t=>{(0,g.Z)({url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/add_article",method:"post",data:{title:this.value,content:this.message,cate_id:this.cate_id,cate_name:this.title,author:this.person_info.username,author_id:this.person_info._id,imageSrc:[`http://toutiao.longxiaokj.com/${t.data.key}`]}}).then((t=>{console.log(t.data),O.Z.alert({message:t.data.msg}),"成功"==t.data.msg&&(this.value="",this.message="",this.title="",this.uploader=[])}))}))}))):O.Z.alert({message:"请选择你要发布的地方!"}):O.Z.alert({message:"请输入你要发布的内容!"}):O.Z.alert({message:"请输入你的标题!"})}},computed:{...(0,A.rn)("aboutPerson",["person_info"])},activated(){this.person_info||O.Z.alert({message:"登录后才可以发布哦"}).then((()=>{this.$router.push({path:"/Login"})})),(0,g.Z)({method:"get",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_cate_list"}).then((t=>{t.data.data.map((t=>{this.actions.push({text:t.name})}))}))}},E=j,R=(0,l.Z)(E,$,D,!1,null,"117b013e",null),q=R.exports,J=function(){var t=this,e=t._self._c;return e("div",[t.person_info?e("div",{staticClass:"person_info"},[e("div",{staticClass:"info_top"},[e("div",{staticClass:"username"},[e("img",{attrs:{src:t.person_info.avatar,alt:""}}),e("p",[t._v(t._s(t.person_info.nickname))])]),e("div",{staticClass:"update_info"},[e("span",{on:{click:t.updatePersonInfo}},[t._v("编辑资料")])])]),e("div",{staticClass:"info_bottom"},[e("div",{on:{click:function(e){return t.toMyPub("发布")}}},[e("p",[t._v(t._s(t.myPub.length))]),e("p",[t._v("头条")])]),t._m(0)])]):t._e(),t.person_info?t._e():e("div",{staticClass:"noLogin"},[e("h2",[t._v("登录后更懂你")]),e("van-button",{staticStyle:{"border-radius":"5px"},attrs:{type:"danger"},on:{click:t.toLogin}},[t._v("立即登录")])],1),e("van-grid",{attrs:{clickable:"","column-num":2}},[e("van-grid-item",{attrs:{icon:"star-o",text:"收藏"},on:{click:function(e){return t.toMyPub("收藏")}}}),e("van-grid-item",{attrs:{icon:"underway-o",text:"历史"},on:{click:function(e){return t.toMyPub("历史")}}})],1),e("div",{staticClass:"operate"},[e("van-cell",{attrs:{title:"修改密码","is-link":""},on:{click:t.showTrue}}),e("van-cell",{attrs:{title:"联系我们","is-link":""},on:{click:t.callMe}}),e("van-cell",{attrs:{title:"关于我们","is-link":""},on:{click:t.aboutMe}})],1),e("van-button",{attrs:{block:""},on:{click:t.logOut}},[t._v("退出登录")]),e("Footer"),e("van-popup",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("van-field",{attrs:{placeholder:"请输入你的旧密码"},model:{value:t.oldPas,callback:function(e){t.oldPas=e},expression:"oldPas"}}),e("van-field",{attrs:{placeholder:"请输入你的新密码"},model:{value:t.newPas,callback:function(e){t.newPas=e},expression:"newPas"}}),e("div",{staticClass:"btns"},[e("van-button",{attrs:{type:"default",size:"small"},on:{click:t.noShow}},[t._v("取消")]),e("van-button",{attrs:{type:"primary",size:"small"},on:{click:t.changePas}},[t._v("确认")])],1)],1)],1)},U=[function(){var t=this,e=t._self._c;return e("div",[e("p",[t._v("0")]),e("p",[t._v("获赞")])])}],H=(s(8146),s(8848)),B=(s(4439),s(3462)),G=(s(6562),s(4159)),K=(s(4825),s(7165)),Q={components:{[K.Z.name]:K.Z,[G.Z.name]:G.Z,[B.Z.name]:B.Z},data(){return{show:!1,oldPas:"",newPas:"",myPub:[]}},methods:{toLogin(){this.$router.push("/Login")},updatePersonInfo(){this.$router.push("/updateInfo")},logOut(){this.person_info?O.Z.confirm({message:"确认退出登录吗?"}).then((()=>{setTimeout((()=>{this.$store.commit("aboutPerson/per_info",null),localStorage.removeItem("personInfo"),H.Z.success("退出登录成功")}),200)})).catch((()=>{})):H.Z.fail("您还未登录哦")},showTrue(){this.person_info?this.show=!0:H.Z.fail("您还未登录哦")},callMe(){O.Z.alert({title:"联系方式",message:"手机号：18539839614<br>邮箱：chengchaofan0329@foxmail.com<br>微信：cf831143",messageAlign:"left"}).then((()=>{}))},aboutMe(){O.Z.alert({title:"关于我们"})},noShow(){this.show=!1,this.oldPas="",this.newPas=""},changePas(){this.oldPas?this.newPas?(0,g.Z)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/user/updatePwd",data:{oldPassword:this.oldPas,newPassword:this.newPas,uid:this.person_info._id}}).then((t=>{console.log(t.data),t.data.code?H.Z.fail(`${t.data.msg}`):(H.Z.success(`${t.data.msg}请重新登录`),this.$store.commit("aboutPerson/per_info",null),localStorage.removeItem("personInfo"),this.show=!1,this.oldPas="",this.newPas="")})):O.Z.alert({message:"请输入你的新密码!"}):O.Z.alert({message:"请输入你的旧密码!"})},toMyPub(t){this.person_info?this.$router.push({path:"/myPublish",query:{info:t}}):H.Z.fail("您还未登录哦")}},computed:{...(0,A.rn)("aboutPerson",["person_info"])},activated(){this.person_info&&(0,g.Z)({method:"get",url:`https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_user_article_list?uid=${this.person_info._id}&skip&limit`}).then((t=>{this.myPub=t.data.data}))}},V=Q,W=(0,l.Z)(V,J,U,!1,null,"40a53d72",null),X=W.exports,Y=[{path:"/",component:I},{path:"/Publish",component:q},{path:"/Mine",component:X}],tt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"detail"},[e("header",{staticClass:"header",style:{background:t.mainColor}},[e("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.$router.back()}}}),e("p",[t._v("文章详情")])],1),e("div",{staticClass:"w"},[e("h2",{staticClass:"title"},[t._v(t._s(t.item.title))]),e("div",{staticClass:"author"},[e("div",{staticClass:"left"},[e("img",{attrs:{src:t.avatar,alt:""}}),e("p",[t._v(t._s(t.item.author))]),e("br"),e("span",[t._v(t._s(new Date(Number(t.item.time)).toLocaleDateString()))])]),e("div",{staticClass:"right",on:{click:t.attention}},[e("van-button",{attrs:{round:"",type:"default",size:"small"}},[e("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.isAttention,expression:"isAttention"}],attrs:{name:"plus"}}),t._v(" "+t._s(t.isAttention?"已关注":"关注")+" ")],1)],1)]),e("div",{staticClass:"text"},[t._v(" "+t._s(t.text)+" ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.item.imageSrc,expression:"item.imageSrc"}],staticClass:"photo"},t._l(t.item.imageSrc,(function(t,s){return e("img",{key:s,attrs:{src:t}})})),0)]),e("div",{staticClass:"comment"},[e("ul",t._l(t.commentList,(function(s){return e("li",{key:s._id},[e("img",{attrs:{src:s.info.avatar,alt:""}}),e("div",{staticClass:"content"},[e("p",{staticClass:"username"},[t._v(t._s(s.info.nickname))]),e("p",{staticClass:"con",on:{click:function(e){return t.yesShow(s)}}},[t._v(t._s(s.content))]),e("p",{staticClass:"time"},[t._v(t._s(new Date(s.create_time).toLocaleDateString())+" "),e("span",{on:{click:function(e){return t.getReplyList(s)}}},[t._v(t._s(s.reply_num)+" 回复")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.clickItem._id==s._id,expression:"clickItem._id==item._id"}]},[e("van-loading",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],attrs:{size:"24px",type:"spinner"}},[t._v("加载中...")])],1),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.clickItem._id==s._id,expression:"clickItem._id==item._id"}],staticStyle:{width:"120%","margin-left":"-44px"}},t._l(t.replyList,(function(s){return e("li",{key:s._id},[e("img",{attrs:{src:s.info.avatar,alt:""}}),e("div",{staticClass:"content"},[e("p",{staticClass:"username"},[t._v(t._s(s.info.nickname))]),e("p",{staticClass:"con"},[t._v(t._s(s.content))]),e("p",{staticClass:"time"},[t._v(t._s(new Date(s.create_time).toLocaleDateString())+" "),e("span",{on:{click:t.second}},[t._v(t._s(s.reply_num)+" 回复")])])]),e("div",{staticClass:"nice_count"},[e("van-icon",{directives:[{name:"show",rawName:"v-show",value:s.is_like,expression:"item.is_like"}],attrs:{name:"good-job",color:"#ef092c"},on:{click:function(e){return t.commentNice(s)}}}),e("van-icon",{directives:[{name:"show",rawName:"v-show",value:!s.is_like,expression:"!item.is_like"}],attrs:{name:"good-job-o"},on:{click:function(e){return t.commentNice(s)}}}),e("span",[t._v(t._s(s.like_count))])],1)])})),0)]),e("div",{staticClass:"nice_count"},[e("van-icon",{directives:[{name:"show",rawName:"v-show",value:s.is_like,expression:"item.is_like"}],attrs:{name:"good-job",color:"#ef092c"},on:{click:function(e){return t.commentNice(s)}}}),e("van-icon",{directives:[{name:"show",rawName:"v-show",value:!s.is_like,expression:"!item.is_like"}],attrs:{name:"good-job-o"},on:{click:function(e){return t.commentNice(s)}}}),e("span",[t._v(t._s(s.like_count))])],1)])})),0)]),e("van-popup",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("van-field",{ref:"msgIpt",attrs:{placeholder:"请输入你的要回复的内容"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.reviewArticle(t.clickItem,1)}},model:{value:t.msg,callback:function(e){t.msg="string"===typeof e?e.trim():e},expression:"msg"}}),e("div",{staticClass:"btns"},[e("van-button",{attrs:{type:"default",size:"small"},on:{click:t.noShow}},[t._v("取消")]),e("van-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.reviewArticle(t.clickItem,1)}}},[t._v("确认")])],1)],1),e("footer",{staticClass:"footerHandle"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.msg,expression:"msg",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"写评论"},domProps:{value:t.msg},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.reviewArticle(null,0)},input:function(e){e.target.composing||(t.msg=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("van-icon",{attrs:{name:"comment-o"},on:{click:function(e){return t.reviewArticle(null,0)}}}),e("van-icon",{directives:[{name:"show",rawName:"v-show",value:!t.isCollect,expression:"!isCollect"}],attrs:{name:"star-o"},on:{click:t.collect}}),e("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.isCollect,expression:"isCollect"}],attrs:{name:"star",color:"#0078d4"},on:{click:t.collect}}),e("van-icon",{directives:[{name:"show",rawName:"v-show",value:!t.isLike,expression:"!isLike"}],attrs:{name:"like-o"},on:{click:t.like}}),e("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.isLike,expression:"isLike"}],attrs:{name:"like",color:"#ef092c"},on:{click:t.like}}),e("van-icon",{attrs:{name:"share-o"}})],1)],1)},et=[],st=(s(9571),s(4958)),at={props:["item"],name:"detail",data(){return{show:!1,text:"",msg:"",isCollect:!1,isLike:!1,commentList:[],avatar:"",clickItem:"",replyList:[],isShow:!1,isNice:!1,isAttention:!1}},components:{[st.Z.name]:st.Z},computed:{...(0,A.rn)("aboutPerson",["person_info"])},methods:{attention(){this.person_info?(this.isAttention=!this.isAttention,this.isAttention?(0,H.Z)({message:"关注成功",icon:"success",duration:1200}):(0,H.Z)({message:"取消关注成功",icon:"fail",duration:1200})):H.Z.fail("您还未登录哦")},collect(){this.person_info?this.isCollect?(0,g.Z)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/remove_fav",data:{article_id:this.item._id,user_id:this.person_info._id}}).then((t=>{if(console.log(t.data),!t.data.code)return(0,H.Z)({message:t.data.msg,icon:"fail",duration:1200}),void(this.isCollect=!1);(0,H.Z)({message:t.data.msg,icon:"cross",duration:1200})})):(0,g.Z)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/add_fav",data:{article_id:this.item._id,user_id:this.person_info._id}}).then((t=>{if(console.log(t.data),!t.data.code)return(0,H.Z)({message:t.data.msg,icon:"success",duration:1200}),void(this.isCollect=!0);(0,H.Z)({message:t.data.msg,icon:"cross",duration:1200})})):H.Z.fail("您还未登录哦")},like(){this.person_info?this.isLike?(0,g.Z)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/unlike",data:{article_id:this.item._id,user_id:this.person_info._id}}).then((t=>{if(!t.data.code)return(0,H.Z)({message:t.data.msg,icon:"fail",duration:1200}),void(this.isLike=!1);(0,H.Z)({message:t.data.msg,icon:"cross",duration:1200})})):(0,g.Z)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/like",data:{article_id:this.item._id,user_id:this.person_info._id}}).then((t=>{if(!t.data.code)return(0,H.Z)({message:t.data.msg,icon:"success",duration:1200}),void(this.isLike=!0);(0,H.Z)({message:t.data.msg,icon:"cross",duration:1200})})):H.Z.fail("您还未登录哦")},second(){(0,H.Z)({message:"这里的区域以后再来探索吧",icon:"like-o"})},commentNice(t){this.person_info?t.is_like?(0,g.Z)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/comment_unlike",data:{comment_id:t._id,user_id:this.person_info._id}}).then((e=>{if(!e.data.code)return this.comment(),this.getReplyList(t),console.log(1),void(0,H.Z)({message:e.data.msg,icon:"fail",duration:1200});(0,H.Z)({message:e.data.msg,icon:"cross",duration:1200})})):(0,g.Z)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/comment_like",data:{comment_id:t._id,user_id:this.person_info._id}}).then((e=>{if(!e.data.code)return this.getReplyList(t),this.comment(),void(0,H.Z)({message:e.data.msg,icon:"success",duration:1200});(0,H.Z)({message:e.data.msg,icon:"cross",duration:1200})})):H.Z.fail("您还未登录哦")},noShow(){this.show=!1,this.msg=""},yesShow(t){this.clickItem=t,this.show=!0,this.$nextTick((()=>{this.$refs.msgIpt.focus()}))},getReplyList(t){let e;console.log(t),this.isShow=!0,this.clickItem=t,this.person_info&&(e=this.person_info._id),this.replyList=[],(0,g.Z)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_reply_list",data:{user_id:e,reply_comment_id:t._id,article_id:this.item._id}}).then((t=>{this.isShow=!1,this.replyList=t.data.data}))},comment(){let t;this.person_info&&(t=this.person_info._id),(0,g.Z)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_comment_list",data:{article_id:this.item._id,user_id:t}}).then((t=>{this.commentList=t.data.data}))},reviewArticle(t,e){this.person_info?(console.log(this.msg),this.msg?!t||this.msg?(0,g.Z)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/add_comment",data:{user_id:this.person_info._id,article_id:this.item._id,content:this.msg,reply_comment_id:t?t._id:"",comment_type:e}}).then((t=>{if(!this.code)return(0,H.Z)({message:t.data.msg,icon:"success",duration:1200}),this.show=!1,this.msg="",void this.comment();(0,H.Z)({message:t.data.msg,icon:"cross",duration:1200})})):this.$refs.msgIpt.focus():H.Z.fail("请输入内容")):H.Z.fail("您还未登录哦")}},mounted(){let t;this.person_info&&(t=this.person_info._id),(0,g.Z)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_article_detail",data:{article_id:this.item._id,user_id:t}}).then((t=>{t.data.data&&(this.avatar=t.data.data.avatar,this.isCollect=t.data.data.is_fav,this.isLike=t.data.data.is_like,t.data.data&&(this.text=t.data.data.content))})),this.comment()}},it=at,nt=(0,l.Z)(it,tt,et,!1,null,"4eb2f3bf",null),ot=nt.exports,rt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"log"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"enter"},[e("div",{staticClass:"login"},[e("van-cell-group",[e("van-field",{attrs:{"left-icon":"phone-o",clearable:"",placeholder:"请输入手机号"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),e("van-field",{attrs:{type:"password",clearable:"","left-icon":"bag-o",placeholder:"请输入密码"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.pas,callback:function(e){t.pas=e},expression:"pas"}})],1)],1),e("p",{staticClass:"isLog"},[t._v("还没注册吗？先去"),e("span",{on:{click:function(e){t.isShow=!1,t.isForget=!1}}},[t._v(" 注册 ")]),t._v("吧！"),e("span",{on:{click:function(e){t.isForget=!0,t.isShow=!1}}},[t._v("忘记密码")])]),e("div",{staticClass:"btn"},[e("van-button",{attrs:{type:"danger",block:""},on:{click:t.login}},[t._v("登录")])],1)]),e("header",{staticClass:"header",style:{background:"red"}},[e("van-icon",{attrs:{name:"arrow-left"},on:{click:t.isLog}}),e("p",[t._v(t._s(t.isForget?"忘记密码":"注册 / 登录"))])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}],staticClass:"register"},[e("div",{staticClass:"login"},[e("van-cell-group",[e("van-field",{attrs:{"left-icon":"phone-o",clearable:"",placeholder:"请输入手机号"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.register.apply(null,arguments)}},model:{value:t.logPhone,callback:function(e){t.logPhone=e},expression:"logPhone"}}),e("van-field",{attrs:{type:"password",clearable:"","left-icon":"bag-o",placeholder:t.isForget?"请输入新密码 6-12位数字字母下划线":"请输入密码 6-12位数字字母下划线"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.register.apply(null,arguments)}},model:{value:t.logPas,callback:function(e){t.logPas=e},expression:"logPas"}}),e("van-field",{attrs:{center:"",label:"短信验证码",placeholder:"请输入短信验证码"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.register.apply(null,arguments)}},scopedSlots:t._u([{key:"button",fn:function(){return[e("van-button",{attrs:{size:"small",disabled:t.disabled,type:"primary"},on:{click:t.sendSms}},[t._v(" "+t._s(t.disabled?t.timer:"发送验证码")+" ")])]},proxy:!0}]),model:{value:t.sms,callback:function(e){t.sms=e},expression:"sms"}})],1)],1),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.isForget,expression:"!isForget"}],staticClass:"isLog"},[t._v("注册完成了么？去"),e("span",{on:{click:function(e){t.isShow=!0}}},[t._v(" 登录 ")]),t._v("吧！"),e("span",{on:{click:function(e){t.isForget=!0}}},[t._v("忘记密码")])]),e("div",{staticClass:"btn"},[e("van-button",{attrs:{type:"danger",block:""},on:{click:t.register}},[t._v(t._s(t.isForget?"确定":"注册"))])],1)])])},lt=[],ct=(s(9491),s(6450)),dt={name:"login",data(){return{phone:"",pas:"",logPhone:"",logPas:"",sms:"",isShow:!0,disabled:!1,timer:5,isForget:!0}},watch:{isShow(t){t?(this.phone="",this.pas=""):(this.logPhone="",this.logPas="",this.sms="")}},methods:{isLog(){if(this.isForget)return this.isForget=!1,void(this.isShow=!0);this.$router.push("/Mine")},back(){console.log(1)},login(){(0,g.Z)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/user/login",data:{username:this.phone,password:this.pas}}).then((t=>{t.data.code?(t.data.code,O.Z.alert({title:"注意",message:t.data.msg,theme:"round-button"})):((0,ct.Z)({type:"success",message:"登录成功",duration:1500}),this.$router.push({path:"/Mine"}),this.$store.commit("aboutPerson/per_info",t.data.userInfo))}))},sendSms(){this.disabled=!0;let t=setInterval((()=>{this.timer--,this.timer||(this.disabled=!1)}),1e3),e=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;if(this.logPhone)return e.test(this.logPhone)?void(0,g.Z)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/user/sendSms",data:{mobile:this.logPhone,type:this.isForget?"login":"register"}}).then((e=>{e.data.data&&setTimeout((()=>{(0,ct.Z)({type:"success",message:`您的验证码为：${e.data.data}`,duration:4e3}),clearInterval(t),this.disabled=!1}),2e3),O.Z.alert({message:e.data.msg})})):(O.Z.alert({message:"请输入正确的手机号!"}),clearInterval(t),void(this.disabled=!1));O.Z.alert({message:"请输入你的手机号!"})},register(){(0,g.Z)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/user/"+(this.isForget?"forget":"reg"),data:{username:this.logPhone,password:this.logPas,vercode:this.sms}}).then((t=>{t.data.code||setTimeout((()=>{this.isShow=!0}),300),O.Z.alert({message:t.data.msg})}))}},mounted(){this.isShow=!0,this.isForget=!1}},ht=dt,pt=(0,l.Z)(ht,rt,lt,!1,null,"1e07d94a",null),mt=pt.exports,ut=function(){var t=this,e=t._self._c;return e("div",{staticClass:"update"},[e("van-popup",{model:{value:t.nameShow,callback:function(e){t.nameShow=e},expression:"nameShow"}},[e("van-field",{attrs:{placeholder:"请输入你的昵称"},model:{value:t.newName,callback:function(e){t.newName=e},expression:"newName"}}),e("div",{staticClass:"btns"},[e("van-button",{attrs:{type:"default",size:"small"},on:{click:function(e){t.nameShow=!1}}},[t._v("取消")]),e("van-button",{attrs:{type:"primary",size:"small"},on:{click:t.getNewName}},[t._v("确认")])],1)],1),e("van-popup",{model:{value:t.sexShow,callback:function(e){t.sexShow=e},expression:"sexShow"}},[e("van-radio-group",{attrs:{direction:"horizontal"},model:{value:t.newSex,callback:function(e){t.newSex=e},expression:"newSex"}},[e("van-radio",{attrs:{name:"男"}},[t._v("男")]),e("van-radio",{attrs:{name:"女"}},[t._v("女")])],1),e("div",{staticClass:"btns"},[e("van-button",{attrs:{type:"default",size:"small"},on:{click:function(e){t.sexShow=!1}}},[t._v("取消")]),e("van-button",{attrs:{type:"primary",size:"small"},on:{click:t.getNewSex}},[t._v("确认")])],1)],1),e("van-popup",{model:{value:t.timeShow,callback:function(e){t.timeShow=e},expression:"timeShow"}},[e("van-datetime-picker",{attrs:{type:"date",title:"选择年月日","min-date":t.minDate,"max-date":t.maxDate},on:{confirm:t.confirm,cancel:t.cancel},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1),e("header",{staticClass:"header",style:{background:t.mainColor}},[e("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.$router.back()}}}),e("p",[t._v("编辑信息")])],1),e("div",{staticClass:"head"},[e("van-cell",{attrs:{title:"头像",icon:t.photo,"is-link":""}}),e("van-uploader",{attrs:{"max-count":1},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}})],1),e("van-cell",{attrs:{"is-link":""},on:{click:t.changeName},scopedSlots:t._u([{key:"title",fn:function(){return[e("span",[t._v("昵称")]),t._v("   "),e("span",{staticClass:"title"},[t._v(t._s(t.oldName))])]},proxy:!0}])}),e("van-cell",{attrs:{"is-link":""},on:{click:t.changeSex},scopedSlots:t._u([{key:"title",fn:function(){return[e("span",[t._v("性别")]),t._v("   "),e("span",{staticClass:"title"},[t._v(t._s(t.sex?t.sex:"未设置"))])]},proxy:!0}])}),e("van-cell",{attrs:{"is-link":""},on:{click:function(e){t.timeShow=!0}},scopedSlots:t._u([{key:"title",fn:function(){return[e("span",[t._v("生日")]),t._v("   "),e("span",{staticClass:"title"},[t._v(t._s(t.newTime?t.newTime:"未设置"))])]},proxy:!0}])}),e("van-button",{staticStyle:{margin:"20px auto",width:"80%"},attrs:{type:"primary",block:""},on:{click:t.changePerson}},[t._v("确定")])],1)},vt=[],ft=(s(4745),s(955)),_t=(s(7396),s(2979)),gt=(s(1e3),s(6338)),bt={name:"updateInfo",data(){return{fileList:[],nameShow:!1,sexShow:!1,timeShow:!1,photo:"",newPhoto:"",oldName:"",newName:"",newSex:"",sex:"",newTime:"",minDate:new Date(1980,0,1),maxDate:new Date(2022,10,19),currentDate:""}},computed:{...(0,A.rn)("aboutPerson",["person_info"])},methods:{changeName(){this.newName=this.oldName,this.nameShow=!0},getNewName(){this.oldName=this.newName,this.nameShow=!1},changeSex(){this.newSex=this.sex,this.sexShow=!0},getNewSex(){this.sex=this.newSex,this.sexShow=!1},confirm(t){this.newTime=t.toLocaleDateString(),this.timeShow=!1},cancel(){this.currentDate=new Date(this.newTime),this.timeShow=!1},changePerson(){(0,g.Z)({method:"get",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/upload/token"}).then((t=>{console.log(t.data.token);let e=new FormData;e.append("key",(0,M.x0)()),e.append("token",t.data.token),e.append("file",this.fileList[0].file),(0,g.Z)({method:"post",url:"https://upload-z1.qiniup.com",data:e}).then((t=>{let e=`http://toutiao.longxiaokj.com/${t.data.key}`;(0,g.Z)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/user/editUserInfo",data:{uid:this.person_info._id,avatar:e,nickname:this.newName,birthday:this.newTime,sex:this.newSex}}).then((t=>{t.data.code?H.Z.fail(t.data.msg):(this.$store.commit("aboutPerson/changeInfo",["nickname",this.newName]),this.$store.commit("aboutPerson/changeInfo",["avatar",e]),this.$store.commit("aboutPerson/changeInfo",["birthday",this.newTime]),this.$store.commit("aboutPerson/changeInfo",["sex",this.newSex]),H.Z.success(t.data.msg),this.$router.back())}))}))}))}},components:{[F.Z.name]:F.Z,[gt.Z.name]:gt.Z,[_t.Z.name]:_t.Z,[ft.Z.name]:ft.Z},mounted(){this.photo=this.person_info.avatar,this.oldName=this.person_info.nickname,this.newName=this.person_info.nickname,this.sex=this.person_info.sex,this.newSex=this.person_info.sex,this.newTime=this.person_info.birthday,this.currentDate=new Date(this.person_info.birthday)}},kt=bt,wt=(0,l.Z)(kt,ut,vt,!1,null,"d93ec356",null),yt=wt.exports,Zt=function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"header",style:{background:t.mainColor}},[e("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.$router.back()}}}),e("p",[t._v("我的"+t._s(t.info))])],1),e("ul",{staticClass:"list commonList"},t._l(t.myPublishList,(function(s){return e("li",{key:s._id,on:{click:function(e){return t.toDetail(s)}}},[e("div",{staticClass:"list_top"},[e("p",[t._v(t._s(s.title))]),e("div",{directives:[{name:"show",rawName:"v-show",value:s.imageSrc,expression:"item.imageSrc"}]},t._l(s.imageSrc,(function(t,s){return e("img",{key:s,attrs:{src:t}})})),0)]),e("div",{staticClass:"list_bottom"},[e("span",[t._v("作者 "+t._s(s.author))]),e("span",[t._v(t._s(s.comment)+" 评论")]),e("span",[t._v("发布日期："+t._s(new Date(s.time).toLocaleDateString())+" "+t._s(new Date(s.time).toLocaleTimeString()))]),"发布"==t.info?e("span",[e("van-icon",{attrs:{name:"cross"},on:{click:function(e){return e.stopPropagation(),t.removeThis(s)}}})],1):t._e()])])})),0)])},xt=[],St={data(){return{myPublishList:[]}},methods:{removeThis(t){O.Z.confirm({message:`确认删除 "${t.title}" 吗？`}).then((()=>{(0,g.Z)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/del_user_article",data:{_id:t._id,uid:this.person_info._id}}).then((t=>{t.data.code?H.Z.fail(t.data.msg):(this.getMyPub(),setTimeout((()=>{H.Z.success(t.data.msg)}),400))}))})).catch((()=>{}))},getMyPub(){(0,g.Z)({method:"get",url:`https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_user_article_list?uid=${this.person_info._id}&skip&limit`}).then((t=>{this.myPublishList=t.data.data}))}},activated(){"发布"===this.info&&this.getMyPub(),"收藏"===this.info&&(0,g.Z)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_fav_list",data:{user_id:this.person_info._id}}).then((t=>{this.myPublishList=t.data.data})),"历史"===this.info&&(0,g.Z)({method:"get",url:`https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_history_list?uid=${this.person_info._id}&skip&limit`}).then((t=>{this.myPublishList=t.data.data}))},computed:{...(0,A.rn)("aboutPerson",["person_info"])},props:["info"]},Pt=St,Ct=(0,l.Z)(Pt,Zt,xt,!1,null,"77a159a4",null),Lt=Ct.exports,Nt=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"search"},[e("van-field",{ref:"ipt",attrs:{clearable:"","left-icon":"search",placeholder:"请输入搜索关键词(无痕浏览)"},on:{input:t.fuzzySearch},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),e("span",{on:{click:function(e){return t.$router.back()}}},[t._v("取消")])],1),e("ul",{staticClass:"list commonList"},t._l(t.searchList,(function(s){return e("li",{key:s._id,on:{click:function(e){return t.toDetail(s)}}},[e("div",{staticClass:"list_top"},[e("p",[t._v(t._s(s.title))]),e("div",{directives:[{name:"show",rawName:"v-show",value:s.imageSrc,expression:"item.imageSrc"}]},t._l(s.imageSrc,(function(t,s){return e("img",{key:s,attrs:{src:t}})})),0)]),e("div",{staticClass:"list_bottom"},[e("span",[t._v("作者 "+t._s(s.author))]),e("span",[t._v(t._s(s.comment)+" 评论")]),e("span",[t._v("发布日期："+t._s(new Date(s.time).toLocaleDateString())+" "+t._s(new Date(s.time).toLocaleTimeString()))])])])})),0)])},It=[],$t={name:"search",data(){return{search:"",isSend:!1,searchList:[]}},methods:{fuzzySearch(){if(!this.search)return this.searchList=[],void console.log(1);this.isSend||(this.isSend=!0,(0,g.Z)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/search",data:{key_word:this.search}}).then((t=>{this.searchList=t.data.data,this.isSend=!1})))}},activated(){this.$refs.ipt.focus(),this.search="",this.searchList=[]},mounted(){H.Z.success("你已进入无痕浏览")}},Dt=$t,Ot=(0,l.Z)(Dt,Nt,It,!1,null,"6c597ffc",null),Tt=Ot.exports,Ft=new h.ZP({mode:"history",routes:[{path:"/Detail",component:ot,props(t){return{item:t.query}}},{path:"/Login",component:mt},{path:"/updateInfo",component:yt},{path:"/myPublish",component:Lt,props(t){return{info:t.query.info}}},{path:"/Search",component:Tt},...Y]}),zt=(s(3723),s(7061)),Mt=(s(836),s(6811)),At=(s(2443),s(9864)),jt=(s(7322),s(6631)),Et=(s(5825),s(9858)),Rt=(s(3089),s(4398));a.ZP.use(Rt.Z),a.ZP.use(Et.Z),a.ZP.use(jt.Z),a.ZP.use(At.Z),a.ZP.use(Mt.Z),a.ZP.use(zt.Z);var qt=function(){var t=this,e=t._self._c;return e("div",[e("footer",[e("van-tabbar",{attrs:{route:"","active-color":"#07c160"}},[e("van-tabbar-item",{attrs:{to:"/",icon:"home-o"}},[t._v("首页")]),e("van-tabbar-item",{attrs:{to:"/Publish",icon:"add-o"}},[t._v("发布")]),e("van-tabbar-item",{attrs:{to:"/Mine",icon:"friends-o"}},[t._v("我的")])],1)],1)])},Jt=[],Ut={data(){return{active:0}},components:{[v.Z.name]:v.Z,[u.Z.name]:u.Z}},Ht=Ut,Bt=(0,l.Z)(Ht,qt,Jt,!1,null,"a819abfe",null),Gt=Bt.exports,Kt={namespaced:!0,actions:{},mutations:{per_info(t,e){t.person_info=e,localStorage.setItem("personInfo",JSON.stringify(t.person_info))},changeInfo(t,e){t.person_info[e[0]]=e[1],localStorage.setItem("personInfo",JSON.stringify(t.person_info))}},state:{person_info:{}}};a.ZP.use(A.ZP);var Qt=new A.ZP.Store({modules:{aboutPerson:Kt}});const Vt={data(){return{mainColor:"#07c160"}},methods:{toDetail(t){this.$router.push({path:"/Detail",query:t},(()=>{}),(()=>{}))}}};a.ZP.mixin(Vt),a.ZP.component("Footer",Gt),a.ZP.use(h.ZP),a.ZP.config.productionTip=!1,new a.ZP({router:Ft,beforeCreate(){a.ZP.prototype.$bus=this},render:t=>t(d),store:Qt}).$mount("#app")}},e={};function s(a){var i=e[a];if(void 0!==i)return i.exports;var n=e[a]={exports:{}};return t[a](n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,a,i,n){if(!a){var o=1/0;for(d=0;d<t.length;d++){a=t[d][0],i=t[d][1],n=t[d][2];for(var r=!0,l=0;l<a.length;l++)(!1&n||o>=n)&&Object.keys(s.O).every((function(t){return s.O[t](a[l])}))?a.splice(l--,1):(r=!1,n<o&&(o=n));if(r){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[a,i,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,n,o=a[0],r=a[1],l=a[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(i in r)s.o(r,i)&&(s.m[i]=r[i]);if(l)var d=l(s)}for(e&&e(a);c<o.length;c++)n=o[c],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(d)},a=self["webpackChunk_2022_vue2"]=self["webpackChunk_2022_vue2"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(2731)}));a=s.O(a)})();
//# sourceMappingURL=app.3f95f1b2.js.map