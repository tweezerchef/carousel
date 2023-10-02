const { PrismaClient } = require('@prisma/client');
const { readFileSync } = require('fs');

const prisma = new PrismaClient();

async function loadSQL() {
    // Read the SQL file
    const sqlContent = readFileSync('books.sql', 'utf-8');

    // Split the file by semicolon to get each SQL command
    const commands = sqlContent.split(';');

    for (const command of commands) {
        // Execute each command using Prisma
        if (command.trim()) { // avoid empty commands
            await prisma.$executeRawUnsafe(command);
        }
    }

    await prisma.$disconnect();
}

loadSQL().catch(e => {
    console.error(e);
    process.exit(1);
});
