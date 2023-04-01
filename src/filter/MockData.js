const FilterDef = [
  {
    catID: 1,
    cat: "Länder",
    checked: [
      { itemID: 1, item: "Deutschland" },
      { itemID: 2, item: "Frankreich" },
    ],
    unchecked: [
      { itemID: 3, item: "Senegal" },
      { itemID: 4, item: "Polen" },
    ]
  },
  {
    catID: 2,
    cat: "Aufwand",
    checked: [
      { itemID: 5, item: "Einfach" },
      { itemID: 6, item: "Alltagstauglich" },
      { itemID: 7, item: "Aufwändiges Menü" }
    ],
    unchecked: [
      { itemID: 8, item: "Eintopf" }
    ]
  },
  {
    catID: 3,
    cat: "Tageszeit",
    checked: [
      { itemID: 9, item: "Frühstück" },
      { itemID: 10, item: "Snack" }
    ],
    unchecked: [
      { itemID: 11, item: "Mittag" },
      { itemID: 12, item: "Abendessen" }
    ]
  }
]; 

export default FilterDef; 