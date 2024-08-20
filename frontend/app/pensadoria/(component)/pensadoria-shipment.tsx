"use client";

import { Card, Button, Divider, Image, Typography } from "antd";
import { useState } from "react";
import { ShipmentManage } from "./pensadoria-shipment-manage";

export function Shipment(): JSX.Element {
  const [openManage, setOpenManage] = useState(false);
  return (
    <div className="mx-20 my-10 p-4">
      <img src="/logo.png" className="h-10" />
      <Divider />
      {!openManage ? (
        <Card title="Envios" className="w-96 text-start">
          <Typography>Gerenciador de envios</Typography>
          <Divider />
          <Button
            onClick={() => setOpenManage(true)}
            className="mt-4 text-blue-500"
            type="link"
          >
            Gerenciar
          </Button>
        </Card>
      ) : (
        <ShipmentManage />
      )}
    </div>
  );
}
