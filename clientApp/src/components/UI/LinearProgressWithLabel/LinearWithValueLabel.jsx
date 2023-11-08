import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Linear.scss'
export default function LinearWithValueLabel(props) {
	return (
		<Box {...props} sx={{ width: '80%' }}>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<Box sx={{ width: '100%', mr: 1 }}>
					<LinearProgress variant="determinate" value={props.value} />
				</Box>
				<Box sx={{ minWidth: 35 }}>
					<Typography variant="body2" color="text.secondary">{`${props.value}%`}</Typography>
				</Box>
			</Box>
		</Box>
	);
}
