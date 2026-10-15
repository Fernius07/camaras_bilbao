// Base de datos de Cámaras Municipales de Bilbao
// Fuente: Ayuntamiento de Bilbao / GeoBilbao / Open Data Euskadi
const BILBAO_CAMERAS = [
  {
    "id": 1,
    "name": "M. Díaz de Haro/Simón Bolívar",
    "district": "ABANDO",
    "lat": 43.260657,
    "lng": -2.944524
  },
  {
    "id": 2,
    "name": "Sabino Arana/Av. Ferrocarril",
    "district": "ABANDO",
    "lat": 43.260549,
    "lng": -2.946876
  },
  {
    "id": 3,
    "name": "Aita Donosti",
    "district": "BASURTU-ZORROTZA",
    "lat": 43.257943,
    "lng": -2.949912
  },
  {
    "id": 4,
    "name": "Autonomía/Gordóniz",
    "district": "ABANDO",
    "lat": 43.257503,
    "lng": -2.941314
  },
  {
    "id": 5,
    "name": "Plza. Museo",
    "district": "ABANDO",
    "lat": 43.266401,
    "lng": -2.938385
  },
  {
    "id": 6,
    "name": "Plza. Pío X",
    "district": "DEUSTO",
    "lat": 43.27136,
    "lng": -2.941474
  },
  {
    "id": 7,
    "name": "Dr. Areilza/Alda. Urquijo",
    "district": "ABANDO",
    "lat": 43.261351,
    "lng": -2.942428
  },
  {
    "id": 8,
    "name": "Plza. Moyúa",
    "district": "ABANDO",
    "lat": 43.262874,
    "lng": -2.934456
  },
  {
    "id": 9,
    "name": "Jardines Albia",
    "district": "ABANDO",
    "lat": 43.26285,
    "lng": -2.929037
  },
  {
    "id": 10,
    "name": "Plza. Zabálburu",
    "district": "ABANDO",
    "lat": 43.257141,
    "lng": -2.934032
  },
  {
    "id": 11,
    "name": "Ldo. Poza/Ercilla",
    "district": "ABANDO",
    "lat": 43.261467,
    "lng": -2.938502
  },
  {
    "id": 12,
    "name": "General Concha/Alda. Urquijo",
    "district": "ABANDO",
    "lat": 43.259643,
    "lng": -2.93467
  },
  {
    "id": 13,
    "name": "Ribera / Casco Viejo",
    "district": "IBAIONDO",
    "lat": 43.2575,
    "lng": -2.9235
  },
  {
    "id": 14,
    "name": "Puente San Antón / Atxuri",
    "district": "IBAIONDO",
    "lat": 43.2548,
    "lng": -2.9221
  },
  {
    "id": 15,
    "name": "Plza. Erkoreka",
    "district": "URIBARRI",
    "lat": 43.263401,
    "lng": -2.92335
  },
  {
    "id": 16,
    "name": "Lehendakari Aguirre/Avda. Enekuri",
    "district": "DEUSTO",
    "lat": 43.272072,
    "lng": -2.947412
  },
  {
    "id": 17,
    "name": "Pte. La Salve",
    "district": "ABANDO",
    "lat": 43.267876,
    "lng": -2.933092
  },
  {
    "id": 18,
    "name": "Sda. Familia/Lehendakari Aguirre",
    "district": "DEUSTO",
    "lat": 43.272147,
    "lng": -2.952478
  },
  {
    "id": 19,
    "name": "Hurtado de Amézaga",
    "district": "ABANDO",
    "lat": 43.259374,
    "lng": -2.930554
  },
  {
    "id": 20,
    "name": "Benidorm",
    "district": "DEUSTO",
    "lat": 43.274198,
    "lng": -2.958231
  },
  {
    "id": 21,
    "name": "Avda. Txomin Garat",
    "district": "OTXARKOAGA-TXURDINAGA",
    "lat": 43.257359,
    "lng": -2.910064
  },
  {
    "id": 22,
    "name": "Santutxu/Karmelo",
    "district": "BEGOÑA",
    "lat": 43.253661,
    "lng": -2.915809
  },
  {
    "id": 23,
    "name": "Santa Clara",
    "district": "BEGOÑA",
    "lat": 43.254202,
    "lng": -2.911135
  },
  {
    "id": 24,
    "name": "Marqués de Laurencín",
    "district": "BEGOÑA",
    "lat": 43.25044,
    "lng": -2.908812
  },
  {
    "id": 25,
    "name": "Pte. La Merced",
    "district": "IBAIONDO",
    "lat": 43.257514,
    "lng": -2.927326
  },
  {
    "id": 26,
    "name": "Iparraguirre/Alda. Urquijo",
    "district": "ABANDO",
    "lat": 43.260418,
    "lng": -2.937514
  },
  {
    "id": 27,
    "name": "Plza. Emilio Campuzano",
    "district": "ABANDO",
    "lat": 43.263169,
    "lng": -2.93955
  },
  {
    "id": 28,
    "name": "Juan de Garay/Ramal autopista",
    "district": "ERREKALDE",
    "lat": 43.250383,
    "lng": -2.935062
  },
  {
    "id": 29,
    "name": "Zumalakarregi/Maurice Ravel",
    "district": "URIBARRI",
    "lat": 43.264672,
    "lng": -2.917239
  },
  {
    "id": 30,
    "name": "Av. Ferrocarril/Autonomía",
    "district": "BASURTU-ZORROTZA",
    "lat": 43.257617,
    "lng": -2.946141
  },
  {
    "id": 31,
    "name": "Gordóniz/Jaén",
    "district": "ERREKALDE",
    "lat": 43.25466,
    "lng": -2.94454
  },
  {
    "id": 32,
    "name": "Sdo. Corazón Oeste (Olabeaga)",
    "district": "ABANDO",
    "lat": 43.265232,
    "lng": -2.945218
  },
  {
    "id": 33,
    "name": "Sdo. Corazón Sur (Sabino Arana)",
    "district": "ABANDO",
    "lat": 43.265224,
    "lng": -2.945208
  },
  {
    "id": 34,
    "name": "Sdo. Corazón Este (Gran Vía)",
    "district": "ABANDO",
    "lat": 43.265233,
    "lng": -2.945185
  },
  {
    "id": 35,
    "name": "Sdo. Corazón Norte (Parque)",
    "district": "ABANDO",
    "lat": 43.265248,
    "lng": -2.945201
  },
  {
    "id": 36,
    "name": "Avda. Leizaola/Abandoibarra",
    "district": "ABANDO",
    "lat": 43.267814,
    "lng": -2.942291
  },
  {
    "id": 37,
    "name": "Paseo Uribitarte (Rotonda)",
    "district": "ABANDO",
    "lat": 43.26828,
    "lng": -2.930956
  },
  {
    "id": 38,
    "name": "Jardines Gernika/Gortazar",
    "district": "IBAIONDO",
    "lat": 43.248448,
    "lng": -2.926207
  },
  {
    "id": 39,
    "name": "Pte. Euskalduna/Botica Vieja",
    "district": "DEUSTO",
    "lat": 43.267987,
    "lng": -2.949243
  },
  {
    "id": 40,
    "name": "Artalandio/Julián Gaiarre",
    "district": "OTXARKOAGA-TXURDINAGA",
    "lat": 43.255202,
    "lng": -2.901191
  },
  {
    "id": 41,
    "name": "Rguez.Arias/Alda. Rekalde",
    "district": "ABANDO",
    "lat": 43.261882,
    "lng": -2.935534
  },
  {
    "id": 42,
    "name": "Henao/Heros",
    "district": "ABANDO",
    "lat": 43.264689,
    "lng": -2.932552
  },
  {
    "id": 43,
    "name": "Indalecio Prieto/Santutxu",
    "district": "BEGOÑA",
    "lat": 43.250189,
    "lng": -2.917025
  },
  {
    "id": 44,
    "name": "Plza. Euskadi",
    "district": "ABANDO",
    "lat": 43.266565,
    "lng": -2.937462
  },
  {
    "id": 45,
    "name": "Circo Amateur/Carretera Galdakao",
    "district": "BEGOÑA",
    "lat": 43.248206,
    "lng": -2.906828
  },
  {
    "id": 46,
    "name": "Av. Miraflores/Carretera Galdakao",
    "district": "BEGOÑA",
    "lat": 43.246925,
    "lng": -2.910419
  },
  {
    "id": 47,
    "name": "Av. Miraflores/Pintor Losada",
    "district": "BEGOÑA",
    "lat": 43.24675,
    "lng": -2.91233
  },
  {
    "id": 48,
    "name": "Fray Juan/Clara Campoamor",
    "district": "BASURTU-ZORROTZA",
    "lat": 43.277113,
    "lng": -2.973839
  },
  {
    "id": 49,
    "name": "Fray Juan/Ctra. Zorrotza Kastrexana",
    "district": "BASURTU-ZORROTZA",
    "lat": 43.276299,
    "lng": -2.970672
  },
  {
    "id": 50,
    "name": "Ciudad Jardin/Avda. Maurice Ravel",
    "district": "URIBARRI",
    "lat": 43.269915,
    "lng": -2.923202
  },
  {
    "id": 51,
    "name": "Zabalbide/Avda. Zumalacarregui",
    "district": "OTXARKOAGA-TXURDINAGA",
    "lat": 43.25627,
    "lng": -2.911125
  },
  {
    "id": 52,
    "name": "Plza. Víctor Chávarri",
    "district": "ABANDO",
    "lat": 43.262303,
    "lng": -2.946296
  },
  {
    "id": 53,
    "name": "Campo Volantín/Múgica y Butrón",
    "district": "URIBARRI",
    "lat": 43.267268,
    "lng": -2.927789
  },
  {
    "id": 54,
    "name": "Zamakola/Ctra. Buia",
    "district": "IBAIONDO",
    "lat": 43.240891,
    "lng": -2.920845
  },
  {
    "id": 55,
    "name": "Abusu/Zamakola",
    "district": "IBAIONDO",
    "lat": 43.244915,
    "lng": -2.924167
  },
  {
    "id": 56,
    "name": "Gordoniz/Ciudadela",
    "district": "ERREKALDE",
    "lat": 43.252697,
    "lng": -2.94618
  },
  {
    "id": 57,
    "name": "Avda. Zumalacarregui/San Isidro",
    "district": "URIBARRI",
    "lat": 43.261559,
    "lng": -2.915598
  },
  {
    "id": 58,
    "name": "Avda. Miraflores/Indalecio Prieto",
    "district": "BEGOÑA",
    "lat": 43.24861,
    "lng": -2.919913
  },
  {
    "id": 59,
    "name": "Luis Briñas/Zunzunegi",
    "district": "BASURTU-ZORROTZA",
    "lat": 43.261769,
    "lng": -2.948523
  },
  {
    "id": 60,
    "name": "Torres Quevedo",
    "district": "BASURTU-ZORROTZA",
    "lat": 43.262787,
    "lng": -2.949986
  },
  {
    "id": 61,
    "name": "Gurtubay/General Eguia",
    "district": "BASURTU-ZORROTZA",
    "lat": 43.26092,
    "lng": -2.95107
  },
  {
    "id": 62,
    "name": "Semitúnel 1",
    "district": "BASURTU-ZORROTZA",
    "lat": 43.262834,
    "lng": -2.950792
  },
  {
    "id": 63,
    "name": "Semitúnel 2",
    "district": "BASURTU-ZORROTZA",
    "lat": 43.263581,
    "lng": -2.953474
  },
  {
    "id": 64,
    "name": "Plza. Biribila",
    "district": "ABANDO",
    "lat": 43.261291,
    "lng": -2.927612
  },
  {
    "id": 65,
    "name": "Autonomía/Avda. Ferrocarril",
    "district": "BASURTU-ZORROTZA",
    "lat": 43.257722,
    "lng": -2.945922
  },
  {
    "id": 66,
    "name": "Plza. Birjinetxe",
    "district": "OTXARKOAGA-TXURDINAGA",
    "lat": 43.256404,
    "lng": -2.904322
  },
  {
    "id": 67,
    "name": "Avda. Montevideo frente a Hospital",
    "district": "BASURTU-ZORROTZA",
    "lat": 43.260028,
    "lng": -2.953282
  },
  {
    "id": 68,
    "name": "Sabino Arana/Autonomia",
    "district": "BASURTU-ZORROTZA",
    "lat": 43.258045,
    "lng": -2.948065
  },
  {
    "id": 69,
    "name": "Sabino Arana/Gral. Eguia",
    "district": "BASURTU-ZORROTZA",
    "lat": 43.259494,
    "lng": -2.947436
  },
  {
    "id": 70,
    "name": "Santa Ana de Bolueta/Camino del Pontón",
    "district": "BEGOÑA",
    "lat": 43.246649,
    "lng": -2.908739
  },
  {
    "id": 71,
    "name": "Zabalbide/Tenor Fagoaga",
    "district": "BEGOÑA",
    "lat": 43.254572,
    "lng": -2.914711
  },
  {
    "id": 72,
    "name": "Mª Diaz de Haro/Rguez .Arias",
    "district": "ABANDO",
    "lat": 43.26366,
    "lng": -2.943596
  },
  {
    "id": 73,
    "name": "Carmelo Bernaola/Morgan",
    "district": "DEUSTO",
    "lat": 43.269007,
    "lng": -2.956183
  },
  {
    "id": 74,
    "name": "Pte. Frank Gehry/Ballets de Olaeta",
    "district": "DEUSTO",
    "lat": 43.267974,
    "lng": -2.953946
  },
  {
    "id": 75,
    "name": "Lehendakari Aguirre/Baleares",
    "district": "DEUSTO",
    "lat": 43.277989,
    "lng": -2.961035
  },
  {
    "id": 76,
    "name": "Plza. Eskurtze",
    "district": "ERREKALDE",
    "lat": 43.25172,
    "lng": -2.937941
  },
  {
    "id": 77,
    "name": "Miribilla / Bilbao La Vieja",
    "district": "IBAIONDO",
    "lat": 43.2538,
    "lng": -2.9282
  },
  {
    "id": 78,
    "name": "Elorrieta/Avda. Zarandoa",
    "district": "DEUSTO",
    "lat": 43.283629,
    "lng": -2.966956
  },
  {
    "id": 79,
    "name": "Ribera Elorrieta",
    "district": "DEUSTO",
    "lat": 43.287844,
    "lng": -2.968813
  },
  {
    "id": 80,
    "name": "Zabalbide/Arabella",
    "district": "URIBARRI",
    "lat": 43.260947,
    "lng": -2.911473
  },
  {
    "id": 81,
    "name": "Avda.Montevideo/Cuesta de Olabeaga",
    "district": "BASURTU-ZORROTZA",
    "lat": 43.260752,
    "lng": -2.954688
  },
  {
    "id": 82,
    "name": "Rtda. Leceaga",
    "district": "BASURTU-ZORROTZA",
    "lat": 43.260253,
    "lng": -2.954629
  },
  {
    "id": 83,
    "name": "Avda.Montevideo/Gurtubay",
    "district": "BASURTU-ZORROTZA",
    "lat": 43.258998,
    "lng": -2.951817
  },
  {
    "id": 84,
    "name": "Pte. Cantalojas/San Francisco",
    "district": "IBAIONDO",
    "lat": 43.257056,
    "lng": -2.932141
  },
  {
    "id": 85,
    "name": "Ballets Olaeta/Gral. Eraso",
    "district": "DEUSTO",
    "lat": 43.267337,
    "lng": -2.951518
  },
  {
    "id": 86,
    "name": "Zarandoa/Islas Baleares",
    "district": "DEUSTO",
    "lat": 43.277283,
    "lng": -2.963351
  },
  {
    "id": 87,
    "name": "Rotonda de Trueba",
    "district": "URIBARRI",
    "lat": 43.272575,
    "lng": -2.915662
  },
  {
    "id": 88,
    "name": "Rotonda de Nogaro",
    "district": "URIBARRI",
    "lat": 43.276152,
    "lng": -2.924749
  },
  {
    "id": 89,
    "name": "Frank Ghery/Avda. Galleteras",
    "district": "DEUSTO",
    "lat": 43.266558,
    "lng": -2.954798
  },
  {
    "id": 90,
    "name": "Avda. Galleteras/Sabina de la Cruz",
    "district": "DEUSTO",
    "lat": 43.276977,
    "lng": -2.966332
  },
  {
    "id": 91,
    "name": "Zarandoa / Botica Vieja",
    "district": "DEUSTO",
    "lat": 43.2752,
    "lng": -2.9612
  },
  {
    "id": 92,
    "name": "San Francisco / Muelle Marzana",
    "district": "IBAIONDO",
    "lat": 43.2562,
    "lng": -2.9252
  },
  {
    "id": 129,
    "name": "PC15_ITURRIBIDE_ENT",
    "district": "IBAIONDO",
    "lat": 43.257678,
    "lng": -2.918403
  },
  {
    "id": 135,
    "name": "PC21_ESTUFA_SAL",
    "district": "IBAIONDO",
    "lat": 43.260597,
    "lng": -2.922647
  },
  {
    "id": 136,
    "name": "PC22_ESPERANZA_SAL",
    "district": "IBAIONDO",
    "lat": 43.262094,
    "lng": -2.922684
  },
  {
    "id": 140,
    "name": "PC26_ITURRIBIDE_SAL",
    "district": "IBAIONDO",
    "lat": 43.256861,
    "lng": -2.916244
  },
  {
    "id": 145,
    "name": "Indautxu",
    "district": "ABANDO",
    "lat": 43.261395,
    "lng": -2.940265
  },
  {
    "id": 146,
    "name": "Ercilla/Ldo. Poza",
    "district": "ABANDO",
    "lat": 43.261498,
    "lng": -2.938061
  },
  {
    "id": 147,
    "name": "Ercilla/Moyua",
    "district": "ABANDO",
    "lat": 43.262692,
    "lng": -2.935501
  },
  {
    "id": 148,
    "name": "Zunzunegui",
    "district": "ABANDO",
    "lat": 43.262623,
    "lng": -2.950462
  },
  {
    "id": 149,
    "name": "Camino Morgan",
    "district": "DEUSTO",
    "lat": 43.268542,
    "lng": -2.954038
  },
  {
    "id": 150,
    "name": "Bernaola Ext.IN Lado Bilbao",
    "district": "DEUSTO",
    "lat": 43.268806,
    "lng": -2.95522
  },
  {
    "id": 151,
    "name": "Bernaola Exterior Lado Asúa",
    "district": "DEUSTO",
    "lat": 43.274381,
    "lng": -2.954401
  },
  {
    "id": 152,
    "name": "Bernaola Ext.OUTLado Bilbao",
    "district": "DEUSTO",
    "lat": 43.269581,
    "lng": -2.956167
  },
  {
    "id": 153,
    "name": "Bernaola Puerta C.Técnico",
    "district": "DEUSTO",
    "lat": 43.271235,
    "lng": -2.955715
  },
  {
    "id": 154,
    "name": "Bernaola/Avda.Enekuri",
    "district": "DEUSTO",
    "lat": 43.277986,
    "lng": -2.955163
  },
  {
    "id": 155,
    "name": "BERNAOLA ASC DAI-1",
    "district": "DEUSTO",
    "lat": 43.270065,
    "lng": -2.956022
  },
  {
    "id": 156,
    "name": "BERNAOLA ASC DAI-2",
    "district": "DEUSTO",
    "lat": 43.271475,
    "lng": -2.955957
  },
  {
    "id": 157,
    "name": "BERNAOLA ASC DAI-3",
    "district": "DEUSTO",
    "lat": 43.272244,
    "lng": -2.955765
  },
  {
    "id": 158,
    "name": "BERNAOLA ASC DAI-4",
    "district": "DEUSTO",
    "lat": 43.272943,
    "lng": -2.955401
  },
  {
    "id": 159,
    "name": "BERNAOLA ASC DAI-5",
    "district": "DEUSTO",
    "lat": 43.273819,
    "lng": -2.954896
  },
  {
    "id": 160,
    "name": "BERNAOLA ASC DAI-6",
    "district": "DEUSTO",
    "lat": 43.273899,
    "lng": -2.955183
  },
  {
    "id": 161,
    "name": "BERNAOLA DES DAI-1",
    "district": "DEUSTO",
    "lat": 43.273066,
    "lng": -2.955729
  },
  {
    "id": 162,
    "name": "BERNAOLA DES DAI-2",
    "district": "DEUSTO",
    "lat": 43.272306,
    "lng": -2.956136
  },
  {
    "id": 163,
    "name": "BERNAOLA DES DAI-3",
    "district": "DEUSTO",
    "lat": 43.271482,
    "lng": -2.956291
  },
  {
    "id": 164,
    "name": "BERNAOLA DES DAI-4",
    "district": "DEUSTO",
    "lat": 43.270067,
    "lng": -2.956225
  },
  {
    "id": 165,
    "name": "BERNAOLA DES DAI-5",
    "district": "DEUSTO",
    "lat": 43.273408,
    "lng": -2.955495
  },
  {
    "id": 166,
    "name": "BERNAOLA DES DAI-6",
    "district": "DEUSTO",
    "lat": 43.272019,
    "lng": -2.956159
  },
  {
    "id": 167,
    "name": "BERNAOLA ASC TER-1",
    "district": "DEUSTO",
    "lat": 43.269822,
    "lng": -2.956003
  },
  {
    "id": 168,
    "name": "BERNAOLA ASC TER-2",
    "district": "DEUSTO",
    "lat": 43.270796,
    "lng": -2.955971
  },
  {
    "id": 169,
    "name": "BERNAOLA ASC TER-3",
    "district": "DEUSTO",
    "lat": 43.272689,
    "lng": -2.955569
  },
  {
    "id": 170,
    "name": "BERNAOLA DES TER-1",
    "district": "DEUSTO",
    "lat": 43.27386,
    "lng": -2.955206
  },
  {
    "id": 171,
    "name": "BERNAOLA DES TER-2",
    "district": "DEUSTO",
    "lat": 43.272777,
    "lng": -2.956007
  },
  {
    "id": 172,
    "name": "BERNAOLA DES TER-3",
    "district": "DEUSTO",
    "lat": 43.27122,
    "lng": -2.956315
  },
  {
    "id": 203,
    "name": "Gran Vía / Plaza Circular",
    "district": "ABANDO",
    "lat": 43.2618,
    "lng": -2.9285
  }
];

