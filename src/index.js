import { readdirSync, statSync, writeFileSync, existsSync } from 'fs';
import { join, basename } from 'path';
import dotenv from 'dotenv';

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

// Função para converter bytes para gigabytes
function bytesToGB(bytes) {
    return (bytes / (1024 * 1024 * 1024)).toFixed(2);
}

// Função para ler o diretório e calcular os tamanhos das pastas e subpastas
function readDirectory(dirPath, outputPath) {
    let output = '';

    // Verificar se o arquivo já existe, se não, criar um novo
    if (!existsSync(outputPath)) {
        writeFileSync(outputPath, ''); // Cria um arquivo vazio
        console.log(`Arquivo ${outputPath} criado.`);
    }

    const files = readdirSync(dirPath);
    files.forEach(file => {
        const filePath = join(dirPath, file);
        const stats = statSync(filePath);

        if (stats.isDirectory()) {
            const { totalSize, subfolders } = getFolderInfo(filePath);
            const sizeInGB = bytesToGB(totalSize);
            const sizeInMB = (totalSize / (1024 * 1024)).toFixed(2);
            output += `${basename(filePath)}: ${sizeInGB} GB (${sizeInMB} MB)\n`;

            console.log(`Calculando tamanho de ${basename(filePath)}...`);

            subfolders.forEach(subfolder => {
                const { folderName, folderSize } = subfolder;
                const subSizeInGB = bytesToGB(folderSize);
                const subSizeInMB = (folderSize / (1024 * 1024)).toFixed(2);
                output += `  - ${folderName}: ${subSizeInGB} GB (${subSizeInMB} MB)\n`;
                console.log(`  - ${folderName}: ${subSizeInGB} GB (${subSizeInMB} MB)`);
            });

            output += '\n'; // Adicionar linha em branco entre cada pasta
        }
    });

    // Salvar no arquivo
    writeFileSync(outputPath, output);
    console.log(`Relatório salvo em ${outputPath}`);

    // Função para obter informações de tamanho e subpastas de um diretório
    function getFolderInfo(dirPath) {
        let totalSize = 0;
        const subfolders = [];

        const files = readdirSync(dirPath);
        files.forEach(file => {
            const filePath = join(dirPath, file);
            const stats = statSync(filePath);

            if (stats.isDirectory()) {
                const folderSize = getTotalSize(filePath);
                totalSize += folderSize;
                subfolders.push({ folderName: basename(filePath), folderSize });
            } else {
                totalSize += stats.size;
            }
        });

        return { totalSize, subfolders };
    }

    // Função para calcular o tamanho total de uma pasta e suas subpastas
    function getTotalSize(dirPath) {
        let totalSize = 0;
        const files = readdirSync(dirPath);

        files.forEach(file => {
            const filePath = join(dirPath, file);
            const stats = statSync(filePath);

            if (stats.isDirectory()) {
                totalSize += getTotalSize(filePath);
            } else {
                totalSize += stats.size;
            }
        });

        return totalSize;
    }
}

// Exemplo de uso utilizando variáveis de ambiente
const directoryPath = process.env.DIRECTORY_PATH; // Pega o caminho do diretório a partir das variáveis de ambiente
const outputPath = process.env.OUTPUT_PATH; // Pega o nome do arquivo de saída a partir das variáveis de ambiente

readDirectory(directoryPath, outputPath);
