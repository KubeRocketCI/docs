import React from 'react';

export interface UseCaseItem {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: React.JSX.Element;
  link: string;
}
