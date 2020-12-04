console.log("我是main.js");
console.log("--------------");

//简单的分页
let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', `/page${n+1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response) //把字符串转化为对象
            array.forEach(item => {
                const li = document.createElement("li")
                li.textContent = item.id;
                paging.appendChild(li)
            });
            n += 1;
        }

    }
    request.send()
}
//加载json
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", '/ajax.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response) //把字符串转化为对象
            myName.textContent = object.name
        }
    }
    request.send()
}
//加载xml
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", '/ajax.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.responseXML);
            //request.responseXML 是一个对象
            const dom = request.responseXML;
            const text = dom.getElementsByTagName("warning")[0].textContent;
            console.log(text.trim());
        }
    }
    request.send()
}
//加载html
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', '/ajax.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const div = document.createElement('dic')
            div.innerHTML = request.response;
            document.body.appendChild(div)
        }
    }
    request.send()
}

//加载JS
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("get", '/ajax.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const script = document.createElement('script')
                script.innerHTML = request.response;
                document.body.appendChild(script)
            }
        }
    }
    request.send()
}
//加载css
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const style = document.createElement('style')
            style.innerHTML = request.response;
            document.head.appendChild(style)
        }
    }
    request.send()
}