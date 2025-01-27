import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";

const logos = [
  {
    src: "/logo1.png",
    title: "Company 1",
    description: "Innovative Solutions",
  },
  {
    src: "/logo2.png",
    title: "Company 2",
    description: "Trusted Partner",
  },
  {
    src: "/logo3.png",
    title: "Company 3",
    description: "Leading the Market",
  },
  {
    src: "/logo4.png",
    title: "Company 4",
    description: "Driving Innovation",
  },
  {
    src: "/logo5.png",
    title: "Company 5",
    description: "Your Trusted Ally",
  },
];

export default function WorkingPartners() {
  return (
   <div className="flex-auto">
     <Box
      sx={{
        backgroundColor: "#FFFFFF",
        py: 4,
        textAlign: "center",
        marginBottom:{
          xs: 4,
          sm: 8,
        }
      }}
    >
      <h1 className="flex justify-center items-center mb-4 text-2xl font-bold">Trusted partners</h1>
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
