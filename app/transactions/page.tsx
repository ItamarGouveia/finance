import { ArrowDownUpIcon } from "lucide-react"
import { Button } from "../_components/ui/button"
import { db } from "../_lib/prisma"
import { DataTable } from "../_components/ui/data-table"
import { transactionsColumns } from "./_columns"


const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({})
  return (
    <div className="p-6 space-y-6">
      <div className="flex w-full justify-center justify-between ">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-md">
          Adicionar
          <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={transactionsColumns} data={transactions} />
    </div>
  )
}

export default TransactionsPage
