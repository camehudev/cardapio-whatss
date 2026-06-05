<script lang="ts" setup>
import { ref } from 'vue';

const tabsCaldos = ref([
    {id: 1, title: 'Caldo Verde', content: 'Calde feijão com couve, mussarela, ovo de codorna, cheiro verde. Limão á parte. Acompanha torradas', value: 'R$ 22,20' },
    {id: 2, title: 'Caldo de Kenga(Caipira)', content: 'Caldo de mandioca com cenoura, frango desfiado,milho, mussarela,bacon, oregano, cheiro verde.Acompanha torradas', value: 'R$ 22,00' },
    {id: 3, title: 'Caldo de Feijão', content: 'Caldo de feijão com bacon, calabresa, mussarela, ovo de codorna,cheiro verde. Limão á parte. Acompanha torradas', value: 'R$ 22,00' },
]);

const tabs = ref([
    {id: 1, title: 'Brocólis com Bacon', content: 'Brocólis,bacon,molho branco da casa, Requeijão Miramar, Muçarela,cheddar,orégano,salsinha e cebolinha. Acompanha batata palha.', value: 'R$ 26,90' },
    {id: 2, title: 'Costela Cremosa', content: 'Costela bovina desfiada,tomate,pimentão,requeijão Miramar, muçarela e cheddar,oregano', value: 'R$ 26,9' },
    {id: 3, title: 'Strognoff de Frango', content: 'Peito de frango em tiras, molho de strognoff com champignon, ervilha, muçarela, cheiro verde e oregano. Acompanha batata palha.', value: 'R$ 26,90' },
    {id: 4, title: 'Strognoff de Carne(Alcatra/Contra-Filé)', content: 'Alcatra ou contra-filé em tiras, molho de strognoff com champignon, ervilha, muçarela, cheiro verde e oregano. Acompanha batata palha', value: 'R$ 26,90' },    
    // {id: 5, title: 'Frango com Milho', content: 'Content 6', value: 'R$ 29,95' },
    // {id: 6, title: 'Vegetariana', content: 'Content 7', value: 'R$ 29,96' },
    {id: 5, title: 'Frango com Milho', content: 'Peito de frango em cubos,milho, molho branco artesanal da casa, requeijão Miramar, muçarela, cheiro verde e oregano. Acompanha batata palha.', value: 'R$ 26,90' },
    {id: 6, title: 'Estrognoff de Camarão', content: 'Camarão, molho de tomate,creme de leite, requeijão Miramar, cheddar, champignon, cheiro verde e oregano. Acompanha batata palha.', value: 'R$ 29,90' },
    
]);

  const tabsMacarrao = ref([
    {id: 1, title: 'Macarrao a Bolonhesa', content: 'Macarrão a sua escolha,molho de tomate,molho branco artesanal, muçarela e carne moida com tempero especial', value: 'R$ 26,90' },
    {id: 2, title: 'Brocólis com Bacon', content: 'Macarrão a sua escolha,molho de tomate,molho branco artesanal, muçarela e brocólis', value: 'R$ 26,90' },
    {id: 3, title: 'Etrognoff de Carne', content: 'Macarrão a sua escolha, alcatra ou contra-filé, molho de strognoff com champignon, ervilha, muçarela, cheiro verde e oregano', value: 'R$ 26,90' },
    {id: 4, title: 'Estrognoff de Frango', content: 'Macarrão a sua escolha,peito de frango em tiras, molho de strognoff com champignon, ervilha, muçarela, cheiro verde e oregano', value: 'R$ 26,90' },
    {id: 5, title: 'Estrogonoff de Camarão', content: 'Macarrão a sua escolha, camarão, molho de strognoff com champignon, ervilha, muçarela, cheiro verde e oregano', value: 'R$ 26,90' },
]);

  const tabsBebidas = ref([
    {id: 1, title: 'Coca-Cola 600', content: 'Zero açucar', value: 'R$ 7,00' },
    {id: 2, title: 'Coca-Cola 200ml', content: 'Zero açucar', value: 'R$ 3,00' },
    
]);
</script>