const BILBAO_DISTRITOS = {
  "TODO": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    129,
    135,
    136,
    140,
    145,
    146,
    147,
    148,
    149,
    150,
    151,
    152,
    153,
    154,
    155,
    156,
    157,
    158,
    159,
    160,
    161,
    162,
    163,
    164,
    165,
    166,
    167,
    168,
    169,
    170,
    171,
    172,
    203
  ],
  "ABANDO": [
    1,
    2,
    4,
    5,
    7,
    8,
    9,
    10,
    11,
    12,
    17,
    19,
    26,
    27,
    32,
    33,
    34,
    35,
    36,
    37,
    41,
    42,
    44,
    52,
    64,
    72,
    145,
    146,
    147,
    148,
    203
  ],
  "BASURTU-ZORROTZA": [
    3,
    30,
    48,
    49,
    59,
    60,
    61,
    62,
    63,
    65,
    67,
    68,
    69,
    81,
    82,
    83
  ],
  "BEGOÑA": [
    22,
    23,
    24,
    43,
    45,
    46,
    47,
    58,
    70,
    71
  ],
  "DEUSTO": [
    6,
    16,
    18,
    20,
    39,
    73,
    74,
    75,
    78,
    79,
    85,
    86,
    89,
    90,
    91,
    149,
    150,
    151,
    152,
    153,
    154,
    155,
    156,
    157,
    158,
    159,
    160,
    161,
    162,
    163,
    164,
    165,
    166,
    167,
    168,
    169,
    170,
    171,
    172
  ],
  "ERREKALDE": [
    28,
    31,
    56,
    76
  ],
  "IBAIONDO": [
    13,
    14,
    25,
    38,
    54,
    55,
    77,
    84,
    92,
    129,
    135,
    136,
    140
  ],
  "OTXARKOAGA-TXURDINAGA": [
    21,
    40,
    51,
    66
  ],
  "URIBARRI": [
    15,
    29,
    50,
    53,
    57,
    80,
    87,
    88
  ]
};
