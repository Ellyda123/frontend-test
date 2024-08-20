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
    render: (date: Date) => (date as Date).toDateString(),
  },
  {
    title: "Última atualização",
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
