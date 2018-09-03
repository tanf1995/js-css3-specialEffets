window.onload = function () {
    var imgWidth = Math.floor((window.innerWidth-20)/4);  // 图片的宽度
    var main = {
        list: []  // 存储图片的列表
    }
    var heightList = [0, 0, 0, 0];

    // 布局
    var body = document.body;
    var container = document.createElement("ul");
    body.insertBefore(container, body.firstChild);
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    container.appendChild(li1);
    container.appendChild(li2);
    container.appendChild(li3);
    container.appendChild(li4);
    // 设置样式
    li1.style.cssText = li2.style.cssText = li3.style.cssText = li4.style.cssText =
        "float:left;width:" + imgWidth + "px";
    container.style.cssText = "list-style:none;margin:0 auto;"

    loadAllImg();
    showImgs();

    function loadAllImg() {
        for(var i=1;i<11;i++){
            var img = document.createElement("img");
            var imgSrc =  "image/" + i + ".jpg";
            img.style.cssText = "width:100%;height:auto;"
            img.setAttribute("src", imgSrc);
            li1.appendChild(img);
        }
    }

    function selectImg() {
        // 随机选择一张图片
        var index = Math.ceil(Math.random()*10);
        var imgSrc =  "image/" + index + ".jpg";
        return imgSrc;
    }

    function insertImg(box, imgSrc) {
        // 插入图片
        var img = document.createElement("img");
        img.setAttribute("src", imgSrc);
        img.style.cssText = "width:100%;height:auto;"
        box.appendChild(img);
        return img;  // 返回img
    }

    function showImgs() {
        var list = container.childNodes;
        var imglist = Array.prototype.slice.apply(li1.childNodes);
        for (var i=0;i<10;i++){
            console.log(heightList);
            var minValue = Math.min.apply(null, heightList);
            var minIndex = heightList.indexOf(minValue);
            // var img = insertImg(list.item(minIndex), selectImg());
            list.item(minIndex).appendChild(imglist[i]);
            // li1.removeChild(imglist[i]);
            heightList[minIndex] += imglist[i].height;
        }
    }

}
