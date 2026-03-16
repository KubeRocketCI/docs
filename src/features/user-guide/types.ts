import React from 'react';

export interface UserGuideItem {
  title: string;
  icon: string;
  description: React.JSX.Element;
  /** Doc path relative to docs root (e.g. "user-guide/overview"). Link is built with current version in the component. */
  docPath: string;
}
