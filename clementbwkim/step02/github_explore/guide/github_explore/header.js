(function() {
  var screenSize = {
    tablet: 768
  }
  var dropdownMenuButton = document.querySelector('.btn-dropdown-menu');
  var headerNavigationWrapper = document.querySelector('.header-navigation-wrapper');
  var isDropdownMenuClicked = false;

  dropdownMenuButton.addEventListener('click', function() {
    headerNavigationWrapper.classList.toggle('hidden');
    isDropdownMenuClicked = !isDropdownMenuClicked;
  })

  window.addEventListener('resize', function() {
    if (window.innerWidth > screenSize.tablet) {
      headerNavigationWrapper.classList.remove('hidden');
    } else {
      if (isDropdownMenuClicked) {
        headerNavigationWrapper.classList.remove('hidden');
      } else {
        headerNavigationWrapper.classList.add('hidden');
      }
    }
  })
})();