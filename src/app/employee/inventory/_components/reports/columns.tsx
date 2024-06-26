"use client"
import { Button } from "@/app/components/Ui/Button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/app/components/Ui/Dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/Ui/Dropdown-Menu";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/components/Ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/Ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "@/lib/hooks/use-toast";
import { cn, formatDate, formatPrice } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product, Stocks, User } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import axios from "axios";
import { addDays, format, isAfter, isBefore, isToday, isValid } from "date-fns";
import {
  CalendarIcon,
  MoreHorizontal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/components/Ui/alert-dialog";
import { buttonVariants } from "@/app/components/Ui/Button";
import { LatestProduct, ProductWithStocks } from "@/lib/types";
import { DataTableColumnHeader } from "./DateTableColumnHeader";
import { useTotalSalesValueStore } from "@/lib/hooks/useCalculatedRevenue";
import { useSaleValue } from "@/contexts/TotalSaleContext";

export type Products = {
  id: string;
  productImage: string;
  name: string;
  quantity: number;
  priceInKg: number;
  harvestedFrom: string;
  category: string;
  status: string;
  createdAt: Date;
  creatorId: string;
  creator: User;
  isFree: boolean;
}

export const columns: ColumnDef<LatestProduct>[] =
  [

    {
      accessorKey: "itemNumber",
      header: ({ column }) => {

        return (
          <DataTableColumnHeader column={column} title="Item number" />
        );
      },
      cell: ({ row }) => {
        const itemNumber = row.original.itemNumber
        const outOfStock = row.original.quantity === 0
        return <div
          className={cn("cursor-pointer font-bold",
            outOfStock ? "text-rose-500" : "text-emerald-600"
          )}
        >
          {itemNumber}
        </div>
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
        const outOfStock = row.original.quantity === 0
        return <div
          onClick={() => {
            toast({
              title: "Success!",
              description: "Product name copied to clipboard.",
              variant: "default"
            })
            navigator.clipboard.writeText(product)
          }}
          className={cn("cursor-pointer font-bold",
            outOfStock ? "text-rose-500" : "text-emerald-600"
          )}
        >
          {product}
        </div>
      },
    },
    {
      accessorKey: "quantity",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader column={column} title="Available stocks(kg)" className="text-center" />
        );
      },
      cell: ({ row }) => {
        const stockKilo = row.original.quantity;
        const outOfStock = row.original.quantity === 0;
        const numberOfStocks = row.original.quantity
        // const stocks = row.original.Stock;
        // const currentDate = new Date()
        // console.log(stocks)
        // const notExpiredStocks: Stocks[] | null = stocks.filter(stock => {
        //   const expirationDate = new Date(stock.expiration);
        //   // Return true if the expiration date is greater than or equal to the current date
        //   return expirationDate >= currentDate;
        // });

        // let totalNumberOfStocks = 0
        // const s = notExpiredStocks.map((stocks: Stocks)=>{
        //   totalNumberOfStocks += stocks.numberOfStocks
        // })


        return <div
          className={`${outOfStock && "text-rose-500"} text-center`}
        >{numberOfStocks}kg.</div>;
      },
    },
    {
      accessorKey: "quantityIPacks",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader column={column} title="Available stocks(packs)" className="text-center" />
        );
      },
      cell: ({ row }) => {
        const stockKilo = row.original.quantity;
        const outOfStock = row.original.quantity === 0;
        const numberOfStocks = row.original.quantityIPacks
        // const stocks = row.original.Stock;
        // const currentDate = new Date()
        // console.log(stocks)
        // const notExpiredStocks: Stocks[] | null = stocks.filter(stock => {
        //   const expirationDate = new Date(stock.expiration);
        //   // Return true if the expiration date is greater than or equal to the current date
        //   return expirationDate >= currentDate;
        // });

        // let totalNumberOfStocks = 0
        // const s = notExpiredStocks.map((stocks: Stocks)=>{
        //   totalNumberOfStocks += stocks.numberOfStocks
        // })


        return <div
          className={`${outOfStock && "text-rose-500"} text-center`}
        >{numberOfStocks}kg.</div>;
      },
    },
    {
      accessorKey: "quantityInPieces",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader column={column} title="Available stocks(pieces)" className="text-center" />
        );
      },
      cell: ({ row }) => {
        const stockKilo = row.original.quantity;
        const outOfStock = row.original.quantity === 0;
        const numberOfStocks = row.original.quantityInPieces
        // const stocks = row.original.Stock;
        // const currentDate = new Date()
        // console.log(stocks)
        // const notExpiredStocks: Stocks[] | null = stocks.filter(stock => {
        //   const expirationDate = new Date(stock.expiration);
        //   // Return true if the expiration date is greater than or equal to the current date
        //   return expirationDate >= currentDate;
        // });

        // let totalNumberOfStocks = 0
        // const s = notExpiredStocks.map((stocks: Stocks)=>{
        //   totalNumberOfStocks += stocks.numberOfStocks
        // })


        return <div
          className={`${outOfStock && "text-rose-500"} text-center`}
        >{numberOfStocks}kg.</div>;
      },
    },
    {
      accessorKey: "kilogram",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader column={column} title="Sold-Out Items (kg)" />
        );
      },
      cell: ({ row }) => {
        const orderedProducts = row.original.orderedProducts;
        let soldProducts = 0
        const fileterProduct = orderedProducts.filter((product)=>{
          return product.unitOfMeasurement === "kilograms"
        })
        fileterProduct.map((product)=>{
          soldProducts += product.quantity
        })
      
        return <div
          className={` text-center`}
        >{soldProducts}kg</div>;
      },
    },
    {
      accessorKey: "packs",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader column={column} title="Sold-Out Items (packs)" />
        );
      },
      cell: ({ row }) => {
        const orderedProducts = row.original.orderedProducts;
        let soldProducts = 0
        const fileterProduct = orderedProducts.filter((product)=>{
          return product.unitOfMeasurement === "packs"
        })
        fileterProduct.map((product)=>{
          soldProducts += product.quantity
        })
      
        return <div
          className={` text-center`}
        >{soldProducts} packs</div>;
      },
    },
    {
      accessorKey: "pieces",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader column={column} title="Sold-Out Items (pieces)" />
        );
      },
      cell: ({ row }) => {
        const orderedProducts = row.original.orderedProducts;
        let soldProducts = 0
        const fileterProduct = orderedProducts.filter((product)=>{
          return product.unitOfMeasurement === "pieces"
        })
        fileterProduct.map((product)=>{
          soldProducts += product.quantity
        })
      
      
        return <div
          className={` text-center`}
        >{soldProducts} pieces</div>;
      },
    },
    {
      accessorKey: "pieces",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader column={column} title="Aggregate units sold" />
        );
      },
      cell: ({ row }) => {
        const orderedProducts = row.original.orderedProducts.length;
        
        return <div
          className={` text-center`}
        >{orderedProducts} time(s)</div>;
      },
    },
    {
      accessorKey: "priceInKg",
      header: ({ column }) => {

        return (
          <DataTableColumnHeader column={column} title="Price in kg" />
        );
      },
      cell: ({ row }) => {
        const price = row.original.priceInKg;

        return <div className="text-center">{formatPrice(price)}</div>;
      },
    },
    {
      accessorKey: "priceIPacks",
      header: ({ column }) => {

        return (
          <DataTableColumnHeader column={column} title="Price in packs" />
        );
      },
      cell: ({ row }) => {
        const price = row.original.priceInPacks;
      
        return <div className="text-center">{formatPrice(price)}</div>;
      },
    },
    {
      accessorKey: "priceInPieces",
      header: ({ column }) => {

        return (
          <DataTableColumnHeader column={column} title="Price in pieces" />
        );
      },
      cell: ({ row }) => {
        const price = row.original.priceInPieces;

        return <div className="text-center">{formatPrice(price)}</div>;
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
        return <div className="text-right">{category}</div>;
      },
    },
    {
      accessorKey: "orderedProducts",
      header: ({ column }) => {

        return (
          <DataTableColumnHeader column={column} title="Sales Revenue" />
        );
      },
      cell: ({ row }) => {
        const orderedProducts = row.original.orderedProducts;
        let revenue = 0
        orderedProducts.map((product) => {
          revenue += product.totalPrice
        })
        return <div className="text-right">{formatPrice(revenue)}</div>;
      },
    },
    {
      accessorKey: "percentage",
      header: ({ column }) => {

        return (
          <DataTableColumnHeader column={column} title="Sales Revenue %" />
        );
      },
      cell: ({ row }) => {
        const orderedProducts = row.original.orderedProducts;
        let revenue = 0
        const { totalSale, setRevPercentage } = useSaleValue();


        orderedProducts.map((product) => {
          revenue += product.totalPrice
        })
        const percentage = (revenue/totalSale)*100
  
        return <div className="text-right">{percentage.toFixed(2)}%</div>;
      },
    },
  ]

//   export const columns: ColumnDef<Products>[] = (products?.length ? Object.keys(products[0]) : []).map((key) => ({
//     accessorKey: key as keyof Products,
//     header: key.charAt(0).toUpperCase() + key.slice(1),
//   }));
