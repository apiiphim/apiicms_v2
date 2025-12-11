<?php
return array (
  'db' => 
  array (
    'type' => 'mysql',
    'path' => '',
    'server' => '127.0.0.1',
    'port' => '3306',
    'name' => 'phimcms',
    'user' => 'root',
    'pass' => 'root',
    'tablepre' => 'mac_',
    'backup_path' => './application/data/backup/database/',
    'part_size' => 20971520,
    'compress' => 1,
    'compress_level' => 4,
  ),
  'site' => 
  array (
    'site_name' => 'Free Short Video Sharing - PhimCMS.com',
    'site_url' => 'www.phimcms.com',
    'site_wapurl' => 'mobi.phimcms.com',
    'site_keywords' => 'short video, funny video, video sharing, free video, online video, trailer',
    'site_description' => 'Provides the latest and fastest video sharing data',
    'site_icp' => 'icp123',
    'site_qq' => '123456',
    'site_email' => 'qq@phimcms.com',
    'install_dir' => '/',
    'site_logo' => 'static/images/logo.jpg',
    'site_waplogo' => 'static/images/logo.jpg',
    'template_dir' => 'phimcms1',
    'html_dir' => 'html',
    'site_polyfill' => '1',
    'mob_status' => '0',
    'mob_template_dir' => 'default',
    'mob_html_dir' => 'html',
    'site_tj' => 'Statistics code',
    'site_status' => '1',
    'site_close_tip' => 'The site is temporarily closed, please visit later',
    'new_version' => '0',
    'ads_dir' => 'ads',
    'mob_ads_dir' => 'ads',
  ),
  'app' => 
  array (
    'pathinfo_depr' => '/',
    'suffix' => 'html',
    'popedom_filter' => '0',
    'cache_type' => 'file',
    'cache_host' => '127.0.0.1',
    'cache_port' => '6379',
    'cache_username' => '',
    'cache_password' => '',
    'cache_flag' => 'a6bcf9aa58',
    'cache_core' => '1',
    'cache_time' => '3600',
    'cache_page' => '0',
    'cache_time_page' => '3600',
    'compress' => '0',
    'input_type' => '1',
    'ajax_page' => '0',
    'wall_filter' => '0',
    'show' => '1',
    'show_verify' => '0',
    'search' => '1',
    'search_verify' => '0',
    'search_len' => '2',
    'search_timespan' => '1',
    'search_vod_rule' => 'vod_en|vod_sub',
    'search_art_rule' => 'art_en|art_sub',
    'vod_search_optimise_cache_minutes' => 20160,
    'copyright_status' => '1',
    'copyright_notice' => 'This video is not available for playback due to copyright restrictions.',
    'browser_junmp' => '0',
    'page_404' => '404',
    'player_sort' => '1',
    'encrypt' => '0',
    'search_hot' => 'Xuy&ecirc;n kh&ocirc;ng, Tr&ugrave;ng Sinh',
    'art_extend_class' => 'Xuy&ecirc;n kh&ocirc;ng, Tr&ugrave;ng Sinh',
    'vod_extend_class' => 'Phim Lẻ,Phim Bộ, Hoạt H&igrave;nh, TV-Shows',
    'vod_extend_state' => 'Việt Nam',
    'vod_extend_version' => '1080p,720p,4K,HD,	1440p',
    'vod_extend_area' => 'H&agrave;n Quốc, Th&aacute;i Lan, &Acirc;u Mỹ, Nhật Bản, Việt Nam',
    'vod_extend_lang' => 'Vietsub,Thuyết Minh, Lồng Tiếng',
    'vod_extend_year' => '1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026',
    'vod_extend_weekday' => 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday',
    'actor_extend_area' => '',
    'filter_words' => 'www,http,com,net',
    'extra_var' => '',
    'collect_timespan' => '3',
    'pagesize' => '20',
    'makesize' => '30',
    'admin_login_verify' => '1',
    'editor' => 'Ueditor',
    'lang' => 'vi-vn',
    'vod_search_optimise' => '',
  ),
  'user' => 
  array (
    'status' => '0',
    'reg_open' => '0',
    'reg_status' => '1',
    'reg_phone_sms' => '0',
    'reg_email_sms' => '0',
    'email_white_hosts' => '',
    'email_black_hosts' => '',
    'reg_verify' => '0',
    'login_verify' => '0',
    'reg_points' => '10',
    'reg_num' => '1',
    'invite_reg_points' => '10',
    'invite_visit_points' => '1',
    'invite_visit_num' => '1',
    'reward_status' => '1',
    'reward_ratio' => '10',
    'reward_ratio_2' => '30',
    'reward_ratio_3' => '50',
    'cash_status' => '1',
    'cash_ratio' => '100',
    'cash_min' => '1',
    'trysee' => '0',
    'vod_points_type' => '1',
    'art_points_type' => '1',
    'portrait_status' => '1',
    'portrait_size' => '100x100',
    'filter_words' => 'admin,cao,sex,xxx',
  ),
  'gbook' => 
  array (
    'status' => '0',
    'audit' => '0',
    'login' => '0',
    'verify' => '1',
    'pagesize' => '20',
    'timespan' => '3',
  ),
  'comment' => 
  array (
    'status' => '1',
    'audit' => '0',
    'login' => '0',
    'verify' => '1',
    'pagesize' => '20',
    'timespan' => '3',
  ),
  'upload' => 
  array (
    'img_key' => 'baidu|douban|tvmao',
    'img_api' => '/img.php?url=',
    'thumb' => '0',
    'thumb_size' => '300x300',
    'thumb_type' => '1',
    'watermark' => '0',
    'watermark_location' => '7',
    'watermark_content' => 'phimcms.com',
    'watermark_size' => '40',
    'watermark_color' => '#cb9604',
    'protocol' => 'http',
    'mode' => 'local',
    'keep_local' => '0',
    'remoteurl' => 'https://img.phim-cms.com/',
    'api' => 
    array (
      'ftp' => 
      array (
        'host' => '',
        'port' => '21',
        'user' => 'test',
        'pwd' => 'test',
        'path' => '/',
        'url' => '',
      ),
      'qiniu' => 
      array (
        'bucket' => '',
        'accesskey' => '',
        'secretkey' => '',
        'url' => '',
      ),
      's3' => 
      array (
        'bucket' => '',
        'accesskey' => '',
        'secretkey' => '',
        'region' => '',
      ),
      'uomg' => 
      array (
        'openid' => '',
        'key' => '',
        'type' => 'sogou',
      ),
      'upyun' => 
      array (
        'bucket' => '',
        'username' => '',
        'pwd' => '',
        'url' => '',
      ),
      'weibo' => 
      array (
        'user' => '',
        'pwd' => '',
        'size' => 'large',
        'cookie' => '',
        'time' => '1546239694',
      ),
    ),
  ),
  'interface' => 
  array (
    'status' => 0,
    'pass' => 'PSICYXE57DUSY2H5',
    'vodtype' => 'Action Movie=Action',
    'arttype' => 'Headline=Headline',
    'actortype' => '',
    'websitetype' => '',
  ),
  'pay' => 
  array (
    'min' => '10',
    'scale' => '1',
    'card' => 
    array (
      'url' => '',
    ),
    'alipay' => 
    array (
      'account' => '111',
      'appid' => '',
      'appkey' => '',
    ),
    'codepay' => 
    array (
      'appid' => '40625',
      'appkey' => '',
      'type' => '1,2',
      'act' => '0',
    ),
    'weixin' => 
    array (
      'appid' => '222',
      'mchid' => '',
      'appkey' => '',
    ),
    'zhapay' => 
    array (
      'appid' => '18039',
      'appkey' => '',
      'type' => '1,2',
      'act' => '2',
    ),
  ),
  'collect' => 
  array (
    'vod' => 
    array (
      'status' => '1',
      'hits_start' => '1',
      'hits_end' => '1000',
      'updown_start' => '1',
      'updown_end' => '1000',
      'score' => '1',
      'pic' => '0',
      'tag' => '0',
      'class_filter' => '1',
      'psename' => '1',
      'psernd' => '0',
      'psesyn' => '0',
      'urlrole' => '0',
      'inrule' => ',a,f,g',
      'uprule' => ',a',
      'filter' => 'Lust, Love is All',
      'namewords' => 'Season 1=First Season#Season 2=Second Season#Season 3=Third Season#Season 4=Fourth Season',
      'thesaurus' => ' =',
      'words' => 'aaa#bbb#ccc#ddd#eee',
      'inrule_first_change' => true,
    ),
    'art' => 
    array (
      'status' => '1',
      'hits_start' => '1',
      'hits_end' => '1000',
      'updown_start' => '1',
      'updown_end' => '1000',
      'score' => '1',
      'pic' => '0',
      'tag' => '0',
      'psernd' => '0',
      'psesyn' => '0',
      'inrule' => ',b',
      'uprule' => ',a,d',
      'filter' => 'The Helpless Person',
      'thesaurus' => '',
      'words' => '',
    ),
    'actor' => 
    array (
      'status' => '0',
      'hits_start' => '1',
      'hits_end' => '999',
      'updown_start' => '1',
      'updown_end' => '999',
      'score' => '0',
      'pic' => '0',
      'psernd' => '0',
      'psesyn' => '0',
      'uprule' => ',a,b,c',
      'filter' => 'The Helpless Person',
      'thesaurus' => '',
      'words' => '',
      'inrule' => ',a',
    ),
    'role' => 
    array (
      'status' => '0',
      'hits_start' => '1',
      'hits_end' => '999',
      'updown_start' => '1',
      'updown_end' => '999',
      'score' => '0',
      'pic' => '0',
      'psernd' => '0',
      'psesyn' => '0',
      'uprule' => ',a,b,c',
      'filter' => '',
      'thesaurus' => '',
      'words' => '',
      'inrule' => ',a',
    ),
    'website' => 
    array (
      'status' => '0',
      'hits_start' => '',
      'hits_end' => '',
      'updown_start' => '',
      'updown_end' => '',
      'score' => '0',
      'pic' => '0',
      'psernd' => '0',
      'psesyn' => '0',
      'filter' => '',
      'thesaurus' => '',
      'words' => '',
      'inrule' => ',a',
      'uprule' => ',',
    ),
    'comment' => 
    array (
      'status' => '0',
      'updown_start' => '1',
      'updown_end' => '100',
      'psernd' => '0',
      'psesyn' => '0',
      'inrule' => ',b',
      'filter' => '',
      'thesaurus' => '',
      'words' => '',
      'uprule' => ',',
    ),
  ),
  'api' => 
  array (
    'vod' => 
    array (
      'status' => 0,
      'charge' => '0',
      'pagesize' => '20',
      'imgurl' => 'https://img.phimcms.com',
      'typefilter' => '',
      'datafilter' => 'vod_status=1',
      'cachetime' => '',
      'from' => '',
      'auth' => 'test.com#163.com',
    ),
    'art' => 
    array (
      'status' => 0,
      'charge' => '0',
      'pagesize' => '20',
      'imgurl' => '',
      'typefilter' => '',
      'datafilter' => 'art_status=1',
      'cachetime' => '',
      'auth' => '',
    ),
    'actor' => 
    array (
      'status' => '0',
      'charge' => '0',
      'pagesize' => '20',
      'imgurl' => '',
      'typefilter' => '',
      'datafilter' => 'actor_status=1',
      'cachetime' => '',
      'auth' => '',
    ),
    'role' => 
    array (
      'status' => '0',
      'charge' => '0',
      'pagesize' => '20',
      'imgurl' => '',
      'typefilter' => '',
      'datafilter' => 'role_status=1',
      'cachetime' => '',
      'auth' => '',
    ),
    'website' => 
    array (
      'status' => '0',
      'charge' => '0',
      'pagesize' => '20',
      'imgurl' => '',
      'typefilter' => '',
      'datafilter' => 'website_status=1',
      'cachetime' => '',
      'auth' => '',
    ),
    'publicapi' => 
    array (
      'status' => '0',
      'charge' => '0',
      'pagesize' => '20',
      'imgurl' => '',
      'typefilter' => '',
      'datafilter' => '',
      'cachetime' => '',
      'auth' => '',
    ),
  ),
  'connect' => 
  array (
    'qq' => 
    array (
      'status' => '0',
      'key' => 'aa',
      'secret' => 'bb',
    ),
    'weixin' => 
    array (
      'status' => '0',
      'key' => 'cc',
      'secret' => 'dd',
    ),
  ),
  'weixin' => 
  array (
    'status' => '0',
    'duijie' => 'wx.test.com',
    'sousuo' => 'wx.test.com',
    'token' => 'qweqwe',
    'guanzhu' => 'Welcome to follow',
    'wuziyuan' => 'Resource not found, please change keywords or wait for updates',
    'wuziyuanlink' => 'demo.test.com',
    'bofang' => '0',
    'msgtype' => '0',
    'gjc1' => 'Keyword 1',
    'gjcm1' => 'Great Wall',
    'gjci1' => 'http://img.aolusb.com/im/201610/2016101222371965996.jpg',
    'gjcl1' => 'http://www.loldytt.com/Dongzuodianying/CC/',
    'gjc2' => 'Keyword 2',
    'gjcm2' => 'Resident Evil 6',
    'gjci2' => 'http://img.aolusb.com/im/201702/20172711214866248.jpg',
    'gjcl2' => 'http://www.loldytt.com/Kehuandianying/SHWJ6ZZ/',
    'gjc3' => 'Keyword 3',
    'gjcm3' => 'Mekong River Action',
    'gjci3' => 'http://img.aolusb.com/im/201608/201681719561972362.jpg',
    'gjcl3' => 'http://www.loldytt.com/Dongzuodianying/GHXD/',
    'gjc4' => 'Keyword 4',
    'gjcm4' => 'The King of Comedy',
    'gjci4' => 'http://img.aolusb.com/im/201601/201612723554344882.jpg',
    'gjcl4' => 'http://www.loldytt.com/Xijudianying/WPDWP/',
  ),
  'view' => 
  array (
    'index' => '0',
    'map' => '0',
    'search' => '0',
    'rss' => '0',
    'label' => '0',
    'vod_type' => '0',
    'vod_show' => '0',
    'art_type' => '0',
    'art_show' => '0',
    'topic_index' => '0',
    'topic_detail' => '0',
    'vod_detail' => '0',
    'vod_play' => '0',
    'vod_down' => '0',
    'art_detail' => '0',
  ),
  'path' => 
  array (
    'topic_index' => 'topic/index',
    'topic_detail' => 'topic/{en}/index',
    'vod_type' => 'vodtypehtml/{en}/index',
    'vod_detail' => 'vodhtml/{en}/index',
    'vod_play' => 'vodplayhtml/{en}/index',
    'vod_down' => 'voddownhtml/{en}/index',
    'art_type' => 'arttypehtml/{en}/index',
    'art_detail' => 'arthtml/{en}/index',
    'page_sp' => '_',
    'suffix' => 'html',
  ),
  'rewrite' => 
  array (
    'suffix_hide' => '0',
    'route_status' => '1',
    'status' => '1',
    'encode_key' => 'abcdefg',
    'encode_len' => '6',
    'vod_id' => '1',
    'art_id' => '1',
    'type_id' => '1',
    'topic_id' => '1',
    'actor_id' => '1',
    'role_id' => '1',
    'website_id' => '1',
    'route' => 'map   => map/index
rss/index   => rss/index
rss/baidu => rss/baidu
rss/google => rss/google
rss/sogou => rss/sogou
rss/so => rss/so
rss/bing => rss/bing
rss/sm => rss/sm

index-<page?>   => index/index

gbook-<page?>   => gbook/index
gbook$   => gbook/index

topic-<page?>   => topic/index
topic$  => topic/index
topicdetail-<id>   => topic/detail

actor-<page?>   => actor/index
actor$ => actor/index
actordetail-<id>   => actor/detail
actorshow/<area?>-<blood?>-<by?>-<letter?>-<level?>-<order?>-<page?>-<sex?>-<starsign?>   => actor/show

role-<page?>   => role/index
role$ => role/index
roledetail-<id>   => role/detail
roleshow/<by?>-<letter?>-<level?>-<order?>-<page?>-<rid?>   => role/show


the-loai/<id>-<page?>   => vod/type
the-loai/<id>   => vod/type
xem-phim/<id>   => vod/detail
rss-<id>   => vod/rss
play/<id>-<sid>-<nid>   => vod/play
voddown/<id>-<sid>-<nid>   => vod/down
vodshow/<id>-<area?>-<by?>-<class?>-<lang?>-<letter?>-<level?>-<order?>-<page?>-<state?>-<tag?>-<year?>   => vod/show
tim-kiem/   => vod/search
plot/<id>-<page?>   => vod/plot
plot/<id>   => vod/plot


arttype/<id>-<page?>   => art/type
arttype/<id>   => art/type
artshow-<id>   => art/show
artdetail-<id>-<page?>   => art/detail
artdetail-<id>   => art/detail
artrss-<id>-<page>   => art/rss
artshow/<id>-<by?>-<class?>-<level?>-<letter?>-<order?>-<page?>-<tag?>   => art/show
artsearch/<wd?>-<by?>-<class?>-<level?>-<letter?>-<order?>-<page?>-<tag?>   => art/search

label-<file> => label/index

plotdetail/<id>-<page?>   => plot/plot
plotdetail/<id>   => plot/detail',
  ),
  'email' => 
  array (
    'type' => 'Phpmailer',
    'time' => '5',
    'nick' => 'test',
    'test' => 'test@gmail.com',
    'tpl' => 
    array (
      'test_title' => '【{$maccms.site_name}】Test Email Title',
      'test_body' => '【{$maccms.site_name}】When you see this email, it means the email configuration is correct! Thank you for supporting open source programs!',
      'user_reg_title' => 'Hello member of 【{$maccms.site_name}】, please read the email carefully and follow the instructions to complete registration',
      'user_reg_body' => 'Hello member of 【{$maccms.site_name}】, the registration verification code is: {$code}, please complete the verification within {$time} minutes.',
      'user_bind_title' => 'Hello member of 【{$maccms.site_name}】, please read the email carefully and follow the instructions to complete binding',
      'user_bind_body' => 'Hello member of 【{$maccms.site_name}】, the binding verification code is: {$code}, please complete the verification within {$time} minutes.',
      'user_findpass_title' => 'Hello member of 【{$maccms.site_name}】, please read the email carefully and follow the instructions to recover your password',
      'user_findpass_body' => 'Hello member of 【{$maccms.site_name}】, the recovery verification code is: {$code}, please complete the verification within {$time} minutes.',
    ),
    'phpmailer' => 
    array (
      'host' => 'smtp.gmail.com',
      'port' => '587',
      'secure' => 'tsl',
      'username' => 'test@gmail.com',
      'password' => 'test',
    ),
  ),
  'play' => 
  array (
    'width' => '100%',
    'height' => '100%',
    'widthmob' => '100%',
    'heightmob' => '100%',
    'widthpop' => '0',
    'heightpop' => '600',
    'second' => '0',
    'prestrain' => '/static/player/prestrain.html',
    'buffer' => '/static/player/loading.html',
    'parse' => '',
    'autofull' => '0',
    'showtop' => '1',
    'showlist' => '1',
    'flag' => '0',
    'colors' => '000000,F6F6F6,F6F6F6,333333,666666,FFFFF,FF0000,2c2c2c,ffffff,a3a3a3,2c2c2c,adadad,adadad,48486c,fcfcfc',
  ),
  'sms' => 
  array (
    'type' => '',
    'sign' => 'My Website',
    'tpl_code_reg' => 'SMS_144850895',
    'tpl_code_bind' => 'SMS_144940283',
    'tpl_code_findpass' => 'SMS_144851023',
    'aliyun' => 
    array (
      'appid' => '',
      'appkey' => '',
    ),
    'qcloud' => 
    array (
      'appid' => '',
      'appkey' => '',
    ),
  ),
  'extra' => 
  array (
  ),
  'seo' => 
  array (
    'vod' => 
    array (
      'name' => 'Video Home',
      'key' => 'Short video, funny video, video sharing, free video, online video, trailer',
      'des' => 'Provides the latest and fastest video sharing data',
    ),
    'art' => 
    array (
      'name' => 'Article Home',
      'key' => 'News information, entertainment news, gossip entertainment, paparazzi, major events',
      'des' => 'Provides the latest and fastest news information',
    ),
    'actor' => 
    array (
      'name' => 'Actor Home',
      'key' => 'Mainland stars, Hong Kong and Taiwan stars, Japanese and Korean stars, European and American stars, hottest stars',
      'des' => 'Introduction of personal information of stars',
    ),
    'role' => 
    array (
      'name' => 'Role Home',
      'key' => 'Movie roles, TV roles, anime roles, variety show roles',
      'des' => 'Introduction of character information',
    ),
    'plot' => 
    array (
      'name' => 'Plot Home',
      'key' => 'Plot serialization, plot updates, plot previews, plot completions',
      'des' => 'Provides the latest plot information',
    ),
  ),
  'urlsend' => 
  array (
    'baidu' => 
    array (
      'token' => '111',
    ),
    'baidufast' => 
    array (
      'token' => '222',
    ),
  ),
);