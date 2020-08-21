(() => {
    // screenSize 설정 상수로 빼주기
    var screenSize = {
        tablet: 768,
        mobile: 540
    }
    var dropdownMenuBtn  = document.querySelector('.btn-dropdown-menu');
    var headerNavigationWrapper = document.querySelector('.header-navigation-wrapper');
    // 클릭 시
    var isDropdownMenuClicked = false;

    dropdownMenuBtn.addEventListener('click', function(){
        headerNavigationWrapper.classList.toggle('hidden');
        //  ! = 반대값
        isDropdownMenuClicked = !isDropdownMenuClicked;
    });

    // pc에서 hidden 붙어있는 클래스 지워주기 
    if (window.innerWidth > screenSize.tablet){
        headerNavigationWrapper.classList.remove('hidden');
    }

    // resize 시 add, remove
    window.addEventListener('resize', function(){
        // innerWidth = viewport width (보이는 화면)
        if(window.innerWidth > screenSize.tablet){
            headerNavigationWrapper.classList.remove('hidden');
        } else {
            if(isDropdownMenuClicked) {
                headerNavigationWrapper.classList.remove('hidden');
            }else {
                headerNavigationWrapper.classList.add('hidden');
            }
        }
    });
})();