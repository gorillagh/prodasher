const prodasher = {
  name: "proDasher",
  nameEqualsLogo: false,
  shortName: "proDasher",
  path: "wuda",
  nameExtension: "food delivery",
  website: "https://www.prodasher.com",
  backgroundPic:
    "https://images.unsplash.com/photo-1503220178855-e31ec372b8ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  orderDuration: 20,
  branches: [
    {
      name: "Osu",
      address: {
        googleAddress: { lng: -0.18671566160150527, lat: 5.569976708828936 },
        description: "Opposite Police Headquaters Gate 1, Ring Rd E, Accra",
        shortDescription: "Ring Rd E, Accra",
      },
      workingHours: [
        { day: "Monday", start: "11:00", close: "23:00" },
        { day: "Tuesday", start: "11:00", close: "23:00" },
        { day: "Wednesday", start: "11:00", close: "23:00" },
        { day: "Thursday", start: "11:00", close: "23:00" },
        { day: "Friday", start: "11:00", close: "23:00" },
        { day: "Saturday", start: "11:00", close: "23:00" },
        { day: "Sunday", start: "13:00", close: "23:00" },
      ],
      contact: {
        email: "support@prodasher.com",
        phoneNumber: "+233240298910",
      },
    },
  ],

  socials: {
    facebook: {
      url: "https://www.facebook.com/chanchoman1",
      webUrl: "fb://profile/chanchoman1",
    },
    instagram: {
      webUrl: "instagram://user?username=governor_narh",
      url: "https://www.instagram.com/governor_narh",
    },
    twitter: {
      webUrl: "twitter://user?screen_name=governornarh",
      url: "https://www.twitter.com/governornarh",
    },
    snapchat: {
      webUrl: "snapchat://add/wudalounge",
      url: "https://www.snapchat.com/add/chancho",
    },
    whatsapp: { number: "+233244885739" },
    boltFood: {
      url: "https://food.bolt.eu/en-US/137/p/38734-veggie-box",
    },
  },

  menu: {
    categories: [
      {
        name: "meat-based",
        description: "Protein-rich dishes",
        dishes: [],
      },
      {
        name: "seafood",
        description: "Fresh ocean flavors",
        dishes: [],
      },
      {
        name: "vegan",
        description: "Plant-based delights",
        dishes: [],
      },

      {
        name: "beverages",
        description: "Refreshing drink options",
        dishes: [],
      },
      {
        name: "appetizers",
        description: "Small tasty bites",
        dishes: [],
      },
      { name: "desserts", description: "Sweet indulgent treats", dishes: [] },
    ],
  },
  about: {
    texts: [
      "Welcome to proDasher, a family-owned and operated food delivery business that offers delicious and fresh meals for delivery. We believe in using only the finest ingredients and preparing each dish to perfection, ensuring that every bite is memorable. From classic comfort foods to contemporary cuisine, we have something for everyone.",
      "Let us bring our passion for food to your door, and experience the taste of proDasher in the comfort of your own home.",
    ],
    photos: [
      "https://res.cloudinary.com/dkxrwzp2d/image/upload/v1675981586/IMG-0735_g5fyvp.jpg",
    ],
  },

  theme: {
    palette: {
      mode: "light",
      primary: {
        light: "#c1151a",
        main: "#9a1115",
        dark: "#7b0e11",
        contrastText: "#fff",
      },
      secondary: {
        light: "#69a9ac",
        main: "#4f8c8f",
        dark: "#3f7072",
        contrastText: "#fff",
      },
      highlight: "#fee5b9",
      error: {
        main: "#ce0018",
        light: "#ff0220",
        dark: "#a50013",
        contrastText: "#fff",
      },
      info: {
        main: "#784af4",
        light: "#b095f9",
        dark: "#4c0ff0",
        contrastText: "#fff",
      },
      divider: "rgba(0, 0, 0, 0.08)",
    },

    shape: {
      borderRadius: 14,
    },
    typography: {
      fontFamily: [
        // "Ubuntu",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      h5: {
        fontFamily: "Ubuntu",
      },
      h4: {
        fontFamily: "Ubuntu",
      },
      // body1: { fontSize: "0.9rem" },
      body2: {
        fontSize: "0.8rem",
        color: "text.secondary",
        fontWeight: "300",
      },
    },
  },
};

export default prodasher;
