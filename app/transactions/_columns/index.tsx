"use client"


import { Transaction, TransactionType } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"

import TransactionTypeBadge from "../_components/type-badge"


export const transactionsColumns: ColumnDef<Transaction>[] = [
    {
        accessorKey: "name",
        header: "Nome",
    },
    {
        accessorKey: "type",
        header: "Tipo",
        cell: ({ row: { original: transaction } }) => <TransactionTypeBadge transaction={transaction} />

    },
    {
        accessorKey: "category",
        header: "Categoria",
    },
    {
        accessorKey: "paymentMethod",
        header: "Método de pagamento",
    },
    {
        accessorKey: "date",
        header: "Data",
    },
    {
        accessorKey: "amount",
        header: "Valor",
    },
    {
        accessorKey: "actions",
        header: ""

    },
]

