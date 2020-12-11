import React from "react";
import PageContainer from "../components/public/PageContainer";
import Space from "../components/public/Space";
import AddLivre from "../components/livre/AddLivre";

export default function LivreScreen() {
  return (
    <PageContainer>
      <AddLivre />
      <Space />
    </PageContainer>
  );
}
