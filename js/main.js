function get_page_name(url){
    return url.split("/").pop();
}

function set_active_link(){

    var page = get_page_name(document.URL);
    var links = document.getElementsByTagName('a');

    // hack: i starts at 1 in order to skip branding
    for (var i = 1; i < links.length; i++) {
        var url_page = get_page_name(links[i].href);
        if (url_page == page){
            var parent_node = links[i].parentNode;
            parent_node.className = "active";
            break;
        }
    } 
}

set_active_link();
