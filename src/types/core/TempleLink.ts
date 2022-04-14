export enum TempleLinkType {
  Asset = 'assets',
  Collection = 'collection'
}

export interface AssetLink {
  type: TempleLinkType.Asset;
  collectionAddress: string;
  tokenId: string;
}

export interface CollectionLink {
  type: TempleLinkType.Collection;
  addressOrSlug: string;
}

export type TempleLink = AssetLink | CollectionLink;
