import prisma from "../lib/prisma";

async function main() {
  const response = await Promise.all([
    prisma.user.upsert({
      where: { email: "aayushgupta05@gmail.com" },
      update: {},
      create: {
        name: "Aayush Gupta",
        email: "aayushgupta05@gmail.com",
        image:
          "https://io0-questions.s3.us-west-2.amazonaws.com/2024/1d07c531f750c927a03d9bfa57c03488.png",
      },
    }),

    prisma.user.upsert({
      where: { email: "raphael.hotter@gmail.com" },
      update: {},
      create: {
        name: "Raffi Hotter",
        email: "raphael.hotter@gmail.com",
        image:
          "https://io0-questions.s3.us-west-2.amazonaws.com/2024/a23b98fd66a0c2dfed01b6b7e855dccb.png",
      },
    }),
  ]);
  console.log(response);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
