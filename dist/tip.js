define("#tip/0.9.0/tip",["$","#popup/0.9.7/popup","#overlay/0.9.9/overlay","#position/1.0.0/position","#iframe-shim/1.0.0/iframe-shim","#widget/1.0.0/widget","#base/1.0.0/base","#class/1.0.0/class","#events/1.0.0/events"],function(e,t,n){var r=e("$"),i=e("#popup/0.9.7/popup"),s=i.extend({attrs:{content:"",direction:"up",distance:8,arrowShift:24},_setAlign:function(){var e={baseElement:this.get("trigger")[0]},t=this.get("arrowShift"),n=this.get("distance"),r=this.get("direction");t<0&&(t="100%"+t),r==="up"?(e.baseXY=["50%",0],e.selfXY=[t,"100%+"+n]):r==="down"?(e.baseXY=["50%","100%+"+n],e.selfXY=[t,0]):r==="left"?(e.baseXY=[0,"50%"],e.selfXY=["100%+"+n,t]):r==="right"&&(e.baseXY=["100%+"+n,"50%"],e.selfXY=[0,t]),this.set("align",e)},setup:function(){s.superclass.setup.call(this),this._setAlign()},_onRenderContent:function(e){var t=this.$('[data-role="content"]');typeof e!="string"&&(e=e.call(this)),t&&t.html(e)}});n.exports=s});