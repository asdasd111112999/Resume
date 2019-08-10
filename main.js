
//设置Loading动画
setTimeout(function(){loading.classList.remove('active')},1000)
//title滚动动画
window.onscroll=function(){
    find()
    if(window.scrollY>10){
        return title.classList.add("detach");
      }else{
        return title.classList.remove("detach");
      }
}
//添加title滚动选择条
var all_data_x=document.querySelectorAll('[data-x]');
for(let i= 0;i<all_data_x.length;i++){
  all_data_x[i].classList.add('offset');
}

//找到聚焦楼层，增加 highlight
function find(){
  let floor=0;
  for(let i=0;i<all_data_x.length;i++){
    if(Math.abs(all_data_x[i].offsetTop - window.scrollY) < Math.abs(all_data_x[floor].offsetTop - window.scrollY)){
      floor = i
    }
  }
  all_data_x[floor].classList.remove('offset');
  let id = all_data_x[floor].id
  let a = document.querySelector('a[href="#'+ id + '"]')
  let li = a.parentNode
  let brothersAndMe = li.parentNode.children
  for(let i=0; i<brothersAndMe.length; i++){
    brothersAndMe[i].classList.remove('highlight')
  }
  li.classList.add('highlight')
}
let liTags = document.querySelectorAll("#title li")
for(let i=0; i<liTags.length; i++){
  liTags[i].onmouseenter = function(x){
    x.currentTarget.classList.add('touch')
  }
  liTags[i].onmouseleave = function(x){
    x.currentTarget.classList.remove('touch')
  }
}
//添加跳动动画
let aTags = document.querySelectorAll('#title a')
function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
requestAnimationFrame(animate);

for(let i=0; i<aTags.length; i++){
  aTags[i].onclick = function(x){
    x.preventDefault()
    let a = x.currentTarget
    let href = a.getAttribute('href') 
    let element = document.querySelector(href)
    let top = element.offsetTop

    let currentTop = window.scrollY
    let targetTop = top - 200
    let s = targetTop - currentTop // 路程
    var coords = { y: currentTop}; // 起始位置
    var t = Math.abs((s/100)*300) // 时间
    if(t>500){ t = 500 }
    var tween = new TWEEN.Tween(coords) // 起始位置
      .to({ y: targetTop}, t) // 结束位置 和 时间
      .easing(TWEEN.Easing.Cubic.InOut) // 缓动类型
      .onUpdate(function() {
        // coords.y 已经变了
        window.scrollTo(0,coords.y) // 如何更新界面
      })
      .start(); // 开始缓动
    }
}
