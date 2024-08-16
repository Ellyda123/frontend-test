import { Card, Button, Divider } from "antd";

export function Shipment(): JSX.Element {
  return (
    <div className=" flex gap-6 justify-between">
      <Card title="Envios" className="w-96 text-start">
        <p>Gerenciador de envios</p>
        <Divider />
        <Button className="mt-4 text-blue-500" type="default">
          Gerenciar
        </Button>
      </Card>
    </div>
  );
}
