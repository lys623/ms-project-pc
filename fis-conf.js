fis.match('::packager', {
  postpackager: fis.plugin('loader', {
    //allInOne: true
  })
})

fis.match('*.html', {
  postprocessor:fis.plugin('format')
})

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
})
// 对 CSS 进行图片合并
fis.match('*.{css,less}', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true,
  parser: fis.plugin('cssnext')
});


fis.media('prod')
    .match('::package', {
      postpackager: fis.plugin('loader', {
        //allInOne: {
        //  css: 'pkg/web_app_${hash}.css',
        //  js: 'pkg/web_app_${hash}.js'
        //}
      })
    })
    .match('*.js', {
      useHash: true,
      optimizer: fis.plugin('uglify-js')
    })
    .match('*.css', {
      useHash: true,
      optimizer: fis.plugin('clean-css')
    })
    .match('*.png', {
      optimizer: fis.plugin('png-compressor')
    })