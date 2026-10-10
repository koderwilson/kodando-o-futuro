# Kodando o Futuro — Plataforma institucional

Projeto acadêmico desenvolvido para a disciplina **Desenvolvimento Front-end — Experiência Prática I**.

Site institucional fictício da ONG **Kodando o Futuro**, uma escola gratuita de programação para
crianças, adolescentes e jovens em situação de vulnerabilidade social. O projeto demonstra o uso de
HTML5 semântico, hierarquia de informação correta, acessibilidade e formulários com validação nativa.

## Estrutura de diretórios

```
/
├── index.html                          # Página inicial: apresentação da ONG
├── projetos.html                       # Frentes de atuação, voluntariado, doações, transparência e FAQ
├── cadastro.html                       # Formulário de cadastro de voluntários e doadores
├── assets/
│   ├── css/
│   │   └── style.css                   # Estilos de todo o site
│   ├── js/
│   │   └── mascaras.js                 # Máscaras de entrada (CPF, telefone, CEP)
│   └── img/                            # Imagens locais, cada uma em 3 formatos
│       ├── logo.svg / .png / .webp
│       ├── hero-terminal.svg / .png / .webp
│       ├── mentoria-em-dupla.svg / .png / .webp
│       ├── projeto-iniciacao.svg / .png / .webp
│       ├── projeto-formacao-web.svg / .png / .webp
│       ├── projeto-inclusao.svg / .png / .webp
│       └── projeto-infraestrutura.svg / .png / .webp
├── .gitignore
└── README.md
```

Cada imagem existe em três formatos: o `.svg` original (também usado como favicon), um `.png`
otimizado (fallback universal) e um `.webp` (formato moderno, mais leve). No HTML, cada `<img>` de
conteúdo é servida dentro de `<picture>`, com `<source type="image/webp">` apontando para o `.webp`
e o `<img>` de fallback apontando para o `.png` — navegadores sem suporte a WebP carregam o PNG
automaticamente. Os arquivos raster foram gerados a partir dos SVGs com Python (`cairosvg` para
rasterizar e `Pillow` para comprimir/exportar PNG e WebP), em @2x o tamanho de exibição para telas
de alta densidade.

## Como executar

Não há dependências nem build. Basta abrir os arquivos HTML diretamente no navegador:

1. Baixe ou clone a pasta do projeto.
2. Abra `index.html` com duplo clique, ou clique com o botão direito e escolha "Abrir com" → navegador
   de sua preferência.
3. Navegue entre as páginas pelo menu no topo.

Também é possível servir a pasta com qualquer servidor estático (por exemplo, a extensão
"Live Server" do VS Code), o que é recomendado para testar o comportamento do formulário.

## Identidade visual

O projeto usa uma identidade inspirada em editores de código/terminal: seções escuras em azul
petróleo (`#0b1120`) com acentos âmbar e teal, alternadas com seções claras em tom creme para leitura
confortável. Tipografia: **Fraunces** (títulos), **JetBrains Mono** (rótulos/código) e **Work Sans**
(corpo de texto), carregadas via Google Fonts.

## Checklist de qualidade

### Semântica e estrutura
- [x] `<!DOCTYPE html>`, `lang="pt-BR"`, `charset="UTF-8"` e `meta viewport` em todas as páginas
- [x] `<title>` e `meta description` únicos por página
- [x] `header`, `nav`, `main`, `section`, `article`, `footer` usados com propósito semântico
- [x] `figure`/`figcaption`, `address` e `time[datetime]` usados onde fazia sentido
- [x] Ausência de `div`/`span` quando havia elemento semântico equivalente disponível
- [x] Link "Pular para o conteúdo" no início de cada página
- [x] Rodapé com contato em `<address>`, redes sociais e direitos autorais

### Hierarquia de títulos
- [x] Um único `<h1>` por página
- [x] `h2` delimitando as seções principais, `h3` para subníveis, sem pular níveis

### Navegação
- [x] Menu presente nas 3 páginas, com `aria-current="page"` indicando a página atual

### Acessibilidade
- [x] Todas as imagens com `alt` descritivo (ou `alt=""` quando puramente decorativo)
- [x] Todo campo de formulário com `<label for>` associado
- [x] Textos de ajuda ligados aos campos via `aria-describedby`
- [x] Estados de foco visíveis para navegação por teclado
- [x] Contraste de cores verificado para atender WCAG AA

### Formulário (cadastro.html)
- [x] Campos agrupados logicamente com `fieldset`/`legend`
- [x] Validações nativas: `required`, `type`, `pattern`, `minlength`/`maxlength`, `min`/`max`
- [x] Idade mínima de 18 anos aplicada via `max` no campo de data de nascimento
- [x] `title` explicativo em todos os campos com `pattern`
- [x] `autocomplete` apropriado em cada campo
- [x] Máscaras de CPF, telefone e CEP com formatação automática em `assets/js/mascaras.js`
- [x] Validação de formato funciona mesmo com JavaScript desativado (via `pattern` nativo)
- [x] Checkbox obrigatório de consentimento LGPD
- [x] Botões "Enviar cadastro" (submit) e "Limpar" (reset)

### CSS
- [x] Layout responsivo mobile-first com Flexbox/Grid
- [x] Nenhum CSS inline ou `<style>` embutido no HTML
- [x] Estilização de `:valid`/`:invalid`/`:user-invalid` nos campos do formulário

### Imagens
- [x] Todas as imagens existem fisicamente em `assets/img/` (sem links externos)
- [x] Cada imagem em 3 formatos: `.svg` (original/favicon), `.png` (fallback) e `.webp` (otimizado)
- [x] `<picture>` com `<source type="image/webp">` + `<img>` de fallback em todas as imagens de conteúdo
- [x] `width`/`height` e `loading="lazy"` nas imagens abaixo da dobra
- [x] Nomes de arquivo descritivos, em minúsculas e sem acentos

### Validação e organização
- [x] **index.html, projetos.html e cadastro.html validados no [W3C Nu HTML Checker](https://validator.w3.org/nu/)
      real (via API): 0 erros e 0 avisos nos três arquivos**, na submissão final
- [x] **style.css validado no [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
      real: 0 erros** (32 avisos informativos esperados — variáveis CSS não checadas estaticamente,
      `@import` não seguido em modo de upload, e dois avisos de compatibilidade antiga/vendor-prefix
      em um recurso de acessibilidade e no ícone do FAQ)
- [x] Estrutura de diretórios conforme especificação (`assets/css`, `assets/js`, `assets/img`)
- [x] Nenhum arquivo órfão, temporário ou caminho quebrado
- [x] Nomes de arquivos e classes em minúsculas, sem acentos e descritivos
