webpackJsonp([3],{544:function(e,t,i){i(583);var n=i(8)(i(562),i(595),"data-v-74b4415a",null);e.exports=n.exports},556:function(e,t,i){"use strict";function n(){var e=l()({},m.b,{platform:"h5",uin:0,needNewCode:1});return i.i(c.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",e,m.c)}function s(){var e=l()({},m.b,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return p.a.get("/api/getDiscList",{params:e}).then(function(e){return a.a.resolve(e.data)})}function r(e){var t=l()({},m.b,{disstid:e,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0});return i.i(c.a)("https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg",t,m.c)}t.b=n,t.c=s,t.a=r;var o=i(83),a=i.n(o),d=i(82),l=i.n(d),c=i(185),m=i(62),f=i(188),p=i.n(f)},559:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(122),s=i(191),r=i.n(s);t.default={data:function(){return{dots:[],currentPageIndex:0}},props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},mounted:function(){var e=this;setTimeout(function(){e._setSliderWidth(),e._initDots(),e._initSlider(),e.autoPlay&&e._play(),window.addEventListener("resize",function(){e.slider&&(e._setSliderWidth(!0),e.slider.refresh())})},20)},methods:{_setSliderWidth:function(e){this.children=this.$refs.sliderGroup.children;for(var t=0,s=this.$refs.slider.clientWidth,r=0;r<this.children.length;r++){var o=this.children[r];i.i(n.c)(o,"slider-item"),o.style.width=s+"px",t+=s}this.loop&&!e&&(t+=2*s),this.$refs.sliderGroup.style.width=t+"px"},_initDots:function(){this.dots=new Array(this.children.length)},_initSlider:function(){var e=this;this.slider=new r.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:!0,snapLoop:!0,snapThreshold:.3,snapSpeed:400}),this.slider.on("scrollEnd",function(){var t=e.slider.getCurrentPage().pageX;e.loop&&(t-=1),e.currentPageIndex=t,e.loop&&(clearTimeout(e.timer),e._play())})},_play:function(){var e=this,t=this.currentPageIndex+1;this.loop&&(t+=1),this.timer=setTimeout(function(){e.slider.goToPage(t,0,400)},this.interval)}},destroyed:function(){clearTimeout(this.timer)}}},562:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(54),s=i.n(n),r=i(589),o=i.n(r),a=i(556),d=i(63),l=i.n(d),c=i(62),m=i(186),f=i.n(m),p=i(81),h=i(45);t.default={mixins:[p.c],data:function(){return{recommends:[],discList:[]}},created:function(){this._getRecommend(),this._getDiscList()},activated:function(){var e=this;setTimeout(function(){e.$refs.slider&&e.$refs.slider.refresh()},20)},methods:s()({handlePlaylist:function(e){var t=e.length>0?"60px":"";this.$refs.recommend.style.bottom=t,this.$refs.scroll.refresh()},loadImage:function(){var e=this;this.checkloaded||(this.checkloaded=!0,setTimeout(function(){e.$refs.scroll.refresh()},20))},selectItem:function(e){this.$router.push({path:"/recommend/"+e.dissid}),this.setDisc(e)},_getRecommend:function(){var e=this;i.i(a.b)().then(function(t){t.code===c.a&&(e.recommends=t.data.slider)})},_getDiscList:function(){var e=this;i.i(a.c)().then(function(t){t.code===c.a&&(e.discList=t.data.list)})}},i.i(h.b)({setDisc:"SET_DISC"})),components:{Slider:o.a,Scroll:l.a,Loading:f.a}}},573:function(e,t,i){t=e.exports=i(540)(!1),t.push([e.i,".recommend[data-v-74b4415a]{position:fixed;width:100%;top:88px;bottom:0}.recommend .recommend-content[data-v-74b4415a]{height:100%;overflow:hidden}.recommend .recommend-content .slider-wrapper[data-v-74b4415a]{position:relative;width:100%;height:0;padding-top:40%;overflow:hidden}.recommend .recommend-content .slider-wrapper .slider-content[data-v-74b4415a]{position:absolute;top:0;left:0;width:100%;height:100%}.recommend .recommend-content .recommend-list .list-title[data-v-74b4415a]{height:65px;line-height:65px;text-align:center;font-size:14px;color:#ffcd32}.recommend .recommend-content .recommend-list .item[data-v-74b4415a]{display:-webkit-box;display:-ms-flexbox;display:flex;box-sizing:border-box;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 20px 20px}.recommend .recommend-content .recommend-list .item .icon[data-v-74b4415a]{-webkit-box-flex:0;-ms-flex:0 0 60px;flex:0 0 60px;width:60px;padding-right:20px}.recommend .recommend-content .recommend-list .item .text[data-v-74b4415a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex:1;flex:1;line-height:20px;overflow:hidden;font-size:14px}.recommend .recommend-content .recommend-list .item .text .name[data-v-74b4415a]{margin-bottom:10px;color:#fff}.recommend .recommend-content .recommend-list .item .text .desc[data-v-74b4415a]{color:hsla(0,0%,100%,.3)}.recommend .recommend-content .loading-container[data-v-74b4415a]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}",""])},576:function(e,t,i){t=e.exports=i(540)(!1),t.push([e.i,".slider[data-v-d589a78a]{min-height:1px}.slider .slider-group[data-v-d589a78a]{position:relative;overflow:hidden;white-space:nowrap}.slider .slider-group .slider-item[data-v-d589a78a]{float:left;box-sizing:border-box;overflow:hidden;text-align:center}.slider .slider-group .slider-item a[data-v-d589a78a]{display:block;width:100%;overflow:hidden;text-decoration:none}.slider .slider-group .slider-item img[data-v-d589a78a]{display:block;width:100%}.slider .dots[data-v-d589a78a]{position:absolute;right:0;left:0;bottom:12px;-webkit-transform:translateZ(1px);transform:translateZ(1px);text-align:center;font-size:0}.slider .dots .dot[data-v-d589a78a]{display:inline-block;margin:0 4px;width:8px;height:8px;border-radius:50%;background:hsla(0,0%,100%,.5)}.slider .dots .dot.active[data-v-d589a78a]{width:20px;border-radius:5px;background:hsla(0,0%,100%,.8)}",""])},583:function(e,t,i){var n=i(573);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(541)("c63bf194",n,!0)},586:function(e,t,i){var n=i(576);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(541)("ed1a5170",n,!0)},589:function(e,t,i){i(586);var n=i(8)(i(559),i(598),"data-v-d589a78a",null);e.exports=n.exports},595:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"recommend",staticClass:"recommend"},[i("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:e.discList}},[i("div",[e.recommends.length?i("div",{staticClass:"slider-wrapper"},[i("div",{staticClass:"slider-content"},[i("slider",{ref:"slider"},e._l(e.recommends,function(t){return i("div",[i("a",{attrs:{href:t.linkUrl}},[i("img",{staticClass:"needsclick",attrs:{src:t.picUrl},on:{load:e.loadImage}})])])}))],1)]):e._e(),e._v(" "),i("div",{staticClass:"recommend-list"},[i("h1",{staticClass:"list-title"},[e._v("热门歌单推荐")]),e._v(" "),i("ul",e._l(e.discList,function(t){return i("li",{key:t,staticClass:"item",on:{click:function(i){e.selectItem(t)}}},[i("div",{staticClass:"icon"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgurl,expression:"item.imgurl"}],attrs:{width:"60",height:"60"}})]),e._v(" "),i("div",{staticClass:"text"},[i("h2",{staticClass:"name",domProps:{innerHTML:e._s(t.creator.name)}}),e._v(" "),i("p",{staticClass:"desc",domProps:{innerHTML:e._s(t.dissname)}})])])}))])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.discList.length,expression:"!discList.length"}],staticClass:"loading-container"},[i("loading")],1)]),e._v(" "),i("router-view")],1)},staticRenderFns:[]}},598:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"slider",staticClass:"slider"},[i("div",{ref:"sliderGroup",staticClass:"slider-group"},[e._t("default")],2),e._v(" "),i("div",{staticClass:"dots"},e._l(e.dots,function(t,n){return i("span",{key:n,staticClass:"dot",class:{active:e.currentPageIndex===n}})}))])},staticRenderFns:[]}}});