

 /*判断是否移动端*/
 function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}
 /*文章展开隐藏*/
 function expandText(selector, maxLength) {
      var text = $(selector).text(); // 获取文本内容
      if (text.length > maxLength) {
        var shortText = text.substr(0, maxLength); // 截取前10个字符
        var longText = text.substr(maxLength); // 截取剩余的文字
        $(selector).html(shortText + '<span class="none">' + longText + '</span>' + '<a href="#" class="toggle-content">...Mở rộng</a>');
        $('.toggle-content').click(function(e) {
          e.preventDefault();
          $(this).prev('.none').toggle(); // 切换隐藏/显示状态
          if ($(this).text() === '...Mở rộng') {
            $(this).text('Thu nhỏ');
          } else {
            $(this).text('...Mở rộng');
          }
        });
      }
 }
 /*滚动到点击可视区*/
function handleScrollPosition(containerSelector, direction) {
  // 获取之前记录的滚动位置（如果有）
  var scrollPos = localStorage.getItem('scrollPosition_' + direction);
  // 如果有记录的滚动位置，则滚动到该位置
  if (scrollPos !== null) {
    if (direction === 'x') {
      $(containerSelector).scrollLeft(scrollPos);
    } else if (direction === 'y') {
      $(containerSelector).scrollTop(scrollPos);
    }
  }
  // 监听滚动事件，并保存滚动位置到本地存储
  $(containerSelector).on('scroll', function() {
    var currentScroll = $(this)[direction === 'x' ? 'scrollLeft' : 'scrollTop']();
    localStorage.setItem('scrollPosition_' + direction, currentScroll);
  });
}

/*-----------------------播放记录------------------------------*/
function saveToStorage(vodId, vodName, vodepisode, siteUrl) {
  var expirationTime = 24 * 60 * 60 * 1000; // 一天的毫秒数
  var currentTime = new Date().getTime();
  // 检查本地存储中是否已有记录
  var existingRecords = localStorage.getItem('vodRecords');
  existingRecords = existingRecords ? JSON.parse(existingRecords) : [];
  // 查找是否存在相同 vodId 的记录
  var foundIndex = existingRecords.findIndex(function(record) {
    return record.vodId === vodId;
  });
  // 如果找到相同 vodId 的记录，则更新其 vodepisode 和 timestamp 并移到最前面
  if (foundIndex !== -1) {
    existingRecords[foundIndex].vodepisode = vodepisode;
    existingRecords[foundIndex].siteUrl = siteUrl;
    existingRecords[foundIndex].timestamp = currentTime;
    var foundRecord = existingRecords.splice(foundIndex, 1)[0]; // 移除原有记录
    existingRecords.unshift(foundRecord); // 将更新后的记录放到数组最前面
  } else {
    // 否则，创建一个新记录并添加到数组中
    var newRecord = {
      vodId: vodId,
      vodName: vodName,
      vodepisode: vodepisode,
      siteUrl: siteUrl,
      timestamp: currentTime
    };
    existingRecords.unshift(newRecord); // 将新记录添加到数组最前面
     // 限制存储最多6条记录
    if (existingRecords.length > 5) {
      existingRecords = existingRecords.slice(0, 5); // 截取前6条记录
    }
  }
  // 过滤掉过期记录
  existingRecords = existingRecords.filter(function(record) {
    return (currentTime - record.timestamp) < expirationTime;
  });
  // 保存更新后的记录到本地存储
  localStorage.setItem('vodRecords', JSON.stringify(existingRecords));
}
// 获取存储记录函数
function getStoredRecords() {
  return JSON.parse(localStorage.getItem('vodRecords'));
}
// 清除存储记录函数
function clearStorage() {
  localStorage.removeItem('vodRecords');
}
// 准备将记录添加到 .watch-history ul，新的记录在前
function appendRecordsToUl() {
  var records = getStoredRecords();
  var ulElement = $('.watch-history ul');
  // 清空 ul 元素内容
  ulElement.empty();
  // 遍历记录并将其追加到 ul 元素中
  if (records && records.length > 0) {
    records.forEach(function(record) {
      var listItem = '<li><a href="' + record.siteUrl + '">' +
                     '<span class="tit nowrap">' + record.vodName + '</span>' +
                     '<span class="episode">' + record.vodepisode + '</span>' +
                     '</a></li>';
      ulElement.append(listItem);
    });
  } else {
    ulElement.append('<li>Chưa có bản phát lại nào</li>');
  }
}
/*-----------------------播放记录 end---------------------------*/
$(function () {
     /*懒加载*/
    $("img.lazyload").lazyload();
     /*菜单*/
    $(".menu").hover(function() {
        $(this).find(".menu-ul").css("display","flex").css("flex-flow","wrap").show();
    },function() {
        $(this).find(".menu-ul").hide();
    });
    
    // 点击切换主题风格
    $('.changetheme').hover(function() {
        $('.zy-style').toggleClass('expand');
    });
    // 在页面加载时检查并应用保存的主题样式
    var savedTheme = localStorage.getItem('theme_style');
    if (savedTheme !== null) {
        $('body').addClass("style-for-" + savedTheme);
        $('.logo a img').attr('src', '/template/zhiyan/assets/logo-'+savedTheme+'.png');
    }
    $(".zy-style a").click(function(){
        var styleName = $(this).attr("style-text");
        var expirationDays = 1; // Cookie 有效期为一天
        
        // 移除之前保存的主题样式
        var styleClasses = $('body').attr('class').split(' ');
        var classesToKeep = styleClasses.filter(className => !className.startsWith('style-for-'));
        $('body').removeClass().addClass(classesToKeep.join(' '));
        
        // 添加新的主题样式并保存到 localStorage
        $('body').addClass("style-for-" + styleName);
        $('.logo a img').attr('src', '/template/zhiyan/assets/logo-'+styleName+'.png');
        localStorage.setItem('theme_style', styleName);
    });

    /*分享*/
    var clipboard = new ClipboardJS('.share');
    $(".share").click(function () {
        $.toast({
            heading: 'Đã sao chép thành công, vui lòng chia sẻ',
            position: 'mid-center',
            icon: 'success',
            loader: true,
            loaderBg: '#439b6b',
            text: $(this).attr('data-clipboard-text'),
        })
    });
    
    /*播放记录*/
    appendRecordsToUl();
});