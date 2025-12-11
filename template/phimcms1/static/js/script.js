/* ----------------------------------
  框架：首涂
  作者：首涂主题
----------------------------------*/

/*!
 * 建议复制插件
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return n={686:function(t,e,n){"use strict";n.d(e,{default:function(){return o}});var e=n(279),i=n.n(e),e=n(370),u=n.n(e),e=n(817),c=n.n(e);function a(t){try{return document.execCommand(t)}catch(t){return}}var f=function(t){t=c()(t);return a("cut"),t};var l=function(t){var e,n,o,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body},i="";return"string"==typeof t?(e=t,n="rtl"===document.documentElement.getAttribute("dir"),(o=document.createElement("textarea")).style.fontSize="12pt",o.style.border="0",o.style.padding="0",o.style.margin="0",o.style.position="absolute",o.style[n?"right":"left"]="-9999px",n=window.pageYOffset||document.documentElement.scrollTop,o.style.top="".concat(n,"px"),o.setAttribute("readonly",""),o.value=e,o=o,r.container.appendChild(o),i=c()(o),a("copy"),o.remove()):(i=c()(t),a("copy")),i};function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var s=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,o=t.container,e=t.target,t=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==e){if(!e||"object"!==r(e)||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return t?l(t,{container:o}):e?"cut"===n?f(e):l(e,{container:o}):void 0};function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=m(n);return t=o?(t=m(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==p(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){t="data-clipboard-".concat(t);if(e.hasAttribute(t))return e.getAttribute(t)}var o=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(r,i());var t,e,n,o=h(r);function r(t,e){var n;return function(t){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this),(n=o.call(this)).resolveOptions(e),n.listenClick(t),n}return t=r,n=[{key:"copy",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body};return l(t,e)}},{key:"cut",value:function(t){return f(t)}},{key:"isSupported",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof t?[t]:t,e=!!document.queryCommandSupported;return t.forEach(function(t){e=e&&!!document.queryCommandSupported(t)}),e}}],(e=[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===p(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=u()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",t=s({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(t?"success":"error",{action:n,text:t,trigger:e,clearSelection:function(){e&&e.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return v("action",t)}},{key:"defaultTarget",value:function(t){t=v("target",t);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(t){return v("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&d(t.prototype,e),n&&d(t,n),r}()},828:function(t){var e;"undefined"==typeof Element||Element.prototype.matches||((e=Element.prototype).matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector),t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,n){var u=n(828);function i(t,e,n,o,r){var i=function(e,n,t,o){return function(t){t.delegateTarget=u(t.target,n),t.delegateTarget&&o.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,r)}))}},879:function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var f=n(879),l=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!f.string(e))throw new TypeError("Second argument must be a String");if(!f.fn(n))throw new TypeError("Third argument must be a Function");if(f.node(t))return c=e,a=n,(u=t).addEventListener(c,a),{destroy:function(){u.removeEventListener(c,a)}};if(f.nodeList(t))return o=t,r=e,i=n,Array.prototype.forEach.call(o,function(t){t.addEventListener(r,i)}),{destroy:function(){Array.prototype.forEach.call(o,function(t){t.removeEventListener(r,i)})}};if(f.string(t))return t=t,e=e,n=n,l(document.body,t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,r,i,u,c,a}},817:function(t){t.exports=function(t){var e,n="SELECT"===t.nodeName?(t.focus(),t.value):"INPUT"===t.nodeName||"TEXTAREA"===t.nodeName?((e=t.hasAttribute("readonly"))||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),e||t.removeAttribute("readonly"),t.value):(t.hasAttribute("contenteditable")&&t.focus(),n=window.getSelection(),(e=document.createRange()).selectNodeContents(t),n.removeAllRanges(),n.addRange(e),n.toString());return n}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,u=o.length;i<u;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},r={},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o(686).default;function o(t){if(r[t])return r[t].exports;var e=r[t]={exports:{}};return n[t](e,e.exports,o),e.exports}var n,r});

/*!
 * 提示框
 */
