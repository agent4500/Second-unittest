import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red, green, blue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Post1({ post }) {
  const imageUrl = `https://picsum.photos/500?random=${post.id}`;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 295 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
              <img
                className="user-avatar"
                src={`https://i.pravatar.cc/100?u=${post.userId}`}
                alt={`Avatar of User ${post.userId}`}
              />
            </Avatar>
          }
        
          title={"Hoppalala"}
          sx={{ bgcolor: blue[500], color: blue[50] }}
        />
        <CardMedia
          component="img"
          height="194"
          image={imageUrl}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
         
        </CardActions>
        
      </Card>
    </Grid>
  );
}
