//设置Loading动画
setTimeout(function(){loading.classList.remove('active')},1500)

window.onscroll=function(){
    if(window.scrollY>10){
        return title.classList.add("detach");
      }else{
        return title.classList.remove("detach");
      }
}
function find(){
    let specialTags=
}
