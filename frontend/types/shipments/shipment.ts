import { Product } from "./product";

export enum ShipmentStatus {
  SEND = "ENVIADO",
  PENDING = "PENDENTE",
  DELIVEREDEN = "ENTREGUE",
}

export interface Shipment {
  id: string;
  sendDate: Date;
  lastUpdate: Date;
  status: ShipmentStatus;
  shipmentNumber: string;
  items: ShipmentItem[];
}

export interface ShipmentItem {
  id: string;
  item: Product;
}
