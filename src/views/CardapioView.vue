<script lang="ts" setup>
import { ref } from 'vue';

const tabs = ref([
    {id: 1, title: 'Brocólis com Bacon', content: 'Content 1', value: 'R$ 29,91' },
    {id: 2, title: 'Costela Cremosa', content: 'Content 2', value: 'R$ 39,92' },
    {id: 3, title: 'Strognoff de Frango', content: 'Content 3', value: 'R$ 29,92' },
    {id: 4, title: 'Strognoff de Carne(Alcatra/Contra-Filé)', content: 'Content 4', value: 'R$ 39,94' },    
    {id: 5, title: 'Frango com Milho', content: 'Content 6', value: 'R$ 29,95' },
    {id: 6, title: 'Vegetariana', content: 'Content 7', value: 'R$ 29,96' },
    {id: 7, title: 'ESTROGONOFF DE CAMARÃO', content: 'Content 7', value: 'R$ 59,96' },
    
]);

  const tabsMacarrao = ref([
    {id: 1, title: 'MACARRÃO A BOLONHESA', content: 'Macarrão a sua escolha,molho de tomate,molho branco artesanal, muçarela e carne moida com tempero especial', value: 'R$ 26,90' },
    {id: 2, title: 'BROCÓLIS COM BACON', content: 'Macarrão a sua escolha,molho de tomate,molho branco artesanal, muçarela e brocólis', value: 'R$ 26,90' },
    {id: 3, title: 'ESTROGONOFF DE CARNE', content: 'Macarrão a sua escolha, alcatra ou contra-filé, molho de strognoff com champignon, ervilha, muçarela, cheiro verde e oregano', value: 'R$ 26,90' },
    {id: 4, title: 'ESTROGONOFF DE FRANGO', content: 'Macarrão a sua escolha,peito de frango em tiras, molho de strognoff com champignon, ervilha, muçarela, cheiro verde e oregano', value: 'R$ 26,90' },
    {id: 5, title: 'ESTROGONOFF DE CAMARÃO', content: 'Macarrão a sua escolha, camarão, molho de strognoff com champignon, ervilha, muçarela, cheiro verde e oregano', value: 'R$ 26,90' },
]);
</script>

<template>
  <div class="cardapio-view">   

    <div class="items-cardapio">
      <div style="padding: 1rem; color: #ffffff;">
        <h1>Cardápio</h1>
        <p>Bem-vindo ao nosso cardápio! Aqui você encontrará uma variedade de sabores deliciosos para escolher. Explore nossas opções e faça seu pedido!</p>
      </div>

      <div style="padding: 1rem; ">      
        <span style="color: #ff751f ; font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;"><h2>BATATA</h2></span>      
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
        <span style="color: #ff751f ; font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;"><h2>Macarrão</h2></span>      
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
    color: #ffbd59;
    font-size: 1rem;
}

:deep .p-accordionheader {
    color: #ffbd59;
    font-size: 1rem;
  }
  :deep .p-accordionheader:hover {
    color: #ffbd59;
   
  }
    
   
</style>
  