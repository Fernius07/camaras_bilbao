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
  },
  {
    "id": 1001,
    "name": "Iurreta (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.18725,
    "lng": -2.673754,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/819.jpg",
    "road": "A-8",
    "pk": "91.000"
  },
  {
    "id": 1002,
    "name": "Montorra (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.21167,
    "lng": -2.719359,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/820.jpg",
    "road": "A-8",
    "pk": "96.000"
  },
  {
    "id": 1003,
    "name": "Boroa 2 (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.23135,
    "lng": -2.768933,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/821.jpg",
    "road": "A-8",
    "pk": "101.000"
  },
  {
    "id": 1004,
    "name": "Loiola (GI-20)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.305725,
    "lng": -1.968328,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/806.jpg",
    "road": "GI-20",
    "pk": "8.500"
  },
  {
    "id": 1005,
    "name": "Amara (GI-20)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.29769,
    "lng": -1.986157,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/807.jpg",
    "road": "GI-20",
    "pk": "11.000"
  },
  {
    "id": 1006,
    "name": "Ondarreta (GI-20)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.29824,
    "lng": -2.009245,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/809.jpg",
    "road": "GI-20",
    "pk": "13.000"
  },
  {
    "id": 1007,
    "name": "Elgoibar 1 (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.23597,
    "lng": -2.402644,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/816.jpg",
    "road": "A-8",
    "pk": "64.500"
  },
  {
    "id": 1008,
    "name": "Elgoibar 2 (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.22909,
    "lng": -2.40303,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/815.jpg",
    "road": "A-8",
    "pk": "64.500"
  },
  {
    "id": 1009,
    "name": "Orio 1 (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.29204,
    "lng": -2.067865,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/812.jpg",
    "road": "A-8",
    "pk": "30.500"
  },
  {
    "id": 1010,
    "name": "Orio 2 (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.29223,
    "lng": -2.067674,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/811.jpg",
    "road": "A-8",
    "pk": "30.500"
  },
  {
    "id": 1011,
    "name": "Arbuio (BI-636)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.245742,
    "lng": -2.982466,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/3601.jpg",
    "road": "BI-636",
    "pk": "7.000"
  },
  {
    "id": 1012,
    "name": "Rekalde (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.24759,
    "lng": -2.939664,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/830.jpg",
    "road": "A-8",
    "pk": "116.000"
  },
  {
    "id": 1013,
    "name": "Puerto Santurtzi (N-644)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.32347,
    "lng": -3.05021,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/4402.jpg",
    "road": "N-644",
    "pk": "130.100"
  },
  {
    "id": 1014,
    "name": "Basauri (N-634)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.23717,
    "lng": -2.87084,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/3403.jpg",
    "road": "N-634",
    "pk": "104.000"
  },
  {
    "id": 1015,
    "name": "Aiurdin (N-622)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.94593,
    "lng": -2.784901,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/2202.jpg",
    "road": "N-622",
    "pk": "16.000"
  },
  {
    "id": 1016,
    "name": "Urbina (N-240)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.940551,
    "lng": -2.6407,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/4001.jpg",
    "road": "N-240",
    "pk": "11.000"
  },
  {
    "id": 1017,
    "name": "Curvas de Ansio (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.28106,
    "lng": -2.985413,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/839.jpg",
    "road": "A-8",
    "pk": "122.300"
  },
  {
    "id": 1018,
    "name": "Ormaiztegi (GI-632)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.04865,
    "lng": -2.23223,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/3201.jpg",
    "road": "GI-632",
    "pk": "1.500"
  },
  {
    "id": 1019,
    "name": "Igay (AP-68)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.742679,
    "lng": -2.913094,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6817.jpg",
    "road": "AP-68",
    "pk": "63.000"
  },
  {
    "id": 1020,
    "name": "Max Center (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.29091,
    "lng": -3.009818,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/842.jpg",
    "road": "A-8",
    "pk": "124.500"
  },
  {
    "id": 1021,
    "name": "Rivabellosa (AP-1)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.704243,
    "lng": -2.927433,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/1101.jpg",
    "road": "AP-1",
    "pk": "77.000"
  },
  {
    "id": 1022,
    "name": "Buia (AP-68)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.23369,
    "lng": -2.91636,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6801.jpg",
    "road": "AP-68",
    "pk": "0.000"
  },
  {
    "id": 1023,
    "name": "Arrigorriaga (AP-68)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.198194,
    "lng": -2.896245,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6802.jpg",
    "road": "AP-68",
    "pk": "5.000"
  },
  {
    "id": 1024,
    "name": "Ugao-Miraballes (AP-68)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.181753,
    "lng": -2.897279,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6803.jpg",
    "road": "AP-68",
    "pk": "7.300"
  },
  {
    "id": 1025,
    "name": "Arakaldo (AP-68)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.156604,
    "lng": -2.931477,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6804.jpg",
    "road": "AP-68",
    "pk": "11.000"
  },
  {
    "id": 1026,
    "name": "Orozko-Murueta (AP-68)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.128034,
    "lng": -2.922996,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6805.jpg",
    "road": "AP-68",
    "pk": "15.000"
  },
  {
    "id": 1027,
    "name": "Orozko-San Isidro (AP-68)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.091045,
    "lng": -2.917975,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6806.jpg",
    "road": "AP-68",
    "pk": "21.400"
  },
  {
    "id": 1028,
    "name": "Ziorraga (AP-68)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.010371,
    "lng": -2.902257,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6807.jpg",
    "road": "AP-68",
    "pk": "29.500"
  },
  {
    "id": 1029,
    "name": "Altube 1 (AP-68)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.989691,
    "lng": -2.871997,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6808.jpg",
    "road": "AP-68",
    "pk": "33.000"
  },
  {
    "id": 1030,
    "name": "Altube (AP-68)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.990468,
    "lng": -2.873574,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6809.jpg",
    "road": "AP-68",
    "pk": "33.000"
  },
  {
    "id": 1031,
    "name": "Zuia (AP-68)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.96763,
    "lng": -2.875634,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6810.jpg",
    "road": "AP-68",
    "pk": "36.000"
  },
  {
    "id": 1032,
    "name": "Abornikano (AP-68)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.938258,
    "lng": -2.893873,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6811.jpg",
    "road": "AP-68",
    "pk": "40.000"
  },
  {
    "id": 1033,
    "name": "Kuartango (AP-68)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.906007,
    "lng": -2.896367,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6812.jpg",
    "road": "AP-68",
    "pk": "44.000"
  },
  {
    "id": 1034,
    "name": "Subijana (AP-68)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.852294,
    "lng": -2.893553,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6813.jpg",
    "road": "AP-68",
    "pk": "50.000"
  },
  {
    "id": 1035,
    "name": "Subijana 1 (AP-68)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.842331,
    "lng": -2.893884,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6814.jpg",
    "road": "AP-68",
    "pk": "51.000"
  },
  {
    "id": 1036,
    "name": "Pobes (AP-68)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.819888,
    "lng": -2.893696,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6815.jpg",
    "road": "AP-68",
    "pk": "54.000"
  },
  {
    "id": 1037,
    "name": "Hereña (AP-68)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.781457,
    "lng": -2.904328,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6816.jpg",
    "road": "AP-68",
    "pk": "58.000"
  },
  {
    "id": 1038,
    "name": "Ribera Baja (AP-68)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.708733,
    "lng": -2.902783,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6818.jpg",
    "road": "AP-68",
    "pk": "68.000"
  },
  {
    "id": 1039,
    "name": "Armiñón (AP-68)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.68238,
    "lng": -2.889404,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6819.jpg",
    "road": "AP-68",
    "pk": "71.500"
  },
  {
    "id": 1040,
    "name": "Zambrana (AP-68)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.66271,
    "lng": -2.889577,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6820.jpg",
    "road": "AP-68",
    "pk": "74.000"
  },
  {
    "id": 1041,
    "name": "Irun - Ventas (GI-636)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.33148,
    "lng": -1.84323,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/123.jpg",
    "road": "GI-636",
    "pk": "9.000"
  },
  {
    "id": 1042,
    "name": "Pasaia 2 (GI-20)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.3105,
    "lng": -1.934152,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/805.jpg",
    "road": "GI-20",
    "pk": "4.500"
  },
  {
    "id": 1043,
    "name": "Pasaia 1 (GI-20)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.310689,
    "lng": -1.937903,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/804.jpg",
    "road": "GI-20",
    "pk": "5.000"
  },
  {
    "id": 1044,
    "name": "Aritzeta (GI-20)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.286418,
    "lng": -2.032599,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/810.jpg",
    "road": "GI-20",
    "pk": "15.000"
  },
  {
    "id": 1045,
    "name": "Mendaro 4 (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.25636,
    "lng": -2.388769,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/814.jpg",
    "road": "A-8",
    "pk": "62.000"
  },
  {
    "id": 1046,
    "name": "Mendaro 1 (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.25398,
    "lng": -2.389978,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/813.jpg",
    "road": "A-8",
    "pk": "62.000"
  },
  {
    "id": 1047,
    "name": "Berriz 2 (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.16774,
    "lng": -2.562775,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/817.jpg",
    "road": "A-8",
    "pk": "82.000"
  },
  {
    "id": 1048,
    "name": "Berriz 1 (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.1685,
    "lng": -2.568193,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/818.jpg",
    "road": "A-8",
    "pk": "82.000"
  },
  {
    "id": 1049,
    "name": "Galdakao (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.23054,
    "lng": -2.836321,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/823.jpg",
    "road": "A-8",
    "pk": "106.600"
  },
  {
    "id": 1050,
    "name": "Arrankudiaga (BI-625)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.153575,
    "lng": -2.941026,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/2501.jpg",
    "road": "BI-625",
    "pk": "373.000"
  },
  {
    "id": 1051,
    "name": "Mendaro 2 (N-634)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.250278,
    "lng": -2.391828,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/3401.jpg",
    "road": "N-634",
    "pk": "52.000"
  },
  {
    "id": 1052,
    "name": "Mendaro 3 (N-634)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.25038,
    "lng": -2.391704,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/3402.jpg",
    "road": "N-634",
    "pk": "52.000"
  },
  {
    "id": 1053,
    "name": "Rotonda Galdakao (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.233856,
    "lng": -2.842195,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/824.jpg",
    "road": "A-8",
    "pk": "107.400"
  },
  {
    "id": 1054,
    "name": "Sestao (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.30492,
    "lng": -3.021093,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/9020.jpg",
    "road": "A-8",
    "pk": "126.000"
  },
  {
    "id": 1055,
    "name": "Zabalburu (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.24796,
    "lng": -2.93735,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/829.jpg",
    "road": "A-8",
    "pk": "115.800"
  },
  {
    "id": 1056,
    "name": "El Haya (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.34299,
    "lng": -3.140078,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/845.jpg",
    "road": "A-8",
    "pk": "138.500"
  },
  {
    "id": 1057,
    "name": "Oiartzun 1 (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.31099,
    "lng": -1.873746,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/803.jpg",
    "road": "A-8",
    "pk": "11.000"
  },
  {
    "id": 1058,
    "name": "Oiartzun 2 (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.31079,
    "lng": -1.8736,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/802.jpg",
    "road": "A-8",
    "pk": "11.000"
  },
  {
    "id": 1059,
    "name": "Irun (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.33959,
    "lng": -1.75347,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/801.jpg",
    "road": "A-8",
    "pk": "0.000"
  },
  {
    "id": 1060,
    "name": "Nanclares 1 (A-1)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.81815,
    "lng": -2.781171,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/102.jpg",
    "road": "A-1",
    "pk": "341.500"
  },
  {
    "id": 1061,
    "name": "Nanclares 2 (A-1)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.81848,
    "lng": -2.781124,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/103.jpg",
    "road": "A-1",
    "pk": "341.500"
  },
  {
    "id": 1062,
    "name": "Abetxuko (A-1)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.88005,
    "lng": -2.677502,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/105.jpg",
    "road": "A-1",
    "pk": "353.500"
  },
  {
    "id": 1063,
    "name": "Gamarra 1 (A-1)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.88074,
    "lng": -2.655757,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/107.jpg",
    "road": "A-1",
    "pk": "354.000"
  },
  {
    "id": 1064,
    "name": "Argomaniz (Ola-Ona) 1 (A-1)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.879,
    "lng": -2.517056,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/110.jpg",
    "road": "A-1",
    "pk": "366.000"
  },
  {
    "id": 1065,
    "name": "Argomaniz (Ola-Ona) 2 (A-1)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.87919,
    "lng": -2.516182,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/109.jpg",
    "road": "A-1",
    "pk": "366.000"
  },
  {
    "id": 1066,
    "name": "Egino 2 (A-1)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.864838,
    "lng": -2.253074,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/112.jpg",
    "road": "A-1",
    "pk": "390.750"
  },
  {
    "id": 1067,
    "name": "Egino 1 (A-1)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.865227,
    "lng": -2.251983,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/111.jpg",
    "road": "A-1",
    "pk": "390.750"
  },
  {
    "id": 1068,
    "name": "Etzegarate (N-I)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.93622,
    "lng": -2.22604,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/113.jpg",
    "road": "N-I",
    "pk": "405.800"
  },
  {
    "id": 1069,
    "name": "Olaberria 2 (N-I)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.03315,
    "lng": -2.218649,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/114.jpg",
    "road": "N-I",
    "pk": "416.500"
  },
  {
    "id": 1070,
    "name": "Olaberria 1 (N-I)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.03362,
    "lng": -2.218617,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/115.jpg",
    "road": "N-I",
    "pk": "416.500"
  },
  {
    "id": 1071,
    "name": "Ordizia 2 (N-I)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.051054,
    "lng": -2.179263,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/116.jpg",
    "road": "N-I",
    "pk": "421.000"
  },
  {
    "id": 1072,
    "name": "Ordizia 1 (N-I)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.051678,
    "lng": -2.178045,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/117.jpg",
    "road": "N-I",
    "pk": "421.000"
  },
  {
    "id": 1073,
    "name": "Irura 2 (N-I)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.17421,
    "lng": -2.058955,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/118.jpg",
    "road": "N-I",
    "pk": "440.500"
  },
  {
    "id": 1074,
    "name": "Irura 1 (N-I)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.17447,
    "lng": -2.058853,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/119.jpg",
    "road": "N-I",
    "pk": "440.500"
  },
  {
    "id": 1075,
    "name": "Andoain 1 (N-I)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.213238,
    "lng": -2.02851,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/121.jpg",
    "road": "N-I",
    "pk": "446.000"
  },
  {
    "id": 1076,
    "name": "Lasarte (N-I)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.24495,
    "lng": -2.023495,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/122.jpg",
    "road": "N-I",
    "pk": "451.000"
  },
  {
    "id": 1077,
    "name": "Lemoa (N-240)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.17916,
    "lng": -2.774745,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/4002.jpg",
    "road": "N-240",
    "pk": "47.000"
  },
  {
    "id": 1078,
    "name": "Foronda (N-622)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.875506,
    "lng": -2.692619,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/2201.jpg",
    "road": "N-622",
    "pk": "4.000"
  },
  {
    "id": 1079,
    "name": "Sarria 2 (N-622)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.961275,
    "lng": -2.827091,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/2203.jpg",
    "road": "N-622",
    "pk": "20.000"
  },
  {
    "id": 1080,
    "name": "Sarria 1 (N-622)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.960937,
    "lng": -2.829012,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/2204.jpg",
    "road": "N-622",
    "pk": "20.000"
  },
  {
    "id": 1081,
    "name": "Gamarra 2 (N-240)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.87785,
    "lng": -2.656894,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/108.jpg",
    "road": "N-240",
    "pk": "4.500"
  },
  {
    "id": 1082,
    "name": "Boroa 1 (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.23126,
    "lng": -2.769212,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/822.jpg",
    "road": "A-8",
    "pk": "101.000"
  },
  {
    "id": 1083,
    "name": "Rotonda Romo (BI-637)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.3331,
    "lng": -3.001937,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/3723.jpg",
    "road": "BI-637",
    "pk": "13.500"
  },
  {
    "id": 1084,
    "name": "Malmasín Sur (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.23114,
    "lng": -2.888571,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/825.jpg",
    "road": "A-8",
    "pk": "111.100"
  },
  {
    "id": 1085,
    "name": "Malmasín Norte (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.23365,
    "lng": -2.910234,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/826.jpg",
    "road": "A-8",
    "pk": "113.000"
  },
  {
    "id": 1086,
    "name": "Bomberos Artaza (BI-637)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.33018,
    "lng": -2.996275,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/3724.jpg",
    "road": "BI-637",
    "pk": "12.900"
  },
  {
    "id": 1087,
    "name": "Rontegi (N-637)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.29512,
    "lng": -2.975969,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6006.jpg",
    "road": "N-637",
    "pk": "9.700"
  },
  {
    "id": 1088,
    "name": "Max Center (2) (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.28522,
    "lng": -2.996849,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/841.jpg",
    "road": "A-8",
    "pk": "123.300"
  },
  {
    "id": 1089,
    "name": "Ugaldebieta (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.32481,
    "lng": -3.062233,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/844.jpg",
    "road": "A-8",
    "pk": "130.500"
  },
  {
    "id": 1090,
    "name": "Salida de Balmaseda (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.26804,
    "lng": -2.964835,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/835.jpg",
    "road": "A-8",
    "pk": "119.100"
  },
  {
    "id": 1091,
    "name": "Zorroza (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.27411,
    "lng": -2.974299,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/836.jpg",
    "road": "A-8",
    "pk": "120.400"
  },
  {
    "id": 1092,
    "name": "Cruces (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.28064,
    "lng": -2.985133,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/837.jpg",
    "road": "A-8",
    "pk": "122.000"
  },
  {
    "id": 1093,
    "name": "Rekalde (2) (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.24989,
    "lng": -2.943746,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/831.jpg",
    "road": "A-8",
    "pk": "116.500"
  },
  {
    "id": 1094,
    "name": "Entrada de Santurce (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.31728,
    "lng": -3.047059,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/4401.jpg",
    "road": "A-8",
    "pk": "129.000"
  },
  {
    "id": 1095,
    "name": "Urioste (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.31453,
    "lng": -3.044056,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/843.jpg",
    "road": "A-8",
    "pk": "128.500"
  },
  {
    "id": 1096,
    "name": "Larraskitu (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.24768,
    "lng": -2.935795,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/8115.jpg",
    "road": "A-8",
    "pk": "115.500"
  },
  {
    "id": 1097,
    "name": "Urioste (2) (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.31218,
    "lng": -3.035826,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/9001.jpg",
    "road": "A-8",
    "pk": "128.000"
  },
  {
    "id": 1098,
    "name": "Salida Miraflores (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.24066,
    "lng": -2.926873,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/828.jpg",
    "road": "A-8",
    "pk": "114.700"
  },
  {
    "id": 1099,
    "name": "Miribilla Salida (BI-631)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.248083,
    "lng": -2.926371,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/3101.jpg",
    "road": "BI-631",
    "pk": "0.300"
  },
  {
    "id": 1100,
    "name": "Irusta (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.23911,
    "lng": -2.92554,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/846.jpg",
    "road": "A-8",
    "pk": "114.500"
  },
  {
    "id": 1101,
    "name": "Nocedal (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.31848,
    "lng": -3.050342,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/847.jpg",
    "road": "A-8",
    "pk": "129.500"
  },
  {
    "id": 1102,
    "name": "Trapaga (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.2972,
    "lng": -3.020573,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/849.jpg",
    "road": "A-8",
    "pk": "125.500"
  },
  {
    "id": 1103,
    "name": "Trapaga 2 (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.29646,
    "lng": -3.019722,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/850.jpg",
    "road": "A-8",
    "pk": "125.500"
  },
  {
    "id": 1104,
    "name": "Entrada Portugalete (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.30792,
    "lng": -3.02781,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/848.jpg",
    "road": "A-8",
    "pk": "127.000"
  },
  {
    "id": 1105,
    "name": "Ibarrekolanda (BI-604)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.28569,
    "lng": -2.958599,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6002.jpg",
    "road": "BI-604",
    "pk": "4.700"
  },
  {
    "id": 1106,
    "name": "Enekuri (BI-604)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.28985,
    "lng": -2.96085,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6001.jpg",
    "road": "BI-604",
    "pk": "5.300"
  },
  {
    "id": 1107,
    "name": "Asua (BI-604)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.29874,
    "lng": -2.953727,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6003.jpg",
    "road": "BI-604",
    "pk": "6.500"
  },
  {
    "id": 1108,
    "name": "Gerediaga (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.17411,
    "lng": -2.615571,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/851.jpg",
    "road": "A-8",
    "pk": "87.000"
  },
  {
    "id": 1109,
    "name": "Barakaldo (N-637)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.28938,
    "lng": -2.985772,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6008.jpg",
    "road": "N-637",
    "pk": "8.900"
  },
  {
    "id": 1110,
    "name": "Kukularra (N-637)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.3009,
    "lng": -2.964104,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6009.jpg",
    "road": "N-637",
    "pk": "11.100"
  },
  {
    "id": 1111,
    "name": "Incorporación Astrabudua (BI-637)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.3159,
    "lng": -2.968442,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6010.jpg",
    "road": "BI-637",
    "pk": "10.000"
  },
  {
    "id": 1112,
    "name": "Leioa (BI-637)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.324831,
    "lng": -2.985478,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/6005.jpg",
    "road": "BI-637",
    "pk": "11.700"
  },
  {
    "id": 1113,
    "name": "Durana Arkaute (A-1)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.881957,
    "lng": -2.634242,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/124.jpg",
    "road": "A-1",
    "pk": "356.900"
  },
  {
    "id": 1114,
    "name": "Luko (N-240)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.926571,
    "lng": -2.643958,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/4003.jpg",
    "road": "N-240",
    "pk": "10.100"
  },
  {
    "id": 1115,
    "name": "Jundiz (N-102)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.828445,
    "lng": -2.739926,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/1021.jpg",
    "road": "N-102",
    "pk": "344.800"
  },
  {
    "id": 1116,
    "name": "Jundiz (A-1)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.836502,
    "lng": -2.752356,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/126.jpg",
    "road": "A-1",
    "pk": "345.450"
  },
  {
    "id": 1117,
    "name": "Arangiz (N-622)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.889243,
    "lng": -2.69813,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/2206.jpg",
    "road": "N-622",
    "pk": "5.850"
  },
  {
    "id": 1118,
    "name": "Agurain (A-1)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.846541,
    "lng": -2.418701,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/125.jpg",
    "road": "A-1",
    "pk": "376.200"
  },
  {
    "id": 1119,
    "name": "Leioa túnel 1 (BI-637)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.325103,
    "lng": -2.985974,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/3728.jpg",
    "road": "BI-637",
    "pk": "11.800"
  },
  {
    "id": 1120,
    "name": "Leioa túnel 2 (BI-637)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.327398,
    "lng": -2.990669,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/3727.jpg",
    "road": "BI-637",
    "pk": "11.900"
  },
  {
    "id": 1121,
    "name": "Leioa túnel 3 (BI-637)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.327905,
    "lng": -2.991566,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/3726.jpg",
    "road": "BI-637",
    "pk": "11.950"
  },
  {
    "id": 1122,
    "name": "Leioa túnel 4 (BI-637)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.329212,
    "lng": -2.994179,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/3725.jpg",
    "road": "BI-637",
    "pk": "12.000"
  },
  {
    "id": 1123,
    "name": "Entrada túnel Romo (BI-637)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.33358,
    "lng": -3.001458,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/3722.jpg",
    "road": "BI-637",
    "pk": "13.550"
  },
  {
    "id": 1124,
    "name": "Salida túnel Romo (BI-637)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.33283,
    "lng": -3.00173,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/3721.jpg",
    "road": "BI-637",
    "pk": "13.450"
  },
  {
    "id": 1125,
    "name": "Salida Miraflores 2 (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.24372,
    "lng": -2.930473,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/827.jpg",
    "road": "A-8",
    "pk": "115.200"
  },
  {
    "id": 1126,
    "name": "Lopidana (2) (A-1)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.8801,
    "lng": -2.707395,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/127.jpg",
    "road": "A-1",
    "pk": "350.000"
  },
  {
    "id": 1127,
    "name": "Etxabarri Ibiña (2) (N-622)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.905311,
    "lng": -2.710822,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/2207.jpg",
    "road": "N-622",
    "pk": "8.000"
  },
  {
    "id": 1128,
    "name": "Abetxuko-Irun (2) (A-1)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 42.87984,
    "lng": -2.677959,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/128.jpg",
    "road": "A-1",
    "pk": "353.500"
  },
  {
    "id": 1129,
    "name": "Campa Erandio (2) (BI-637)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.31036,
    "lng": -2.962614,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/3729.jpg",
    "road": "BI-637",
    "pk": "8.900"
  },
  {
    "id": 1130,
    "name": "Añorga (2) (GI-20)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.295609,
    "lng": -1.997044,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/2001.jpg",
    "road": "GI-20",
    "pk": "11.000"
  },
  {
    "id": 1131,
    "name": "Irun-Muga FHD (A-8)",
    "district": "TRAFIKOA EUSKADI",
    "lat": 43.33959,
    "lng": -1.75347,
    "url": "https://apps.trafikoa.euskadi.eus/static/files/tr/camaras/852.jpg",
    "road": "A-8",
    "pk": "0.000"
  }
];

