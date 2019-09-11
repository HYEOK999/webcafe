var section = $('.board section'); //jqeury lib에서 지원하는 선택 객체
var tab = $('.tab');

// .on('이벤트명')
// tab.on('click keyup',function(e){
tab.on('click', function(e){
  e.preventDefault();// 기본 이벤트를 취소함. 예를들면 a의 속성 href의 이벤트를 취소함.
  // if((e.type === 'keyup' && e.keyCode === 13) || e.type === 'click'){
  section.removeClass('tab-act');
  $(this).parent().parent().addClass('tab-act');
})//멀티 이벤트 바인딩 예-> 클릭, 마우스온 등 다양한 환경 대응