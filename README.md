# Disk Explore

```json
{
  "author": "Perondini",
  "version": "1.0.0",
  "description": "Um script em Node.js que lê o conteúdo de unidades de disco, calcula o tamanho das pastas e subpastas em gigabytes (com os tamanhos em megabytes entre parênteses) e salva os resultados em um arquivo .txt",
}
```

## Como usar

```bash
# Clone esse repositório
$ git clone https://github.com/jfperondini/api-node.git

# Vá para o repositório
$ cd api-node

# Instale as dependencias
$ npm install

# config as variável de ambiente no .env
$ DIRECTORY_PATH =  # caminho do hd Ex:. /media/fernando/Novo volume
$ OUTPUT_PATH = # nome do arquivo .txt  Ex:. relatorio_novoVolume

# Rode a aplicação
$ npm run dev
```

## Arquivo .txt

```
$RECYCLE.BIN: 0.00 GB (0.00 MB)
  - S-1-5-21-759647880-3699818053-2115743005-1001: 0.00 GB (0.00 MB)

.Trash-1000: 0.00 GB (0.01 MB)
  - files: 0.00 GB (0.01 MB)
  - info: 0.00 GB (0.00 MB)

System Volume Information: 0.00 GB (0.02 MB)

brew: 0.34 GB (346.61 MB)
  - .dart_tool: 0.10 GB (99.70 MB)
  - .idea: 0.00 GB (0.04 MB)
  - .vscode: 0.00 GB (0.00 MB)
  - android: 0.00 GB (0.07 MB)
  - assets: 0.00 GB (0.27 MB)
  - build: 0.18 GB (189.02 MB)
  - json: 0.01 GB (15.14 MB)
  - lib: 0.00 GB (0.02 MB)
  - linux: 0.04 GB (42.32 MB)
  - src: 0.00 GB (0.00 MB)

disk-explore: 0.00 GB (0.92 MB)
  - node_modules: 0.00 GB (0.90 MB)
  - src: 0.00 GB (0.00 MB)

geladeira: 0.01 GB (13.98 MB)
```

## Contribuição

- **Abrir Issues**: Caso encontre algum problema, bug ou tenha sugestões para melhorias, sinta-se à vontade para abrir uma nova issue. Isso nos ajudará a acompanhar e resolver os problemas de forma eficiente.

- **Enviar Pull Requests**: Se você tem uma solução para um problema ou uma nova funcionalidade que gostaria de adicionar, envie uma pull request. Estamos abertos a contribuições e teremos prazer em revisar e integrar suas alterações ao projeto.
