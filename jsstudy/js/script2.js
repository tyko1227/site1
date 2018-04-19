//window.onload가 없을시 <head></head>사이에 불러 오는것은 바람직하지 않다 
window.onload = function(){
    var hw = document.getElementById('hw');
    hw.addEventListener('click', function(){
        alert('Hello world');
    })
}