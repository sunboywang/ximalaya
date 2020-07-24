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

const IconyemianCopyCopy: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M 562.805 80.6975 a 72.135 72.135 0 0 0 -96.93 0 L 73.925 452.87 a 36.1575 36.1575 0 0 0 48.42 53.7075 l 6.2325 -5.9175 V 889.1 a 72.315 72.315 0 0 0 72.315 72.405 h 210.443 v -217.71 a 50.9175 50.9175 0 0 1 50.94 -50.985 h 99.0225 a 50.9175 50.9175 0 0 1 50.94 50.985 v 217.71 h 215.438 a 72.315 72.315 0 0 0 72.3375 -72.405 V 505.408 c 16.065 14.535 38.8575 13.4325 52.2225 -1.4625 a 36.1575 36.1575 0 0 0 -2.61 -51.075 L 562.805 80.72 Z"
        fill={getIconColor(color, 0, '#2c2c2c')}
      />
    </Svg>
  );
};

IconyemianCopyCopy.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconyemianCopyCopy) : IconyemianCopyCopy;
