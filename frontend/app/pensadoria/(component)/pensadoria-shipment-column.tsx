import { Button } from "antd";

export const shipmentColumns = [
  {
    title: "Número de remesa",
    dataIndex: "shipmentNumber",
    key: "shipmentNumber",
    render: (shipmentNumber: string) => `REM-${shipmentNumber}`,
  },
  {
    title: "Data de envio",
    dataIndex: "shipmentDate",
    key: "shipmentDate",
    render: (date: Date) => (date as Date).toISOString(),
  },
  {
    title: "Última atualização",
    dataIndex: "lastUpdate",
    key: "lastUpdate",
    render: (lastUpdate: Date) => new Date(lastUpdate).toLocaleString(),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Ações",
    key: "actions",
    render: (_, record: unknown) => (
      <Button type="primary" onClick={() => record}>
        Visualizar
      </Button>
    ),
  },
];
