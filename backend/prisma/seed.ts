import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(){

    const notes1 = await prisma.notes.upsert({
        where: { title: "My Daily Routine" },
        update: {},
        create: {
            title: 'My Daily Routine',
            notes: 'this is my test notes'
        }
    });

    console.log(notes1)
}

main()
    .catch(e=>{
        console.error(e)
        process.exit(1);
    })
    .finally(async()=>{
        await prisma.$disconnect();
    })