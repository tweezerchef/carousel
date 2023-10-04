import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Book } from "./dbCarousel";
//create type for props
type BookProps = {
  book: Book;
};

export default function BookCard({ book }: BookProps) {
  return (
    <Card sx={{ width: "250px", height: "335px" }}>
      <CardMedia
        component="img"
        height="180"
        image={book.image_url}
        title={book.title}
        style={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.author}
        </Typography>
      </CardContent>
    </Card>
  );
}
