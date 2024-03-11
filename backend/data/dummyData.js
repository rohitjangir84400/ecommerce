/* dummy products data */
const products = [
  {
    name: "PlayStation 5",
    imageUrl:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    description:
      "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
    price: 40000,
    countInStock: 15,
    catogery: 'electronics'
  },
  {
    name: "Iphone 12",
    imageUrl:
      "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    price: 51000,
    countInStock: 10,
    catogery: 'electronics'
  },
  {
    name: "Cannon EOS-1D",
    imageUrl:
      "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
    price: 13000,
    countInStock: 5,
    catogery: 'electronics'
  },
  {
    name: "Amazon Alexa",
    imageUrl:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    description:
      "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
    price: 4999,
    countInStock: 25,
    catogery: 'electronics'
  },
  {
    name: "Audio Technica Headphones",
    imageUrl:
      "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 3999,
    countInStock: 4,
    catogery: 'electronics'
  },
  {
    name: "JBL FLIP 4",
    imageUrl:
      "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 1200,
    countInStock: 10,
    catogery: 'electronics'
  },
  {
    name: "Girl's Skirt",
    imageUrl:
      "https://images.unsplash.com/photo-1549575810-b9b7abc51d9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "VAGISHA Blooming Below Knee | Middi Printed A-line Skirt for Women's/Girl's |100% Polyblend | Soft & Breathable Fabric | Elastic Band | Casual Wear |M-XXXL|28-36 inches.",
    price: 1100,
    countInStock: 15,
    catogery: 'fashion'
  },
  {
    name: "Women's Dress",
    imageUrl:
      "https://images.unsplash.com/photo-1596637510298-637b184503e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "VAGISHA Blooming Below Knee | Middi Printed A-line Skirt for Women's/Girl's |100% Polyblend | Soft & Breathable Fabric | Elastic Band | Casual Wear |M-XXXL|28-36 inches.",
    price: 2500,
    countInStock: 10,
    catogery: 'fashion'
  },
  {
    name: "Western Dress",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661369652778-d79f3e6cf4d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Western shirts with pearl snap fasteners and vaquero design accents, blue jeans, cowboy hat, a leather belt, and cowboy boots.",
    price: 3300,
    countInStock: 5,
    catogery: 'fashion'
  },
  {
    name: "Damaged Jeans",
    imageUrl:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      " Fit Type. Slim Fit. Color. Blue. Fabric. Cotton. Pattern. Ripped. Stretch Type. Stretchable. Occasion. Casual Wear.",
    price: 799,
    countInStock: 25,
    catogery: 'fashion'
  },
  {
    name: "Red Saree",
    imageUrl:
      "https://images.unsplash.com/photo-1618901185975-d59f7091bcfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "suitable for both traditional and contemporary bridal looks, and their opulence can transform you into a goddess. Adorned with gota patti, cut-dana, sequins, or zari embroidery",
    price: 350,
    countInStock: 4,
    catogery: 'fashion'
  },
  {
    name: "Kurta",
    imageUrl:
      "https://images.unsplash.com/photo-1655288828238-21d86ec971c3?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The kurta features a mandarin collar with a 2-button placket on the front, 3/4 sleeves with turn-up tabs and an eye-catching all-over solid print.",
    price: 750,
    countInStock: 10,
    catogery: 'fashion'
  },
  {
    name: "Nike Shoes",
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Nike Air cushioning reduces the weight of the shoe without reducing performance. The lighter the shoe is, the less energy athletes put out during their performance. ",
    price: 1700,
    countInStock: 15,
    catogery: 'sports'
  },
  {
    name: "Joggers",
    imageUrl:
      "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Cotton Stribed Pyjamas for Women|Lowers for women With 2 Side Pockets : Ideal For Night Wear & Comfort wear - The Ultimate Relaxed Fit Track Pants For Women",
    price: 700,
    countInStock: 10,
    catogery: 'sports'
  },
  {
    name: "Shorts",
    imageUrl:
      "https://images.unsplash.com/photo-1648983629477-8dde127cb94a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "an ideal alternative to full-length trousers when the hot weather of the summer season is around the corner. These bottom wear options can aid in keeping little ones comfortable, as they offer good ventilation.",
    price: 650,
    countInStock: 5,
    catogery: 'sports'
  },
  {
    name: "Football",
    imageUrl:
      "https://images.unsplash.com/photo-1634114441919-7636abb21cae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A football is an oval-like inflated ball usually made of cowhide or rubber. The offense, or the team with control of the ball, attempts to advance the ball down the field by running or passing the ball, while the opposing team aims to stop their advance and tries to take control of the ball",
    price: 900,
    countInStock: 25,
    catogery: 'sports'
  },
  {
    name: "Dumbblles",
    imageUrl:
      "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "short bar with weights on either side which people use for physical exercise to strengthen their arm and shoulder muscles",
    price: 600,
    countInStock: 4,
    catogery: 'sports'
  },
  {
    name: "Sports Bag",
    imageUrl:
      "https://images.unsplash.com/photo-1596768640244-41dbcf22cc5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "20 L Gym Duffel Bag - Water Resistant Sports Gym/Kit Bag With Separate Shoe Compartment - Grey, Black",
    price: 350,
    countInStock: 10,
    catogery: 'sports'
  },
];

module.exports = products;
