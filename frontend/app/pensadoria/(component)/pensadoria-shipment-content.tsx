"use client";

import { Button, Table } from "antd";
import { shipmentColumns } from "./pensadoria-shipment-column";
import { useState } from "react";
import { PensadoriaCreateShipment } from "./pensadoria-create-shipment";

export function PensadoriaShipmentContent(): JSX.Element {
  const [shipments, setShipments] = useState([]);
  const [createShipment, setCreateShipment] = useState(false);

  const handleCreateShipment = (newShipment: any) => {
    setShipments([...shipments, newShipment]);
    setCreateShipment(false);
  };
  return (
    <div className="p-8">
      <div className="flex flex-col justify-between mb-4">
        {!createShipment ? (
          <>
            <div>
              <Button
                type="primary"
                onClick={() => {
                  setCreateShipment(true);
                }}
              >
                Criar envio
              </Button>
            </div>
            <Table columns={shipmentColumns} dataSource={shipments} />
          </>
        ) : (
          <PensadoriaCreateShipment
            onCancel={() => {
              setCreateShipment(true);
            }}
            onSubmit={handleCreateShipment}
          />
        )}
      </div>
    </div>
  );
}
