export interface Bread {
  id: string;
  slug: string;
  name: string;
  imageURL: string;
}

export const mockedBread: Bread[] = [
  {
    id: "123",
    slug: "sour-dough",
    name: "Sour Dough",
    imageURL:
      "https://i1.wp.com/homesteadandchill.com/wp-content/uploads/2019/02/simple-sourdough-bread-recipe-homestead-feature.jpeg?resize=1140,1069&ssl=1",
  },
  {
    id: "456",
    slug: "milk-bread",
    name: "Milk Bread",
    imageURL:
      "https://www.mashed.com/img/gallery/what-is-milk-bread-and-what-is-it-made-of-upgrade/l-intro-1646677572.jpg",
  },
  {
    id: "789",
    slug: "brioche-buns",
    name: "Brioche Buns",
    imageURL:
      "https://bakingamoment.com/wp-content/uploads/2020/10/IMG_9285-brioche.jpg",
  },
  {
    id: "11011",
    slug: "banana-bread",
    name: "Banana Bread",
    imageURL:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.602dBo6EpzEOIwA-fpqG4AHaE8%26pid%3DApi&f=1&ipt=64d22fa718020537644520728a53a132debef6a94281afe9c00c23192261f20b&ipo=images",
  },
];
