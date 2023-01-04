import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@mui/material";


export const Item = ({ element }) => {
  return (
      <Card sx={{ maxWidth: 345, marginTop:"1rem"}}>
      <CardMedia
        component="img"
        alt={`juego ${element.title}`}
        height="170.5"
        image={element.thumbnail}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {element.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {element.short_description}
        </Typography>
        <Typography sx={{ marginTop: "1rem" }}>
          Plataforma: {element.platform}
        </Typography>
        <Typography>Desarrollador: {element.developer}</Typography>
        <Typography>Precio: {element.precio}</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${element.id}`}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  
    
  );
};
