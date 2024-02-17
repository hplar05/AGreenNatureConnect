
import prisma from '@/lib/db/db';
import React, { FC, Suspense } from 'react'
import Loading from '../../loading';

interface Props {
    params: { transactionId: string };

  }

  
const page: FC<Props> = async({ params }) => {
    const transaction = await prisma.transaction.findUnique({
        where:{
            id: params.transactionId
        },
        include:{
            buyer: true,
            seller: true,
            orderedVariant:{
                include:{
                    variant: true,
                    product: true
                }
            }
        }
    })

    function getDateFormatted(){
        if(transaction){
            const date = new Date(transaction.createdAt)
            const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
          return date.toLocaleDateString(undefined, options);
        }
    }
    
    
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  
  return (
    <div>
        <div className='w-full bg-green px-5 py-3'>
            <h1 className='text-white font-poppins font-bold text-[1.5rem]'>Order Details</h1>
        </div>
        <Suspense fallback={<Loading/>}>
            <div>
                <div>
                    <div className=''>
                        <h1>Barangay {transaction?.seller.name}</h1>
                        <h1>Date: {getDateFormatted()}</h1>
                    </div>
                    <h1>{transaction?.buyer.name}</h1>
                </div>
            </div>
        </Suspense>
    </div>
  )
}

export default page