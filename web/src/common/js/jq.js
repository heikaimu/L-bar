const urlApi=function (url) {
  return 'https://wxapp.tytcedu.com/youme/public/index.php/tytcweb/'+url;
  // return '192.168.0.107:8181/zc/itest/icp'+url;
};

export default{
  test:function (that) {
    // $.ajax({
    //   url:urlApi('wonderfulvideo/upwfmain'),
    //   type:'post',
    //   data:{
    //
    //   },
    //   dataType: "json",
    //   success:function(data){
    //     that.swiperData=data
    //     console.log(data);
    //
    //   }
    // });
    that.swiperData=['https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',
      'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',
      'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png']
  }
}
