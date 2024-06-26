import RelativeDate from '@/app/components/RelativeDate'; import { toast } from '@/lib/hooks/use-toast';
import { DeclineProductSchema, FormType } from '@/lib/validations/employee/products';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/app/components/Ui/Dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/app/components/Ui/alert-dialog';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/app/components/Ui/form';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { RadioGroup, RadioGroupItem } from '@/app/components/Ui/radio-group';
import { Textarea } from '@/app/components/Ui/textarea';
import { Button } from '@/app/components/Ui/Button';
import QrCodeDrawer from './QrCodeDrawer';
import ReviewModal from './ReviewModal';
import { RatingStars } from './Rating';
import { transactionWithOrderedProducts } from '@/lib/types';

export interface OrdersProps {
    selectedIndex: number;
    noOrders: string;
    transactions: transactionWithOrderedProducts[];
    cancelBtnDisplay: "block" | "hidden";
    status: string;
}
export interface Transaction {
    id: string;
    referenceId: string;
    amount: number;
    status: string;
    buyer: Buyer;
    paymentMethod: string | null;
    paymentStatus: string | null;
    checkOutSessionId:string | null;
    gcashReciept: string | null;
    seller: Community
    createdAt: Date;
    updatedAt: Date;
}
export interface Community {
    id: string;
    name: string;
    qrCode: string | null;
    contactNumber: string;
}
export interface Buyer {
    id: string;
    name: string | null;
    username: string | null;
    email: string | null;
    image: string | null;
    middleName: string | null;
    lastName: string | null;
    phoneNumber: string | null;
    address: string | null;
}
export interface OrderedVariant {
    id: string;
    product: Product;
    variant: Variants;
    price: number;
    quantity: number
}
export interface Variants {
    id: string
    unitOfMeasurement: string;
    variant: number;
    price: number;
    EstimatedPieces: number | null;
}
export interface Product {
    id: string;
    productImage: string;
    name: string;
    kilograms: number;
    grams: number;
    pounds: number;
    pieces: number;
    packs: number;
    category: string;
    status: string;
    isFree: boolean;
}


