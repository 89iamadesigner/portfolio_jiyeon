console.log('hi!');


// $('.carditems ul').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     centerMode: true,  // 중앙 정렬 모드 활성화
//     centerPadding: '0px', // 중앙 정렬 시 양옆 간격 (필요 없으면 0)
//     prevArrow: $('.prev'), // HTML에 작성한 .prev 클래스 연결
//     nextArrow: $('.next'), // HTML에 작성한 .next 클래스 연결
// });


// $('.carditems ul').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     // slidesToScroll: 1,
//     prevArrow: $('.prev'),
//     nextArrow: $('.next'),
//     responsive: [
//            {
//             breakpoint: 768,
//             settings: {
//               arrows: false,
//               centerMode: true,
//               centerPadding: '40px',
//               slidesToShow: 3
//               // slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 768, // 768px 이하(태블릿/모바일)일 때
//             settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 1
//                 // slidesToScroll: 1
//             }
//         }
//   ]
// });


$('.carditems ul').slick({
    infinite: true,
    slidesToShow: 1, // 기본(PC) 개수
    slidesToScroll: 1,
    centerMode: true,  // 중앙 정렬 모드 활성화
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    // 반응형 설정 시작
    responsive: [
        {
            breakpoint: 1024, // 1024px 이하일 때
            settings: {
                slidesToShow: 1,
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