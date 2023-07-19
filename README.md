# wp-sticky-toc
A floating/sticky WordPress plugin

Very simple plugin. Table of Contents by default are on the right side to the top, floats next to the content (probably) in a sticky manner. Each link is made by the `<h1>` header and is page exclusive (see instructions).
The ToC will follow your `<head>` and `<footer>` when scrolling (start/stop).

Instructions:
You will probably need some CSS experience if you want to modify the layout.
In the `stickytoc.php` file, you'll find this line:
```$allowed_page_ids = array(PAGEID);``` which conviniently marked by a comment instructing you regarding it.

Change it into your page/post's ID and separate by comma, example:
```$allowed_page_ids = array(7, 128, 5);```
This will generate a ToC list on those pages. You can also modify this to allow it on all pages.

If you want to remove page requirement, you can (probably) do this:
```php
function add_floating_toc() {
    ob_start();
    echo <<<HTML
    <div id="floating-toc">
        <input hidden type="checkbox" id="toggle-button">
        <label for="toggle-button" class="hamburger-button">
            <span></span>
            <span></span>
            <span></span>
        </label>
        <nav><p>Contents</p>
            <!-- List will be populated with JavaScript -->
        </nav>
    </div>
HTML;
    return ob_get_clean();
}
```

Known issues:
- Certain themes have certain issues. This goes for all similar plugins as well, you will probably need to configure if the plugin is called in `the_post`, `wp_head`, `wp_footer` or `the_content`. This means you need to configure the plugin to call for the correct theme. The standard configuration is `wp_footer`. You can also call it in for example `page.php`

