import { TempleOrderData } from './TempleOrderData';
import { ListingMetadata } from './ListingMetadata';
import { Order } from './Order';

export type Listing = ListingWithOrder | ListingWithoutOrder;

export type ListingWithOrder = Order & ListingWithoutOrder;

export interface ListingWithoutOrder extends TempleOrderData {
  id: string;
  metadata: ListingMetadata;
  rawData?: any;
}
