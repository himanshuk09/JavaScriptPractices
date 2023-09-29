const companies = [
    {name:"company one", category:"Finance", Start:"1982", end:"2003" },
    {name:"company two", category:"Retail", Start:"1982", end:"2008" },
    {name:"company three", category:"Auto", Start:"1999", end:"2007" },
    {name:"company four", category:"Retail", Start:"1989", end:"2010" },
    {name:"company five", category:"Technology", Start:"2009", end:"2014" },
    {name:"company six", category:"Finance", Start:"1987", end:"2010" },
    {name:"company seven", category:"Auto", Start:"1986", end:"1996" },
    {name:"company eight", category:"Technology", Start:"2011", end:"2016" },
    {name:"company nine", category:"Retail", Start:"1981", end:"1989" },
]



// const tins = companies.filter(function(opg){
//     if(opg.category === "Retail"){
//         return true;
//     }
// })
// console.log(tins); 

// const jklp = companies.filter(function(iopu){
//     if(iopu.Start === "1982"){
//         return true;
//     }
// })
// console.log(jklp); 

const lasteighteenyears = companies.filter(function(pub){
    if((pub.Start >= 1980 && pub.Start <= 1990) && (pub.end >= 1980 && pub.end <= 1990)){
        return true;
    } 
})
console.log(lasteighteenyears);

// const lasttenyears = companies.filter(function(tup){
//     if(tup.end-tup.Start>=10){
//         return true;
//     }
// })
// console.log(lasttenyears);  

// const hjk = companies.filter(function(klp){
//     if(klp.category === "Technology"){
//         return true;
//     }
// })
// console.log(hjk) 

// const ght = companies.filter(function(iop){
//     if(iop.category === "Auto"){
//         return true;
//     }
// })
// console.log(ght); 

// const hyj = companies.filter(function(rut){
//     if(rut.category === "Auto"){
//         return true;
//     }
// })
// console.log(hyj);

// const AllCompany = companies.map(function(company) {
//   return `${company.name}`;
// })
// console.log(AllCompany)

// const comp = companies.map(function(temp) {
//     return temp.category
// })
// console.log(comp)

// const top = companies.map(function(type){
//     return type.Start
// })
// console.log(top)

// const img = companies.map(function(para){
//     return para.end
// })
// console.log(img)

// const companyname = companies.map(function(company){
//     return `${company.name} [${company.Start}-${company.end}]`;
// })
// console.log(companyname)