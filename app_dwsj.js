/*

安卓软件名称:电玩世界

项目注册地址(微信打开):http://www.shandw.com/sdwworld/download?sdsj_inviter_id=29999597

邀请码:29999597

cron 0-59/20 0-23 * * *

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_dwsj.js
变量配置文件地址:https://gitee.com/soy-tool/app-script/raw/master/dwsj_variable_data.js

注意:

需要单拉这2个脚本,然后按照 【变量配置文件】 里面提示进行修改
如不想单拉变量配置文件,那就自行创建 raw_master_dwsj_variable_data.js 再复制 变量配置文件地址 里面的内容进行修改

需要单拉这2个脚本,然后按照 【变量配置文件】 里面提示进行修改
如不想单拉变量配置文件,那就自行创建 raw_master_dwsj_variable_data.js 再复制 变量配置文件地址 里面的内容进行修改

需要单拉这2个脚本,然后按照 【变量配置文件】 里面提示进行修改
如不想单拉变量配置文件,那就自行创建 raw_master_dwsj_variable_data.js 再复制 变量配置文件地址 里面的内容进行修改

*/


const $ = new Env('【电玩世界】版本:22/02/27_0');
// @grant require
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodO='jsjiami.com.v6',_0xodO_=['_0xodO'],_0x6ab5=[_0xodO,'\x69\x73\x4e\x6f\x64\x65','\x2e\x2f\x72\x61\x77\x5f\x6d\x61\x73\x74\x65\x72\x5f\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61\x2e\x6a\x73','\x6c\x6f\x67','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x63\x6f\x64\x65','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u6709\u8bef\x2c\u8bf7\u786e\u4fdd\u914d\u7f6e\u6587\u4ef6\u7684\u6b63\u786e\u6027','\x3d\x3d\x3d\u3010\u5171\x20','\x64\x77\x73\x6a\x5f\x76\x61\x72\x69\x61\x62\x6c\x65\x5f\x64\x61\x74\x61','\x64\x77\x73\x6a\x5f\x64\x61\x74\x61','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f','\x75\x73\x65\x72\x5f\x49\x44','\x64\x77\x73\x6a\x5f\x74\x6f\x6b\x65\x6e','\x64\x77\x73\x6a\x5f\x62\x6f\x64\x79','\x64\x77\x73\x6a\x5f\x55\x41','\x64\x77\x73\x6a\x5f\x62\x75\x69\x6c\x64','\x64\x77\x73\x6a\x5f\x73\x69\x67\x6e','\x64\x77\x73\x6a\x5f\x73\x69\x67\x6e\x74\x69\x6d\x65','\x64\x77\x73\x6a\x5f\x55\x50\x62\x75\x69\x6c\x64','\x64\x77\x73\x6a\x5f\x76\x69\x65\x77','\x64\x77\x73\x6a\x5f\x42\x75\x73\x69\x6e\x65\x73\x73','\x64\x77\x73\x6a\x5f\x76\x69\x65\x77\x6e\x75\x6d','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x0a\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x67\x65\x74\x48\x6f\x75\x72\x73','\x73\x69\x67\x6e','\x72\x6f\x6c\x6c\x50\x6f\x69\x6e\x74','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20\u83b7\u5f97\x20','\x64\x61\x74\x61','\x6d\x6f\x76\x65\x45\x76\x65\x6e\x74','\x61\x64\x64\x41\x6c\x6c\x43\x6f\x69\x6e\x73','\x20\u91d1\u5e01','\x75\x73\x65\x72','\x64\x69\x63\x65\x4e\x75\x6d','\x76\x69\x65\x77','\x6d\x65\x73\x73\x61\x67\x65','\u884c\u52a8\u529b\u4e0d\u8db3','\x20\u4e22\u9ab0\u5b50\u3011\x3a\x20','\x74\x6f\x75','\x61\x64\x64\x4e\x65\x77\x42\x75\x69\x6c\x64\x69\x6e\x67','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20\u82b1\u4e86\x20','\x67\x61\x6d\x65\x49\x6e\x66\x6f','\x63\x68\x61\x6e\x67\x65','\x67\x6f\x6c\x64','\x20\u5efa\u9020\u5efa\u7b51\u3011\x3a\x20','\x67\x65\x74\x42\x75\x69\x6c\x64\x69\x6e\x67\x45\x61\x72\x6e','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u6b64\u4f4d\u7f6e\u6ca1\u6709\u5efa\u7b51','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20\u83b7\u5f97\x20','\x20\u9886\u53d6\u5efa\u7b51\u6536\u76ca\u3011\x3a\x20','\x62\x75\x69\x6c\x64\x69\x6e\x67\x4c\x65\x76\x65\x6c\x55\x70','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20\u82b1\x20','\u51b7\u5374\u4e2d','\x20\u5347\u7ea7\u5efa\u7b51\u3011\x3a\x20','\x61\x64\x64\x47\x6f\x6f\x64\x73\x42\x75\x66\x66','\x20\u589e\u6536\x62\x75\x66\x66\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u589e\u52a0\u6b21\u6570','\x42\x75\x73\x69\x6e\x65\x73\x73','\u67e5\u770b\u540d\u7247','\x67\x65\x74\x41\x64\x52\x65\x77\x61\x72\x64','\x20\u9886\u53d6','\u5956\u52b1\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\u3011\x3a\x20\u7b7e\u5230\u6210\u529f','\u3011\x3a\x20\u589e\u52a0\u9ab0\u5b50\u6570\u6b21\u6210\u529f','\u3011\x3a\x20\u52a0\u901f\u6210\u529f','\u3011\x3a\x20\u67e5\u770b\u6210\u529f','\u6b21\u6570\u8fbe\u5230\u4e0a\u9650','\u5956\u52b1\u3011\x3a\x20','\x72\x65\x70\x6c\x61\x63\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x61\x64\x2f\x75\x6e\x69\x6f\x6e\x2f\x73\x64\x6b\x2f\x72\x65\x77\x61\x72\x64\x5f\x76\x69\x64\x65\x6f\x2f\x72\x65\x77\x61\x72\x64\x2f','\x61\x70\x69\x2d\x61\x63\x63\x65\x73\x73\x2e\x70\x61\x6e\x67\x6f\x6c\x69\x6e\x2d\x73\x64\x6b\x2d\x74\x6f\x75\x74\x69\x61\x6f\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x39\x2e\x31','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x69\x6e\x64\x65\x78\x4f\x66','\x63\x79\x70\x68\x65\x72','\x20\u89c2\u770b\u5e7f\u544a\u3011\x3a\x20\u89c2\u770b\u5e7f\u544a\u8fd4\u56de\u6570\u636e\u5f02\u5e38','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x73\x64\x73\x6a\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x2a\x2f\x2a','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x73\x64\x77\x2e\x6d\x6f\x6e\x65\x79\x2e\x63\x61\x74','\x63\x72\x6f\x73\x73\x2d\x73\x69\x74\x65','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x68\x74\x74\x70\x3a\x2f\x2f\x73\x64\x73\x6a\x63\x6c\x69\x2e\x73\x68\x61\x6e\x64\x77\x2e\x63\x6f\x6d\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x64\x77\x73\x6a\x5f\x76\x69\x65\x77\x6e\x75\x6d\x22\x3a\x30','\x64\x77\x73\x6a\x5f\x76\x69\x65\x77\x6e\x75\x6d\x22\x3a\x31','\x6d\x6f\x64\x75\x6c\x65\x2e\x65\x78\x70\x6f\x72\x74\x73\x20\x3d','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x6a\x73\x6a\x4d\x69\x61\x68\x4d\x5a\x6d\x77\x66\x51\x69\x78\x58\x54\x50\x58\x2e\x63\x6e\x44\x6f\x71\x6d\x2e\x77\x76\x36\x3d\x3d'];function _0x1f8d(_0x485be8,_0x3fea56){_0x485be8=~~'0x'['concat'](_0x485be8['slice'](0x0));var _0x27e9c8=_0x6ab5[_0x485be8];return _0x27e9c8;};(function(_0x4c836c,_0x223f8d){var _0x4fc934=0x0;for(_0x223f8d=_0x4c836c['shift'](_0x4fc934>>0x2);_0x223f8d&&_0x223f8d!==(_0x4c836c['pop'](_0x4fc934>>0x3)+'')['replace'](/[MhMZwfQxXTPXnDqw=]/g,'');_0x4fc934++){_0x4fc934=_0x4fc934^0xd3ab9;}}(_0x6ab5,_0x1f8d));const fs=require('\x66\x73');const dwsj_variable=$[_0x1f8d('0')]()?require(_0x1f8d('1')):'';!(async()=>{console[_0x1f8d('2')](_0x1f8d('3')+new Date(new Date()[_0x1f8d('4')]()+new Date()[_0x1f8d('5')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x1f8d('6')]()+_0x1f8d('7'));if(dwsj_variable[_0x1f8d('8')]!==0xc8){console[_0x1f8d('2')](_0x1f8d('9'));return;}console[_0x1f8d('2')](_0x1f8d('a')+dwsj_variable[_0x1f8d('b')][_0x1f8d('c')][_0x1f8d('d')]+_0x1f8d('e'));subTitle='';for(i=0x0;i<dwsj_variable[_0x1f8d('b')][_0x1f8d('c')][_0x1f8d('d')];i++){current=dwsj_variable[_0x1f8d('b')][_0x1f8d('c')][i];video_data=dwsj_variable[_0x1f8d('b')][_0x1f8d('c')][i][_0x1f8d('f')];user_ID=dwsj_variable[_0x1f8d('b')][_0x1f8d('c')][i][_0x1f8d('10')];dwsj_token=dwsj_variable[_0x1f8d('b')][_0x1f8d('c')][i][_0x1f8d('11')];dwsj_body=dwsj_variable[_0x1f8d('b')][_0x1f8d('c')][i][_0x1f8d('12')];dwsj_UA=dwsj_variable[_0x1f8d('b')][_0x1f8d('c')][i][_0x1f8d('13')];dwsj_build=dwsj_variable[_0x1f8d('b')][_0x1f8d('c')][i][_0x1f8d('14')];dwsj_sign=dwsj_variable[_0x1f8d('b')][_0x1f8d('c')][i][_0x1f8d('15')];dwsj_signtime=dwsj_variable[_0x1f8d('b')][_0x1f8d('c')][i][_0x1f8d('16')];dwsj_UPbuild=dwsj_variable[_0x1f8d('b')][_0x1f8d('c')][i][_0x1f8d('17')];dwsj_view=dwsj_variable[_0x1f8d('b')][_0x1f8d('c')][i][_0x1f8d('18')];dwsj_Business=dwsj_variable[_0x1f8d('b')][_0x1f8d('c')][i][_0x1f8d('19')];dwsj_viewnum=dwsj_variable[_0x1f8d('b')][_0x1f8d('c')][i][_0x1f8d('1a')];if(!dwsj_UA){dwsj_UA=_0x1f8d('1b');}$[_0x1f8d('1c')]=i+0x1;console[_0x1f8d('2')](_0x1f8d('1d')+$[_0x1f8d('1c')]+_0x1f8d('1e'));await implement();};if(notify){if(subTitle){await notify[_0x1f8d('1f')]($[_0x1f8d('20')],subTitle);}}})()[_0x1f8d('21')](_0x209ec1=>$[_0x1f8d('22')](_0x209ec1))[_0x1f8d('23')](()=>$[_0x1f8d('24')]());async function implement(){if(new Date()[_0x1f8d('25')]()==0x0){dwsj_viewnum==0x0;}await rollPoint();let _0x41728e=new Date()[_0x1f8d('25')]();if(dwsj_signtime==_0x41728e){await reward_video(_0x1f8d('26'));}}function rollPoint(){let _0x370674=Post_request(_0x1f8d('27'),dwsj_body);return new Promise((_0x12ff62,_0x3f7ebf)=>{$[_0x1f8d('28')](_0x370674,async(_0x53df9f,_0x53c87f,_0x5ee4ec)=>{try{if(_0x53df9f){console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('2a'));subTitle+=_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('2a');}else{let _0xe9bddd=JSON[_0x1f8d('2b')](_0x5ee4ec);if(_0xe9bddd[_0x1f8d('8')]==0x1){console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('2c')+_0xe9bddd[_0x1f8d('2d')][_0x1f8d('2e')][_0x1f8d('2f')]+_0x1f8d('30'));let _0x316038=_0xe9bddd[_0x1f8d('2d')][_0x1f8d('31')][_0x1f8d('32')];await addGoodsBuff();await getBuildingEarn();if(dwsj_UPbuild){await buildingLevelUp();}if(dwsj_viewnum==0x0){await reward_video(_0x1f8d('33'));}}else if(_0xe9bddd[_0x1f8d('8')]==0x515||_0xe9bddd[_0x1f8d('34')]==_0x1f8d('35')){console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('36')+_0xe9bddd[_0x1f8d('34')]);await reward_video(_0x1f8d('37'));}else{console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('36')+_0xe9bddd[_0x1f8d('34')]);}}}catch(_0x305dfb){console[_0x1f8d('2')](_0x305dfb,_0x53c87f);}finally{_0x12ff62();}});});}function addNewBuilding(){let _0x356d31=Post_request(_0x1f8d('38'),dwsj_body);return new Promise((_0x53051b,_0x19986f)=>{$[_0x1f8d('28')](_0x356d31,async(_0x178afc,_0x2f4d80,_0x487894)=>{try{if(_0x178afc){console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('39'));subTitle+=_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('39');}else{let _0x318d43=JSON[_0x1f8d('2b')](_0x487894);if(_0x318d43[_0x1f8d('8')]==0x1){console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('3a')+_0x318d43[_0x1f8d('2d')][_0x1f8d('3b')][_0x1f8d('3c')][_0x1f8d('3d')]+_0x1f8d('30'));if(dwsj_viewnum==0x0){await reward_video(_0x1f8d('33'));}}else{console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('3e')+_0x318d43[_0x1f8d('34')]);}}}catch(_0x77df11){console[_0x1f8d('2')](_0x77df11,_0x2f4d80);}finally{_0x53051b();}});});}function getBuildingEarn(){let _0x14f58e=Post_request(_0x1f8d('3f'),dwsj_body);return new Promise((_0x5bb929,_0x59a455)=>{$[_0x1f8d('28')](_0x14f58e,async(_0x1ebaa7,_0x36d971,_0x194977)=>{try{if(_0x1ebaa7){console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('40'));subTitle+=_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('40');}else{let _0x39f212=JSON[_0x1f8d('2b')](_0x194977);if(_0x39f212[_0x1f8d('8')]==0x1){if(_0x39f212[_0x1f8d('8')]==0x4bf||_0x39f212[_0x1f8d('34')]==_0x1f8d('41')){if(dwsj_build){await addNewBuilding();}}else{console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('42')+_0x39f212[_0x1f8d('2d')][_0x1f8d('3b')][_0x1f8d('3c')][_0x1f8d('3d')]+_0x1f8d('30'));}}else{console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('43')+_0x39f212[_0x1f8d('34')]);}}}catch(_0x433b5d){console[_0x1f8d('2')](_0x433b5d,_0x36d971);}finally{_0x5bb929();}});});}function buildingLevelUp(){let _0x366d5d=Post_request(_0x1f8d('44'),dwsj_body);return new Promise((_0x18d0e6,_0xe26eee)=>{$[_0x1f8d('28')](_0x366d5d,async(_0x8c35d2,_0x2ba25e,_0x403644)=>{try{if(_0x8c35d2){console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('45'));subTitle+=_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('45');}else{let _0x3c1a26=JSON[_0x1f8d('2b')](_0x403644);if(_0x3c1a26[_0x1f8d('8')]==0x1){console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('46')+_0x3c1a26[_0x1f8d('2d')][_0x1f8d('3b')][_0x1f8d('3c')][_0x1f8d('3d')]+_0x1f8d('30'));if(dwsj_viewnum==0x0){await reward_video(_0x1f8d('33'));}}else if(_0x3c1a26[_0x1f8d('8')]==0x4bd||_0x3c1a26[_0x1f8d('34')]==_0x1f8d('47')){if(dwsj_viewnum==0x0){await reward_video(_0x1f8d('33'));}}else{console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('48')+_0x3c1a26[_0x1f8d('34')]);}}}catch(_0x3434a1){console[_0x1f8d('2')](_0x3434a1,_0x2ba25e);}finally{_0x18d0e6();}});});}function addGoodsBuff(){let _0x22c528=Post_request(_0x1f8d('49'),dwsj_body);return new Promise((_0x533198,_0x30c494)=>{$[_0x1f8d('28')](_0x22c528,async(_0x41b72d,_0x2cf7e0,_0x39834d)=>{try{if(_0x41b72d){console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('4a'));subTitle+=_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('4a');}else{}}catch(_0x271ba6){console[_0x1f8d('2')](_0x271ba6,_0x2cf7e0);}finally{_0x533198();}});});}function getAdReward(_0x5f0009){let _0x524cda='';let _0x10164f='';if(_0x5f0009==_0x1f8d('26')){_0x524cda=dwsj_sign;_0x10164f='\u7b7e\u5230';}else if(_0x5f0009==_0x1f8d('33')){_0x524cda=dwsj_view;_0x10164f='\u52a0\u901f';}else if(_0x5f0009==_0x1f8d('37')){_0x524cda=dwsj_body;_0x10164f=_0x1f8d('4b');}else if(_0x5f0009==_0x1f8d('4c')){_0x524cda=dwsj_Business;_0x10164f=_0x1f8d('4d');}let _0x316b1d=Post_request(_0x1f8d('4e'),_0x524cda);return new Promise((_0xca5b96,_0x2c5176)=>{$[_0x1f8d('28')](_0x316b1d,async(_0x4f7b1f,_0x18109b,_0x48a96c)=>{try{if(_0x4f7b1f){console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('4f')+_0x10164f+_0x1f8d('50'));subTitle+=_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('4f')+_0x10164f+_0x1f8d('50');console[_0x1f8d('2')](_0x4f7b1f+'\x0a');}else{let _0x17817d=JSON[_0x1f8d('2b')](_0x48a96c);if(_0x17817d[_0x1f8d('8')]==0x1){if(_0x5f0009==_0x1f8d('26')){console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+'\x20'+_0x10164f+_0x1f8d('51'));}else if(_0x5f0009==_0x1f8d('37')){console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+'\x20'+_0x10164f+_0x1f8d('52'));}else if(_0x5f0009==_0x1f8d('33')){console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+'\x20'+_0x10164f+_0x1f8d('53'));}else if(_0x5f0009==_0x1f8d('4c')){console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+'\x20'+_0x10164f+_0x1f8d('54'));}}else if(_0x17817d[_0x1f8d('8')]==0x4b8||_0x17817d[_0x1f8d('34')]==_0x1f8d('55')){console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('4f')+_0x10164f+_0x1f8d('56')+_0x17817d[_0x1f8d('34')]);await get_variable();}else{console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('4f')+_0x10164f+_0x1f8d('56')+_0x17817d[_0x1f8d('34')]);}}}catch(_0x1ce53c){console[_0x1f8d('2')](_0x1ce53c,_0x18109b);}finally{_0xca5b96();}});});}function reward_video(_0x5b0c44){let _0x2006ee=video_data[_0x1f8d('57')](/[\r\n]/g,'');let _0x36485c={'\x75\x72\x6c':_0x1f8d('58'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x1f8d('59'),'Content-Type':_0x1f8d('5a'),'Content-Length':_0x2006ee[_0x1f8d('d')],'Accept-Encoding':_0x1f8d('5b'),'User-Agent':_0x1f8d('5c')},'\x62\x6f\x64\x79':_0x2006ee};return new Promise((_0x352289,_0x4a94aa)=>{$[_0x1f8d('28')](_0x36485c,async(_0x1b76d0,_0x336179,_0x1b5e18)=>{try{if(_0x1b76d0){console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('5d'));subTitle+=_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('5d');console[_0x1f8d('2')](_0x1b76d0+'\x0a');}else{if(_0x1b5e18[_0x1f8d('5e')](_0x1f8d('5f'))>-0x1){let _0x3c699a=JSON[_0x1f8d('2b')](_0x1b5e18);if(_0x3c699a[_0x1f8d('5f')]==0x3){await getAdReward(_0x5b0c44);}else{console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('60'));}}else{let _0x431b16=JSON[_0x1f8d('2b')](_0x1b5e18);if(_0x431b16[_0x1f8d('8')]==0xea67){await getAdReward(_0x5b0c44);}else{console[_0x1f8d('2')](_0x1f8d('29')+$[_0x1f8d('1c')]+_0x1f8d('60'));}}}}catch(_0x4f0103){console[_0x1f8d('2')](_0x4f0103,_0x336179);}finally{_0x352289();}});});}function Post_request(_0x1cf43b,_0x1719c5){return{'\x75\x72\x6c':_0x1f8d('61')+_0x1cf43b,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x1f8d('62'),'Connection':_0x1f8d('63'),'Content-Length':dwsj_body[_0x1f8d('d')],'Pragma':_0x1f8d('64'),'Cache-Control':_0x1f8d('64'),'authId':user_ID,'Authorization':dwsj_token,'User-Agent':dwsj_UA,'Content-Type':_0x1f8d('65'),'Accept':_0x1f8d('66'),'Origin':_0x1f8d('67'),'X-Requested-With':_0x1f8d('68'),'Sec-Fetch-Site':_0x1f8d('69'),'Sec-Fetch-Mode':_0x1f8d('6a'),'Sec-Fetch-Dest':_0x1f8d('6b'),'Referer':_0x1f8d('6c'),'Accept-Encoding':_0x1f8d('6d'),'Accept-Language':_0x1f8d('6e')},'\x62\x6f\x64\x79':_0x1719c5};};function Get_request(_0x190b26){return{'\x75\x72\x6c':_0x1f8d('61')+_0x190b26,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x1f8d('62'),'Connection':_0x1f8d('63'),'Content-Length':0x0,'Pragma':_0x1f8d('64'),'Cache-Control':_0x1f8d('64'),'authId':user_ID,'Authorization':token,'User-Agent':dwsj_UA,'Content-Type':_0x1f8d('65'),'Accept':_0x1f8d('66'),'Origin':_0x1f8d('67'),'X-Requested-With':_0x1f8d('68'),'Sec-Fetch-Site':_0x1f8d('69'),'Sec-Fetch-Mode':_0x1f8d('6a'),'Sec-Fetch-Dest':_0x1f8d('6b'),'Referer':_0x1f8d('6c'),'Accept-Encoding':_0x1f8d('6d'),'Accept-Language':_0x1f8d('6e')}};};function get_variable(){let _0x2df77f=JSON[_0x1f8d('6f')](current);let _0x35c43c=JSON[_0x1f8d('6f')](dwsj_variable);let _0x5ade57=_0x35c43c[_0x1f8d('70')](0x0,_0x35c43c[_0x1f8d('5e')](_0x2df77f));let _0x6739a7=_0x35c43c[_0x1f8d('d')]-_0x5ade57[_0x1f8d('d')]-_0x2df77f[_0x1f8d('d')];let _0x1319b0=_0x35c43c[_0x1f8d('70')](_0x35c43c[_0x1f8d('d')]-_0x6739a7,_0x35c43c[_0x1f8d('d')]);if(_0x2df77f[_0x1f8d('5e')](_0x1f8d('71'))>-0x1){let _0x4b961d=JSON[_0x1f8d('2b')](JSON[_0x1f8d('6f')](_0x2df77f[_0x1f8d('57')](new RegExp(_0x1f8d('71'),'\x67\x69'),_0x1f8d('72'))));let _0x4039c6=_0x1f8d('73')+_0x5ade57+_0x4b961d+_0x1319b0;fs[_0x1f8d('74')](_0x1f8d('1'),_0x4039c6,{'\x66\x6c\x61\x67':'\x77\x2b'},function(_0x347855){if(_0x347855){console[_0x1f8d('2')](_0x347855);}});}};_0xodO='jsjiami.com.v6';



function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}