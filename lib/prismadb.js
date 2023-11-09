import {PrismaClient} from "@prisma/client";

const prisma = globalThis.prisma || new PrismaClient();
// if(process.emv.NODE_ENV !== "production") globalThis.prisma = prismadb;
async function main() {

}

main().then(async () => {
  await prisma.$disconnect()
}).catch(async (e) => {
  console.error(e);
  await prisma.$disconnect()
  process.exit(1);
})
export default main;