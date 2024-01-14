import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import Table from '@/components/table'
import TablePlaceholder from '@/components/table-placeholder'
import ExpandingArrow from '@/components/expanding-arrow'
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()
export const dynamic = 'force-dynamic'

export default function Home() {
  async function createRecords() {
    'use server';
    const user = await prisma.users.create({
    data: {
      email: 'aayushgupta05@gmail.com',
      name: 'Aayush Gupta',
      image: "",
    },
  })
}
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <button onClick={createRecords}>Press</button>
    </main>
  )
}
