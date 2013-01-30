var places = [
    {
        name: "Parque do Ibirapuera",
        loc:[-23.583143, -46.658077]
    },
    {
        name: "MASP",
        loc:[-23.560761, -46.655974]
    },
    {
        name: "Catedral da Se",
        loc:[-23.561438, -46.655969]
    },
    {
        name: "Aeroporto do Galeao",
        loc: [-22.814440, -43.236265]
    },
    {

        name: "Marques de Sapucai",
        loc: [-22.911875, -43.193221]
    }
];
//var db = connect("localhost:27017/biz");

for(var place in places){
    db.collection.insert(place);
}
