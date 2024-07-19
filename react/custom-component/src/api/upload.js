const uploadUrl = 'http://localhost:3000/upload/single';

export function upload(file, onProgress, onFinish) {
    const xhr = new XMLHttpRequest();

    //监听上传请求
    xhr.onload = function () {
        // 拿到服务器的响应结果
        const resp = JSON.parse(xhr.responseText);
        onFinish(resp);
    };

    // 进度条效果
    xhr.upload.onprogress = (e) => {
        const percent = Math.floor((e.loaded / e.total) * 100);
        onProgress(percent);
    };
    xhr.open('POST', uploadUrl);
    const form = new FormData();
    form.append('avatar', file);
    xhr.send(form);
    return function () {
        xhr.abort();
    };
}
