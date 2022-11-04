import { useEffect, useState } from "react";
import { Share } from 'react-native';
import { HStack, useToast, VStack } from "native-base";
import { useRoute } from '@react-navigation/native';

import { api } from '../services/api'

import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { Option } from "../components/Option";
import { Guesses } from "../components/Guesses";
import { EmptyMyPoolList } from "../components/EmptyMyPoolList";
import { PoolCardProps } from '../components/PoolCard';
import { PoolHeader } from "../components/PoolHeader";

interface RouteParams {
    id: string
}

export function Details() {
    const route = useRoute()
    const toast = useToast()

    const { id } = route.params as RouteParams

    const [optionSelected, setOptionSelected] = useState<'guesses' | 'ranking'>('guesses') 

    const [isLoading, setIsloading] = useState(true)
    const [poolDetails, setPoolDetails] = useState<PoolCardProps>({} as PoolCardProps)

    async function fetchPoolDetails() {
        try {
            setIsloading(true)

            const response = await api.get(`/pools/${id}`)
            setPoolDetails(response.data.pool)

        } catch (err) {
            console.log(err)

            toast.show({
                title: 'Não foi possível carregar os bolões',
                placement: 'top',
                bgColor: 'red.500'
            })
        } finally {
            setIsloading(false)
        }
    }

    async function handlCodeShare() {
        await Share.share({
            message: poolDetails.code
        })
    }

    useEffect(() => {
        fetchPoolDetails()
    }, [id])

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <VStack flex={1} bgColor="gray.900" >
            <Header title={poolDetails.title} showBackButton showShareButton onShare={handlCodeShare} />

            {
                poolDetails._count?.participants > 0 ?
                    <VStack px={5} flex={1}>
                        <PoolHeader data={poolDetails} />

                        <HStack bgColor="gray.800" p={1} rounded="sm" mb={5} >
                            <Option title="Seus palpites" isSelected={optionSelected === 'guesses'} onPress={() => setOptionSelected('guesses')} />
                            <Option title="Ranking do grupo" isSelected={optionSelected === 'ranking'} onPress={() => setOptionSelected('ranking')} />
                        </HStack>

                        <Guesses poolId={poolDetails.id} code={poolDetails.code} />

                    </VStack>

                : <EmptyMyPoolList code={poolDetails.code} />
            }
        </VStack>
    )
}