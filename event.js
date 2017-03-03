// JavaScript Document
var eventUtil={
       
			/**
			添加事件
			参数element：通过getElement(s)ById(Name/TagName)获取
			参数type：   事件类型，如onclick、onmouseover等，要去掉所有的‘on’
			参数handler: 事件执行程序，
			参数false：  指事件冒泡
			参数true：   事件捕获
			**/
			// 添加句柄
         	addHandler:function(element,type,handler){
               if(element.addEventListener){// DOM2事件级处理程序
                 element.addEventListener(type,handler,false);
               }else if(element.attachEvent){// IE事件级处理程序
                 element.attachEvent('on'+type,handler);
               }else{// DOM0事件级处理程序
                 element['on'+type]=handler;
               }
         	},
         	// 删除句柄
         	removeHandler:function(element,type,handler){
               if(element.removeEventListener){// DOM2事件级处理程序
                 element.removeEventListener(type,handler,false);
               }else if(element.detachEvent){// IE事件级处理程序
                 element.detachEvent('on'+type,handler);
               }else{// DOM0事件级处理程序
                 element['on'+type]=null;
               }
         	},
			
		/**
		
		事件对象
		
				
		**/
          getEvent:function(event){//为兼容所有浏览器尽量调用
            return event?event:window.event;
          },
          getType:function(event){//获取事件类型
            return event.type;
          },
          getElement:function(event){//获取事件目标（事件的来源）
            return event.target || event.srcElement;
          },
          preventDefault:function(event){//阻止时间默认行为
            if(event.preventDefault){
              event.preventDefault();
            }else{
              event.returnValue=false;
            }
          },
         stopPropagation:function(event){//阻止时间冒泡
           if(event.stopPropagation){
             event.stopPropagation();
           }else{
             event.cancelBubble=true;
           }
         }
  }
