$(function() {
        // 로그인 창 표시
        $(".login_wrap>a").on('click', function() {
                $("#login_f").animate({
                        top : "20px"
                }, 500);

                return false;
        });

        // 로그인 창 닫기
        $(".login_wrap .login_close_btn, input[alt='로그인버튼']").on('click', function() {
                $("#login_f").animate({
                        top : "-500px"
                }, 500);
                return false;
        });

        // 아이디, 비밀번호에서 포커스를 받으면 placeholder 이미지가 사라지게
        $('#user_id, #user_pw').on('focus', function() {
                $(this).prev().css({
                        left : "-3000px"
                });
        });

        // 아이디, 비밀번호에서 포커스를 잃으면 placeholder 이미지가 다시 뜨도록
        $('#user_id, #user_pw').on('blur', function() {
                $(this).prev().css({
                        left : "2px"
                });
        });


});