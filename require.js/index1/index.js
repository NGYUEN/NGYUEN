/**
 * Created by Administrator on 2017-02-13 .
 */
//��������
//AMD ? �첽ģ����أ�require.js����ǰִ�У��Ƴ�����ǰ��,
//CMD ? ͨ��ģ����أ�sea.js���ӳ�ִ�У��Ƴ������ͽ�
//require.js,ҳ��һ��ʼ��д�ã�һ�������ȼ��غ�����Ҫ�õ�ģ�飬Ԥ���أ����������д��
//sea.jsʹ�õ�ʱ��ż�����Ҫ��ģ�飬������

//require.js
require(["a"],function(arrSort){
    //var arr = [3,2,7,11,9,4];
    var arr={};
    console.log(arrSort(arr));
});
//sea.js
define(function(require){
    var arr = [3,2,7,11,9,4];
    var arrSort = require("a");
    console.log(arrSort(arr));
});
