import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";

const logos = [
  {
    src: "/bel-icon3.png",
    title: "Place",
    description: "Set the Tray",
  },
  {
    src: "/bel-icon3.png",
    title: "Pay",
    description: "Complete Payment",
  },
  {
    src: "/bel-icon3.png",
    title: "Delight",
    description: "Savor the Moment",
  }

];

export default function HowRetailWorks() {
  return (
   <div className="flex-auto">
     <Box
      sx={{
        py: 4,
        textAlign: "center",
        marginBottom:{
          xs: 4,
          sm: 8,
        }
      }}
    >
      <h1 className="flex justify-center items-center mb-4 text-4xl font-bold mt-24 ">How Our <span className="text-indigo-700 ml-2">AI Retail Works !</span> </h1>
      <Box
       sx={{
        display: "flex",
        flexDirection: {
          xs: "column", // Apply column layout on small screens (mobile)
          sm: "row",    // Apply row layout on screens larger than mobile
        },
        justifyContent: "center", // Center the carousel horizontally
        gap: 2,
        py: 1,
        marginTop:10
      }}
      
      >
        {logos.map((item, index) => (
          <Card
            key={index}
            orientation="horizontal"
            size="sm"
            variant="outlined"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center", // Center content inside each card
              minWidth: 200,
              flexDirection: "row", // Stack logo and text vertically
              textAlign: "center", // Center-align text inside the card
              padding: 2,
            }}
          >
            <AspectRatio ratio="1" sx={{ minWidth: 60, mb: 1 }}>
              <img
                src={item.src}
                alt={item.title}
                style={{ objectFit: "contain" }}
              />
            </AspectRatio>
            <Box>
              <Typography level="title-md" sx={{ fontWeight: "bold" }}>
                {item.title}
              </Typography>
              <Typography level="body-sm">{item.description}</Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
   </div>
  );
}
