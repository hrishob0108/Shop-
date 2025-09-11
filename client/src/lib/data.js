import { shoes } from "../media/datas"; 

export const products = [
    {
        id: "1",
        name: "Air Cloud Lite",
        description: "Engineered for ultimate comfort with responsive cushioning and a sleek, minimalist design. Perfect for everyday wear or casual runs.",
        price: 129.99,
        category: "all",
        colors: ["#FFFFFF", "#000000", "#7D7D7D"],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
        images: [
            shoes[0].image1,
            shoes[1].image2,
            shoes[2].image3
        ],
        isNew: true,
        isFeatured: true
    },
    {
        id: "2",
        name: "Velocity Pro",
        description: "Built for speed with ultra-lightweight materials and responsive cushioning. The aerodynamic design reduces drag for maximum efficiency.",
        price: 159.99,
        category: "running",
        colors: ["#FF5733", "#000000", "#3498DB"],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        images: [
            shoes[3].image4,
            shoes[4].image5,
            shoes[5].image6
        ],
        isNew: false,
        isFeatured: true
    },
    {
        id: "3",
        name: "Elevation Elite",
        description: "Dominate the court with enhanced ankle support and superior traction. Responsive cushioning helps you leap higher and land softer.",
        price: 189.99,
        category: "basketball",
        colors: ["#000000", "#FFFFFF", "#FF0000"],
        sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
        images: [
            shoes[6].image7,
            shoes[7].image8,
            shoes[8].image9
        ],
        isNew: true,
        isFeatured: true
    },
    {
        id: "4",
        name: "Flex Circuit",
        description: "Versatile training shoe with a stable platform for weightlifting and flexible forefoot for agility drills. Your all-in-one gym companion.",
        price: 134.99,
        category: "training",
        colors: ["#2ECC71", "#000000", "#7D7D7D"],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5],
        images: [
            shoes[9].image10,
            shoes[10].image11,
            shoes[11].image12
        ],
        isNew: false,
        isFeatured: false
    },
    {
        id: "5",
        name: "Urban Pulse",
        description: "Street-ready style with premium materials and subtle design details. Comfort meets fashion in this head-turning lifestyle shoe.",
        price: 119.99,
        category: "lifestyle",
        colors: ["#7D7D7D", "#FFFFFF", "#000000"],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
        images: [
            shoes[12].image13,
            shoes[13].image14,
            shoes[14].image15
        ],
        isNew: false,
        isFeatured: true
    },
    {
        id: "6",
        name: "Terrain Force",
        description: "Conquer any trail with aggressive traction and waterproof protection. Durable construction stands up to the most demanding conditions.",
        price: 149.99,
        category: "running",
        colors: ["#3498DB", "#2ECC71", "#7D7D7D"],
        sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        images: [
            shoes[15].image16,
            shoes[16].image17,
            shoes[17].image18
        ],
        isNew: true,
        isFeatured: false
    },
    {
        id: "7",
        name: "Precision Low",
        description: "Low-profile court shoe with quick cuts and responsive handling in mind. The tacky rubber outsole provides exceptional grip on any surface.",
        price: 139.99,
        category: "basketball",
        colors: ["#FFFFFF", "#000000", "#FF5733"],
        sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        images: [
            shoes[18].image19,
            shoes[19].image20,
            shoes[20].image21
        ],
        isNew: false,
        isFeatured: false
    },
    {
        id: "8",
        name: "Enduro Max",
        description: "Designed for the long run with maximum cushioning and breathable upper. Tackle marathons or recovery days with equal comfort.",
        price: 169.99,
        category: "training",
        colors: ["#2ECC71", "#3498DB", "#000000"],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5],
        images: [
            shoes[21].image22,
            shoes[22].image23,
            shoes[23].image24
        ],
        isNew: true,
        isFeatured: true
    }
];

export const categories = [
    { id: "all", name: "All Products" },
    { id: "running", name: "Running" },
    { id: "lifestyle", name: "Lifestyle" },
    { id: "basketball", name: "Basketball" },
    { id: "training", name: "Training" },
];
