"use client";
import { useState } from "react";
import MotorcycleListInterface from "./MotorcycleListInterface";
import MotorcycleFormInterface from "./MotorcycleFormInterface";

export default function MotorcycleManagement() {
  const [view, setView] = useState("list");
  const [editMotorcycleId, setEditMotorcycleId] = useState(null);

  const handleCreateNew = () => {
    setEditMotorcycleId(null);
    setView("create");
  };

  const handleEdit = (id) => {
    setEditMotorcycleId(id);
    setView("edit");
  };

  const handleBack = () => {
    setEditMotorcycleId(null);
    setView("list");
  };

  if (view === "list") {
    return (
      <MotorcycleListInterface
        onCreateNew={handleCreateNew}
        onEdit={handleEdit}
      />
    );
  }

  return (
    <MotorcycleFormInterface
      motorcycleId={editMotorcycleId}
      onBack={handleBack}
    />
  );
}
