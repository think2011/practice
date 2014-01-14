define(function(require, exports, module) {
    /**
     * 初始化seaJS
     * ==========================
     */
    seajs.config({
        charset : 'utf-8',
        //设置别名,方便调用
        alias : {
            //jquery
            'jquery' : 'jquery-2.0.3.min.js',
			
            //angular
            'angular' : 'angular/angular.min.js',
			
            //bootstrap
            'bootstrap' : 'bootstrap/bootstrap.min'
        },
        //预加载项
        preload : ['jquery', 'angular']
    })

});