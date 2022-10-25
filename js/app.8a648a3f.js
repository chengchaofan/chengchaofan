(function(){"use strict";var t={1851:function(t,e,i){var s=i(6369),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:["updateInfo","login","detail"]}},[e("router-view")],1)],1)},n=[],o={components:{},created(){this.$store.commit("aboutPerson/per_info",JSON.parse(localStorage.getItem("personInfo")))}},r=o,l=i(1001),c=(0,l.Z)(r,a,n,!1,null,null,null),u=c.exports,h=i(2631),d=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"fixTop"},[e("header",[e("div",{staticClass:"search",on:{click:t.toSearch}},[e("van-icon",{attrs:{name:"search",color:"#fff"}}),e("input",{attrs:{type:"text",value:"搜索"}})],1)]),e("div",{staticClass:"nav"},[e("van-tabs",{attrs:{"line-width":"18px","line-height":"4px","title-active-color":"#333"},on:{click:t.getId}},t._l(t.navList,(function(t){return e("van-tab",{key:t._id,attrs:{title:t.name}})})),1)],1)]),e("List"),e("Footer")],1)},m=[],p=(i(2986),i(2628)),v=(i(319),i(3481)),f=(i(446),i(8186)),_=(i(2763),i(5094)),g=(i(7658),function(){var t=this,e=t._self._c;return e("div",[e("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了",offset:"50"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[e("ul",{staticClass:"list commonList"},t._l(t.listData,(function(i){return e("li",{key:i._id,on:{click:function(e){return t.toDetail(i)}}},[e("div",{staticClass:"list_top"},[e("p",[t._v(t._s(i.title))]),e("div",{directives:[{name:"show",rawName:"v-show",value:i.imageSrc.length,expression:"item.imageSrc.length"}]},t._l(i.imageSrc,(function(t,i){return e("img",{key:i,attrs:{src:t}})})),0)]),e("div",{staticClass:"list_bottom"},[e("span",[t._v("作者:"),e("br"),t._v(" "+t._s(i.author))]),e("span",[t._v(t._s(i.comment)+" 评论")]),e("span",[t._v("发布日期："+t._s(new Date(i.time).toLocaleDateString())+" "+t._s(new Date(i.time).toLocaleTimeString()))])])])})),0)])],1)],1)}),k=[],w=(i(6791),i(4269)),b=(i(6735),i(4319)),y={components:{[b.Z.name]:b.Z,[w.Z.name]:w.Z},data(){return{listData:[],loading:!1,finished:!1,refreshing:!1,skip:0,limit:10,cate_Id:""}},methods:{onLoad(){this.$axios({url:"api/get_article_list",data:{cate_id:this.cate_Id?this.cate_Id:"609e99e0f2e56f000175151f",skip:this.skip,limit:this.limit}}).then((t=>{console.log(this.cate_Id),console.log(t.data),this.listData=t.data.data,this.loading=!1,this.refreshing=!1,this.skip++,this.limit+=10,this.limit>t.data.count&&(this.finished=!0)}))},onRefresh(t){this.finished=!1,this.loading=!0,this.skip=0,this.limit=10,this.cate_Id=t?JSON.parse(JSON.stringify(t)):this.cate_Id,this.onLoad(this.cate_Id)}},mounted(){this.$bus.$on("cateId",this.onRefresh)}},x=y,Z=(0,l.Z)(x,g,k,!1,null,"cb168ee6",null),S=Z.exports,P={components:{List:S,[_.Z.name]:_.Z,[f.Z.name]:f.Z,[v.Z.name]:v.Z,[p.Z.name]:p.Z},data(){return{navList:[],active:0}},methods:{getId(t){this.$bus.$emit("cateId",this.navList[t]._id)},toSearch(){this.$router.push("/Search")}},mounted(){this.$axios({method:"get",url:"api/get_cate_list"}).then((t=>{this.navList=t.data.data}))}},C=P,$=(0,l.Z)(C,d,m,!1,null,"08a674d9",null),L=$.exports,N=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.person_info,expression:"person_info"}]},[e("header",{style:{background:t.mainColor}},[t._v(" 发布 ")]),e("van-cell-group",[e("van-field",{ref:"ipt",attrs:{placeholder:"请输入标题"},model:{value:t.value,callback:function(e){t.value="string"===typeof e?e.trim():e},expression:"value"}})],1),e("div",{staticClass:"popo"},[e("van-popover",{attrs:{trigger:"click",actions:t.actions},on:{select:t.onSelect},scopedSlots:t._u([{key:"reference",fn:function(){return[e("van-button",{attrs:{type:"primary"}},[t._v(t._s(t.title?t.title:"请选择你要发布的地方"))])]},proxy:!0}]),model:{value:t.showPopover,callback:function(e){t.showPopover=e},expression:"showPopover"}})],1),e("van-field",{attrs:{rows:"4",autosize:"",type:"textarea",placeholder:"请输入内容"},model:{value:t.message,callback:function(e){t.message="string"===typeof e?e.trim():e},expression:"message"}}),e("van-uploader",{attrs:{"max-count":1},model:{value:t.uploader,callback:function(e){t.uploader=e},expression:"uploader"}}),e("div",{staticClass:"btn"},[e("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.sendInfo}},[t._v("确定")])],1),e("Footer")],1)},I=[],D=(i(4889),i(5705)),O=(i(1640),i(9354)),T=(i(6280),i(7291)),z=(i(1049),i(140)),F=i(691),M=i(3822),A={data(){return{value:"",message:"",uploader:[],title:"",showPopover:!1,actions:[],cate_id:""}},components:{[z.Z.name]:z.Z,[T.Z.name]:T.Z,[O.Z.name]:O.Z},methods:{onSelect(t){this.title=t.text},sendInfo(){this.value?this.message?this.title?(this.$axios({method:"get",url:"api/get_cate_list"}).then((t=>{let e=t.data.data.find((t=>t.name===this.title));this.cate_id=e._id})),this.$axios({method:"get",url:"upload/token"}).then((t=>{let e=new FormData;e.append("key",(0,F.x0)()),e.append("token",t.data.token),e.append("file",this.uploader[0].file),this.$axios({url:"https://upload-z1.qiniup.com",data:e}).then((t=>{this.$axios({url:"api/add_article",data:{title:this.value,content:this.message,cate_id:this.cate_id,cate_name:this.title,author:this.person_info.username,author_id:this.person_info._id,imageSrc:[`http://toutiao.longxiaokj.com/${t.data.key}`]}}).then((t=>{console.log(t.data),D.Z.alert({message:t.data.msg}),"成功"==t.data.msg&&(this.value="",this.message="",this.title="",this.uploader=[])}))}))}))):D.Z.alert({message:"请选择你要发布的地方!"}):D.Z.alert({message:"请输入你要发布的内容!"}):D.Z.alert({message:"请输入你的标题!"})}},computed:{...(0,M.rn)("aboutPerson",["person_info"])},activated(){this.person_info||D.Z.alert({message:"登录后才可以发布哦"}).then((()=>{this.$router.push({path:"/Login"})})),this.$axios({method:"get",url:"api/get_cate_list"}).then((t=>{this.actions=[],t.data.data.map((t=>{this.actions.push({text:t.name})}))}))}},j=A,E=(0,l.Z)(j,N,I,!1,null,"7cc44cf4",null),q=E.exports,R=function(){var t=this,e=t._self._c;return e("div",[t.person_info?e("div",{staticClass:"person_info"},[e("div",{staticClass:"info_top"},[e("div",{staticClass:"username"},[e("img",{attrs:{src:t.person_info.avatar,alt:""}}),e("p",[t._v(t._s(t.person_info.nickname))])]),e("div",{staticClass:"update_info"},[e("span",{on:{click:t.updatePersonInfo}},[t._v("编辑资料")])])]),e("div",{staticClass:"info_bottom"},[e("div",{on:{click:function(e){return t.toMyPub("发布")}}},[e("p",[t._v(t._s(t.myPub.length))]),e("p",[t._v("头条")])]),t._m(0)])]):t._e(),t.person_info?t._e():e("div",{staticClass:"noLogin"},[e("h2",[t._v("登录后更懂你")]),e("van-button",{staticStyle:{"border-radius":"5px"},attrs:{type:"danger"},on:{click:t.toLogin}},[t._v("立即登录")])],1),e("van-grid",{attrs:{clickable:"","column-num":2}},[e("van-grid-item",{attrs:{icon:"star-o",text:"收藏"},on:{click:function(e){return t.toMyPub("收藏")}}}),e("van-grid-item",{attrs:{icon:"underway-o",text:"历史"},on:{click:function(e){return t.toMyPub("历史")}}})],1),e("div",{staticClass:"operate"},[e("van-cell",{attrs:{title:"修改密码","is-link":""},on:{click:t.showTrue}}),e("van-cell",{attrs:{title:"联系我们","is-link":""},on:{click:t.callMe}}),e("van-cell",{attrs:{title:"关于我们","is-link":""},on:{click:t.aboutMe}})],1),e("van-button",{attrs:{block:""},on:{click:t.logOut}},[t._v("退出登录")]),e("Footer"),e("van-popup",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("van-field",{attrs:{placeholder:"请输入你的旧密码"},model:{value:t.oldPas,callback:function(e){t.oldPas=e},expression:"oldPas"}}),e("van-field",{attrs:{placeholder:"请输入你的新密码"},model:{value:t.newPas,callback:function(e){t.newPas=e},expression:"newPas"}}),e("div",{staticClass:"btns"},[e("van-button",{attrs:{type:"default",size:"small"},on:{click:t.noShow}},[t._v("取消")]),e("van-button",{attrs:{type:"primary",size:"small"},on:{click:t.changePas}},[t._v("确认")])],1)],1)],1)},J=[function(){var t=this,e=t._self._c;return e("div",[e("p",[t._v("0")]),e("p",[t._v("获赞")])])}],U=(i(8146),i(8848)),H=(i(4439),i(3462)),B=(i(6562),i(4159)),G=(i(4825),i(7165)),K={components:{[G.Z.name]:G.Z,[B.Z.name]:B.Z,[H.Z.name]:H.Z},data(){return{show:!1,oldPas:"",newPas:"",myPub:[]}},methods:{toLogin(){this.$router.push("/Login")},updatePersonInfo(){this.$router.push("/updateInfo")},logOut(){this.person_info?D.Z.confirm({message:"确认退出登录吗?"}).then((()=>{setTimeout((()=>{this.$store.commit("aboutPerson/per_info",null),localStorage.removeItem("personInfo"),U.Z.success("退出登录成功")}),200)})).catch((()=>{})):U.Z.fail("您还未登录哦")},showTrue(){this.person_info?this.show=!0:U.Z.fail("您还未登录哦")},callMe(){D.Z.alert({title:"联系方式",message:"手机号：18539839614<br>邮箱：chengchaofan0329@foxmail.com<br>微信：cf831143",messageAlign:"left"}).then((()=>{}))},aboutMe(){D.Z.alert({title:"关于我们"})},noShow(){this.show=!1,this.oldPas="",this.newPas=""},changePas(){this.oldPas?this.newPas?this.$axios({url:"user/updatePwd",data:{oldPassword:this.oldPas,newPassword:this.newPas,uid:this.person_info._id}}).then((t=>{console.log(t.data),t.data.code?U.Z.fail(`${t.data.msg}`):(U.Z.success(`${t.data.msg}请重新登录`),this.$store.commit("aboutPerson/per_info",null),localStorage.removeItem("personInfo"),this.show=!1,this.oldPas="",this.newPas="")})):D.Z.alert({message:"请输入你的新密码!"}):D.Z.alert({message:"请输入你的旧密码!"})},toMyPub(t){this.person_info?this.$router.push({path:"/myPublish",query:{info:t}}):U.Z.fail("您还未登录哦")}},computed:{...(0,M.rn)("aboutPerson",["person_info"])},activated(){this.person_info&&this.$axios({method:"get",url:`api/get_user_article_list?uid=${this.person_info._id}&skip&limit`}).then((t=>{this.myPub=t.data.data}))}},Q=K,V=(0,l.Z)(Q,R,J,!1,null,"30285f1d",null),W=V.exports,X=[{path:"/",component:L},{path:"/Publish",component:q},{path:"/Mine",component:W}],Y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"detail"},[e("header",{staticClass:"header",style:{background:t.mainColor}},[e("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.$router.back()}}}),e("p",[t._v("文章详情")])],1),e("div",{staticClass:"w"},[e("h2",{staticClass:"title"},[t._v(t._s(t.item.title))]),e("div",{staticClass:"author"},[e("div",{staticClass:"left"},[e("img",{attrs:{src:t.avatar,alt:""}}),e("p",[t._v(t._s(t.item.author))]),e("br"),e("span",[t._v(t._s(new Date(Number(t.item.time)).toLocaleDateString()))])]),e("div",{staticClass:"right",on:{click:t.attention}},[e("van-button",{attrs:{round:"",type:"default",size:"small"}},[e("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.isAttention,expression:"isAttention"}],attrs:{name:"plus"}}),t._v(" "+t._s(t.isAttention?"已关注":"关注")+" ")],1)],1)]),e("div",{staticClass:"text"},[t._v(" "+t._s(t.text)+" ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.item.imageSrc,expression:"item.imageSrc"}],staticClass:"photo"},t._l(t.item.imageSrc,(function(t,i){return e("img",{key:i,attrs:{src:t}})})),0)]),e("div",{staticClass:"comment"},[e("ul",t._l(t.commentList,(function(i){return e("li",{key:i._id},[e("img",{attrs:{src:i.info.avatar,alt:""}}),e("div",{staticClass:"content"},[e("p",{staticClass:"username"},[t._v(t._s(i.info.nickname))]),e("p",{staticClass:"con",on:{click:function(e){return t.yesShow(i)}}},[t._v(t._s(i.content))]),e("p",{staticClass:"time"},[t._v(t._s(new Date(i.create_time).toLocaleDateString())+" "),e("span",{on:{click:function(e){return t.getReplyList(i)}}},[t._v(t._s(i.reply_num)+" 回复")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.clickItem._id==i._id,expression:"clickItem._id==item._id"}]},[e("van-loading",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],attrs:{size:"24px",type:"spinner"}},[t._v("加载中...")])],1),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.clickItem._id==i._id,expression:"clickItem._id==item._id"}],staticStyle:{width:"120%","margin-left":"-44px"}},t._l(t.replyList,(function(i){return e("li",{key:i._id},[e("img",{attrs:{src:i.info.avatar,alt:""}}),e("div",{staticClass:"content"},[e("p",{staticClass:"username"},[t._v(t._s(i.info.nickname))]),e("p",{staticClass:"con"},[t._v(t._s(i.content))]),e("p",{staticClass:"time"},[t._v(t._s(new Date(i.create_time).toLocaleDateString())+" "),e("span",{on:{click:t.second}},[t._v(t._s(i.reply_num)+" 回复")])])]),e("div",{staticClass:"nice_count"},[e("van-icon",{directives:[{name:"show",rawName:"v-show",value:i.is_like,expression:"item.is_like"}],attrs:{name:"good-job",color:"#ef092c"},on:{click:function(e){return t.commentNice(i)}}}),e("van-icon",{directives:[{name:"show",rawName:"v-show",value:!i.is_like,expression:"!item.is_like"}],attrs:{name:"good-job-o"},on:{click:function(e){return t.commentNice(i)}}}),e("span",[t._v(t._s(i.like_count))])],1)])})),0)]),e("div",{staticClass:"nice_count"},[e("van-icon",{directives:[{name:"show",rawName:"v-show",value:i.is_like,expression:"item.is_like"}],attrs:{name:"good-job",color:"#ef092c"},on:{click:function(e){return t.commentNice(i)}}}),e("van-icon",{directives:[{name:"show",rawName:"v-show",value:!i.is_like,expression:"!item.is_like"}],attrs:{name:"good-job-o"},on:{click:function(e){return t.commentNice(i)}}}),e("span",[t._v(t._s(i.like_count))])],1)])})),0)]),e("van-popup",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("van-field",{ref:"msgIpt",attrs:{placeholder:"请输入你的要回复的内容"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.reviewArticle(t.clickItem,1)}},model:{value:t.msg,callback:function(e){t.msg="string"===typeof e?e.trim():e},expression:"msg"}}),e("div",{staticClass:"btns"},[e("van-button",{attrs:{type:"default",size:"small"},on:{click:t.noShow}},[t._v("取消")]),e("van-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.reviewArticle(t.clickItem,1)}}},[t._v("确认")])],1)],1),e("footer",{staticClass:"footerHandle"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.msg,expression:"msg",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"写评论"},domProps:{value:t.msg},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.reviewArticle(null,0)},input:function(e){e.target.composing||(t.msg=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("van-icon",{attrs:{name:"comment-o"},on:{click:function(e){return t.reviewArticle(null,0)}}}),e("van-icon",{directives:[{name:"show",rawName:"v-show",value:!t.isCollect,expression:"!isCollect"}],attrs:{name:"star-o"},on:{click:t.collect}}),e("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.isCollect,expression:"isCollect"}],attrs:{name:"star",color:"#0078d4"},on:{click:t.collect}}),e("van-icon",{directives:[{name:"show",rawName:"v-show",value:!t.isLike,expression:"!isLike"}],attrs:{name:"like-o"},on:{click:t.like}}),e("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.isLike,expression:"isLike"}],attrs:{name:"like",color:"#ef092c"},on:{click:t.like}}),e("van-icon",{attrs:{name:"share-o"}})],1)],1)},tt=[],et=(i(9571),i(4958)),it={props:["item"],name:"detail",data(){return{show:!1,text:"",msg:"",isCollect:!1,isLike:!1,commentList:[],avatar:"",clickItem:"",replyList:[],isShow:!1,isNice:!1,isAttention:!1}},components:{[et.Z.name]:et.Z},computed:{...(0,M.rn)("aboutPerson",["person_info"])},methods:{attention(){this.person_info?(this.isAttention=!this.isAttention,this.isAttention?(0,U.Z)({message:"关注成功",icon:"success",duration:1200}):(0,U.Z)({message:"取消关注成功",icon:"fail",duration:1200})):U.Z.fail("您还未登录哦")},collect(){this.person_info?this.isCollect?this.$axios({url:"api/remove_fav",data:{article_id:this.item._id,user_id:this.person_info._id}}).then((t=>{if(console.log(t.data),!t.data.code)return(0,U.Z)({message:t.data.msg,icon:"fail",duration:1200}),void(this.isCollect=!1);(0,U.Z)({message:t.data.msg,icon:"cross",duration:1200})})):this.$axios({url:"api/add_fav",data:{article_id:this.item._id,user_id:this.person_info._id}}).then((t=>{if(console.log(t.data),!t.data.code)return(0,U.Z)({message:t.data.msg,icon:"success",duration:1200}),void(this.isCollect=!0);(0,U.Z)({message:t.data.msg,icon:"cross",duration:1200})})):U.Z.fail("您还未登录哦")},like(){this.person_info?this.isLike?this.$axios({url:"api/unlike",data:{article_id:this.item._id,user_id:this.person_info._id}}).then((t=>{if(!t.data.code)return(0,U.Z)({message:t.data.msg,icon:"fail",duration:1200}),void(this.isLike=!1);(0,U.Z)({message:t.data.msg,icon:"cross",duration:1200})})):this.$axios({url:"api/like",data:{article_id:this.item._id,user_id:this.person_info._id}}).then((t=>{if(!t.data.code)return(0,U.Z)({message:t.data.msg,icon:"success",duration:1200}),void(this.isLike=!0);(0,U.Z)({message:t.data.msg,icon:"cross",duration:1200})})):U.Z.fail("您还未登录哦")},second(){(0,U.Z)({message:"这里的区域以后再来探索吧",icon:"like-o"})},commentNice(t){console.log(t)},noShow(){this.show=!1,this.msg=""},yesShow(t){this.clickItem=t,this.show=!0,this.$nextTick((()=>{this.$refs.msgIpt.focus()}))},getReplyList(t){let e;this.isShow=!0,this.clickItem=t,this.person_info&&(e=this.person_info._id),this.replyList=[],this.$axios({url:"api/get_reply_list",data:{user_id:e,reply_comment_id:t._id,article_id:this.item._id}}).then((t=>{this.isShow=!1,this.replyList=t.data.data}))},comment(){let t;this.person_info&&(t=this.person_info._id),this.$axios({url:"api/get_comment_list",data:{article_id:this.item._id,user_id:t}}).then((t=>{this.commentList=t.data.data}))},reviewArticle(t,e){this.person_info?(console.log(this.msg),this.msg?!t||this.msg?this.$axios({url:"api/add_comment",data:{user_id:this.person_info._id,article_id:this.item._id,content:this.msg,reply_comment_id:t?t._id:"",comment_type:e}}).then((t=>{if(!this.code)return(0,U.Z)({message:t.data.msg,icon:"success",duration:1200}),this.show=!1,this.msg="",void this.comment();(0,U.Z)({message:t.data.msg,icon:"cross",duration:1200})})):this.$refs.msgIpt.focus():U.Z.fail("请输入内容")):U.Z.fail("您还未登录哦")}},mounted(){let t;this.person_info&&(t=this.person_info._id),this.$axios({url:"api/get_article_detail",data:{article_id:this.item._id,user_id:t}}).then((t=>{console.log(t.data),t.data.data&&(this.avatar=t.data.data.avatar,this.isCollect=t.data.data.is_fav,this.isLike=t.data.data.is_like,t.data.data&&(this.text=t.data.data.content))})),this.comment()}},st=it,at=(0,l.Z)(st,Y,tt,!1,null,"de635ec8",null),nt=at.exports,ot=function(){var t=this,e=t._self._c;return e("div",{staticClass:"log"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"enter"},[e("div",{staticClass:"login"},[e("van-cell-group",[e("van-field",{attrs:{"left-icon":"phone-o",clearable:"",placeholder:"请输入手机号"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),e("van-field",{attrs:{type:"password",clearable:"","left-icon":"bag-o",placeholder:"请输入密码"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.pas,callback:function(e){t.pas=e},expression:"pas"}})],1)],1),e("p",{staticClass:"isLog"},[t._v("还没注册吗？先去"),e("span",{on:{click:function(e){t.isShow=!1,t.isForget=!1}}},[t._v(" 注册 ")]),t._v("吧！"),e("span",{on:{click:function(e){t.isForget=!0,t.isShow=!1}}},[t._v("忘记密码")])]),e("div",{staticClass:"btn"},[e("van-button",{attrs:{type:"danger",block:""},on:{click:t.login}},[t._v("登录")])],1)]),e("header",{staticClass:"header",style:{background:"red"}},[e("van-icon",{attrs:{name:"arrow-left"},on:{click:t.isLog}}),e("p",[t._v(t._s(t.isForget?"忘记密码":"注册 / 登录"))])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}],staticClass:"register"},[e("div",{staticClass:"login"},[e("van-cell-group",[e("van-field",{attrs:{"left-icon":"phone-o",clearable:"",placeholder:"请输入手机号"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.register.apply(null,arguments)}},model:{value:t.logPhone,callback:function(e){t.logPhone=e},expression:"logPhone"}}),e("van-field",{attrs:{type:"password",clearable:"","left-icon":"bag-o",placeholder:t.isForget?"请输入新密码 6-12位数字字母下划线":"请输入密码 6-12位数字字母下划线"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.register.apply(null,arguments)}},model:{value:t.logPas,callback:function(e){t.logPas=e},expression:"logPas"}}),e("van-field",{attrs:{center:"",label:"短信验证码",placeholder:"请输入短信验证码"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.register.apply(null,arguments)}},scopedSlots:t._u([{key:"button",fn:function(){return[e("van-button",{attrs:{size:"small",disabled:t.disabled,type:"primary"},on:{click:t.sendSms}},[t._v(" "+t._s(t.disabled?t.timer:"发送验证码")+" ")])]},proxy:!0}]),model:{value:t.sms,callback:function(e){t.sms=e},expression:"sms"}})],1)],1),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.isForget,expression:"!isForget"}],staticClass:"isLog"},[t._v("注册完成了么？去"),e("span",{on:{click:function(e){t.isShow=!0}}},[t._v(" 登录 ")]),t._v("吧！"),e("span",{on:{click:function(e){t.isForget=!0}}},[t._v("忘记密码")])]),e("div",{staticClass:"btn"},[e("van-button",{attrs:{type:"danger",block:""},on:{click:t.register}},[t._v(t._s(t.isForget?"确定":"注册"))])],1)])])},rt=[],lt=(i(9491),i(6450)),ct={name:"login",data(){return{phone:"",pas:"",logPhone:"",logPas:"",sms:"",isShow:!0,disabled:!1,timer:60,isForget:!0}},watch:{isShow(t){t?(this.phone="",this.pas=""):(this.logPhone="",this.logPas="",this.sms="")}},methods:{isLog(){if(this.isForget)return this.isForget=!1,void(this.isShow=!0);this.$router.push("/Mine")},back(){console.log(1)},login(){this.$axios({url:"user/login",data:{username:this.phone,password:this.pas}}).then((t=>{t.data.code?(t.data.code,D.Z.alert({title:"注意",message:t.data.msg,theme:"round-button"})):((0,lt.Z)({type:"success",message:"登录成功",duration:1500}),console.log(t.data),this.$router.push({path:"/Mine"}),this.$store.commit("aboutPerson/per_info",t.data.userInfo))}))},sendSms(){let t=/^[1][3-9][\d]{9}/;if(!this.logPhone)return void D.Z.alert({message:"请输入你的手机号!"});if(!t.test(this.logPhone))return void D.Z.alert({message:"请输入正确的手机号!"});this.disabled=!0;let e=setInterval((()=>{this.timer--,this.timer||(this.disabled=!1)}),1e3);this.$axios({url:"user/sendSms",data:{mobile:this.logPhone,type:this.isForget?"login":"register"}}).then((t=>{t.data.data&&setTimeout((()=>{(0,lt.Z)({type:"success",message:`您的验证码为：${t.data.data}`,duration:4e3}),clearInterval(e),this.disabled=!1,this.timer=60}),2e3),D.Z.alert({message:t.data.msg})}))},register(){this.$axios({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/user/"+(this.isForget?"forget":"reg"),data:{username:this.logPhone,password:this.logPas,vercode:this.sms}}).then((t=>{t.data.code||setTimeout((()=>{this.isShow=!0}),300),D.Z.alert({message:t.data.msg})}))}},mounted(){this.isShow=!0,this.isForget=!1}},ut=ct,ht=(0,l.Z)(ut,ot,rt,!1,null,"411a18c9",null),dt=ht.exports,mt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"update"},[e("van-popup",{model:{value:t.nameShow,callback:function(e){t.nameShow=e},expression:"nameShow"}},[e("van-field",{ref:"ipt",attrs:{placeholder:"请输入你的昵称"},model:{value:t.newName,callback:function(e){t.newName=e},expression:"newName"}}),e("div",{staticClass:"btns"},[e("van-button",{attrs:{type:"default",size:"small"},on:{click:function(e){t.nameShow=!1}}},[t._v("取消")]),e("van-button",{attrs:{type:"primary",size:"small"},on:{click:t.getNewName}},[t._v("确认")])],1)],1),e("van-popup",{model:{value:t.sexShow,callback:function(e){t.sexShow=e},expression:"sexShow"}},[e("van-radio-group",{attrs:{direction:"horizontal"},model:{value:t.newSex,callback:function(e){t.newSex=e},expression:"newSex"}},[e("van-radio",{attrs:{name:"男"}},[t._v("男")]),e("van-radio",{attrs:{name:"女"}},[t._v("女")])],1),e("div",{staticClass:"btns"},[e("van-button",{attrs:{type:"default",size:"small"},on:{click:function(e){t.sexShow=!1}}},[t._v("取消")]),e("van-button",{attrs:{type:"primary",size:"small"},on:{click:t.getNewSex}},[t._v("确认")])],1)],1),e("van-popup",{model:{value:t.timeShow,callback:function(e){t.timeShow=e},expression:"timeShow"}},[e("van-datetime-picker",{attrs:{type:"date",title:"选择年月日","min-date":t.minDate,"max-date":t.maxDate},on:{confirm:t.confirm,cancel:t.cancel},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1),e("header",{staticClass:"header",style:{background:t.mainColor}},[e("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.$router.back()}}}),e("p",[t._v("编辑信息")])],1),e("div",{staticClass:"head"},[e("van-cell",{attrs:{title:"头像",icon:t.photo,"is-link":""}}),e("van-uploader",{attrs:{"max-count":1},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}})],1),e("van-cell",{attrs:{"is-link":""},on:{click:t.changeName},scopedSlots:t._u([{key:"title",fn:function(){return[e("span",[t._v("昵称")]),t._v("   "),e("span",{staticClass:"title"},[t._v(t._s(t.oldName))])]},proxy:!0}])}),e("van-cell",{attrs:{"is-link":""},on:{click:t.changeSex},scopedSlots:t._u([{key:"title",fn:function(){return[e("span",[t._v("性别")]),t._v("   "),e("span",{staticClass:"title"},[t._v(t._s(t.sex?t.sex:"未设置"))])]},proxy:!0}])}),e("van-cell",{attrs:{"is-link":""},on:{click:function(e){t.timeShow=!0}},scopedSlots:t._u([{key:"title",fn:function(){return[e("span",[t._v("生日")]),t._v("   "),e("span",{staticClass:"title"},[t._v(t._s(t.newTime?t.newTime:"未设置"))])]},proxy:!0}])}),e("van-button",{staticStyle:{margin:"20px auto",width:"80%"},attrs:{type:"primary",block:""},on:{click:t.changePerson}},[t._v("确定")])],1)},pt=[],vt=(i(4745),i(955)),ft=(i(7396),i(2979)),_t=(i(1e3),i(6338)),gt={name:"updateInfo",data(){return{fileList:[],nameShow:!1,sexShow:!1,timeShow:!1,photo:"",newPhoto:"",oldName:"",newName:"",newSex:"",sex:"",newTime:"",minDate:new Date(1980,0,1),maxDate:new Date(2022,10,19),currentDate:""}},computed:{...(0,M.rn)("aboutPerson",["person_info"])},methods:{changeName(){this.newName=this.oldName,this.nameShow=!0,this.$nextTick((()=>{this.$refs.ipt.focus()}))},getNewName(){this.oldName=this.newName,this.nameShow=!1},changeSex(){this.newSex=this.sex,this.sexShow=!0},getNewSex(){this.sex=this.newSex,this.sexShow=!1},confirm(t){this.newTime=t.toLocaleDateString(),this.timeShow=!1},cancel(){this.currentDate=new Date(this.newTime),this.timeShow=!1},changePerson(){this.$axios({method:"get",url:"upload/token"}).then((t=>{console.log(this.fileList[0].file);let e=new FormData;e.append("key",(0,F.x0)()),e.append("token",t.data.token),e.append("file",this.fileList[0].file),this.$axios({url:"https://upload-z1.qiniup.com",data:e}).then((t=>{let e=`http://toutiao.longxiaokj.com/${t.data.key}`;this.$axios({url:"user/editUserInfo",data:{uid:this.person_info._id,avatar:e,nickname:this.newName,birthday:this.newTime,sex:this.newSex}}).then((t=>{t.data.code?U.Z.fail(t.data.msg):(this.$store.commit("aboutPerson/changeInfo",["nickname",this.newName]),this.$store.commit("aboutPerson/changeInfo",["avatar",e]),this.$store.commit("aboutPerson/changeInfo",["birthday",this.newTime]),this.$store.commit("aboutPerson/changeInfo",["sex",this.newSex]),U.Z.success(t.data.msg),this.$router.back())}))}))}))}},components:{[T.Z.name]:T.Z,[_t.Z.name]:_t.Z,[ft.Z.name]:ft.Z,[vt.Z.name]:vt.Z},mounted(){this.photo=this.person_info.avatar,this.oldName=this.person_info.nickname,this.newName=this.person_info.nickname,this.sex=this.person_info.sex,this.newSex=this.person_info.sex,this.newTime=this.person_info.birthday,this.currentDate=new Date(this.person_info.birthday)}},kt=gt,wt=(0,l.Z)(kt,mt,pt,!1,null,"f25a9eb4",null),bt=wt.exports,yt=function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"header",style:{background:t.mainColor}},[e("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.$router.back()}}}),e("p",[t._v("我的"+t._s(t.info))])],1),e("ul",{staticClass:"list commonList"},t._l(t.myPublishList,(function(i){return e("li",{key:i._id,on:{click:function(e){return t.toDetail(i)}}},[e("div",{staticClass:"list_top"},[e("p",[t._v(t._s(i.title))]),e("div",{directives:[{name:"show",rawName:"v-show",value:i.imageSrc,expression:"item.imageSrc"}]},t._l(i.imageSrc,(function(t,i){return e("img",{key:i,attrs:{src:t}})})),0)]),e("div",{staticClass:"list_bottom"},[e("span",[t._v("作者 "+t._s(i.author))]),e("span",[t._v(t._s(i.comment)+" 评论")]),e("span",[t._v("发布日期："+t._s(new Date(i.time).toLocaleDateString())+" "+t._s(new Date(i.time).toLocaleTimeString()))]),"发布"==t.info?e("span",[e("van-icon",{attrs:{name:"cross"},on:{click:function(e){return e.stopPropagation(),t.removeThis(i)}}})],1):t._e()])])})),0)])},xt=[],Zt={data(){return{myPublishList:[]}},methods:{removeThis(t){D.Z.confirm({message:`确认删除 "${t.title}" 吗？`}).then((()=>{this.$axios({url:"api/del_user_article",data:{_id:t._id,uid:this.person_info._id}}).then((t=>{t.data.code?U.Z.fail(t.data.msg):(this.getMyPub(),setTimeout((()=>{U.Z.success(t.data.msg)}),400))}))})).catch((()=>{}))},getMyPub(){this.$axios({method:"get",url:`api/get_user_article_list?uid=${this.person_info._id}&skip&limit`}).then((t=>{this.myPublishList=t.data.data}))}},activated(){"发布"===this.info&&this.getMyPub(),"收藏"===this.info&&this.$axios({url:"api/get_fav_list",data:{user_id:this.person_info._id}}).then((t=>{this.myPublishList=t.data.data})),"历史"===this.info&&this.$axios({method:"get",url:`api/get_history_list?uid=${this.person_info._id}&skip&limit`}).then((t=>{this.myPublishList=t.data.data}))},computed:{...(0,M.rn)("aboutPerson",["person_info"])},props:["info"]},St=Zt,Pt=(0,l.Z)(St,yt,xt,!1,null,"5eb2c79e",null),Ct=Pt.exports,$t=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"search"},[e("van-field",{ref:"ipt",attrs:{clearable:"","left-icon":"search",placeholder:"请输入搜索关键词(无痕浏览)"},on:{input:t.fuzzySearch},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),e("span",{on:{click:function(e){return t.$router.back()}}},[t._v("取消")])],1),e("ul",{staticClass:"list commonList"},t._l(t.searchList,(function(i){return e("li",{key:i._id,on:{click:function(e){return t.toDetail(i)}}},[e("div",{staticClass:"list_top"},[e("p",[t._v(t._s(i.title))]),e("div",{directives:[{name:"show",rawName:"v-show",value:i.imageSrc,expression:"item.imageSrc"}]},t._l(i.imageSrc,(function(t,i){return e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"imgSrc"}],key:i,attrs:{src:t}})})),0)]),e("div",{staticClass:"list_bottom"},[e("span",[t._v("作者 "+t._s(i.author))]),e("span",[t._v(t._s(i.comment)+" 评论")]),e("span",[t._v("发布日期："+t._s(new Date(i.time).toLocaleDateString())+" "+t._s(new Date(i.time).toLocaleTimeString()))])])])})),0)])},Lt=[],Nt={name:"search",data(){return{search:"",isSend:!1,searchList:[]}},methods:{fuzzySearch(){this.search?this.isSend||(this.isSend=!0,this.$axios({url:"api/search",data:{key_word:this.search}}).then((t=>{this.$axios({url:"api/search",data:{key_word:this.search,limit:t.data.count}}).then((t=>{this.searchList=t.data.data,this.isSend=!1}))}))):this.searchList=[]}},activated(){this.$refs.ipt.focus(),this.search="",this.searchList=[]},mounted(){U.Z.success("你已进入无痕浏览")}},It=Nt,Dt=(0,l.Z)(It,$t,Lt,!1,null,"3bc3dfc4",null),Ot=Dt.exports,Tt=new h.ZP({routes:[{path:"/Detail",component:nt,props(t){return{item:t.query}}},{path:"/Login",component:dt},{path:"/updateInfo",component:bt},{path:"/myPublish",component:Ct,props(t){return{info:t.query.info}}},{path:"/Search",component:Ot},...X]}),zt=(i(6972),i(1878)),Ft=(i(4408),i(4639)),Mt=(i(3723),i(7061)),At=(i(836),i(6811)),jt=(i(2443),i(9864)),Et=(i(7322),i(6631)),qt=(i(5825),i(9858)),Rt=(i(3089),i(4398));s.ZP.use(Rt.Z),s.ZP.use(qt.Z),s.ZP.use(Et.Z),s.ZP.use(jt.Z),s.ZP.use(At.Z),s.ZP.use(Mt.Z),s.ZP.use(Ft.Z),s.ZP.use(zt.Z);var Jt=function(){var t=this,e=t._self._c;return e("div",[e("footer",[e("van-tabbar",{attrs:{route:"","active-color":"#07c160"}},[e("van-tabbar-item",{attrs:{to:"/",icon:"home-o"}},[t._v("首页")]),e("van-tabbar-item",{attrs:{to:"/Publish",icon:"add-o"}},[t._v("发布")]),e("van-tabbar-item",{attrs:{to:"/Mine",icon:"friends-o"}},[t._v("我的")])],1)],1)])},Ut=[],Ht={data(){return{active:0}},components:{[v.Z.name]:v.Z,[p.Z.name]:p.Z}},Bt=Ht,Gt=(0,l.Z)(Bt,Jt,Ut,!1,null,"a819abfe",null),Kt=Gt.exports,Qt={namespaced:!0,actions:{},mutations:{per_info(t,e){t.person_info=e,localStorage.setItem("personInfo",JSON.stringify(t.person_info))},changeInfo(t,e){t.person_info[e[0]]=e[1],localStorage.setItem("personInfo",JSON.stringify(t.person_info))}},state:{person_info:{}}};s.ZP.use(M.ZP);var Vt=new M.ZP.Store({modules:{aboutPerson:Qt}});const Wt={data(){return{mainColor:"#07c160"}},methods:{toDetail(t){this.$router.push({path:"/Detail",query:t},(()=>{}),(()=>{}))}}};var Xt=i(70);Xt.Z.defaults.method="POST",Xt.Z.defaults.baseURL="https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/",s.ZP.prototype.$axios=Xt.Z,s.ZP.mixin(Wt),s.ZP.component("Footer",Kt),s.ZP.use(h.ZP),s.ZP.config.productionTip=!1,new s.ZP({router:Tt,beforeCreate(){s.ZP.prototype.$bus=this},render:t=>t(u),store:Vt}).$mount("#app")}},e={};function i(s){var a=e[s];if(void 0!==a)return a.exports;var n=e[s]={exports:{}};return t[s].call(n.exports,n,n.exports,i),n.exports}i.m=t,function(){var t=[];i.O=function(e,s,a,n){if(!s){var o=1/0;for(u=0;u<t.length;u++){s=t[u][0],a=t[u][1],n=t[u][2];for(var r=!0,l=0;l<s.length;l++)(!1&n||o>=n)&&Object.keys(i.O).every((function(t){return i.O[t](s[l])}))?s.splice(l--,1):(r=!1,n<o&&(o=n));if(r){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[s,a,n]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,n,o=s[0],r=s[1],l=s[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(a in r)i.o(r,a)&&(i.m[a]=r[a]);if(l)var u=l(i)}for(e&&e(s);c<o.length;c++)n=o[c],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(u)},s=self["webpackChunk_2022_vue2"]=self["webpackChunk_2022_vue2"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(1851)}));s=i.O(s)})();
//# sourceMappingURL=app.8a648a3f.js.map