# IA e Educação: conhecimento, aprendizagem e formação

Site acadêmico e responsivo da disciplina optativa de graduação ministrada por **Dr. Fabrício Ferraz Gerardi** e **Dra. Cristiane Poltronieri**.

**Site:** https://languagestructure.github.io/iaeducacao/

## Identificação

- Carga horária sugerida: 60 horas
- Pré-requisitos: não há; não são necessários conhecimentos de programação
- Público: estudantes de Filosofia, Educação, Humanidades e áreas afins

> Se produzir uma resposta correta ou plausível se tornou fácil, o que significa aprender e qual deve ser a finalidade da educação?

## Percurso

1. Escrita, memória e tecnologia
2. As máquinas podem pensar?
3. O que é um modelo de linguagem?
4. Verdade, erro e “alucinação”
5. Para que educamos?
6. Mente estendida e terceirização cognitiva
7. Desempenho não é aprendizagem
8. IA como tutora ou assistente do professor
9. Ética da IA e ética da educação
10. Viés, desigualdade e poder
11. Autoria, plágio e integridade acadêmica
12. Avaliação na era da IA
13. Políticas educacionais e institucionais
14. Oficina de projetos
15. Apresentações e síntese

## Encontro 1

O encontro articula a leitura principal de **Platão, *Fedro*, 274b–277a** ao artigo complementar:

> WILLIAMSON, Ben; EYNON, Rebecca. Historical threads, missing links, and future directions in AI in education. *Learning, Media and Technology*, v. 45, n. 3, p. 223–235, 2020. https://doi.org/10.1080/17439884.2020.1798995

A página oferece resumo detalhado, conceitos-chave, questões para discussão e uma atividade de mapa sociotécnico.

## Encontro 2

O segundo encontro põe em diálogo dois textos fundamentais da filosofia da inteligência artificial:

- TURING, Alan M. Computing Machinery and Intelligence. *Mind*, v. 59, n. 236, p. 433–460, 1950. https://doi.org/10.1093/mind/LIX.236.433
- SEARLE, John R. Minds, Brains, and Programs. *Behavioral and Brain Sciences*, v. 3, n. 3, p. 417–424, 1980. https://doi.org/10.1017/S0140525X00005756

A página reconstrói o jogo da imitação e o argumento do quarto chinês, compara as posições, reúne conceitos e questões para debate e propõe um tribunal conceitual sobre compreensão em máquinas.

## Encontro 3

O terceiro encontro apresenta os fundamentos conceituais dos grandes modelos de linguagem e pergunta o que um sistema efetivamente faz quando produz uma resposta.

- BENDER, Emily M.; GEBRU, Timnit; McMILLAN-MAJOR, Angelina; SHMITCHELL, Shmargaret. On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? *FAccT*, 2021. https://doi.org/10.1145/3442188.3445922
- VASWANI, Ashish et al. Attention Is All You Need. *NeurIPS*, 2017. https://arxiv.org/abs/1706.03762

A página explica probabilidade, tokens, treinamento, embeddings, Transformers, self-attention e geração incremental, além de discutir a crítica dos “papagaios estocásticos” e incluir uma seção sobre pensamento, consciência e inteligência artificial.

## Encontros 4 e 5

- **Encontro 4 — Verdade, erro e “alucinação”**: factualidade, fidelidade, justificação, a discussão sobre *bullshit* e uma atividade de autópsia epistemológica de respostas de IA.
- **Encontro 5 — Para que educamos?**: Hannah Arendt e Gert Biesta, mundo comum, natalidade, qualificação, socialização e subjetivação, com uma atividade de desenho de política de uso de IA a partir das finalidades educacionais.

## Atualização bibliográfica (novembro de 2026)

As leituras dos encontros 8 a 14 foram substituídas por literatura de 2024–2026, e os encontros 4, 6 e 7 receberam leituras complementares recentes. Os clássicos (Platão, Turing, Searle, Clark & Chalmers) e o Encontro 5 (Arendt e Biesta) foram mantidos sem alteração.

| Encontro | Leitura principal | Leitura complementar |
|---|---|---|
| 4 | Hicks, Humphries & Slater (2024) | Kalai et al. (2025) |
| 6 | Clark & Chalmers (1998) | Risko & Gilbert (2016); pesquisa recente: Lee et al. (2025) |
| 8 | Wang et al. (2025), Tutor CoPilot | De Simone et al. (2025), Banco Mundial |
| 9 | Selwyn (2024) | Miao & Cukurova / UNESCO (2024) |
| 10 | Hofmann et al. (2024), *Nature* | Bulathwela et al. (2024) |
| 11 | Perkins et al. (2024), AIAS | Weber-Wulff et al. (2023) |
| 12 | Corbin, Dawson & Liu (2025) | Fan et al. (2025) |
| 13 | Resolução CNE/CP nº 1/2026 | OCDE (2026) |
| 14 | Weidlich et al. (2025) | Lawson et al. (2026) |

Removidas por obsolescência ou substituição: Kasneci et al. (2023), Tlili et al. (2023), Cotton et al. (2024). Holmes et al. (2022) e UNESCO (2023) permanecem como documentos de referência. As páginas dos encontros 8–15 são geradas por um script de apoio; edite o HTML diretamente se preferir.

## Avaliação e uso de IA

A disciplina combina notas de leitura, autópsia epistemológica de uma resposta de IA, debate ou seminário e projeto final. Cada atividade indicará se a IA não é permitida, é permitida com declaração ou é requerida. O estudante permanece responsável pela exatidão, argumentação e autoria.

## Estrutura do repositório

```text
.
├── index.html
├── encontro-1/
│   └── index.html
├── encontro-2/
│   └── index.html
├── encontro-3/
│   └── index.html
├── encontro-4/
│   └── index.html
├── encontro-5/
│   └── index.html
├── assets/
│   ├── css/styles.css
│   └── js/main.js
├── .nojekyll
└── README.md
```

## Desenvolvimento e publicação

O site usa apenas HTML, CSS e JavaScript, sem processo de compilação. É compatível com GitHub Pages e publicado a partir da raiz da branch `main`.

## Direitos e referências

O código do site pode ser adaptado para fins educacionais. Os textos acadêmicos citados permanecem sujeitos às licenças e aos direitos de seus autores e editores. O artigo de Williamson e Eynon não é redistribuído neste repositório; a página aponta para o DOI e para o manuscrito aceito disponibilizado pela University of Edinburgh.
