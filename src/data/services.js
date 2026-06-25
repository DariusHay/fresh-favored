export const services = [
  {
    title: "Catering",
    price: "$250 and up",
    summary: "Soul food, seafood, sweets, and drinks for gatherings, celebrations, and community events.",
    details: ["Custom event menu planning", "Family-style or plated options", "Two-week advance request preferred"],
  },
  {
    title: "Private Dinners",
    price: "$150 and up",
    summary: "Intimate dining experiences prepared with care for birthdays, date nights, and special moments.",
    details: ["Personalized menu direction", "Soul food and seafood options", "Designed for memorable at-home experiences"],
  },
  {
    title: "Individual Plates",
    price: "$15 and up",
    summary: "Fresh, flavorful plates with comforting favorites and rotating specials.",
    details: ["Pickup-friendly portions", "Great for lunch, dinner, and pop-up orders", "Availability may vary by menu"],
  },
  {
    title: "Family Meals",
    price: "$30 and up",
    summary: "Comforting meal options made for sharing with family and friends.",
    details: ["Serves multiple guests", "Perfect for busy weeknights", "Pickup address available after confirmation"],
  },
  {
    title: "Cakes & Sweets",
    price: "$6 and up",
    summary: "Sweet treats from 5 Bro's Sweets & Treats for everyday cravings and special occasions.",
    details: ["Cakes and dessert options", "Custom requests welcomed", "Advance notice recommended"],
  },
  {
    title: "Homemade Drinks",
    price: "$5 and up",
    summary: "Refreshing homemade drinks that pair beautifully with plates, meals, and events.",
    details: ["Available with food orders", "Great for events", "Flavors may rotate"],
  },
  {
    title: "Retail Finds",
    price: "$10 and up",
    summary: "Curated fashion and beauty finds including fedoras, perfume oils, and designer purses.",
    details: ["Fedoras from $15", "Perfume oils $10", "Designer purses from $45"],
  },
];

export const bookingDeposits = [
  {
    slug: "catering-deposit",
    name: "Catering Deposit",
    price: 50,
    priceCents: 5000,
    category: "Booking Deposit",
    description: "Reserve a catering consultation or event date. Final pricing is confirmed after consultation.",
  },
  {
    slug: "private-dinner-deposit",
    name: "Private Dinner Deposit",
    price: 50,
    priceCents: 5000,
    category: "Booking Deposit",
    description: "Reserve a private dinner request. Final balance is due no later than 7 days before the event.",
  },
  {
    slug: "custom-cake-deposit",
    name: "Custom Cake Deposit",
    price: 25,
    priceCents: 2500,
    category: "Booking Deposit",
    description: "Begin a custom cake or sweets request. Deposit is applied toward the confirmed total.",
  },
  {
    slug: "retail-hold-deposit",
    name: "Retail Hold Deposit",
    price: 15,
    priceCents: 1500,
    category: "Retail Deposit",
    description: "Hold an available fedora, perfume oil, or purse while pickup/payment details are confirmed.",
  },
];
