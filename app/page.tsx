import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Table from "@/components/table";
import VisitsTable from "@/components/visits-table";
import TablePlaceholder from "@/components/table-placeholder";
import ExpandingArrow from "@/components/expanding-arrow";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="relative flex min-h-screen justify-center text-white">
      <div className="text-5xl m-10 mt-20">Places</div>
      <div className="max-w-4xl w-7/12 grid grid-cols-2 gap-10 mt-20">
        <div className="col-span-1">
          <div className="text-2xl">HOME</div>
          <Suspense fallback={<TablePlaceholder />}>
            <Table />
          </Suspense>
        </div>
        <div className="col-span-1">
          <div className="text-2xl">UPCOMING</div>
          <Suspense fallback={<TablePlaceholder />}>
            <VisitsTable />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
