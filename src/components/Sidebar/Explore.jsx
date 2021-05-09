import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		// maxWidth: 360,
	},
	text: {
		display: 'flex',
		paddingLeft: '0',
		paddingRight: '0',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	p: {
		margin: 'auto 0',
		color: '#A8B3C3',
		fontWeight: '500',
	},
}));

export default function Explore() {
	const classes = useStyles();

	return (
		<List component='nav' className={classes.root} aria-label='contacts'>
			<ListItem button className={classes.text}>
				<ListItemText primary='Chelsea Otakan' />
				<p className={classes.p}>(5)</p>
			</ListItem>
			<ListItem button className={classes.text}>
				<ListItemText primary='Eric Hoffman' />
				<p className={classes.p}>(5)</p>
			</ListItem>
		</List>
	);
}
