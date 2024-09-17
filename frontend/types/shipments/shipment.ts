import { Product } from "./product";

export enum ShipmentStatus {
  SEND = "ENVIADO",
  CANCELLED = "CANCELLED",
  DELIVEREDEN = "ENTREGUE",
}

export interface Shipment {
  id: string;
  sendDate: Date;
  lastUpdate: Date;
  status: ShipmentStatus;
  shipmentNumber: string;
  products: Product[];
}

export interface ShipmentItem {
  id: string;
  item: Product;
}
