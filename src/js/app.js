$(()=>{
    // console.log('App Loaded!!!');

    let openMenu = $('.nav-icon-open');
    let closeMenu = $('.nav-icon-close');
    let navBar = $('.nav-bar')
    console.log(openMenu, closeMenu, navBar);
    
    openMenu.on('click', function(){
        console.log('test');
        $(this).css('visibility', 'hidden');
        closeMenu.css('visibility', 'visible');
        navBar.slideDown();
    })

    closeMenu.on('click', function () {
        $(this).css('visibility', 'hidden');
        openMenu.css('visibility', 'visible');
        navBar.slideUp();
    })

})



