
$(document).ready(function(){
    $(".headerContent").html(
        '<div class="header-bg">'+
            '<div class="container">'+
                '<div class="header">'+
                    '<a href="#" class="logo"><img src="assets/img/logo.png"></a>'+
                    '<span class="header-titled">UNIFIED EXTENTION SYSTEM PORTAL</span>'+
                '</div>'+
            '</div>'+
        '</div>'
    );
    // menu section
    $(".headerContentMenu").html(
        '<div class="header-bg-menu">'+
            '<div class="container-xxl">'+
                '<div class="header-menu">'+
                    '<ul>'+
                        '<li><a href="home.html">Home</a></li>'+
                        '<li><a href="">DASHBOARD</a></li>'+
                        '<li><a href="#">REPORT</a></li>'+
                        '<li><a href="#">ADMINISTRATION</a></li>'+
                        
                        '<div class="search-container">'+
                           '<form action="/action_page.php">'+
                                '<input type="text" placeholder="Search" name="search" class="search-content">'+
                            '</form>'+
                        '</div>'+
                    '</ul>'+
                '</div>'+
           '</div>'+
        '</div>'
    );
    // BreadCumb Section
    $(".headContentSubMenu").html(
    '<div class="breadcrumb-content">'+
        '<div class="container-xxl pt-1">'+
            '<nav aria-label="breadcrumb">'+
                '<ol class="breadcrumb">'+
                '<li class="breadcrumb-item">UNEXSYS ></li>'+
                '<li class="breadcrumb-item" >AEW REGISTRY SYSTEM ADMIN ></li>'+
                '<li class="breadcrumb-item" >DASHBOARD</li>'+
                '</ol>'+
            '</nav>'+
        '</div>'+
    '</div>');
    // Foooter Section
    $(".footerContent").html(
        '<div class="container pt-5 pb-5">'+
            '<div class="footer-bg p-2">'+
                '<div class="d-flex bd-highlight">'+
                    '<div class="p-2 flex-grow-1 bd-highlight">'+
                        '<span><i class="fa fa-globe footer-social-icons"></i></span>'+
                        '<span><i class="fa fa-youtube footer-social-icons"></i></span>'+
                        '<span><i class="fa fa-instagram footer-social-icons"></i></span>'+
                        '<span><i class="fa fa-facebook footer-fb-icons"></i></span>'+
                        '<span><i class="fa fa-twitter footer-social-icons"></i></span>'+
                    '</div>'+
                    '<div class="p-2 bd-highlight footer-txt">Contact us</div>'+
                    '<div class="p-2 bd-highlight"><i class="fa fa-envelope" aria-hidden="true"></i></div>'+
                    '<div class="p-2 mr-5 bd-highlight"><i class="fa fa-phone" aria-hidden="true"></i></div>'+
                '</div>'+
            '</div>'+
        '</div>'
    );
});

// // Activation class menu link
// jQuery(function($) {
//     var path = window.location.href; 
//     // because the 'href' property of the DOM element is the absolute path
//     $('ul a').each(function() {
//       if (this.href === path) {
//         $(this).addClass('active-menu');
//       }
//     });
// });


