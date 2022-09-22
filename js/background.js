/* 页脚透明 */
#footer{
  background: transparent!important;
}
/* 头图透明 */
#page-header{
  background: transparent!important;
}
/*top-img黑色透明玻璃效果移除，不建议加，除非你执着于完全一图流或者背景图对比色明显 */
#page-header.post-bg:before {
  background-color: transparent!important;
}

/* bf更新到4.0.1之后，使用这个
 #page-header:not(.not-top-img):before {
    background-color: transparent!important;
}
 */
/*夜间模式伪类遮罩层透明*/
[data-theme="dark"]
  #footer::before{
      background: transparent!important;
    }
[data-theme="dark"]
  #page-header::before{
    background: transparent!important;
    }