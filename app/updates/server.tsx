'use server';
import prisma from "@/lib/prisma";

export async function postVisit(start: Date, end: Date, location: string) {

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

export async function changeDefaultLocation(location: string) {
  const result = await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      defaultLocation: location
    }
  });
  console.log(result);
}