import { Article, Blog, Community, Product, User } from '@prisma/client'
import { BarChart, Card, Col, Grid, Tab, TabGroup, TabList, TabPanel, TabPanels, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from '@tremor/react'
import React from 'react'
import { CntProductsCard } from './_components/CntProductsCard'
import { CntUserCard } from './_components/CntTopicCard'
import { CntEmployeesCard } from './_components/CntEmployeesCard'
import PPSCard from './_components/PPSCard'
import prisma from '@/lib/db/db'
import { getAuthSession } from '@/lib/auth'
import { formatDate } from '@/lib/utils'
import CntSales from '../admin/_components/CntSales'
import SearchEmployees from '../admin/_components/SearchEmployees'

const page = async () => {

    const session = await getAuthSession()

    // const community = await prisma.community.findFirst({
    //     where: {
    //         // userId: session?.user.id
    //         User: {
    //             some: {
    //                 id: session?.user.id
    //             }
    //         }
    //     },
    //     include: {
    //         User: true,
    //         products: true,
    //         blogs: true,
    //         articles: true,
    //     }
    // })

    const loggedInUser = await prisma.user.findFirst({
        where: {
            id: session?.user.id
        },
        include: {
            Community: true
        }
    })

    const employees = await prisma.user.findMany({
        where: {
            role: 'EMPLOYEE',
            Community: {
                id: loggedInUser?.Community?.id
            }
        },
        include: {
            Community: true
        }
    })

    console.log(employees)

    const chartdata4 = [
        {
            date: "Jan 23",
            "Fruits": 167,
            "Vegetables": 145,
        },
        {
            date: "Feb 23",
            "Fruits": 559,
            "Vegetables": 410,
        },
        {
            date: "Mar 23",
            "Fruits": 156,
            "Vegetables": 149,
        },
        {
            date: "Apr 23",
            "Fruits": 165,
            "Vegetables": 112,
        },
        {
            date: "May 23",
            "Fruits": 153,
            "Vegetables": 138,
        },
        {
            date: "Jun 23",
            "Fruits": 200,
            "Vegetables": 98,
        },
        {
            date: "July 23",
            "Fruits": 124,
            "Vegetables": 23,
        },
        {
            date: "Aug 23",
            "Fruits": 224,
            "Vegetables": 221,
        },
        {
            date: "Sep 23",
            "Fruits": 201,
            "Vegetables": 412,
        },
        {
            date: "Oct 23",
            "Fruits": 213,
            "Vegetables": 316,
        },
        {
            date: "Nov 23",
            "Fruits": 69,
            "Vegetables": 420,
        },
        {
            date: "Dec 23",
            "Fruits": 420,
            "Vegetables": 69,
        },
    ];


    return (
        <main className='flex flex-col gap-2 h-screen bg-[#E3E1E1]'>
            {/* <Sidebar name={community?.name} /> */}
            {/* TODO: TREMOR GRAPHS */}
            <Title>{loggedInUser?.Community?.name} Dashboard</Title>

            <TabGroup className="mt-6">
                <TabList>
                    <Tab>Overview</Tab>
                    {/* IF EVER LANG MAY MAILALAGAY IF WALA DELETE TAB */}
                    <Tab>Employees</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Grid numItemsMd={3} numItemsLg={3} className="gap-6 mt-6">

                            <CntUserCard />

                            <CntEmployeesCard />

                            <CntSales />



                            {/* <CntPostCard />

                                <CntUserCard />

                                <CntTopicCard />

                                <CntProductCard /> */}

                        </Grid>
                        <Grid className="gap-6 mt-6" numItems={1} numItemsLg={3}>
                            <Col numColSpanLg={2}>
                                <Card>
                                    <div className='h-full'>
                                        <Title>Sales Report</Title>
                                        <BarChart
                                            className="h-72 mt-4"
                                            data={chartdata4}
                                            index="date"
                                            categories={["Fruits", "Vegetables"]}
                                            colors={["indigo", "gray"]}
                                            yAxisWidth={30}
                                        />
                                    </div>
                                </Card>
                            </Col>

                            <PPSCard />


                        </Grid>
                    </TabPanel>

                    {/* code of list of employees */}
                    <TabPanel>
                        <div className="mt-6">
                            <Card>

                                <Title>List of Employees</Title>

                                <SearchEmployees employees={employees} />

                            </Card>
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </main>
    )
}

export default page