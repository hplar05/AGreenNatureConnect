"use client"
import { Tab } from '@headlessui/react'
import React, { Suspense, useState } from 'react'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { FaArrowLeft, FaBullseye } from 'react-icons/fa'
import { FiRefreshCw } from 'react-icons/fi'

import RotatingLinesLoading from '@/app/(markethub)/components/RotatingLinesLoading'
import Orders from './Orders'
import { transactionWithOrderedProducts } from '@/lib/types'
import { toast } from '@/lib/hooks/use-toast'

interface Transaction {
    id: string;
    referenceId: string;
    amount: number;
    status: string;
    buyer: Buyer;
    checkOutSessionId: string | null;
    seller: Community
    orderedVariant: OrderedVariant[]
    createdAt: Date;
    updatedAt: Date;
}
interface Community {
    id: string;
    name: string;
}
interface Buyer {
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
interface OrderedVariant {
    id: string;
    product: Product;
    variant: Variants
}
interface Variants {
    id: string
    unitOfMeasurement: string;
    variant: number;
    price: number;
    EstimatedPieces: number | null;
}
interface Product {
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

function OrderTab({
    pending,
    approved,
    pickup,
    cancelled,
    completed
}: {
    pending: transactionWithOrderedProducts[],
    approved: transactionWithOrderedProducts[],
    pickup: transactionWithOrderedProducts[],
    cancelled: transactionWithOrderedProducts[],
    completed: transactionWithOrderedProducts[]
}) {
    const router = useRouter()
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [animate, setAnimate] = useState<boolean>(false)
    console.log(pending)
    const handleDecline = async (transactionId: string) => {
        setIsLoading(true)
        await axios.post('/api/markethub/transaction/cancelled', { transactionId }).then(() => {
            router.refresh()
        })
        setIsLoading(false)
    }

    const handleApprove = async (transactionId: string) => {
        setIsLoading(true);
        try {
            await axios.post('/api/markethub/transaction/approved', { transactionId });
            toast({
                description: "Transaction approved successfully!",
            });
            router.refresh();
        } catch (error: any) {
            if (error.response && error.response.status === 402) {
                toast({
                    description: error.message,
                    variant: "destructive"
                });
            } else {
                toast({
                    description: "Failed to approve transaction: " + error.message,
                    variant: "destructive"
                });
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handlePickup = async (transactionId: string) => {
        setIsLoading(true)
        await axios.post('/api/markethub/transaction/pickUp', { transactionId }).then(() => {
            router.refresh()
        })
        setIsLoading(false)
    }

    const handleComplete = async (transactionId: string) => {
        setIsLoading(true)
        await axios.post('/api/markethub/transaction/completed', { transactionId }).then(() => {
            router.refresh()
        })
        setIsLoading(false)
    }

    const handleGoBack = () => {
        setIsLoading(true)
        setTimeout(() => {
            router.push('/employee');

        }, 1000)
    };

    const handelRefresh = () => {
        setIsLoading(true)
        setAnimate(true)
        router.refresh()
        setTimeout(() => {
            setIsLoading(false)
            setAnimate(false)
        }, 2000)
        console.log('clicked')
    }

    return (
        <Tab.Group defaultIndex={0} selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <div className='relative'>
                <div className='fixed z-30 top-20 flex justify-between w-full text-white bg-green px-5 py-3'>
                    <button onClick={handleGoBack} >
                        <FaArrowLeft />
                    </button>
                    <h1 className='text-white font-poppins font-bold text-[1rem] sm:text-[1.5rem]'>Orders</h1>
                    <button onClick={() => handelRefresh()} className={`${animate ? 'animate-spin text-yellow-400' : ''} transition-all duration-1000 ease-in-out hover:scale-110`} >
                        <FiRefreshCw />
                    </button>
                </div>
                <Tab.List className={`fixed top-32 md:top-[8rem] w-full z-30 bg-white drop-shadow-md shadow-lg`}>
                    <Tab className="text-[0.5rem] sm:text-sm md:text-lg font-poppins font-semibold border-b-[5px] outline-none ui-selected:border-b-green transition-all ease-in-out duration-1000 w-1/5 py-2 px-4">
                        Pending
                    </Tab>
                    <Tab className="text-[0.5rem] sm:text-sm  md:text-lg font-poppins font-semibold border-b-[5px] outline-none ui-selected:border-b-green transition-all ease-in-out duration-1000 w-1/5 py-2 px-4">
                        Approved
                    </Tab>
                    <Tab className="text-[0.5rem] sm:text-sm  md:text-lg font-poppins font-semibold border-b-[5px] outline-none ui-selected:border-b-green transition-all ease-in-out duration-1000 w-1/5 py-2 px-4">
                        Pick Up
                    </Tab>
                    <Tab className="text-[0.5rem] sm:text-sm  md:text-lg font-poppins font-semibold border-b-[5px] outline-none ui-selected:border-b-green transition-all ease-in-out duration-1000 w-1/5 py-2 px-4">
                        Completed
                    </Tab>
                    <Tab className="text-[0.5rem] sm:text-sm md:text-lg font-poppins font-semibold border-b-[5px] outline-none ui-selected:border-b-green transition-all ease-in-out duration-1000 w-1/5 py-2 px-4">
                        Declined
                    </Tab>
                </Tab.List>
                <Tab.Panels className={`pt-24 z-10`}>
                    {/**PENDING */}
                    <Tab.Panel>
                        {!isLoading ? (
                            <Orders
                                selectedIndex={selectedIndex}
                                //@ts-ignore
                                transactions={pending}
                                noOrders='No pending orders right now!'
                                cancelBtnDisplay='block'
                                handleCancel={handleDecline}
                                handleApprove={handleApprove}
                                status='Waiting to be approved.'
                            />
                        ) : (
                            <div>
                                <RotatingLinesLoading />
                            </div>
                        )}
                    </Tab.Panel>
                    {/**APPROVED */}
                    <Tab.Panel>
                        {!isLoading ? (
                            <Orders
                                selectedIndex={selectedIndex}
                                //@ts-ignore
                                transactions={approved}
                                noOrders='No approved orders right now!'
                                cancelBtnDisplay='hidden'
                                handleCancel={handleDecline}
                                handlePickup={handlePickup}
                                status='Approved'
                            />
                        ) : (
                            <div>
                                <RotatingLinesLoading />
                            </div>
                        )}

                    </Tab.Panel>
                    {/**Pickup */}
                    <Tab.Panel>
                        {!isLoading ? (
                            <Orders
                                selectedIndex={selectedIndex}
                                //@ts-ignore
                                transactions={pickup}
                                noOrders='No orders are ready to be pick up!'
                                cancelBtnDisplay='hidden'
                                handleCancel={handleDecline}
                                handleComplete={handleComplete}
                                status='Ready to be pickup!'
                            />
                        ) : (
                            <div>
                                <RotatingLinesLoading />
                            </div>
                        )}

                    </Tab.Panel>
                    {/**COMPLETED */}
                    <Tab.Panel>
                        {!isLoading ? (
                            <Orders
                                selectedIndex={selectedIndex}
                                //@ts-ignore
                                transactions={completed}
                                noOrders='No completed orders!'
                                cancelBtnDisplay='hidden'
                                handleCancel={handleDecline}
                                status='Completed'
                            />
                        ) : (
                            <div>
                                <RotatingLinesLoading />
                            </div>
                        )}
                    </Tab.Panel>
                    {/**DECLINED */}
                    <Tab.Panel>
                        {!isLoading ? (
                            <Orders
                                selectedIndex={selectedIndex}
                                //@ts-ignore
                                transactions={cancelled}
                                noOrders='No declined orders!'
                                cancelBtnDisplay='hidden'
                                handleCancel={handleDecline}
                                status='Declined'
                            />
                        ) : (
                            <div>
                                <RotatingLinesLoading />
                            </div>
                        )}
                    </Tab.Panel>
                </Tab.Panels>
            </div>
        </Tab.Group>
    )
}

export default OrderTab