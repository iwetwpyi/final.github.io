window.onload = function() {
    // 로딩 페이지가 끝난 후 메인 콘텐츠를 표시하고, 로딩 페이지를 숨깁니다.
    setTimeout(function() {
        document.querySelector('.loading-screen').style.display = 'none'; // 로딩 화면 숨기기
        document.querySelector('.main-content').style.display = 'block'; // 메인 콘텐츠 표시
    }, 3000); // 3초 후 로딩 페이지 숨김 (원하는 시간으로 설정 가능)
}
