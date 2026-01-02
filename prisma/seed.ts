// Arquivo para resetar o Banco de dados com 2 produtos
//import extension = require("@prisma/client/extension");
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Limpar os dados que tem no BD
    // await prisma.products.deleteMany()
    await prisma.product.deleteMany()
    // await prisma.categories.deleteMany()
    await prisma.category.deleteMany()

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