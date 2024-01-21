import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Table from "@/components/table";
import TablePlaceholder from "@/components/table-placeholder";
import ExpandingArrow from "@/components/expanding-arrow";
import { PrismaClient, Prisma } from "@prisma/client";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
      <button>Press</button>
      <Suspense fallback={<TablePlaceholder />}>
        <Table />
      </Suspense>
    </div>
  );
}