const Orders: React.FC<OrdersProps> = ({ status, noOrders, selectedIndex, transactions, cancelBtnDisplay, }) => {
    const form = useForm<z.infer<typeof DeclineProductSchema>>({
        resolver: zodResolver(DeclineProductSchema),
    })

    const { mutate: handleDecline, isLoading } = useMutation({
        mutationFn: async ({ transactionId, type, otherReason }: FormType) => {
            const payload: FormType = {
                transactionId,
                type,
                otherReason
            }

            const { data } = await axios.put("/api/markethub/transaction/cancelled", payload)
            return data
        },
        onError: (err) => {
            if (err instanceof AxiosError) {
                if (err.response?.status === 404) {
                    toast({
                        description: "No transaction found!",
                        variant: 'destructive',
                    })
                }
            } else {
                return toast({
                    title: 'Something went wrong.',
                    description: "Error",
                    variant: 'destructive',
                })
            }
        },
        onSuccess: (data) => {
            toast({
                description: `Successfully cancelled the transaction.`,
                variant: 'default',
            })

            setTimeout(() => {
                window.location.reload()
            }, 1000)
        }
    })

    function onSubmit(values: FormType, transactionId: string) {
        const payload: FormType = {
            transactionId,
            type: values.type,
            otherReason: values.otherReason,
        }

        handleDecline(payload)
    }

    return (
        <div className='w-full min-h-screen font-poppins transition-all ease-in-out duration-500 '>
            {selectedIndex == selectedIndex && (
                <div className=' '>
                    {transactions.length > 0 ? transactions.map((transaction: transactionWithOrderedProducts) => (
                        <div key={transaction.id} className='mt-5 border bg-gray-100 border-gray-200 shadow-sm drop-shadow-lg w-[90%] md:w-[70%] lg:w-[60%] mx-auto'>
                            <div className='flex justify-start items-center w-full pl-[65%] md:pl-[80%] px-5 md:px-10 py-3 border-gray-200 border-b-2 overflow-x-auto'>
                                
                                {transaction.paymentMethod !== 'E-wallet' || selectedIndex === 4 ? (
                                    null
                                ) : (
                                    <>
                                        {transaction.paymentStatus === 'Not Paid'  ? (
                                           <Link href={transaction.checkOutUrlLink || "/order-status"}>Pay Now</Link>
                                          
                                        ) : (
                                            <>Paid</>
                                        )}

                                    </>
                                )}
                                
                               
                            </div>

                            <div className='flex px-0 md:px-10 w-full my-5 gap-3 sm:gap-10 md:gap-14 items-center justify-center lg:justify-between transition-all ease-in-out duration-500'>
                                <div className=' w-1/2'>
                                    {transaction.orderedProducts.map((product) => (
                                        <Link key={product.id} href={`/order-status/${transaction.id}`} className='w-full flex text-sm flex-1 gap-5 sm:gap-10 justify-between items-center transition-all ease-in-out duration-500'>
                                            <div className='w-10 h-10 border-gray-200 border'>
                                                <Image
                                                    src={product.product.productImage}
                                                    alt={product.product.name}
                                                    height={50}
                                                    width={50}
                                                    className='object-cover w-full h-full'
                                                />
                                            </div>

                                            <div className=''>
                                                <h1 className='font-semibold text-[0.6rem] sm:text-xs md:text-lg'>{product.product.name}</h1>
                                                <p className='font-semibold text-gray-400 text-[0.5rem] sm:text-xs md:text-lg'>{product.quantity} {product.unitOfMeasurement} </p>
                                            </div>
                                            <div className='ml-auto font-semibold text-[0.6rem] sm:text-xs md:text-lg'>
                                                {product.priceInKg === 0 ? (
                                                    <h1>Free</h1>
                                                ) : (
                                                    <h1>₱ {product.totalPrice}</h1>
                                                )}

                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <div className=' w-1/3 flex flex-col justify-end items-end '>
                                    <h1 className='text-[0.5rem] sm:text-lg mb-3 text-gray-400 font-semibold'>{status}</h1>
                                    <div className={`flex gap-3`}>
                                        <Dialog>
                                            <DialogTrigger>
                                                <div
                                                    className={`${transaction.status === "PENDING" ? "block" : "hidden"} px-3 py-1 sm:px-5 sm:py-2 md:px-10 md:py-3 rounded-md text-sm md:text-xl bg-red-500 text-white font-medium font-poppins transition-all ease-in-out duration-500`}
                                                >
                                                    Cancel
                                                </div>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader className='flex flex-col items-start gap-1'>
                                                    <DialogTitle>Why are you cancelling this order?</DialogTitle>
                                                    <DialogDescription className="w-full">
                                                        Please provide a reason for the cancellation. This will help us improve our service.
                                                    </DialogDescription>
                                                </DialogHeader>

                                                <Form {...form}>
                                                    <form onSubmit={form.handleSubmit((values) => onSubmit(values, transaction.id))} className="w-2/3 space-y-6">
                                                        <FormField
                                                            control={form.control}
                                                            name="type"
                                                            render={({ field }) => (
                                                                <FormItem className="space-y-3">
                                                                    <FormLabel className='font-bold'>Reason</FormLabel>
                                                                    <FormControl>
                                                                        <RadioGroup
                                                                            onValueChange={field.onChange}
                                                                            defaultValue={field.value}
                                                                            className="flex flex-col space-y-1"
                                                                        >
                                                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                                                <FormControl>
                                                                                    <RadioGroupItem value="ChangeOfMind" />
                                                                                </FormControl>
                                                                                <FormLabel className="font-normal">
                                                                                    Change Of Mind
                                                                                </FormLabel>
                                                                            </FormItem>

                                                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                                                <FormControl>
                                                                                    <RadioGroupItem value="FoundBetterDeal" />
                                                                                </FormControl>
                                                                                <FormLabel className="font-normal">
                                                                                    Found Better Deal
                                                                                </FormLabel>
                                                                            </FormItem>

                                                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                                                <FormControl>
                                                                                    <RadioGroupItem value="UnavailabilityOfItem" />
                                                                                </FormControl>
                                                                                <FormLabel className="font-normal">
                                                                                    Unavailability Of Item
                                                                                </FormLabel>
                                                                            </FormItem>

                                                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                                                <FormControl>
                                                                                    <RadioGroupItem value="DeliveryDelay" />
                                                                                </FormControl>
                                                                                <FormLabel className="font-normal">
                                                                                    Delivery Delay
                                                                                </FormLabel>
                                                                            </FormItem>

                                                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                                                <FormControl>
                                                                                    <RadioGroupItem value="IncorrectItem" />
                                                                                </FormControl>
                                                                                <FormLabel className="font-normal">
                                                                                    Incorrect Item
                                                                                </FormLabel>
                                                                            </FormItem>

                                                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                                                <FormControl>
                                                                                    <RadioGroupItem value="CommunicationIssues" />
                                                                                </FormControl>
                                                                                <FormLabel className="font-normal">
                                                                                    Communication Issues
                                                                                </FormLabel>
                                                                            </FormItem>

                                                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                                                <FormControl>
                                                                                    <RadioGroupItem value="Other_Reason" />
                                                                                </FormControl>
                                                                                <FormLabel className="font-normal">
                                                                                    Others
                                                                                </FormLabel>
                                                                            </FormItem>

                                                                        </RadioGroup>
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />


                                                        <div className="grid gap-4">
                                                            <FormField
                                                                control={form.control}
                                                                name="otherReason"
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>Specify</FormLabel>
                                                                        <FormControl>
                                                                            <Textarea
                                                                                placeholder="I am cancelling this order because..."
                                                                                className="resize-none w-[270px] sm:w-[460px]"
                                                                                {...field}
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                        </div>

                                                        <Button type="submit" className='bg-lime-600 hover:bg-lime-600/80' isLoading={isLoading}>Submit</Button>
                                                    </form>
                                                </Form>
                                            </DialogContent>
                                        </Dialog>
                                    </div>

                                    <div className='text-[0.6rem] sm:text-lg mt-5'>
                                        <div className='flex flex-col md:flex-row text-xs sm:text-sm'>
                                            <h1 className='text-gray-400 '>Payment method: </h1>
                                            <h1 className='block text-gray-700'>{transaction.paymentMethod} </h1>
                                        </div>
                                        <div className='flex flex-col md:flex-row text-xs sm:text-sm'>
                                            <h1 className='text-gray-400'>Payment status:</h1>
                                            <h1 className='text-gray-700'>{status === "completed" ? "Paid" : transaction.paymentStatus}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-between w-full border-y-2 text-right border-gray-300 bg-gray-200 px-5 md:px-10 py-2 md:py-4 transition-all ease-in-out duration-500'>

                                <h1 className='text-[0.5rem] sm:text-sm font-semibold'>Order Total: <span>₱ {transaction.amount}</span></h1>
                                {transaction.status === 'COMPLETED' && (
                                    <ReviewModal transactionId={transaction.id} orderedVariant={transaction.orderedProducts} />
                                )}

                            </div>
                        </div>
                    )) : (
                        <div className='w-full h-screen text-center mt-10'>
                            <h1 className='my-auto text-gray-400 font-semibold font-livvic'>{noOrders}</h1>
                        </div>
                    )
                    }

                </div >
            )}
        </div >
    )
}

export default Orders