<template>
  <div class="cardapio-view">   

    <div class="items-cardapio">
      <div style="padding: 0.5rem; color: #ffffff;">
        <div style="display:flex; align-items: center;">
          <div>
            <img src="./../assets/cardapio.png" alt="Logo" style="width: 40px; height: auto; margin-right: 1rem;" >
          </div>
          <div>
            <h1>PROVE SABOR</h1>           
          </div>

         
        </div>
         <p style="padding-top: 0.5rem;">Bem-vindo! Aqui você encontrará uma variedade de sabores deliciosos para escolher. Explore nossas opções e faça seu pedido!</p>
        
      </div>

      <div style="padding: 0.5rem; ">      
        <span style="color: #ffffff ; font-size: 1.3rem; font-weight: 700; margin-bottom: 0.5rem;"><h2>Caldos</h2></span>      
      </div>

        <Accordion :value="tabsCaldos.map(t => t.value)" multiple>    
          <AccordionPanel v-for="tab in tabsCaldos" :key="tab.id" :value="tab.value">
            <AccordionHeader>{{ tab.title }}</AccordionHeader>
            <AccordionContent>
              <p class="m-0">{{ tab.content }}</p>
              <p style="margin-top:0.5rem; font-size: 1.5rem; font-weight: 800;"><strong>{{ tab.value }}</strong></p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
        

      <div style="padding: 0.5rem; ">      
        <span style="color: #ffffff; ; font-size: 1.3rem; font-weight: 700; margin-bottom: 0.5rem;"><h2>Batatas</h2></span>      
      </div>

        <Accordion :value="tabs.map(t => t.value)" multiple>    
          <AccordionPanel v-for="tab in tabs" :key="tab.id" :value="tab.value">
            <AccordionHeader>{{ tab.title }}</AccordionHeader>
            <AccordionContent>
              <p class="m-0">{{ tab.content }}</p>
              <p style="margin-top:0.5rem; font-size: 1.5rem; font-weight: 800;"><strong>{{ tab.value }}</strong></p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

      <div style="padding: 1rem; ">      
        <span style="color: #ffffff ; font-size: 1.3rem; font-weight: 700; margin-bottom: 0.5rem;"><h2>Macarrão</h2></span>      
      </div>

      <Accordion :value="tabsMacarrao.map(t => t.value)" multiple>    
          <AccordionPanel v-for="tab in tabsMacarrao" :key="tab.id" :value="tab.value">
            <AccordionHeader>{{ tab.title }}</AccordionHeader>
            <AccordionContent>
              <p class="m-0">{{ tab.content }}</p>
              <p style="margin-top:0.5rem; font-size: 1.5rem; font-weight: 800;"><strong>{{ tab.value }}</strong></p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        <div style="padding: 1rem; ">      
          <span style="color: #ffffff ; font-size: 1.3rem; font-weight: 700; margin-bottom: 0.5rem;"><h2>Bebidas</h2></span>      
        </div>


        <Accordion :value="tabsBebidas.map(t => t.value)" multiple>    
          <AccordionPanel v-for="tab in tabsBebidas" :key="tab.id" :value="tab.value">
            <AccordionHeader>{{ tab.title }}</AccordionHeader>
            <AccordionContent>
              <p class="m-0">{{ tab.content }}</p>
              <p style="margin-top:0.5rem; font-size: 1.5rem; font-weight: 800;"><strong>{{ tab.value }}</strong></p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

    </div>


  </div>

  
</template>


<style scoped>
.cardapio-view{
  display: flex; 
  width: 100vw;
  height: 100vh;
  justify-content: center;    
  
}

.items-cardapio{
  display: flex;
  flex-direction: column;
  width: 100vw; 
  padding: 0.5rem;
}


:deep .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
    background: var(--p-accordion-header-active-background);
    color: #e7672c;
    font-size: 1.3rem;
}

:deep .p-accordionheader {
    color:#e7672c;;
    font-size: 1.3rem;
  }
  :deep .p-accordionheader:hover {
    color: #e7672c;;
   
  }
    
   
</style>
  