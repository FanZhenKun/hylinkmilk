    // 側邊購物車
    /*    For Cart Sidebar  */
    $(".cart_sidebar_info").removeClass("info-opened");
        $(".body-overlay").removeClass("opened");
        
    $(".header_cart_icon").on("click", function () {
        $(".cart_sidebar_info").addClass("info-opened");
        $(".body-overlay").addClass("opened");
    });
    $(".cart_sidebar_close-btn").on("click", function () {
        $(".cart_sidebar_info").removeClass("info-opened");
        $(".body-overlay").removeClass("opened");
    });
    $(".body-overlay").on("click", function () {
        $(".cart_sidebar_info").removeClass("info-opened");
        $(".body-overlay").removeClass("opened");
    });

    //立即 Btn
    $(".new_post").slideToggle();
    $(document).ready(function(){
        $(".btn_now .more-link").click(function(){
            $(".new_post").slideToggle();
        });

    })
    

    //tab 切換
    
    window.addEventListener('load',()=>{
        var navTabArray = ['showleft','show','showright']
        navTabA = document.querySelectorAll('#nav_tab>a')
        navTab = document.querySelector('#nav_tab')
        navTabA.forEach( (e,index) => {
            e.addEventListener('click',()=>{
                navTabArray.forEach(e=>{
                    navTab.classList.remove(e)
                })
                navTab.classList.add(navTabArray[index])
            });
        });
    });
