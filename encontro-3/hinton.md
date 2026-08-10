# Geoffrey Hinton: redes neurais, pensamento e consciência

Material de apoio ao Encontro 3 — **O que é um modelo de linguagem?**

Fonte: entrevista de Geoffrey Hinton ao *StarTalk*, com Neil deGrasse Tyson, Gary O'Reilly e Chuck Nice.

Vídeo: https://www.youtube.com/watch?v=l6ZcFa8pybE

## 1. O que significa pensar? — 34:59–38:30

Hinton é perguntado diretamente sobre o que significa ser inteligente e o que significa pensar. Sua resposta não reduz pensamento a uma única operação: seres humanos pensam por meio de imagens, movimentos e diferentes tipos de representação. A linguagem é, segundo ele, uma das principais formas de representação envolvidas no pensamento.

Hinton assume aqui uma posição forte: **grandes modelos de linguagem já pensam**. Ele contrapõe duas tradições da IA. Na tradição simbólica, pensar é sobretudo manipular símbolos segundo regras explícitas. Na tradição conexionista, o pensamento pode emergir da dinâmica de redes neurais e de representações distribuídas. Para Hinton, as redes neurais atuais realizam processos que justificam falar em pensamento, ainda que permaneça aberta a discussão sobre o que exatamente deve contar como “pensar”.

### Questões para discussão

- Pensar exige linguagem?
- Produzir uma cadeia de raciocínio linguisticamente articulada é evidência de pensamento ou apenas de comportamento linguístico complexo?
- O critério deve ser o mecanismo interno, o comportamento observável ou ambos?
- Como a posição de Hinton se relaciona com Turing e com a crítica de Searle discutidos no Encontro 2?

## 2. Cérebro humano × rede neural artificial — 38:30–41:22

Hinton propõe uma comparação de ordem de grandeza:

| Sistema | Ordem de grandeza apresentada por Hinton |
| --- | ---: |
| Cérebro humano | ~100 trilhões de conexões (10¹⁴) |
| LLM grande | ~1 trilhão de conexões/parâmetros (10¹²) |
| Relação aproximada | ~1% |

O ponto central, porém, não é simplesmente contar conexões. Hinton contrasta dois regimes de aprendizagem. O cérebro humano teria **muitíssimas conexões e relativamente poucas experiências**, enquanto um grande modelo artificial teria **menos conexões, mas seria exposto a uma quantidade de dados/experiências milhares de vezes maior**.

Segundo Hinton, o *backpropagation* é muito eficiente para condensar grandes quantidades de regularidades aprendidas em um número relativamente limitado de parâmetros. Ele observa ainda que, durante anos, aumentar simultaneamente o tamanho das redes e a quantidade de dados levou a melhorias previsíveis de desempenho — o fenômeno associado às chamadas *scaling laws*. Até onde essa tendência continuará é uma questão empírica em aberto.

> **Cuidado com a analogia:** uma sinapse biológica não equivale simplesmente a um parâmetro de um Transformer. Os números são úteis para comparar ordens de grandeza, mas não autorizam concluir que “um LLM possui 1% de um cérebro”. Os sistemas têm arquiteturas, mecanismos de aprendizagem, temporalidades e formas de interação com o mundo muito diferentes.

### Questões para discussão

- O número de conexões é uma medida adequada de inteligência?
- O que importa mais: arquitetura, quantidade de parâmetros, dados ou experiência?
- É legítimo chamar dados de treinamento de “experiência”?
- O que a comparação deixa de fora — corpo, percepção, memória autobiográfica, interação social, desenvolvimento?

## 3. IA pode ser consciente? — 1:23:36–1:28:53

Tyson pergunta se consciência poderia emergir quando uma rede neural alcançasse complexidade suficiente. Hinton rejeita a imagem de consciência como uma espécie de substância ou essência misteriosa que aparece subitamente acima de determinado limiar de complexidade. Ele aproxima sua posição da filosofia de Daniel Dennett.

Para tornar o argumento concreto, Hinton imagina um **chatbot multimodal** equipado com câmera e braço robótico. O sistema consegue apontar para um objeto. Em seguida, coloca-se um prisma diante de sua câmera, deslocando a informação visual, e o sistema passa a apontar para o lugar errado. Depois de ser informado de que há um prisma diante da lente e de que o objeto está realmente à sua frente, o chatbot poderia explicar que o prisma desviou os raios de luz e que sua percepção havia situado o objeto lateralmente.

Hinton sustenta que, se o chatbot descrevesse isso como uma “experiência subjetiva”, estaria usando a expressão de maneira funcionalmente semelhante à maneira como seres humanos a utilizam. O exemplo pretende deslocar a discussão de uma suposta substância chamada consciência para a capacidade de um sistema de representar e relatar o estado de seu próprio sistema perceptual.

Hinton distingue ainda essa discussão de **awareness**. Ele observa que pesquisadores já descrevem modelos como estando “cientes” de que estão sendo testados. Para ele, no uso cotidiano, esse tipo de consciência situacional se aproxima daquilo que frequentemente chamamos de consciência, embora isso não resolva todas as questões filosóficas sobre experiência subjetiva.

### Questões para discussão

- Descrever corretamente um estado perceptual próprio implica ter experiência subjetiva?
- Há diferença entre **simular o relato de uma experiência** e **ter a experiência**?
- Como poderíamos distinguir empiricamente essas possibilidades?
- Se usamos comportamento como evidência de consciência em outros seres humanos, quando seria legítimo recusá-lo no caso de uma máquina?
- O argumento de Hinton responde ao problema de Searle ou apenas muda o critério de análise?

## 4. Três posições que não devem ser confundidas

Ao discutir o vídeo, convém separar três afirmações diferentes:

1. **LLMs exibem comportamentos que podemos chamar de raciocínio.** Esta é uma afirmação sobre capacidades observáveis.
2. **LLMs pensam.** Esta depende da definição de pensamento adotada e é a posição defendida por Hinton na entrevista.
3. **LLMs são conscientes ou possuem experiência subjetiva.** Esta é uma tese filosoficamente mais forte e permanece controversa; Hinton apresenta um argumento funcionalista em seu favor, não uma demonstração consensual.

Essa distinção é particularmente importante para o curso: compreender o funcionamento técnico de uma rede neural não resolve automaticamente as questões filosóficas sobre pensamento, significado e consciência.

## 5. Sequência sugerida para uso em aula

1. **34:59–38:30 — O que significa pensar?**
2. **38:30–41:22 — Cérebro × rede neural: conexões, experiência e escala.**
3. Retomar Turing e Searle: que evidência seria suficiente para atribuir pensamento?
4. **1:23:36–1:28:53 — IA pode ser consciente?**
5. Debate final: comportamento, mecanismo e experiência subjetiva são três problemas diferentes?

## Referência

HINTON, Geoffrey. Entrevista ao *StarTalk*, com Neil deGrasse Tyson, Gary O'Reilly e Chuck Nice. Trechos utilizados: 34:59–41:22 e 1:23:36–1:28:53. Disponível em: https://www.youtube.com/watch?v=l6ZcFa8pybE
