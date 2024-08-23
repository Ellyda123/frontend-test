import { Button, Input } from "antd";
import { useState } from "react";

const listItems = [
  "Boné - Masculino",
  "Boné - Feminino",
  "Óculos de sol - Masculino",
  "Óculos de sol - Feminino",
  "Relógio - Masculino",
  "Relógio - Feminino",
  "Pulseira - Masculina",
  "Pulseira - Feminina",
];
interface CreateShipmentProps {
  onCancel: () => void;
  onSubmit: () => void;
}
export function CreateShipment({
  onCancel,
  onSubmit,
}: CreateShipmentProps): JSX.Element {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [itemAdded, setItemAdded] = useState<string[]>([]);

  const addItems = () => {
    if (selectedItem && !itemAdded.includes(selectedItem)) {
      setItemAdded([...itemAdded, selectedItem]);
      setSelectedItem("");
    }
  };

  const removeItem = (item: string) => {
    setItemAdded(itemAdded.filter((i) => i !== item));
  };

  return (
    <div className="flex flex-col justify-between">
      <div>
        <Button type="text" onClick={onCancel}>
          Voltar
        </Button>
      </div>
      <div className="flex justify-between">
        <Input
          list="item-options"
          className=" border p-2 mb-4"
          value={selectedItem || ""}
          onChange={(e) => setSelectedItem(e.target.value)}
        />
        <Button
          type="primary"
          onClick={addItems}
          disabled={!selectedItem}
          className="ml-2"
        >
          Adicionar
        </Button>
      </div>

      <datalist id="item-options">
        {listItems.map((item, index) => (
          <option key={index} value={item} />
        ))}
      </datalist>

      <ul className="mt-4">
        {itemAdded.map((item) => (
          <li key={item} className="flex items-center justify-between mb-2">
            <span>{item}</span>
            <Button type="text" onClick={() => removeItem(item)}>
              Remover
            </Button>
          </li>
        ))}
      </ul>
      <div className=" flex justify-end">
        <Button type="primary" onClick={onSubmit}>
          Criar envio
        </Button>
      </div>
    </div>
  );
}
