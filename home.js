document.addEventListener("DOMContentLoaded",function(){function e(e){var n="#world-after-capital";if("#"===n[0]){e.preventDefault();var t=document.getElementById(n.slice(1)),i=t.offsetTop;PageAnimation.scrollTo(i,200)}}var n=document.getElementById("work-link"),t=((new Sections).enable(),640),i=new MobileDetect(window.navigator.userAgent);n.addEventListener("click",e),null===i.mobile()&&new PageAnimation({animateLinksToSelf:!0,scrollTiming:"during",shouldAnimate:function(){return window.innerWidth>t},computeScrollOffset:function(e){if("/"===e.path)return 0;for(var n=e.anchor;n;){if(n.className.indexOf("animated-section")>-1)return n.offsetTop;n=n.parentElement}}}).register(/^\/$/,"sections","animating-to-home",{scrollTiming:"after"}).register(/^\/wac\/?$/,"sections","animating-to-wac-project").register(/^\/fin\/?$/,"sections","animating-to-fin-project").register(/^\/upchannel\/?$/,"sections","animating-to-upchannel-project").register(/^\/unscan\/?$/,"sections","animating-to-unscan-project").register(/^\/team\/?$/,"sections","animating-to-team-page").enable()});
//# sourceMappingURL=dist/js/home.js.map
