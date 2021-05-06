import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function BlogCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title='Docker container commands'
        subheader='September 14, 2016'
      />
      <CardMedia
        className={classes.media}
        image='/static/images/cards/paella.jpg'
        title='Docker container commands'
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          impedit repellat distinctio, consequatur veniam rerum recusandae
          deleniti earum ullam laborum aspernatur enim cum ratione nihil!
          Reprehenderit nostrum voluptas quod eum!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>Tease:</Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, unde
          deserunt quidem, quaerat eum nihil quo placeat porro perspiciatis quia
          maxime rem itaque illum numquam. Et fugit unde vitae blanditiis in
          mollitia dicta nam quasi dolorem cumque ea illo asperiores, itaque
          maxime dolores amet. Maiores facere quibusdam eius inventore ab
          consequuntur natus fuga voluptate saepe eos, repudiandae nihil id.
          Impedit, officia minima veniam at amet quam natus magnam, perferendis
          nam aperiam beatae eligendi voluptatum assumenda fugit earum ducimus
          repudiandae tempore illum? Autem expedita quis vitae voluptates!
          Voluptate aperiam deleniti tempora velit blanditiis, esse eligendi
          maiores consequatur nemo at aspernatur porro.
        </CardContent>
      </Collapse>
    </Card>
  );
}
