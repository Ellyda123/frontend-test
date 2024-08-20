import { Button, Input, Select } from "antd";
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

export function CreateShipment(): JSX.Element {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [itemAdded, setItemAdded] = useState<string[]>([]);
  const [returnPage, setReturnPage] = useState(true);

  const addItems = () => {
    if (selectedItem && !itemAdded.includes(selectedItem)) {
      setItemAdded([...itemAdded, selectedItem]);
      setSelectedItem("");
    }
  };

  const removeItem = (item: string) => {
    setItemAdded(itemAdded.filter((i) => i !== item));
  };

  const send = () => {
    console.log("Itens para enviar:", itemAdded);
  };
  return (
    <div className="flex flex-col justify-between">
      <div>
        <Button type="text" onChange={(e) => setReturnPage(e.target.value)}>
          Voltar
        </Button>
      </div>

      <input
        list="item-options"
        className=" border p-2 mb-4"
        value={selectedItem || ""}
        onChange={(e) => setSelectedItem(e.target.value)}
      />
      <datalist id="item-options">
        {listItems.map((item, index) => (
          <option key={index} value={item} />
        ))}
      </datalist>

      <div className="flex justify-end items-center">
        <Button
          type="primary"
          onClick={addItems}
          disabled={!selectedItem}
          className="ml-2"
        >
          Adicionar
        </Button>
      </div>

      <ul className="mt-4">
        {itemAdded.map((item) => (
          <li key={item} className="flex items-center justify-between mb-2">
            <span>{item}</span>
            <Button
              type="text"
              className="text-red-800 border-red-800"
              onClick={() => removeItem(item)}
            >
              Remover
            </Button>
          </li>
        ))}
      </ul>
      <div className=" flex justify-end">
        <Button type="primary">Criar envio</Button>
      </div>
    </div>
  );
}
