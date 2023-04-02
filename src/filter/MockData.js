const FilterDef = [
  {
    id: 1,
    descr: "Länder",
    filters: [
      { id: 1, descr: "Deutschland", checked: true },
      { id: 2, descr: "Frankreich", checked: true },
      { id: 3, descr: "Senegal", checked: false },
      { id: 4, descr: "Polen", checked: false },
    ]
  },
  {
    id: 2,
    descr: "Aufwand",
    filters: [ 
      { id: 5, descr: "Einfach", checked: true },
      { id: 6, descr: "Alltagstauglich", checked: true },
      { id: 7, descr: "Aufwändiges Menü", checked: false },
      { id: 8, descr: "Eintopf", checked: false },
      { id: 13, descr: "Pfannengericht", checked: false }
    ]
  },
  {
    id: 3,
    descr: "Tageszeit",
    filters: [ 
      { id: 9, descr: "Frühstück", checked: true },
      { id: 10, descr: "Snack", checked: true },
      { id: 11, descr: "Mittag", checked: false },
      { id: 12, descr: "Abendessen", checked: false }
    ]
  }
]; 

export default FilterDef; 