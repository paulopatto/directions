/// Use:
/// mongo host:port/database seed_file.js
/// Em meu caso o host 'e localhost e a porta 27017 (standart) e a base de dados 'e biz. O comando fica assim:
/// <code>
///     $ mongo localhost:27017/biz seed.js
/// </code>
///
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
for(var place in places){
    db.places.insert(places[place]);
}
/// Criando os index geospacial
/// veja http://docs.mongodb.org/manula/core/geospatial-indexes para mais informacoes
db.places.ensureIndex(
    {loc: "geoHaystack", type: 1},
    {bucketSize: 1}
);

