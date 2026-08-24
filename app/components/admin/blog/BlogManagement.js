"use client";
import { useState } from "react";
import BlogListInterface from "./BlogListInterface";
import BlogFormInterface from "./BlogFormInterface";

export default function BlogManagement() {
  const [view, setView] = useState("list");
  const [editPostId, setEditPostId] = useState(null);

  const handleCreateNew = () => {
    setEditPostId(null);
    setView("create");
  };

  const handleEdit = (id) => {
    setEditPostId(id);
    setView("edit");
  };

  const handleBack = () => {
    setEditPostId(null);
    setView("list");
  };

  if (view === "list") {
    return <BlogListInterface onCreateNew={handleCreateNew} onEdit={handleEdit} />;
  }

  return <BlogFormInterface postId={editPostId} onBack={handleBack} />;
}