let msgTimer;
function msg(txt) {
    clearTimeout(msgTimer);

    const msgBoxHtml = '<div class="msg"><span class="msg-box-msg"></span></div>';
    const bodyElement = document.querySelector('body');
    const msgElement = document.querySelector('.msg');

    if (msgElement) {
        msgElement.remove();
    }

    bodyElement.insertAdjacentHTML('beforeend', msgBoxHtml);

    const msgBoxMsgElement = document.querySelector('.msg-box-msg');
    msgBoxMsgElement.innerHTML = txt;

    msgTimer = setTimeout(function () {
        let msgElement = document.querySelector('.msg');
        msgElement.remove();
        clearTimeout(msgTimer);
    }, 2000);
}

/*!
 * 返回上一页
 */
function goBack() {
    if (typeof window.history.back === 'function') {
        window.history.back();
    } else {
        window.location.href = document.referrer || '/';
    }
}

/*!
 * 请求功能
 */
function Ajax(url,type,dataType,data,sfun,efun,cfun){
    type=type||'get';
    dataType=dataType||'json';
    data=data||'';
    efun=efun||'';
    cfun=cfun||'';
    $.ajax({
        url:url,
        type:type,
        dataType:dataType,
        data:data,
        timeout: 5000,
        beforeSend:function(XHR){

        },
        error:function(XHR,textStatus,errorThrown){
            if(efun) efun(XHR,textStatus,errorThrown);
        },
        success:function(data){
            sfun(data);
        },
        complete:function(XHR, TS){
            if(cfun) cfun(XHR, TS);
        }
    })
}

/*!
 * 留言提交
 */
function Gbook_Init() {

    $(".mac-verify").click(function(){
        let verify = $('.verify-img');
        if(verify){
            $('.verify-img').show();
        }
    });

    $('body').on('keyup', '.gbook-content', function(e){
        var count = 200 - $(this).val().length;
        if(count < 0){
            count = 0;
            $(this).val($(this).val().substr(0,200));
        }
        $('.gbook-remaining').text(count);
    });

    $(".gbook-submit").click(function(){
        if($(".gbook-content").val() == ''){
            msg("Please enter your message!");
            return false;
        }
        Ajax(maccms.path + '/index.php/gbook/saveData','post','json',$('.gbook-form').serialize(),function(r){
            msg(r.msg);
            if(r.code == 1){
                location.reload();
            }
            else{
                $('.verify-img').attr('src', maccms.path +'/index.php/verify/index.html?r='+Math.random());
            }
        });
    });
}

