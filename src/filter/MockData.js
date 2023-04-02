const FilterDef = [
  {
    catID: 1,
    cat: "Länder",
    filters: [
      { itemID: 1, item: "Deutschland", checked: true },
      { itemID: 2, item: "Frankreich", checked: true },
      { itemID: 3, item: "Senegal", checked: false },
      { itemID: 4, item: "Polen", checked: false },
    ]
  },
  {
    catID: 2,
    cat: "Aufwand",
    filters: [ 
      { itemID: 5, item: "Einfach", checked: true },
      { itemID: 6, item: "Alltagstauglich", checked: true },
      { itemID: 7, item: "Aufwändiges Menü", checked: false },
      { itemID: 8, item: "Eintopf", checked: false },
      { itemID: 13, item: "Pfannengericht", checked: false }
    ]
  },
  {
    catID: 3,
    cat: "Tageszeit",
    filters: [ 
      { itemID: 9, item: "Frühstück", checked: true },
      { itemID: 10, item: "Snack", checked: true },
      { itemID: 11, item: "Mittag", checked: false },
      { itemID: 12, item: "Abendessen", checked: false }
    ]
  }
]; 

export default FilterDef; 