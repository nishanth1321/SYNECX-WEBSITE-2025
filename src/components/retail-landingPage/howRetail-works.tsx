// import React from "react";
// import AspectRatio from "@mui/joy/AspectRatio";
// import Box from "@mui/joy/Box";
// import Typography from "@mui/joy/Typography";
// import Card from "@mui/joy/Card";

// const logos = [
//   {
//     src: "/place.svg",
//     title: "Place",
//     description: "Set the Tray",
//   },
//   {
//     src: "/pay.svg",
//     title: "Pay",
//     description: "Complete Payment",
//   },
//   {
//     src: "/enjoy.svg",
//     title: "Delight",
//     description: "Savor the Moment",
//   }

// ];

// export default function HowRetailWorks() {
//   return (
//    <div className="flex-auto bg-white">
//      <Box
//       sx={{
//         py: 4,
//         textAlign: "center",
//         marginBottom:{

//         }
//       }}
//     >
//       <h1 className="flex justify-center items-center mb-4 text-4xl font-bold mt-24 ">How Our <span className="text-red-500 ml-2">AI Retail Works !</span> </h1>
//       <Box
//        sx={{
//         display: "flex",
//         flexDirection: {
//           xs: "column", // Apply column layout on small screens (mobile)
//           sm: "row",    // Apply row layout on screens larger than mobile
//         },
//         justifyContent: "center", // Center the carousel horizontally
//         gap: 2,
//         py: 1,
//         marginTop:10
//       }}

//       >
//         {logos.map((item, index) => (
//           <Card
//             key={index}
//             orientation="horizontal"
//             size="sm"
//             variant="outlined"
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center", // Center content inside each card
//               minWidth: 200,
//               flexDirection: "row", // Stack logo and text vertically
//               textAlign: "center", // Center-align text inside the card
//               padding: 2,
//             }}
//           >
//             <AspectRatio ratio="1" sx={{ minWidth: 60, mb: 1 }}>
//               <img
//                 src={item.src}
//                 alt={item.title}
//                 style={{ objectFit: "contain" }}
//               />
//             </AspectRatio>
//             <Box>
//               <Typography level="title-md" sx={{ fontWeight: "bold" }}>
//                 {item.title}
//               </Typography>
//               <Typography level="body-sm">{item.description}</Typography>
//             </Box>
//           </Card>
//         ))}
//       </Box>
//     </Box>
//    </div>
//   );
// }
import Image from "next/image";
import React from "react";

const logos = [
  {
    src: "/place.svg",
    title: "Place",
    description: "The Item in Tray",
  },
  {
    src: "/pay.svg",
    title: "Pay",
    description: "Complete Payment",
  },
  {
    src: "/enjoy.svg",
    title: "Delight",
    description: "Savor the Moment",
  },
];

export default function HowRetailWorks() {
  return (
    <div className="bg-white py-16">
      <h1 className="text-4xl font-bold text-center">
        How Our <span className="text-red-500">AI Retail Works!</span>
      </h1>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-32 max-w-5xl mx-auto px-4">
        {logos.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 "
          >
            <Image
              src={item.src}
              alt={item.title}
              height={200}
              width={200}
              className=" mb-4"
            />

            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
