import React from 'react';

export interface FeatureItem {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: React.JSX.Element;
  link: string;
  /** 'hero' renders a large 2x2 spotlight tile in the bento; default is a standard tile. */
  size?: 'hero' | 'default';
}
