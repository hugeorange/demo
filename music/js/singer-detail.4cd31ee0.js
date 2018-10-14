(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["singer-detail"],{"3a7d":function(t,s,e){},5362:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"music-list"},[e("div",{staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"icon-back"})]),e("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),e("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[e("div",{staticClass:"play-wrapper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[e("i",{staticClass:"icon-play"}),e("span",{staticClass:"text",on:{click:t.random}},[t._v("随机播放全部")])])]),e("div",{ref:"filter",staticClass:"filter"})]),e("div",{ref:"layer",staticClass:"bg-layer"}),e("scroll",{ref:"list",staticClass:"list",attrs:{data:t.songs,"listen-scroll":t.listenScroll,"probe-type":t.probeType},on:{scroll:t.scroll}},[e("div",{staticClass:"song-list-wrapper"},[e("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[e("loading")],1)])],1)},a=[],n=e("a322"),c=e("c93e"),l=e("2f62"),r=e("e9fc"),o=e("1cb8"),g=e("99f1"),f=e("3e2c"),u=e("510f"),d=40,h=Object(f["c"])("transform"),m=Object(f["c"])("backdrop-filter"),p={mixins:[u["b"]],props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},computed:{bgStyle:function(){return"background-image:url(".concat(this.bgImage,")")}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.$refs.list.$el.style.top="".concat(this.imageHeight,"px"),this.minTransalteY=-this.imageHeight+d},methods:Object(c["a"])(Object(n["a"])({handlePlaylist:function(t){var s=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=s,this.$refs.list.refresh()},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()},selectItem:function(t,s){this.selectPlay({list:this.songs,index:s})},random:function(){this.randomPlay({list:this.songs})}},"random",function(){this.randomPlay({list:this.songs})}),Object(l["b"])(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var s=Math.max(this.minTransalteY,t),e=1,i=0,a=0,n=Math.abs(t/this.imageHeight);t>0?(e=1+n,i=10):a=Math.min(20,20*n),this.$refs.layer.style[h]="translate3d(0,".concat(s,"px,0)"),this.$refs.filter.style[m]="blur(".concat(a,"px)"),t<this.minTransalteY?(i=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="".concat(d,"px"),this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style[h]="scale(".concat(e,")"),this.$refs.bgImage.style.zIndex=i}},components:{Scroll:r["a"],Loading:o["a"],SongList:g["a"]}},b=p,y=(e("8c01"),e("2877")),v=Object(y["a"])(b,i,a,!1,null,"6c90018d",null);v.options.__file="music-list.vue";s["a"]=v.exports},"53f8":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"slide"}},[e("music-list",{attrs:{songs:t.songs,title:t.title,"bg-image":t.bgImage}})],1)},a=[],n=(e("ac6a"),e("7f7f"),e("c93e")),c=e("2f62"),l=e("7f5c"),r=e("da71"),o=e("f5de"),g=e("5362"),f={data:function(){return{songs:[]}},computed:Object(n["a"])({title:function(){return this.singer.name},bgImage:function(){return this.singer.avatar}},Object(c["c"])(["singer"])),created:function(){this._getDetail()},methods:{_getDetail:function(){var t=this;this.singer.id?Object(l["a"])(this.singer.id).then(function(s){s.code===r["a"]&&t._normalizeSongs(s.data.list)}):this.$router.push("/singer")},_normalizeSongs:function(t){var s=[];t.forEach(function(t){var e=t.musicData;e.songid&&e.albummid&&s.push(Object(o["a"])(e))}),this.songs=s}},components:{MusicList:g["a"]}},u=f,d=(e("d50c"),e("2877")),h=Object(d["a"])(u,i,a,!1,null,"213fd403",null);h.options.__file="singer-detail.vue";s["default"]=h.exports},"7f5c":function(t,s,e){"use strict";e.d(s,"b",function(){return n}),e.d(s,"a",function(){return c});e("f751");var i=e("5693"),a=e("da71");function n(){var t="https://c.y.qq.com/v8/fcg-bin/v8.fcg",s=Object.assign({},a["c"],{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq"});return Object(i["a"])(t,s,a["d"])}function c(t){var s="https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",e=Object.assign({},a["c"],{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:80,songstatus:1,singermid:t});return Object(i["a"])(s,e,a["d"])}},"8c01":function(t,s,e){"use strict";var i=e("3a7d"),a=e.n(i);a.a},a80b:function(t,s,e){},d50c:function(t,s,e){"use strict";var i=e("a80b"),a=e.n(i);a.a}}]);
//# sourceMappingURL=singer-detail.4cd31ee0.js.map