window.onload = function() {

    /*------------滑动---------------*/
    let Sw = {
        'Navs': function() {
            new Swiper('.nav-swiper', {
                observer: true,
                freeMode: true,
                slidesPerView: 'auto',
                direction:'horizontal',
                on: {
                    init: function() {Sw.Nav(this.$el,this.$wrapperEl,this.virtualSize);},
                    observerUpdate: function(){Sw.Nav(this.$el,this.$wrapperEl,this.virtualSize);}
                }
            });
        },
        'Nav':function(el,wrapperEl,v){
            if (el.find(".nav-dt").length>0) {
                let a = el.find(".nav-dt").outerWidth(true);
                let b = el.find(".nav-dt")[0].offsetLeft;
                let c = wrapperEl.parent().outerWidth(true);
                let d = parseInt(v);
                wrapperEl.transition(300);
                if (b < (c - parseInt(a)) / 2) {
                    wrapperEl.transform('translate3d(0px,0px,0px)');
                } else if (b > d - (parseInt(a) + c) / 2) {
                    wrapperEl.transform('translate3d(' + (c - d) + 'px,0px,0px)');
                } else {
                    wrapperEl.transform('translate3d(' + ((c - parseInt(a)) / 2 - b) + 'px,0px,0px)');
                }
            }
        }
    }
    Sw.Navs();
    /*------------公告弹窗---------------*/

    /*------------公告弹窗---------------*/
    $(".window-close").click(function(){
        $(".shoutu-window-bj,.shoutu-window").hide();
    });

    const currentDate = new Date().toLocaleDateString();
    const dismissedDate = localStorage.getItem('dismissedDate');

    if (dismissedDate !== currentDate) {
        $(".shoutu-window-bj,.shoutu-notice").show();
    }

    $('#notice-ok').click(function() {
        localStorage.setItem('dismissedDate', currentDate);
        $(".shoutu-window-bj,.shoutu-notice").hide();
    });

    $("#qun").click(function(){
        $(".shoutu-window-bj,.shoutu-qun").show();
    });

    /*------------公告弹窗---------------*/


    /*------------分页自动跳转---------------*/

    const pageJumpInput = document.getElementById('page-jump');
    let timeoutId;

    if (pageJumpInput) {
        pageJumpInput.addEventListener('input', function() {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function() {
                const value = pageJumpInput.value.trim();
                if (/^\d+$/.test(value)) {
                    const pageNumber = parseInt(value, 10);
                    jumpToPage(pageNumber);
                } else if (value === '') {
                    msg("Please enter some!");
                } else {
                    msg("Please enter some valid number!");
                }
            }, 500);
        });
    }

    function jumpToPage(page) {
        if (!pageJumpInput) {
            return false;
        }

        let url = pageJumpInput.getAttribute('data-url');
        const total = parseInt(pageJumpInput.getAttribute('data-total'));
        const sp = pageJumpInput.getAttribute('data-sp');

        if (page > 0 && page <= total) {
            url = url.replace(sp + 'PAGELINK', sp + page).replace('PAGELINK', page);
            location.href = url;
        }
        return false;
    }

    /*------------分页自动跳转---------------*/


    /*------------移动端导航---------------*/
    function nav(){
        const menuContainer = document.querySelector('.menu-container');
        let isDragging = false;
        let startX;
        let scrollLeft;

        if (menuContainer) {
            menuContainer.addEventListener('mousedown', function(event) {
                isDragging = true;
                startX = event.pageX - menuContainer.offsetLeft;
                scrollLeft = menuContainer.scrollLeft;
            });

            menuContainer.addEventListener('mousemove', function(event) {
                if (!isDragging) return;
                event.preventDefault();
                let x = event.pageX - menuContainer.offsetLeft;
                let walk = (x - startX) * 2;
                menuContainer.scrollLeft = scrollLeft - walk;
            });

            menuContainer.addEventListener('mouseup', function() {
                isDragging = false;
            });

            menuContainer.addEventListener('mouseleave', function() {
                isDragging = false;
            });
        }
    }
    /*------------移动端导航---------------*/

    /*------------复制功能---------------*/
    let clipboard1 = new ClipboardJS('.this-url2', {
        text: function(trigger) {
            return trigger.textContent;
        }
    });
    clipboard1.on('success', function(event) {
        event.clearSelection();
        msg('Successfully copied the link');
    });
    clipboard1.on('error', function(event) {
        msg('Lỗi sao chép liên kết:', event.trigger);
    });

    let clipboard2 = new ClipboardJS('.copy-all', {
        text: function(trigger) {
            return trigger.getAttribute('data-txt');
        }
    });
    clipboard2.on('success', function(event) {
        event.clearSelection();
        msg('Successfully copied the link');
    });
    clipboard2.on('error', function(event) {
        msg('Link copy copy error:', event.trigger);
    });

    let clipboard3 = new ClipboardJS('.copy-url', {
        text: function(trigger) {
            return trigger.getAttribute('data-txt');
        }
    });
    clipboard3.on('success', function(event) {
        event.clearSelection();
        msg('Successfully copied the link');
    });
    clipboard3.on('error', function(event) {
        msg('Link copy copy error:', event.trigger);
    });

    const shareElement = document.getElementById('share');
    const currentURL = window.location.href;
    const currentTitle = document.title;

    if(shareElement) {
        shareElement.setAttribute('data-url', currentTitle + currentURL);

        shareElement.addEventListener('click', function() {
            let clipboard4 = new ClipboardJS('#share', {
                text: function(trigger) {
                    return trigger.getAttribute('data-url');
                }
            });
            clipboard4.on('success', function(event) {
                event.clearSelection();
                msg('Copy successfully and share with friends');
            });
            clipboard4.on('error', function(event) {
                msg('Error occurred when copying content:', event.trigger);
            });
        });
    }
    /*------------复制功能---------------*/
};