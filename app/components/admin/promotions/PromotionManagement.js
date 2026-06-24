"use client";
import { useState } from "react";
import PromotionListInterface from "./PromotionListInterface";
import PromotionFormInterface from "./PromotionFormInterface";

export default function PromotionManagement() {
  const [view, setView] = useState("list");
  const [editPromotionId, setEditPromotionId] = useState(null);

  const handleCreateNew = () => {
    setEditPromotionId(null);
    setView("create");
  };

  const handleEdit = (id) => {
    setEditPromotionId(id);
    setView("edit");
  };

  const handleBack = () => {
    setEditPromotionId(null);
    setView("list");
  };

  if (view === "list") {
    return (
      <PromotionListInterface
        onCreateNew={handleCreateNew}
        onEdit={handleEdit}
      />
    );
  }

  return (
    <PromotionFormInterface
      promotionId={editPromotionId}
      onBack={handleBack}
    />
  );
}
