import { Button, Empty, Table } from "antd";
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
  },
  {
    title: "Ùltima atualização",
    dataIndex: "lastUpdate",
    key: "lastUpdate",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Ações",
    key: "actions",
  },
];
