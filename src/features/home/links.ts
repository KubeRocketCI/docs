import { useLatestVersion } from '@docusaurus/plugin-content-docs/client';

export const TESTBED_DURATION = '~18–20 min';

/** Doc URLs pinned to the latest released docs version. */
export const useLatestDocsLinks = () => {
  const latest = useLatestVersion(undefined);
  const docs = (path: string) => `${latest.path}/${path}`;

  return {
    releaseLabel: latest.label,
    releaseName: latest.name,
    docs,
    quickStart: docs('quick-start/quick-start-overview'),
    installOverview: docs('operator-guide/installation-overview'),
    // Upgrade guides follow the upgrade-krci-<release> naming used by every release since 3.12.
    upgradeGuide: docs(`operator-guide/upgrade/upgrade-krci-${latest.name}`),
    supportedVersions: docs('supported-versions'),
  };
};
