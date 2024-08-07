"use client"

import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/Ui/popover";
import { Button, buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CompletedTransaction, UserWithCommunity } from "@/lib/types";
import { cn, formatPrice, formatPriceManual } from "@/lib/utils";
import { User } from "@prisma/client";
import { format } from "date-fns";
import { CalendarIcon, FileUp } from "lucide-react";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { salesReport } from "../../../../actions/sales";
import { DataTable } from "../inventory/_components/data-table";
import { ColumnSalesReport } from "./ColumnSalesReport";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface Props {
    user: UserWithCommunity;
}

export const SalesReportTable = ({ user }: Props) => {
    const [date, setDate] = useState<DateRange | undefined>(undefined);
    const [sales, setSales] = useState<CompletedTransaction[]>([])
    const [totalSalesAmount, setTotalSalesAmount] = useState<number>(0);
    const [totalProductsSold, setTotalProductsSold] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let startDate: Date | undefined;
                let endDate: Date | undefined;

                if (date && date.from && date.to) {
                    startDate = date.from;
                    endDate = new Date(date.to)

                    endDate.setHours(23, 59, 59, 999)
                } else {
                    // Default to current year if date range not selected
                    const today = new Date();
                    startDate = new Date(today.getFullYear(), 0, 1); // Start date is first day of current year
                    endDate = new Date(today.getFullYear(), 11, 31); // End date is last day of current year
                }

                const { salesData, totalSalesAmount, totalProductsSold } = await salesReport(startDate, endDate);
                setSales(salesData as CompletedTransaction[]);
                setTotalSalesAmount(totalSalesAmount);
                setTotalProductsSold(totalProductsSold);
            } catch (error) {
                console.error("Error fetching sales data:", error);
            }
        };

        fetchData();
    }, [date]);

    const groupSoldProductsByCategory = (sales: CompletedTransaction[]) => {
        const productsByCategory: { [key: string]: { [key: string]: { quantity: number; totalSales: number } } } = {};

        sales.forEach((transaction) => {
            transaction.orderedProducts.forEach((orderedProduct) => {
                const { name, category } = orderedProduct.product;
                const { quantity, priceInKg } = orderedProduct;
                const totalSales = quantity * priceInKg; // Calculate total sales amount for this product

                if (!productsByCategory[category]) {
                    productsByCategory[category] = {};
                }

                if (!productsByCategory[category][name]) {
                    productsByCategory[category][name] = { quantity: 0, totalSales: 0 };
                }

                productsByCategory[category][name].quantity += quantity;
                productsByCategory[category][name].totalSales += totalSales;
            });
        });

        return productsByCategory;
    };

    const soldProductsByCategory = groupSoldProductsByCategory(sales);

    const generatePDF = () => {
        const doc = new jsPDF({
            orientation: 'landscape',
        });

        doc.setFontSize(18);
        doc.text(`Sales Report of ${user.Community?.name}`, doc.internal.pageSize.getWidth() / 2, 20, { align: "center" });


        doc.setFontSize(14);
        if (date && date.from && date.to) {
            doc.text(`Date Range: ${format(date.from, "LLL dd, y")} - ${format(date.to, "LLL dd, y")}`, doc.internal.pageSize.getWidth() / 2, 30, { align: "center" });
        } else {
            doc.text("Date Range: Whole Sales of Community", doc.internal.pageSize.getWidth() / 2, 30, { align: "center" });
        }

        doc.setFontSize(10);
        doc.text(`Generated by: ${user.name} ${user.lastName}`, doc.internal.pageSize.getWidth() / 2, 40, { align: "center" });

        const generatedAt = format(new Date(), "LLL dd, y hh:mm a");
        doc.text(`Generated at: ${generatedAt}`, doc.internal.pageSize.getWidth() / 2, 50, { align: "center" });

        const totalSalesAmount = sales.reduce((total, sale) => total + sale.amount, 0);

        autoTable(doc, {
            head: [['Reference ID', 'Date', 'Total Amount', 'Status', 'Buyer', 'Ordered Products']],
            body: sales.map(sale => [
                sale.referenceId,
                format(sale.createdAt, 'MM/dd/yyyy HH:mm'),
                `PHP${sale.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`,
                sale.status,
                `${sale.buyer.name} ${sale.buyer.lastName}`,
                sale.orderedProducts.map(product => `${product.product.name} (Price: ${product.priceInKg}, Qty: ${product.quantity}, Total: PHP${product.totalPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')})`).join(", ")
            ]),
            startY: 60,
            didDrawPage: (data) => {
                // const { pageNumber, table } = data;
                // const finalY = table.finalY ?? 0;
                // const pageWidth = doc.internal.pageSize.getWidth();
                // const startX = table.settings.startY ?? 14;

                // if (pageNumber === doc.getCurrentPageInfo().pageNumber) {
                //     doc.setFontSize(12);
                //     doc.text('Total Sales', startX, finalY + 10);
                //     doc.text(`PHP${totalSalesAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`, startX + pageWidth / 2, finalY + 10);
                // }
            }
        });

        const totalPages = doc.getNumberOfPages();
        const lastPageHeight = doc.internal.pageSize.getHeight();

        doc.setFontSize(12);
        doc.text('Total Sales', 14, lastPageHeight - 20);
        doc.text(`PHP${totalSalesAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`, doc.internal.pageSize.getWidth() / 2, lastPageHeight - 20);

        doc.save('sales_report.pdf');
    };

    return (
        <div className="space-y-3">
            <div className="w-full flex justify-between print-card">
                <h1>Select a date range to generate the report:</h1>
                <div
                    className={cn(
                        buttonVariants({
                            variant: "outline"
                        }),
                        "cursor-pointer flex flex-row"
                    )}
                    onClick={generatePDF}
                >

                    <FileUp className="mr-2" strokeWidth={1} />
                    Generate Report
                </div>
            </div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            "w-full md:w-full justify-start text-left font-normal print-card",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y")} -{" "}
                                    {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                        ) : (
                            <span>Pick a date</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>

            <Card className="mx-auto max-w-full h-full drop-shadow-lg p-3 space-y-5">
                <div className="text-xl font-semibold flex flex-row gap-2 mb-2">
                    <h1>Date Report:</h1>
                    {date && date.from && date.to ? (
                        <p>
                            {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                        </p>
                    ) : (
                        <p>This report includes the overall summary of data.</p>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Total Sales Amount:
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="font-semibold">
                            {formatPrice(totalSalesAmount)}
                        </CardContent>
                    </Card>

                    {/* <Card>
                        <CardHeader>
                            <CardTitle>
                                Total Products Sold:
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="font-semibold">
                            {totalProductsSold.toLocaleString()}
                        </CardContent>
                    </Card> */}
                </div>

                <div>
                    <h2 className="font-bold text-xl">Sold Products Summary</h2>
                    {Object.entries(soldProductsByCategory).map(([category, products]) => (
                        <div key={category}>
                            <h3 className="text-lg font-medium">{category}:</h3>
                            <ul className="text-muted-foreground">
                                {Object.entries(products).map(([name, { quantity, totalSales }]) => (
                                    <li key={name}>
                                        {name}: {quantity} kg (Total Sale: {formatPrice(totalSales)})
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* <div>
                    Report generated by: {user.name} {" "} {user.lastName}
                </div> */}

                <DataTable
                    columns={ColumnSalesReport}
                    data={sales ?? []}
                    isSalesReport
                />
            </Card>
        </div>
    )
}
