import {IconBuildingFactory} from "@tabler/icons-react";
import {FC} from "react";
import {Box, Text} from "@mantine/core";

interface LogoProps {
    title: string;
    subtitle: string;
}

export const Logo: FC<LogoProps> = ({subtitle, title}) => {
    return (
        <Box className='flex items-center gap-3 '>
            <IconBuildingFactory className='h-10 w-10'/>
            <Box className='flex flex-col items-start'>
                <Text className={'text-lg font-semibold'}>{title}</Text>
                <Text className={'text-sm font-light'}>{subtitle}</Text>
            </Box>
        </Box>
    )
}