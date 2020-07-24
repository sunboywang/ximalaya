/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Iconfaxian from './Iconfaxian';
import Iconstar from './Iconstar';
import IconyemianCopyCopy from './IconyemianCopyCopy';
import Iconwode from './Iconwode';

export type IconNames = 'iconfaxian' | 'iconstar' | 'iconyemian-copy-copy' | 'iconwode';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'iconfaxian':
      return <Iconfaxian key="1" {...rest} />;
    case 'iconstar':
      return <Iconstar key="2" {...rest} />;
    case 'iconyemian-copy-copy':
      return <IconyemianCopyCopy key="3" {...rest} />;
    case 'iconwode':
      return <Iconwode key="4" {...rest} />;
  }

  return null;
};

export default React.memo ? React.memo(IconFont) : IconFont;
