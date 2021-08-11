import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';



const card = ({ post }) => {
    //eslint-disable-next-line
    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
            margin: '0 auto'
        },
    });
    const classes = useStyles();

    return (
        <Grid item md={4} sm={6} xs={12}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image="https://i.ibb.co/gtWC6Rh/variables.png"
                        title={post.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {post.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {post.post.slice(0, 200)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default card