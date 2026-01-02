// Arquivo para resetar o Banco de dados com 2 produtos
//import extension = require("@prisma/client/extension");
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Limpar os dados que tem no BD
    await prisma.cartItem.deleteMany()
    await prisma.cart.deleteMany()
    await prisma.productVariant.deleteMany()
    await prisma.product.deleteMany()
    await prisma.category.deleteMany()
    await prisma.user.deleteMany()

    console.log("\nBanco de dados Limpo\n");
    // Criar usuario
    await prisma.user.create({
        data: {
            id: 'ae05ca52-be37-4592-8629-06915a2469de',
            name: 'Admin',
            email: 'admin@gmail.com',
            password_hash: 'senhaHash',
            role: 'ADMIN',
            carts: {}
        }
    })

    await prisma.user.create({
        data: {
            id: 'ae05ca52-be37-4592-8629-06915a2470de',
            name: 'Cliente',
            email: 'client@gmail.com',
            password_hash: 'senhaHash2',
            role: 'CUSTOMER',
            carts: {}
        }
    })
    // Criar produtos
}

main()
    .then( async() => {await prisma.$disconnect()})
    .catch(async(e) => {
        console.error(e)
        await prisma.$disconnect()
    })