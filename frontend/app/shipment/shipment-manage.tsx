"use client";

import { Button, Table } from "antd";
import { shipmentColumns } from "./shipmente-column";

export function ShipmentManage(): JSX.Element {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <Button type="primary">Criar envio</Button>
      </div>
      <Table columns={shipmentColumns} />
    </div>
  );
}
