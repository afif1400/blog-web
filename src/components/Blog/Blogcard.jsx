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
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

export default function BlogCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className='root'>
      <CardMedia
        className='media'
        image='https://images.unsplash.com/photo-1520218750893-2be45c7cbf63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        title='Docker container commands'
      />
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className='avatar'>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={
          <div className='title'>
            <Typography color='textSecondary'>
                Afif
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="5" fill="#990000"/>
              </svg>
              31 March 2019
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="5" fill="#990000"/>
              </svg>
            </Typography>
          </div>
        }
        className='header1'
      />
      <CardHeader title={
        <h3>Docker Container Commands</h3>
      } className='header2'/>
      <CardContent>
        <Typography variant='body2' color='textSecondary'  component='p'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          impedit repellat distinctio, consequatur veniam rerum recusandae
          deleniti earum ullam laborum aspernatur enim cum ratione nihil!
          Reprehenderit nostrum voluptas quod eum!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          {/* <FavoriteIcon /> */}
        </IconButton>
        <IconButton aria-label='share'>{/* <ShareIcon /> */}</IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          {/* <ExpandMoreIcon /> */}
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
