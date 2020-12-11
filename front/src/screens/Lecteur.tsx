import React from "react";
import AddLecteur from "../components/lecteur/AddLecteur";
import ListLecteur from "../components/lecteur/ListLecteur";
import PageContainer from "../components/public/PageContainer";
import Space from "../components/public/Space";
import { useGetLecteurs } from '../services/getLecteurs';

export default function LecteurScreen() {
  useGetLecteurs();
  return (
    <PageContainer>
      <AddLecteur />

      <Space />

      <ListLecteur />
    </PageContainer>
  );
}
