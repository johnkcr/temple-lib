import { join } from 'path';
import { TempleLink, TempleLinkType } from '../types/core/TempleLink';

export function joinUrl(...parts: string[]): string {
  return new URL(join(...parts)).toString();
}

export function getTempleLink(link: TempleLink) {
  const baseUrl = 'https://universe.xyz';

  switch (link.type) {
    case TempleLinkType.Asset:
      return joinUrl(baseUrl, 'assets', link.collectionAddress, link.tokenId);

    case TempleLinkType.Collection:
      return joinUrl(baseUrl, 'collection', link.addressOrSlug);

    default:
      throw new Error(`Link type ${(link as any)?.type} not yet implemented`);
  }
}
