import { Button, Input } from "antd";
import { useEffect, useState } from "react";

async function fetchProducts() {
  return [
    { id: "1", name: "Boné - Masculino " },
    { id: "2", name: "Boné - Feminino" },
    { id: "3", name: "Óculos de sol - Masculino" },
    { id: "4", name: "Óculos de sol - Feminino " },
  ];
}

interface CreateShipmentProps {
  onCancel: () => void;
  onSubmit: (items: string[]) => void;
}
export function CreateShipment({
  onCancel,
  onSubmit,
}: CreateShipmentProps): JSX.Element {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [itemAdded, setItemAdded] = useState<string[]>([]);
  const [products, setProducts] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts).catch(console.error);
  }, []);

  const addItems = () => {
    if (selectedItem && !itemAdded.includes(selectedItem)) {
      setItemAdded([...itemAdded, selectedItem]);
      setSelectedItem(null);
    }
  };

  const removeItem = (item: string) => {
    setItemAdded(itemAdded.filter((i) => i !== item));
  };

  const handleSubmit = () => {
    onSubmit(itemAdded);
    setItemAdded([]);
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
        {products.map((products) => (
          <option key={products.id} value={products.name} />
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
        <Button
          type="primary"
          onClick={handleSubmit}
          disabled={itemAdded.length === 0}
        >
          Criar envio
        </Button>
      </div>
    </div>
  );
}
