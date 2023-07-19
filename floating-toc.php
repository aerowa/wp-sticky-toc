<?php
/*
Plugin Name: StickyToC
Plugin URI: https://github.com/aerowa/wp-sticky-toc
Description: Plugin that allows sticky/floating Table of Contents. For usage, see the readme in the Plugin Link
Version: 0.1.3
Author: Mimmikk.
Author URI: https://mimmikk.com
*/
function add_floating_toc() {
    global $post;
    $allowed_page_ids = array(7);  // Change this to the IDs of the pages where you want to show the ToC

    if (is_page() && in_array($post->ID, $allowed_page_ids)) {
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
    }
}
add_action('wp_footer', 'add_floating_toc');

function add_toc_css_and_js() {
    wp_enqueue_style('my-toc-style', plugin_dir_url(__FILE__) . 'style.css');

    wp_enqueue_script('jquery');
    wp_enqueue_script('my-toc-script', plugin_dir_url(__FILE__) . 'script.js', array('jquery'));
}
add_action('wp_enqueue_scripts', 'add_toc_css_and_js');
