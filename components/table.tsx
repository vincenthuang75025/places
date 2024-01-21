import prisma from "@/lib/prisma";
import { timeAgo } from "@/lib/utils";
import Image from "next/image";
import RefreshButton from "./refresh-button";

export default async function Table() {
  const startTime = Date.now();
  const users = await prisma.user.findMany();
  const duration = Date.now() - startTime;

  return (
    <div className="text-white font-['IBM Plex Mono'] divide-y divide-gray-900/5">
      {users.map((user) => (
        <div key={user.name} className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-4">
            <Image
              src={user.image}
              alt={user.name}
              width={30}
              height={30}
              className="object-cover rounded-full ring-1 ring-gray-900/5"
            />
            <div className="space-y-1">
              <p className="leading-none">{user.name}</p>
              {/* <p className="text-sm ">{user.email}</p> */}
            </div>
          </div>
          <p className="text-sm">{timeAgo(user.createdAt)}</p>
        </div>
      ))}
    </div>
  );
}
