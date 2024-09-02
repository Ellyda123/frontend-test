import { Modal } from "antd";
import { useState } from "react";

interface PensadoriaShipmentModalsProps {
  open: boolean;
  onClose: () => void;
}

export function PensadoriaShipmentModal({
  open,
  onClose,
}: PensadoriaShipmentModalsProps): JSX.Element {
  const [openModal, setOpenModal] = useState(open);

  return (
    <Modal
      centered
      onClose={() => {
        onClose();
        setOpenModal(false);
      }}
      open={openModal}
      width={500}
    ></Modal>
  );
}
