console.log('hi!');


$('.carditems ul').slick({
    infinite: true,
    slidesToShow: 3, // 기본(PC) 개수
    slidesToScroll: 3,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    // 반응형 설정 시작
    responsive: [
        {
            breakpoint: 1024, // 1024px 이하일 때
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768, // 768px 이하(태블릿/모바일)일 때
            settings: {
                slidesToShow: 1, // <--- 핵심: 한 개씩만 보임
                slidesToScroll: 1,
                centerMode: true, // 양옆 카드를 살짝 보여주고 싶을 때 (선택)
                centerPadding: '20px' // 중앙 정렬 시 좌우 여백 (선택)
            }
        }
    ]
});

let mobileMenuToggle =  $('header .toggle');
let mobileMenu = $('header .nav-buttons');
let header = $('header');

mobileMenuToggle.click(function(){
    mobileMenu.slideToggle();
    header.toggleClass('active');
});