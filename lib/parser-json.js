var options = {
    tag: false,
    download: ""
};

function formatBytes(bytes,decimals) {
   if(bytes == 0) return '0 Bytes';
   var k = 1000,
       dm = decimals || 2,
       sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
       i = Math.floor(Math.log(bytes) / Math.log(k));
   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function defineOptions(arg) {
    Object.keys(options).forEach(function(key) {
        options[key] = arg[key] || options[key];
    });
}

function parse(json) {
    var result = "";
    if(!options.tag && !options.download){
        var published_date = new Date(json.published_at);

        result += "Url: "+json.html_url+"\n";
        result += "Published at: "+ published_date +"\n";
        result += "Tag: "+json.tag_name + "\n";
        if(json.assets.length > 0)
            result += "Download urls: \n";
        json.assets.forEach((download) =>{
            result += "\t" + download.browser_download_url + "\n";
            result += "\t\t" + "Size: " + formatBytes(download.size)+"\n";
            result += "\t\t" + "Download Count: " + download.download_count + "\n";
        });
    }else{
        if(options.tag)
            result += json.tag_name

        if(options.download){
            json.assets.forEach((download_url) =>{
                if(download_url.browser_download_url.endsWith(options.download))
                    if(!result)
                        result = download_url.browser_download_url;
                    else
                        result += "\n"+download_url.browser_download_url;
            });
        }
    }

    return result;
}

module.exports = {
    parse: parse,
    defineOptions: defineOptions
};