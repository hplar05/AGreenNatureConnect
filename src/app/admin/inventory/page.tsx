"use client"

import { Products } from '@/app/employee/inventory/_components/columns'
import { DataTable } from '@/app/employee/inventory/_components/data-table'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { columns } from './_components/columns'
import { Button } from '@/components/ui/button'
import { DialogDemo } from './_components/QrcodeDialog'
import { useEffect, useState } from 'react'
import { Community } from '@/lib/types'


const page = () => {
    const [community, setCommunity] = useState<Community>()
    useEffect(()=>{
        getCommunity()
    },[])
    const { data: products, isFetching } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const { data } = await axios.get("/api/employee/products")
            return data as Products[]
        }
    })

    const getCommunity = async () =>{
       const res = (await axios.get('/api/admin/community')).data
       setCommunity(res)
    }


    return (
        <div className="container mx-auto py-10">
            <DialogDemo/>
            <DataTable
                columns={columns}
                //@ts-ignore
                data={products ?? []}
                isFetching={isFetching}
                isAdmin
            />
        </div>
    )
}

export default page