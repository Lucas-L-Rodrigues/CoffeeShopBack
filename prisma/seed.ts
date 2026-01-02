// Arquivo para resetar o Banco de dados com 2 produtos
import extension = require("@prisma/client/extension");
//import process = require("node:process");

const prisma = new extension.PrismaClient

async function main() {
    // Limpar os dados que tem no BD
    await prisma.products.deleteMany()
    await prisma.categories.deleteMany()

    console.log("Banco de dados Limpo (produtos e categorias).\n");
    // Criar categorias
    // Criar produtos
}

main()
    .then( async() => {await prisma.$disconnect()})
    .catch(async(e) => {
        console.error(e)
        await prisma.$disconnect()
    })