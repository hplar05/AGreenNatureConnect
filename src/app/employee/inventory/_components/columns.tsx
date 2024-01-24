"use client"
import { formatDate } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table"
import {
  MoreHorizontal,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/Ui/Dropdown-Menu"
import { Button } from "@/app/components/Ui/Button"
import { DataTableColumnHeader } from "./DateTableColumnHeader";
import { Checkbox } from "@/app/components/Ui/checkbox"
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
import { toast } from "@/lib/hooks/use-toast";
import Image from "next/image";

export type Products = {
  id: string;
  productImage: string;
  name: string;
  stockKilo: number;
  stockPack: number;
  category: string;
  status: string;
  createdAt: Date;
  creatorId: string;
  creator: User;
}

export const columns: ColumnDef<Products>[] =
  [
    // {
    //   id: "select",
    //   header: ({ table }) => (
    //     <Checkbox
    //       checked={
    //         table.getIsAllPageRowsSelected() ||
    //         (table.getIsSomePageRowsSelected() && "indeterminate")
    //       }
    //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //       aria-label="Select all"
    //       className="translate-y-[2px] "
    //     />
    //   ),
    //   cell: ({ row }) => (
    //     <Checkbox
    //       checked={row.getIsSelected()}
    //       onCheckedChange={(value) => row.toggleSelected(!!value)}
    //       aria-label="Select row"
    //       className="translate-y-[2px]"
    //     />
    //   ),
    // },
    {
      accessorKey: "productImage",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader column={column} title="Product Image" />
        )
      },
      cell: ({ row }) => {
        // const productId = row.original.id
        const ProductImage = row.original.productImage
        return <div
          className="cursor-pointer"
        // onClick={() => {
        //   toast({
        //     title: "Success!",
        //     description: "Employee ID copied to clipboard.",
        //     variant: "default"
        //   })
        //   navigator.clipboard.writeText(productId)
        // }}
        >
          <Image
            unoptimized
            quality={100}
            src={ProductImage}
            alt="product image"
            width={40}
            height={40}
          />
        </div>;
      },
    },
    {
      accessorKey: "name",
      header: ({ column }) => {

        return (
          <DataTableColumnHeader column={column} title="Name" />
        );
      },
      cell: ({ row }) => {
        const product = row.original.name
        const productId = row.original.id
        return <div
          onClick={() => {
            toast({
              title: "Success!",
              description: "Product name copied to clipboard.",
              variant: "default"
            })
            navigator.clipboard.writeText(product)
          }}
          className="cursor-pointer"
        >
          {product}
        </div>
      },
    },
    {
      accessorKey: "stockKilo",
      header: ({ column }) => {

        return (
          <DataTableColumnHeader column={column} title="Stock kg" />
        );
      },
      cell: ({ row }) => {
        const stockKilo = row.original.stockKilo;
        return <div>{stockKilo}kg</div>;
      },
    },
    {
      accessorKey: "stockPack",
      header: ({ column }) => {

        return (
          <DataTableColumnHeader column={column} title="Stock pck" />
        );
      },
      cell: ({ row }) => {
        const stockKilo = row.original.stockPack;
        return <div>{stockKilo}pck</div>;
      },
    },
    {
      accessorKey: "category",
      header: ({ column }) => {

        return (
          <DataTableColumnHeader column={column} title="Category" />
        );
      },
      cell: ({ row }) => {
        const category = row.original.category;
        return <div>{category}</div>;
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
        const status = row.original.status;
        return <div>{status}</div>;
      },
    },
    // {
    //   accessorKey: "price",
    //   header: ({ column }) => {

    //     return (
    //       <DataTableColumnHeader column={column} title="Price" />
    //     );
    //   },
    //   cell: ({ row }) => {
    //     const price = row.original.price;
    //     const formattedPrice = price.toLocaleString()

    //     return <div>{formattedPrice}{" "}PHP</div>;
    //   },
    // },
    {
      accessorKey: "createdAt",
      header: ({ column }) => {

        return (
          <DataTableColumnHeader column={column} title="Date" />
        );
      },
      cell: ({ row }) => {
        const createdAt = row.original.createdAt;
        return <div>{formatDate(createdAt)}</div>;
      },
    },
    {
      accessorKey: "creatorId",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader column={column} title="Inserted by" />
        )
      },
      cell: ({ row }) => {
        const creator = row.original
        const creatorName = row.original.creator.name;
        return <div
          onClick={() => {
            toast({
              title: "Success!",
              description: "Employee ID copied to clipboard.",
              variant: "default"
            })
            navigator.clipboard.writeText(creator.creatorId)
          }}
          className="cursor-pointer"
        >
          {creatorName}
        </div>
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const product = row.original
        const router = useRouter()

        const handleDelete = () => {
          console.log(`Hiding product with ID: ${product.id}`);
        };

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(product.id)}
              >
                Copy Product ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => router.push(`inventory/${product.id}`)}
              >Edit</DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleDelete}
              >Archive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

//   export const columns: ColumnDef<Products>[] = (products?.length ? Object.keys(products[0]) : []).map((key) => ({
//     accessorKey: key as keyof Products,
//     header: key.charAt(0).toUpperCase() + key.slice(1),
//   }));
