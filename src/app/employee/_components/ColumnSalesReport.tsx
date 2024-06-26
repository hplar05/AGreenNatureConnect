import { CompletedTransaction } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../inventory/_components/DateTableColumnHeader";
import { formatDate, formatDateWithTime, formatPrice } from "@/lib/utils";

export const ColumnSalesReport: ColumnDef<CompletedTransaction>[] = [
    {
        accessorKey: "referenceId",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Reference ID" />
            );
        },
        cell: ({ row }) => {
            const id = row.original.referenceId

            return (
                <>
                    {id}
                </>
            )
        },
    },
    {
        accessorKey: "createdAt",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Date" />
            );
        },
        cell: ({ row }) => {
            const date = row.original.createdAt;

            return (
                <>
                    {formatDateWithTime(date)}
                </>
            );
        },
    },
    {
        accessorKey: "amount",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Total Amount" />
            );
        },
        cell: ({ row }) => {
            const amnt = row.original.amount

            return (
                <>
                    {formatPrice(amnt)}
                </>
            )
        },
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Status" />
            );
        },
        cell: ({ row }) => {
            const status = row.original.status

            return (
                <>
                    {status}
                </>
            )
        },
    },
    {
        accessorKey: "buyer",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Buyer" />
            );
        },
        cell: ({ row }) => {
            const firstName = row.original.buyer.name
            const lastName = row.original.buyer.lastName


            return (
                <>
                    {firstName} {" "} {lastName}
                </>
            )
        },
    },
    {
        accessorKey: "orderedProducts",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Ordered Products" />
            );
        },
        cell: ({ row }) => {
            const orderedProducts = row.original.orderedProducts

            return (
                <>
                    {orderedProducts.map((product, index) => (
                        <div key={index}>
                            {product.product.name} (Price: {product.priceInKg}, Qty: {product.quantity}, Total: {product.totalPrice})
                        </div>
                    ))}
                </>
            )
        },
    }
]