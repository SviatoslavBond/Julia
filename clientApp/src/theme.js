import { ThemeProvider, createTheme } from '@mui/material/styles';
export const theme = createTheme({
	components: {
		MuiLinearProgress: {
			styleOverrides: {
				bar: {
					backgroundColor: 'orange'
				},
				root: {
					backgroundColor: 'rgba(255, 203, 105, 0.386)',
					borderRadius: 5,
					height: 8

				}

			}
		}
	}
});
export { ThemeProvider }
