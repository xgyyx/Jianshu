import {injectGlobal} from 'styled-components';

injectGlobal`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1532481068291'); /* IE9*/
  src: url('./iconfont.eot?t=1532481068291#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1532481068291') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1532481068291#iconfont') format('svg'); /* iOS 4.1- */
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
