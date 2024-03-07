import React from "react";
import { Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import ArialFont from "../../assets/fonts/arial/arial.ttf";

Font.register({
  family: "ArialFont",
  src: ArialFont,
});

// Create styles
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "ArialFont",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "ArialFont",
    fontWeight: "extrabold",
    textTransform: "uppercase",
    paddingLeft: 75,
  },
  text: {
    margin: 8,
    fontSize: 12,
    textAlign: "justify",
    fontFamily: "ArialFont",
  },
  text2: {
    margin: 8,
    fontSize: 10,
    textAlign: "justify",
    fontFamily: "ArialFont",
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
    fontFamily: "ArialFont",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
    fontFamily: "ArialFont",
  },

  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

// Create Document Component
export default function PageContractComercial() {
  return (
    <Page
      size="A4"
      title="CONTRATO_LOCACAO_IMOVEL_COMERCIAL"
      style={styles.body}
    >
      <View style={styles.section}>
        <Text style={styles.title}>Contrato de Locação de Imovéis</Text>
        <Text style={styles.text}>
          Pelo presente instrumento particular de um lado, PAULA VALERIA DOS
          SANTOS BUENO, brasileira, viúva, funcionária pública Municipal
          portadora da cédula de identidade RG SSP/SP n.° 23.901.973-8. e
          inscrita no CPF/MF n.° 144.288.978-04, residente em Silveiras/SP, na
          Rua João Antunes de Macedo, n.° 632 – centro, doravante denominada
          LOCADORA, e de outro lado MARCOS ROBERTO MARIANO, brasileiro, portador
          da cédula de identidade RGSSP/SP n.43343878 e inscrito no CPF/MF
          n.°335.856.088-09, residente em Silveiras/SP, doravante denominado
          simplesmente LOCATÁRIO, têm entre si como justo e contratado o que
          segue:
        </Text>
        <Text style={styles.text}>
          1. A LOCADORA, por este instrumento, dá em locação AO LOCATÁRIO o
          imóvel de sua propriedade, livre e desembaraçado de quaisquer ônus
          reais e em perfeitas condições de higiene e conservação, sito na
          cidade de Silveiras/SP, na Rua João Araújo, n.1055, pelo prazo de 1
          ano, a partir de 25/08/2023 com término em 25/08/2024.
        </Text>
        <Text style={styles.text}>
          2. O aluguel ajustado entre as partes é de R$600,00 (seiscentos reais)
          mensais, e será reajustado anualmente, de acordo com as normas legais
          que vigorarem na época.
        </Text>
        <Text style={styles.text}>
          2.1 - O pagamento do aluguel será feito na casa da LOCADORA, nesta
          cidade, até o dia 18 de cada mês, sob pena de incorrer ao LOCATÁRIO em
          multa de 2% (dois por cento) sobre o valor do aluguel mensal, mais
          correção monetária e juros de mora pelo período em atraso, tendo o
          Locatário o prazo de até 3 dias úteis, se o dia em questão cair no
          final de semana, ou feriado.
        </Text>
        <Text style={styles.text}>
          2.2- A LOCATÁRIA irá pagar 1 mês de aluguel antecipado, não realizando
          o pagamento do último mês.
        </Text>
        <Text style={styles.text}>
          3.O LOCATÁRIO arcará com o pagamento de todos os impostos e taxas,
          seja do que natureza for que incidam ou venham a incidir sobre o
          imóvel e eventuais multas decorrentes do inadimplemento ou atraso nos
          respectivos pagamentos e, ainda, por todas as despesas de água,
          esgoto, energia elétrica e outras ligadas ao imóvel. As contas de luz,
          água e esgoto deverão ser passadas para o nome do Locatário.
        </Text>
        <Text style={styles.text}>
          4. Ficarão a cargo do LOCATÁRIO as obras que forem exigidas pelas
          autoridades municipais e sanitárias relativamente à segurança,
          conservação e higiene do prédio. O locatário poderá, ainda, realizar
          benfeitorias e modificações no imóvel, desde que com prévia anuência,
          por escrito da Locadora.
        </Text>
        <Text style={styles.text}>
          4.1- As indenizações das benfeitorias realizadas.
        </Text>
        <Text style={styles.text}>
          4.1.2- Caso a Locadora autorize a indenização das benfeitorias, esses
          serão descontados no aluguel.
        </Text>
        <Text style={styles.text}>
          4.1.3- Qualquer benfeitoria não indenizada poderá ser removida, desde
          que não danifique o imóvel locado.
        </Text>
        <Text style={styles.text}>
          5. Como forma de propagação de suas atividades comerciais, é permitido
          ao LOCATÁRIO fixar letreiros ou faixas e instalar luminosos nas áreas
          externas do imóvel, desde que não o danifique.
        </Text>
        <Text style={styles.text}>
          6. Quando findo ou rescindido o presente contrato de locação, caberá
          ao LOCATÁRIO restituir o imóvel em condições adequadas de uso,
          pintura, conservação, higiene e manutenção.
        </Text>
        <Text style={styles.text}>
          7. Ao término da locação, se houver danos ou deteriorações no imóvel,
          o LOCATÁRIO deverá providenciar os devidos reparos. Se assim não
          proceder, a LOCADORA poderá mandar executá-los a expensas do
          LOCATÁRIO, que, enquanto não concluídos esses serviços, continuará
          obrigada ao pagamento dos aluguéis e encargos que se vencerem, mesmo
          que não esteja ocupando o imóvel.
        </Text>
        <Text style={styles.text}>
          8. As benfeitorias eventualmente realizadas pelo LOCATÁRIO no imóvel
          serão cedidas gratuitamente a LOCADORA, sem qualquer reembolso ou
          compensação no aluguel, salvo de a LOCADORA concordar por escrito em
          reembolso das benfeitorias, sendo elas realizadas para o melhoramento
          do imóvel. Conforme exposto no item 4.1.
        </Text>
        <Text style={styles.text}>
          9. Findo o prazo da locação, não havendo interesse do LOCATÁRIO em
          permanecer no imóvel, deverá comunicar a LOCADORA sua intenção em dar
          por finda a locação e desocupar o imóvel, por escrito, e com
          antecedência de 30 (trinta) dias. Contrariamente, se o LOCATÁRIO
          desejar continuar no imóvel, a LOCADORA providenciará a elaboração de
          um novo contrato, cujos termos e condições serão acordados pelas
          partes na ocasião.
        </Text>
        <Text style={styles.text}>
          10. A presente locação destina-se exclusivamente para ocupação do
          estabelecimento comercial do LOCATÁRIO, vedada qualquer alteração
          desta destinação. O LOCATÁRIO também não será permitido emprestar,
          ceder ou sublocar o imóvel objeto da presente locação, sem prévia e
          expressa anuência da LOCADORA.
        </Text>
        <Text style={styles.text}>
          10.1- “não será permitido pela LOCADORA, o comércio de bebidas
          alcoólicas, jogo ou outro tipo de comércio que traga perturbação aos
          vizinhos”. 11. A LOCADORA fica facultada vistoriar e examinar o prédio
          em seu interior, sempre que lhe aprouver, em horário comercial e
          mediante prévio aviso.
        </Text>
        <Text style={styles.text}>
          12. Fica estipulada a multa equivalente de 3 vezes o valor do aluguel,
          na qual incorrerá a parte que infringir qualquer cláusula deste
          contrato, com a faculdade para a parte inocente de considerar
          simultaneamente rescindida a locação, independente de qualquer
          notificação.
        </Text>
        <Text style={styles.text}>
          13. Se o LOCATÁRIO vier a usar da faculdade que lhe confere o contido
          no artigo 4° da Lei n° 8.245/1991 e devolver o imóvel antes do
          vencimento do prazo ajustado, pagará a multa compensatória equivalente
          a 02 (duas) vezes o valor do aluguel vigente, reduzido
          proporcionalmente ao tempo do contrato já cumprido.
        </Text>
        <Text style={styles.text}>
          14. A LOCADORA deverá junto com ao LOCATÁRIO, antes da entrega das
          chaves a fazer uma fiscalização do imóvel, para ver se o imóvel se
          encontra em perfeito estado, obrigando se ainda a Locatária:
        </Text>
        <Text style={styles.text}>
          14.1-. A manter o imóvel locado no mais perfeito estado de conservação
          e limpeza, para assim restituí-lo aos locadores, por ocasião do
          término ou da rescisão da locação, correndo por sua conta exclusiva as
          despesas necessárias para esse fim, notadamente as que se referirem à
          conservação do imóvel, pisos, paredes, portas, janelas, sanitários,
          torneiras e pintada.
        </Text>
        <Text style={styles.text}>
          15. O locatário será responsável pela multa, juros e demais
          incidências provenientes de sua demora em entregar a locadora,
          qualquer intimação dos poderes públicos ou quaisquer comunicações que
          digam respeito ao imóvel e que sejam de responsabilidade do locador.
        </Text>
        <Text style={styles.text}>
          16. Caso A LOCADORA manifeste vontade de vender o imóvel objeto do
          presente, deverá propor por escrito ao Locatário que se emitirá
          resposta em 30 dias, a partir da comunicação inicial, tendo a
          Locatária a prioridade na compra do imóvel. Lei n° 8.245/1991 art. 27
          (Lei do Inquilinato).
        </Text>
        <Text style={styles.text}>
          16.1 - Se o Locatário não se manifestar no prazo estipulado na
          cláusula anterior, permitirá desde logo a Locadora a visitarem o
          imóvel com possíveis compradores.
        </Text>
        <Text style={styles.text}>
          16.2 – Se a venda do imóvel para terceiros for inferior à proposta
          feita à Locatária, ele o Locatário será indenizado em 20
          salários-mínimos vigentes no País, na época da venda.
        </Text>
        <Text style={styles.text2}>
          Fica expressamente eleito o Fórum do imóvel, para soluções de qualquer
          dúvida resultante deste compromisso, com a expressa renúncia de
          qualquer outro por mais privilegiado que seja. As partes contratantes
          declaram expressamente que estão de pleno acordo com este contrato em
          todos os seus termos, e por esta forma aceitam em duas vias de igual
          teor e valor, para um só efeito, ficando cada contratante na posse de
          uma via para sua orientação e governo, na defesa de seus direito e
          obrigações, tudo na forma da Lei. Outrossim, declaram as partes
          contratantes, que todas as informações e qualificações constantes do
          presente instrumento, foram por eles fornecido, pelo que assume
          integral responsabilidade neste sentido, isentado total está
          digitadora E, por estarem, de acordo a locadora e a locatária, com o
          disposto neste instrumento particular, assinam em duas vias de igual
          teor.
        </Text>

        <Text style={styles.text}>
          _________________________________________ PAULA V. DOS SANTOS BUENO
          (LOCADORA).
        </Text>

        <Text style={styles.text}>
          _________________________________________ MARCOS ROBERTO MARIANO
          (LOCATÁRIO).
        </Text>

        <Text style={styles.text}>Testemunhas:</Text>
        <Text style={styles.text}>
          _________________________________________ (CPF)
        </Text>
        <Text style={styles.text}>
          _________________________________________ (CPF)
        </Text>
      </View>
    </Page>
  );
}