const BILBAO_DISTRITOS = {
  "TODO": [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 129, 135, 136, 140, 145, 146, 147, 148,
    149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168,
    169, 170, 171, 172, 203,
    1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010,
    1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020,
    1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030,
    1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040,
    1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050,
    1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060,
    1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070,
    1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080,
    1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090,
    1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100,
    1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110,
    1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120,
    1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130,
    1131
  ],
  "ABANDO": [
    1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 17, 19, 26, 27, 32, 33, 34, 35, 36, 37,
    41, 42, 44, 52, 64, 72, 145, 146, 147, 148, 203
  ],
  "BASURTU-ZORROTZA": [
    3, 30, 48, 49, 59, 60, 61, 62, 63, 65, 67, 68, 69, 81, 82, 83
  ],
  "BEGOÑA": [
    22, 23, 24, 43, 45, 46, 47, 58, 70, 71
  ],
  "DEUSTO": [
    6, 16, 18, 20, 39, 73, 74, 75, 78, 79, 85, 86, 89, 90, 91, 149, 150, 151, 152, 153,
    154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172
  ],
  "ERREKALDE": [
    28, 31, 56, 76
  ],
  "IBAIONDO": [
    13, 14, 25, 38, 54, 55, 77, 84, 92, 129, 135, 136, 140
  ],
  "OTXARKOAGA-TXURDINAGA": [
    21, 40, 51, 66
  ],
  "URIBARRI": [
    15, 29, 50, 53, 57, 80, 87, 88
  ],
  "TRAFIKOA EUSKADI": [
    1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010,
    1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020,
    1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030,
    1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040,
    1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050,
    1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060,
    1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070,
    1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080,
    1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090,
    1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100,
    1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110,
    1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120,
    1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130,
    1131
  ]
};
