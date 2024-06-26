"use client"
import { Separator } from "@/app/components/Ui/Separator";
import { Card, CardFooter, Image, } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { EnumValues } from "zod";

type Community = {
    id: string;
    name: string
    createdAt: Date;
    updatedAt: Date;
    LearningMaterial: LearningMaterial[];
}

type LearningMaterial = {
    id: string;
    title: string;
    material: string;
    description: string;
    thumbnail: string;
    createdAt: Date;
    updatedAt: Date;
    isApproved: EnumValues;
    author: User;
    community: Community;
}

type User = {
    id: string;
    name?: string;
    lastName?: string;
    LearningMaterial: LearningMaterial[];
};

type ApprovedMaterialsProps = {
    selectedCommunity: string;
    communities: Community[] & {
        LearningMaterial: LearningMaterial & {
            author: User
        }
    }
}

export const ApprovedMaterials: React.FC<ApprovedMaterialsProps> = ({
    selectedCommunity,
    communities
}) => {

    // const { isLoading, isError, data: communities } = useQuery({
    //     queryKey: ['approved-materials', selectedCommunity],
    //     queryFn: async () => {
    //         try {
    //             const { data } = await axios.get("/api/user/getMaterials");
    //             return data as Community[];
    //         } catch (error: any) {
    //             throw new Error(`Error fetching communities: ${error.message}`);
    //         }
    //     }
    // })

    // if (isLoading) return <>Fetching Learning Materials...</>

    // if (isError) return <>Error fetching Learning Materials...</>

    if (!communities || communities.length === 0) {
        return (
            <div className="flex flex-col items-center">
                <Image
                    alt="No result found."
                    className="w-96 h-96"
                    src="../../../../../../undraw/no-result-found.svg"
                />
                <div className="text-muted-foreground">
                    No results found for the selected community.
                </div>
            </div>
        );
    }

    const filteredVideoTutorials =
        selectedCommunity === null || selectedCommunity === ""
            ? communities
            : communities.filter((community) => community.id === selectedCommunity);

    if (filteredVideoTutorials.every((community) => community.LearningMaterial.length === 0)) {
        return (
            <div className="flex flex-col items-center">
                <Image
                    alt="No result found."
                    className="w-96 h-96"
                    src="../../../../../../undraw/no-result-found.svg"
                />
                <div className="text-muted-foreground">
                    No results found for the selected community.
                </div>
            </div>
        );
    }

    return (
        <div className="h-full">
            {filteredVideoTutorials.map((community) => (
                <div key={community.id} className="">
                    {community.LearningMaterial.map((material) => (
                        <div key={material.id} className='flex flex-col md:flex-row gap-11'>
                            <Card isFooterBlurred className="md:w-[50%] h-[300px] col-span-12 sm:col-span-7 rounded-lg shadow-md border border-[#a2a2a2]/30 p-0 my-2">
                                <Image
                                    removeWrapper
                                    alt="blog app background"
                                    className="z-0 w-full h-full object-cover"
                                    src={material.thumbnail as string}
                                />
                                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 shadow-md">
                                    <div className="flex flex-grow gap-2 items-center">
                                        <div className="flex flex-col">
                                            <p className="text-sm text-white/60">A Learning Material By</p>
                                            <p className="text-sm text-white/60 underline">{community.name} Community</p>
                                        </div>
                                    </div>
                                    <a target="_blank" href={material.material} className="text-white">
                                        View Material
                                    </a>
                                </CardFooter>
                            </Card>

                            <div className="max-lg:mt-3 md:w-[50%]">
                                <p className="text-lg font-bold">{material.title}</p>
                                <p className='text-muted-foreground'>By {material.author.name} {material.author.lastName}</p>
                                <p className='text-muted-foreground text-[15px] mt-3'>{material.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
