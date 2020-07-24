/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const Iconwode: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0h283.671273v284.462545c0 157.137455-126.976 284.462545-283.671273 284.462546S228.328727 441.6 228.328727 284.462545C228.328727 127.301818 355.304727 0 512 0zM256.698182 625.826909h510.603636c109.614545 0 198.516364 89.134545 198.516364 199.098182v28.439273C965.818182 947.665455 889.576727 1024 795.671273 1024H228.305455C134.306909 1024 58.181818 947.549091 58.181818 853.364364v-28.439273c-0.116364-109.963636 88.785455-199.098182 198.516364-199.098182z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconwode.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconwode) : Iconwode;
