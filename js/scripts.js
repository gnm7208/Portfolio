

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
// window.addEventListener('DOMContentLoaded', event => {...}): This tells the browser to wait until the page content (HTML) is fully loaded before running the code inside the function.
// const sideNav = document.body.querySelector('#sideNav');: This searches the webpage for an element with the ID sideNav ie Navigation menu
// new bootstrap.ScrollSpy(document.body, {...}): This enables the ScrollSpy feature, which highlights navigation items in #sideNav as you scroll down the page.
// The rootMargin: '0px 0px -40%' part adjusts when the ScrollSpy should activate (in this case, it activates when you're about 40% into a section).
// The rest of the code makes the navbar (the top menu) collapse when you click on a link inside it, but only if the hamburger icon is visible (this happens in mobile view or small screens).
// It does this by:
// 1.Finding the navbar toggle
// 2.Finding all the links inside the responsive navigation menu (#navbarResponsive .nav-link).
// 3.Adding a click event listener to each link. When you click a link, the code checks if the toggler button is visible (window.getComputedStyle(navbarToggler).display !== 'none'). If it's visible (meaning you are on a small screen), it closes the navbar by simulating a click on the toggler button.
        
    