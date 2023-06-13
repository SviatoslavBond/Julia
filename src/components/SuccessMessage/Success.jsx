import React, { forwardRef } from 'react'
import { Card, Box, Typography } from '@mui/material'
import { BsCheckCircleFill } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'

export const Success = forwardRef(function (props, ref) {
	return (
		<Card
			ref={ref}
			sx={{
				position: "absolute",
				top: '50%',
				zIndex: 100,
				left: "50%",
				transform: 'translate(-50%, -50%)',

				width: 300, height: 200, backgroundColor: '#f3f0b5'
			}}>
			<Box sx={{ position: 'relative' }} >
				<Box sx={{ padding: '2rem' }} display={'flex'} alignItems={'center'} justifyContent={'center'}>
					<BsCheckCircleFill color='#70c840' fontSize={'4rem'} />
				</Box>
				<Typography sx={{ fontSize: '1.2rem', textAlign: 'center', marginTop: 2 }}>Story has been saved successfully</Typography>
				<Box onClick={props.close} sx={{ position: "absolute", top: 10, right: 10, cursor: 'pointer' }}>
					<AiOutlineCloseCircle color='#eb9627' fontSize={20} />
				</Box>
			</Box>
		</Card>
	)
})

