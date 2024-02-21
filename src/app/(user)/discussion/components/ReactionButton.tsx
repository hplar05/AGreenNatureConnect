"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"
import { toast } from '@/lib/hooks/use-toast';
import { Popover, PopoverContent, PopoverTrigger } from '@/app/components/Ui/popover';
import { Check, Laugh, LeafyGreen, SmilePlus, X } from 'lucide-react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import useLoginModal from '@/lib/hooks/useLoginModal';


export const ReactionButton = ({ postId }: { postId: string }) => {
    const [userReacted, setUserReacted] = useState({ type: '' });
    const [isLoading, setIsLoading] = useState(false);
    const loginModal = useLoginModal();
    const { status } = useSession();

    const fetchReactionStatus = async () => {
        try {
            const response = await axios.get(`/api/user/post/${postId}/reactions`);
            const newUserReacted = response.data.userReacted;

            setUserReacted(newUserReacted);
        } catch (error) {
            console.error('Error fetching reaction status:', error);
        }
    };

    useEffect(() => {
        fetchReactionStatus();
    }, [postId]);


    const handleReaction = async (type: string) => {
        setIsLoading(true);

        if (status === 'unauthenticated') {
            loginModal.onOpen();
            toast({
                description: 'You need to Login or Register first to like the post.',
                variant: 'destructive',
            });

            return;
        }

        try {
            await fetch(`/api/user/post/${postId}/reactions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    postId,
                    type,
                }),
            });

            fetchReactionStatus();

            toast({
                description: `You reacted to the post.`,
                variant: 'default',
            });
        } catch (error) {
            console.error('An error occurred:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.button
            whileTap={{ backgroundColor: "ButtonShadow" }}
            type="button"
            className={`flex gap-2 items-center justify-center px-4 py-2 font-poppins font-semibold w-[7rem] rounded-3xl bg-[#F0F2F5] dark:bg-transparent dark:border dark:border-zinc-500 dark:hover:opacity-80
                        ${userReacted ? '' : ''
                }`}
        >
            <Popover>
                <PopoverTrigger className='font-normal flex gap-2 items-center'>
                    <SmilePlus className='w-5 h-5' />
                    React
                </PopoverTrigger>

                <PopoverContent className='flex gap-2 justify-evenly'>
                    <Check
                        //@ts-ignore
                        className={` cursor-pointer hover:rounded-full hover:bg-gray-200 p-1 w-8 h-8 ${userReacted && userReacted.type === 'Check' ? "bg-gray-200 rounded-full text-lime-500" : ""}`}
                        onClick={() => handleReaction('Check')}
                    />
                    <X
                        //@ts-ignore
                        className={` cursor-pointer hover:rounded-full hover:bg-gray-200 p-1 w-8 h-8 ${userReacted && userReacted.type === 'XMark' ? "bg-gray-200 rounded-full text-rose-500" : ""}`}
                        onClick={() => handleReaction('XMark')}
                    />
                    <LeafyGreen
                        //@ts-ignore
                        className={` cursor-pointer hover:rounded-full hover:bg-gray-200 p-1 w-8 h-8 ${userReacted && userReacted.type === 'Leaf' ? "bg-gray-200 rounded-full text-lime-600" : ""}`}
                        onClick={() => handleReaction('Leaf')}
                    />
                    <Laugh
                        //@ts-ignore
                        className={` cursor-pointer hover:rounded-full hover:bg-gray-200 p-1 w-8 h-8 ${userReacted && userReacted.type === 'Laugh' ? "bg-gray-200 rounded-full text-yellow-500/80" : ""}`}
                        onClick={() => handleReaction('Laugh')}
                    />
                </PopoverContent>
            </Popover>
        </motion.button>
    )
}
