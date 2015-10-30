fis.hook('relative');
fis.match('**', {
    relative: true
});


fis.match('::packager', {
    postpackager: fis.plugin('loader', {
        allInOne:{
            css: 'css/index.css',
            js: 'js/index.js',
        }
    })
})

fis.match('*.html', {
    postprocessor:fis.plugin('format')
})

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
    spriter: fis.plugin('csssprites')
})
fis.match('**/(*.png)', {
    release:'css/i/$1',
})

fis.match('**/(*.jpg)', {
    release:'css/i/$1'
})
// 对 CSS 进行图片合并
fis.match('*.{css,less}', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true,
    parser: fis.plugin('cssnext')
});
fis.match('*.less', {
    rExt: '.css',
    parser: fis.plugin('less-2.x', {
    })
}).match('*.png', {
    optimizer: fis.plugin('png-compressor')
})
