function get_page_name(url){
    return url.split("/").pop();
}

function set_active_link(){

    var page = get_page_name(document.URL);
    var links = document.getElementsByTagName('a');

    for (var i = 0; i < links.length; i++) {
        var url_page = get_page_name(links[i].href);
        if (url_page == page){
            var parent_node = links[i].parentNode;
            parent_node.className = "active";
            break;
        }
    } 
}

set_active_link();
