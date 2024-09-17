"use client";

import { Button, Table } from "antd";
import { shipmentColumns } from "./pensadoria-shipment-column";
import { useState } from "react";
import { PensadoriaCreateShipment } from "./pensadoria-create-shipment";
import { Shipment } from "@/types/shipments";
import { PensadoriaShipmentModal } from "./pensadoria-shipment-modal";
import { Shipment } from "./pensadoria-shipment";

export function PensadoriaShipmentContent(): JSX.Element {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [createShipment, setCreateShipment] = useState(false);
  const [selectedShipment, setSelectedShipment] = useState<Shipment | null>(
    null
  );
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleCloseModal = () => {
    setIsModalVisible(true);
    setSelectedShipment(null);
  };

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
            <PensadoriaShipmentModal
              onClose={handleCloseModal}
              selectedShipment={selectedShipment}
            />
          </>
        ) : (
          <PensadoriaCreateShipment
            onCancel={() => {
              setCreateShipment(false);
            }}
            onSubmit={handleCreateShipment}
          />
        )}
      </div>
    </div>
  );
}
