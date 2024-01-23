'use server';
import prisma from "@/lib/prisma";

export default async function postVisit(start: Date, end: Date, location: string) {

  const result = await prisma.visit.create({
    data: {
      location: location,
      start: start,
      end: end,
      userId: 1,
    },
  });
  console.log(result);
}