// 假设你的图片存放在 diary 文件夹下，且命名为 1.jpg 到 170.jpg
// 如果后缀是 png，请把 .jpg 换成 .png

const container = document.getElementById('diary_book'); // 获取容器元素
const totalImages = 170; // 图片总数

for (let i = 1; i <= totalImages; i++) {
    const a = document.createElement('a');
    a.href = `diary/${i}.jpg`; // 大图地址
    a.setAttribute('data-fancybox', 'gallery'); // Fancybox 的识别属性
    a.target = "_blank"; // 点击后在新标签页打开大图

    // 创建 img 元素
    const img = document.createElement('img');
    
    // 设置图片路径（注意这里用的是相对路径）
    img.src = `diary/${i}.jpg`; 
    
    // 设置图片的 alt 属性（方便 SEO 或图片加载失败时显示）
    img.alt = `日记图片 ${i}`;
    
    // 将图片添加到容器中
    a.appendChild(img);
    container.appendChild(a);
}