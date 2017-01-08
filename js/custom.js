/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

$(this).ekkoLightbox({
    alwaysShowClose: true,
    onShown: function() {
        console.log('Checking our the events huh?');
    },
    onNavigate: function(direction, itemIndex)
        console.log('Navigating '+direction+'. Current item: '+itemIndex);
    }
    ...
});