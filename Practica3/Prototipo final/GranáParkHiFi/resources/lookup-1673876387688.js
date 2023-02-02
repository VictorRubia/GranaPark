(function(window, undefined) {
  var dictionary = {
    "e043ad75-cfa0-493f-a95e-1996b179d6ec": "MapaInicial",
    "f872ae1b-8269-4534-8ecc-b6981f64ac16": "NavegarALista",
    "09cf67c0-934b-43d1-8e99-0661fa4c4850": "AnadirPlazas",
    "b794aa92-a348-4d1a-a1b9-1d937440cd0c": "GoogleMaps",
    "ed49dec3-7768-49ba-9134-40cb1c91011a": "BúsquedaDeAparcamientoResultados",
    "f4cce1ba-91d5-4e79-9410-a1ed71a10fc2": "ConsultaPlazasZona",
    "fd88cd1a-a429-415b-8f0e-6f69fbc168ab": "GestionMisReservas",
    "61761546-3395-4872-bb2d-a41ae3fa9c46": "GestionReservasAparcamiento_1",
    "705cd8f9-0128-4def-8063-116a402dcc7c": "MapaAñadirAparcamiento",
    "8d1ae69c-4f88-49c2-8953-df8fc72a2a0c": "DetallesReserva_Conductor",
    "7bab4cc1-31cb-4d64-bf24-93d24767ba60": "DetallesReserva_GestorAparcamiento",
    "720a53a5-7ce3-43a0-aae0-e47694bbd021": "RecuperacionContraseña",
    "358e92ea-4708-4290-b63d-a1ee5378596a": "EvitarPromocionarZona",
    "bef4a52b-51d6-4874-b389-868de29ea4d9": "MenuFuncionesGestorAparcamientos",
    "66802e31-9c50-4df8-9da7-afacf47f5203": "MenuFuncionesGestorZonas",
    "862c69b2-de5c-464c-8dad-a90b0cb39cd0": "BúsquedaDeAparcamiento",
    "1b00c791-76e1-4d10-9fb4-e1dbb3310179": "GestionReservasAparcamiento_2",
    "e1100002-b096-47eb-b4a8-17c23cc918c0": "NavegarA",
    "38d2834e-bec7-4de0-8237-67817e2b0f62": "MenuFuncionesConductor",
    "1c8cb676-0bfd-4683-aee8-a36699bc6009": "RealizarReserva",
    "0bf962d8-4e4a-426f-9284-c105c3004ba3": "GestionReservasAparcamiento_FiltrarReservas",
    "091cc84b-a486-4973-9ed9-fec9d2aa5e50": "MapaInicialAmpliado",
    "7e015a42-7ef7-4db6-8148-398b2290ed3d": "DescripcionAparcamiento",
    "6e521ff4-7314-4ce0-9e37-b28665aab07d": "EdicionPerfil_1",
    "fd42db4a-fd0f-47ee-9963-0a512a381590": "Registrarse",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Identificarse",
    "2c6a2902-ede5-4907-b217-17067d7e6b03": "AnadirAparcamiento",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);