import React from "react";
import PageContainer from "../components/public/PageContainer";
import Space from "../components/public/Space";
import AddLivre from "../components/livre/AddLivre";
import ListLivre from "../components/livre/ListLivre";

export default function LivreScreen() {
  return (
    <PageContainer>
      <AddLivre />
      <Space />
      <ListLivre />
    </PageContainer>
  );
}
