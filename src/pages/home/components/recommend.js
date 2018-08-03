import React, {PureComponent} from 'react';
import {RecommendWrapper, RecommendItem} from '../style';
import recommendPic1 from '../../../statics/banner-s-3-7123fd94750759acf7eca05b871e9d17.png';
import recommendPic2 from '../../../statics/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png';
import recommendPic3 from '../../../statics/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png';
import recommendPic4 from '../../../statics/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png';
import recommendPic5 from '../../../statics/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png';

class Recommend extends PureComponent {
  render () {
    return (
      <RecommendWrapper>
        <RecommendItem imgUrl={recommendPic1}></RecommendItem>
        <RecommendItem imgUrl={recommendPic2}></RecommendItem>
        <RecommendItem imgUrl={recommendPic3}></RecommendItem>
        <RecommendItem imgUrl={recommendPic4}></RecommendItem>
        <RecommendItem imgUrl={recommendPic5}></RecommendItem>
      </RecommendWrapper>
    )
  }
}

export default Recommend;