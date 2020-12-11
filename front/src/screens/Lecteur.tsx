import React from "react";
import AddLecteur from "../components/lecteur/AddLecteur";
import ListLecteur from "../components/lecteur/ListLecteur";
import PageContainer from "../components/public/PageContainer";
import Space from "../components/public/Space";

export default function LecteurScreen() {
  return (
    <PageContainer>
      <AddLecteur />

      <Space />

      <ListLecteur />
    </PageContainer>
  );
}
