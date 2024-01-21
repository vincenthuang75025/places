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
        visits: {
          create: {
            location: "Tokyo",
            start: new Date("2024-03-10T00:00:00.000Z"),
            end: new Date("2024-03-24T00:00:00.000Z"),
          },
        },
      },
    }),
    prisma.user.upsert({
      where: { email: "idk@gmail.com" },
      update: {},
      create: {
        name: "Justin Glibert",
        email: "idk@gmail.com",
        image:
          "https://io0-questions.s3.us-west-2.amazonaws.com/2024/1d07c531f750c927a03d9bfa57c03488.png",
        visits: {
          create: {
            location: "San Francisco",
            start: new Date("2024-01-21T00:00:00.000Z"),
            end: new Date("2024-02-01T00:00:00.000Z"),
          },
        },
      },
    }),
    prisma.user.upsert({
      where: { email: "werj@gmail.com" },
      update: {},
      create: {
        name: "Jacky Zhao",
        email: "werj@gmail.com",
        image:
          "https://io0-questions.s3.us-west-2.amazonaws.com/2024/1d07c531f750c927a03d9bfa57c03488.png",
        visits: {
          create: {
            location: "San Francisco",
            start: new Date("2024-01-21T00:00:00.000Z"),
            end: new Date("2024-02-01T00:00:00.000Z"),
          },
        },
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
