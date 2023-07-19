# wp-sticky-toc
A floating/sticky WordPress plugin

Very simple plugin. Table of Contents by default are on the right side to the top, floats next to the content (probably) in a sticky manner. Each link is made by the <h1> header and is page exclusive (see instructions).
The ToC will follow your <head> and <footer> when scrolling (start/stop).

Instructions:
You will probably need some CSS experience if you want to modify the layout.
In the ```floating-toc.php``` file, you'll find this line:
``php
    $allowed_page_ids = array(PAGEID); ``
Change it into your page/post's ID and separate by comma, example:
``php
    $allowed_page_ids = array(7, 128, 5);`` 
This will generate a ToC list on those pages. You can also modify this to allow it on all pages.

