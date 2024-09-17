import { Shipment, ShipmentStatus } from "@/types/shipments";
import { Button } from "antd";
import dayjs from "dayjs";

export const shipmentColumns = [
  {
    title: "Número de remessa",
    dataIndex: "shipmentNumber",
    key: "shipmentNumber",
  },
  {
    title: "Data de envio",
    dataIndex: "shipmentDate",
    key: "shipmentDate",
    render: (date: Date) => dayjs(date).format("DD/MM/YYYY"),
  },
  {
    title: "Última atualização",
    dataIndex: "lastUpdate",
    key: "lastUpdate",
    render: (date: Date) => dayjs(date).format("DD/MM/YYYY"),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: ShipmentStatus) => {
      switch (status) {
        case ShipmentStatus.SEND:
          return "Enviado";
        case ShipmentStatus.DELIVEREDEN:
          return "Entregue";
        case ShipmentStatus.CANCELLED:
          return "Cancelado";
        default:
          return "Enviado";
      }
    },
  },
  {
    title: "Ações",
    key: "actions",
    render: (_: any, record: Shipment) => (
      <Button type="primary" onClick={() => onOpenModal(record)}>
        Visualizar
      </Button>
    ),
  },
];

function onOpenModal(record: Shipment): void {
  throw new Error("Function not implemented.");
}
