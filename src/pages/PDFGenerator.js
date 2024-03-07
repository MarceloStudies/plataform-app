import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import PageContractComercial from '../components/carroussel/PageContractComercial';
// Create styles
const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
      fontFamily: "AntonFamily",
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: "justify",
      fontFamily: "AntonFamily",
  
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: "center",
      color: "grey",
      fontFamily: "AntonFamily",
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
      fontFamily: "AntonFamily",
    },
  });
  
// Create Document Component
const MyDocument = () => (
  <Document>
    <PageContractComercial />
  </Document>
);

export default MyDocument;