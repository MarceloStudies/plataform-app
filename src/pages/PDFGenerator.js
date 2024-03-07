import React from "react";
import { Document, PDFDownloadLink } from "@react-pdf/renderer";
import PageContractComercial from "../components/contracts_pdf/PageContractComercial";

const TemplateContract = ({ type_contract }) => {
  let contractToRender;

  // Comparando o type_contract para decidir qual contrato renderizar
  if (type_contract === "comercial") {
    contractToRender = <PageContractComercial />;
  } else {
    contractToRender = 'Contrato não encontrado!';
  }

  return <Document>{contractToRender}</Document>;
};

const PDFGeneratorContract = () => {
  const informacoesCliente = {
    nome: "Fulano de Tal",
    cpf: "123.456.789-00",
    rg: "1234567-8",
    endereco: "Rua Exemplo",
    numero: 123,
  };

  return (
    <div>
      <PDFDownloadLink
        document={<TemplateContract type_contract="comercial" {...informacoesCliente} />}
        fileName="1.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default PDFGeneratorContract;
