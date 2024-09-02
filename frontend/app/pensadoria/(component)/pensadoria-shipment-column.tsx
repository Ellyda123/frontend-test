import { ShipmentStatus } from "@/types/shipments";
import { Button, Modal } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

export const shipmentColumns = [
  {
    title: "Número de remesa",
    dataIndex: "shipmentNumber",
    key: "shipmentNumber",
  },
  {
    title: "Data de envio",
    dataIndex: "shipmentDate",
    key: "shipmentDate",
    render: (date: Date) => dayjs(date as Date).format("DD/MM/YYYY"),
  },
  {
    title: "Última atualização",
    dataIndex: "lastUpdate",
    key: "lastUpdate",
    render: (date: Date) => dayjs(date as Date).format("DD/MM/YYYY"),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: ShipmentStatus) => {
      switch (status as ShipmentStatus) {
        case ShipmentStatus.SEND:
          return "Enviado";
      }
    },
  },
  {
    title: "Ações",
    key: "actions",
    render: (_, record: unknown) => {
      <Button
        type="primary"
        onClick={() => {
          true;
        }}
      >
        Visualizar
      </Button>;
    },
  },
];
