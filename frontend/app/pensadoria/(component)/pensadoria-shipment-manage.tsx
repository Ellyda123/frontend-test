"use client";

import { Button, Table } from "antd";
import { shipmentColumns } from "./pensadoria-shipment-column";
import { useState } from "react";
import { CreateShipment } from "./pensadoria-create-shipment";

export function ShipmentManage(): JSX.Element {
  const [createShipment, setCreateShipment] = useState(false);
  return (
    <div className="p-8">
      <div className="flex flex-col mb-4">
        {!createShipment ? (
          <>
            <Button
              className=""
              type="primary"
              onClick={() => {
                setCreateShipment(true);
              }}
            >
              Criar envio
            </Button>
            <Table columns={shipmentColumns} />
          </>
        ) : (
          <CreateShipment />
        )}
      </div>
    </div>
  );
}
