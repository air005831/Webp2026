var imglist_Url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1';

function getimg() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', imglist_Url, true);
    xhr.send();

    xhr.onload = function() {
        if (xhr.status === 200) {
            var data = JSON.parse(this.responseText);
            add_new_img(data);
        } else {
            console.error('API 请求失败');
        }
    };
}

function add_new_img(dataset) {
    var gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // 清空旧图片

    var photos = dataset.photos.photo;

    photos.forEach(function(photo) {
        // 构建 Flickr 图片 URL: https://live.staticflickr.com/{server}/{id}_{secret}_{size}.jpg
        var imgUrl = 'https://live.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_b.jpg';
        
        var img = document.createElement('img');
        img.src = imgUrl;
        img.alt = photo.title;
        
        gallery.appendChild(img);
    });
}