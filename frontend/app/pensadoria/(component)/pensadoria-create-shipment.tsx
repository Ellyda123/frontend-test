"use client";

import { getProducts, getShipment } from "@/actions";
import { Product, Shipment } from "@/types/shipments";
import { Button, Select } from "antd";
import { useEffect, useState } from "react";

const { Option } = Select;

interface PensadoriaCreateShipmentProps {
  onCancel: () => void;
  onSubmit: (items: string[]) => void;
}

export function PensadoriaCreateShipment({
  onCancel,
  onSubmit,
}: PensadoriaCreateShipmentProps): JSX.Element {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [itemAdded, setItemAdded] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [shipment, setShipment] = useState<Shipment[]>([]);

  useEffect(() => {
    getProducts()
      .then((data: Product[]) => {
        setProducts(data);
        console.log("Produtos carregados:", data);
      })
      .catch((error: any) =>
        console.error("Erro ao carregar produtos:", error)
      );
  }, []);

  const handleChange = (value: string) => {
    setSelectedItem(value);
  };

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
    getShipment()
      .then((data: Shipment[]) => {
        setShipment(data);
        console.log("produtos enviados", data);
      })
      .catch((error: any) => console.error("erro ao enviar produto:", error));
  };

  return (
    <div className="flex flex-col justify-between">
      <div>
        <Button type="text" onClick={onCancel}>
          Voltar
        </Button>
      </div>
      <div className="flex justify-between">
        <Select
          placeholder="Selecione um produto"
          style={{ width: "100%" }}
          onChange={handleChange}
        >
          {products.map((product) => (
            <Option key={product.id} value={product.id}>
              {product.name}
            </Option>
          ))}
        </Select>
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
        {itemAdded.map((productId) => {
          const product = products.find((p) => p.id === productId);
          return (
            <li
              key={productId}
              className="flex items-center justify-between mb-2"
            >
              <span>{product?.name}</span>
              <Button type="text" onClick={() => removeItem(productId)}>
                Remover
              </Button>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-end">
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
