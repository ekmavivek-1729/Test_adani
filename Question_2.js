const awards = [

       {
   
       name: 'James Peebles',
   
       category: 'Physics',
   
       research: 'Theoretical discoveries in physical cosmology',
   
       year: 2019,
   
     },
   
     {
   
       name: 'Michel Mayor',
   
       category: 'Physics',
   
       research: 'Discovery of an exoplanet orbiting a solar-type star',
   
       year: 2019,
   
     },
   
     {
   
       name: 'Didier Queloz',
   
       category: 'Physics',
   
       research: 'Discovery of an exoplanet orbiting a solar-type star',
   
       year: 2019,
   
     },
   
     {
   
       name: 'John B. Goodenough',
   
       category: 'Chemistry',
   
       research: 'Development of lithium-ion batteries',
   
       year: 2019,
   
     },
   
     {
   
       name: 'M. Stanley Whittingham',
   
       category: 'Chemistry',
   
       research: 'Development of lithium-ion batteries',
   
       year: 2019,
   
     },
   
     {
   
       name: 'Akira Yoshino',
   
       category: 'Chemistry',
   
       research: 'Development of lithium-ion batteries',
   
       year: 2019,
   
     },
   
     {
   
       name: 'Arthur Ashkin',
   
       category: 'Physics',
   
       research: 'Optical tweezers and their application to biological systems',
   
       year: 2018,
   
     },
   
     {
   
       name: 'Gerard Mourou',
   
       category: 'Physics',
   
       research: 'Method of generating high-intensity, ultra-short optical pulses',
   
       year: 2018,
   
     },
   
     {
   
       name: 'Donna Strickland',
   
       category: 'Physics',
   
       research: 'Method of generating high-intensity, ultra-short optical pulses',
   
       year: 2018,
   
     },
   
     {
   
       name: 'Frances H. Arnold',
   
       category: 'Chemistry',
   
       research: 'Directed evolution of enzymes',
   
       year: 2018,
   
     },
   
     {
   
       name: 'George P. Smith',
   
       category: 'Chemistry',
   
       research: 'Phage display of peptides and antibodies.',
   
       year: 2018,
   
     },
   
     {
   
       name: 'Sir Gregory P. Winter',
   
       category: 'Chemistry',
   
       research: 'Phage display of peptides and antibodies.',
   
       year: 2018,
   
     },
   
   ];

   function FilterShare(NobelWinner) {
    let mp = new Map();
    for (let i of NobelWinner) { 

    if (mp.has(i.research)) 
      mp.set(i.research, mp.get(i.research) + 1);
    else
     mp.set(i.research, 1);
    }
  
    let CountTopics = mp.size;
    let calculate = [];
  
    for (let i of NobelWinner) {
      let share = 1 / CountTopics / mp.get(i.research);
      calculate.push({ name: i.name, share: share });
    }
    return calculate;
  }
 
  
// Here is my main function

  function GetResult() {
    let years = new Set(awards.map((y) => y.year));          //year set like-- 2019 2018

    let categories = new Set(awards.map((c) => c.category)); //category set
    // console.log(categories);                                   
   
    years.forEach((year) => {
      let yearData = awards.filter((y) => y.year == year);  //Iterating in each year like --2019, 2018.... and filter the years
  
      categories.forEach((cat) => {                                    // In each categories we iterate in year and filter it if input category is same as in our category set
        let data = yearData.filter((award) => award.category === cat);
    
   
        let FinalResult = {
          category: cat,
          year: year,
          winners: FilterShare(data)
        };
    
    console.log(FinalResult);
      });
    });
  }
  
  GetResult();