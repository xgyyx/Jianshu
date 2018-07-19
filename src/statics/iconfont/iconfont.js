import {injectGlobal} from 'styled-components';

injectGlobal`
@font-face {
  font-family: "iconfont";
  src: url('./iconfont.eot?t=1532012717117'); /* IE9*/
  src: url('./iconfont.eot?t=1532012717117#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1532012717117') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1532012717117#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* .icon-bi-copy:before { content: "\e618"; }

.icon-Aa:before { content: "\e636"; }

.icon-fangdajing:before { content: "\e639"; } */
`
