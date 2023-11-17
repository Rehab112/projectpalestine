export type INCIDENT_TYPE = {
  id: string;
  title: string;
  description: string;
  date: string;
  rating: 1 | 2 | 3;
  websites: Array<string>;
};

export type COMPANY_TYPE = {
  id: string;
  logo: string;
  name: string;
  description: string;
  rating: 1 | 2 | 3;
  website: string;
  tags: Array<string>;
  incidents?: Array<INCIDENT_TYPE>;
};

// export type User = UserCredential & {
//   BoycottDays?: number;
// };

// export const ReputationLevels = [
//   {
//     name: "Newbie",
//     points: 0,
//     badge: "Newbie Badge",
//   },
//   {
//     name: "Contributor",
//     points: 100,
//     badge: "Contributor Badge",
//   },
//   {
//     name: "Expert",
//     points: 500,
//     badge: "Expert Badge",
//   },
//   {
//     name: "Master",
//     points: 1000,
//     badge: "Master Badge",
//   },
// ];

export const TAGS = [
  { tag: 'Technology', name: "Technology" },
  { tag: 'Automotive', name: "Automotive" },
  { tag: 'Pharmaceuticals', name: "Pharmaceuticals" },
  { tag: 'Cosmetics', name: "Cosmetics" },
  { tag: 'FoodAndBeverages', name: "Food and Beverages" },
  { tag: 'Entertainment', name: "Entertainment" },
  { tag: 'FashionAndApparel', name: "Fashion and Apparel" },
  { tag: 'FinanceAndBanking', name: "Finance and Banking" },
  { tag: 'Retail', name: "Retail" },
  { tag: 'Telecommunications', name: "Telecommunications" },
  { tag: 'TravelAndHospitality', name: "Travel and Hospitality" },
  { tag: 'SportsAndFitness', name: "Sports and Fitness" },
  { tag: 'Other', name: "Other" },
]
