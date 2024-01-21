import prisma from "@/lib/prisma";
import { timeAgo } from "@/lib/utils";
import Image from "next/image";
import RefreshButton from "./refresh-button";

export default async function VisitsTable() {
  const startTime = Date.now();
  const visits = await prisma.visit.findMany({
    include: {
      user: true, // Return all fields
    },
  });
  console.log(visits);
  const duration = Date.now() - startTime;

  return (
    <div className="text-white font-['IBM Plex Mono'] divide-y divide-gray-900/5">
      {visits.map((visit) => (
        <div key={visit.id} className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-4">
            <Image
              src={visit.user.image}
              alt={visit.user.name}
              width={30}
              height={30}
              className="object-cover rounded-full ring-1 ring-gray-900/5"
            />
            <div className="space-y-1">
              <p className="leading-none">{visit.user.name}</p>
            </div>
          </div>
          <p className="mx-5">{visit.location}</p>
          <p className="text-sm">{timeAgo(visit.start)}</p>
        </div>
      ))}
    </div>
  );
}
