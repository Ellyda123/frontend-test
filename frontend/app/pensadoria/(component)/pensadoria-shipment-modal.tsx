import { Shipment } from "@/types/shipments";
import { Modal, Typography } from "antd";

interface PensadoriaShipmentModalsProps {
  onClose: () => void;
  selectedShipment: Shipment | null;
}

export function PensadoriaShipmentModal({
  onClose,
  selectedShipment,
}: PensadoriaShipmentModalsProps): JSX.Element {
  return (
    <Modal
      title={`Remessa ${selectedShipment?.shipmentNumber}`}
      open={false}
      onCancel={() => {
        console.log("modal fechar");
        onClose;
      }}
      footer={null}
    >
      <Typography>Produtos</Typography>
      <ul>
        {selectedShipment?.products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </Modal>
  );
}
