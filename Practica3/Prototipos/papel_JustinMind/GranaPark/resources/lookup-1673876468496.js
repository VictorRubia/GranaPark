(function(window, undefined) {
  var dictionary = {
    "39604d59-9905-4f67-b6d4-9abf766563c2": "AnadirEditarZona",
    "250fba25-d359-4e64-9e6d-635482e3bf74": "DetallesReservaRealizada",
    "c63ef66a-db86-41ba-994f-e2cf156049cb": "DetalleAparcamiento",
    "356d1e2a-3b91-44f6-8de5-7eb735d755ac": "MenuFuncionesGestorAparcamiento",
    "7465d482-8adb-474a-b5d3-f289256e3071": "DetallesReservaGestorAparcamiento",
    "9b9b11e1-4884-4a79-a6d7-b83009d003cd": "EdiciónPerfilAparcamiento",
    "0400d4ee-2d35-4db1-86a7-244bc6fc4dad": "BuscarAparcamientoLista",
    "a68eea08-66b2-4973-8fbc-1c37bbce9401": "RecuperacionContraseña",
    "4f27e530-3292-40e9-9949-3c1f0b11a62b": "ConsultaPlazasZonaGestorZonas",
    "0188f8f6-a0b0-42ff-b847-c0c542b7b43c": "MapaAnadirAparcamiento",
    "a96e9e36-6703-4ed2-a22c-854888b946bf": "AnadirEditarAparcamiento",
    "a992880b-0567-45cc-96a4-bff79b3d468b": "EdiciónPerfil",
    "82bfdea6-0839-44db-a131-7221bd68b328": "MapaInicial",
    "b2fd82bb-a958-42a1-853b-02f7d34f3630": "GestionReservasGestorAparcamiento",
    "c9532040-1e1b-4819-b5d6-368fc5231fca": "GestionReservasFiltrarFecha",
    "c68096d0-e312-4720-9d7b-0a400883ed53": "RealizarReserva",
    "c1b9f545-1d3c-4ae3-82e1-e4f17d763df7": "MenuFuncionesConductor",
    "22d3e9ac-a5a3-4a65-9df7-cb1b9578b7f8": "BúsquedaAparcamiento",
    "545bf074-47b8-490b-8256-6753ad372e26": "EliminarZona",
    "500a0946-a914-4301-8e11-24451ef86902": "MenuFuncionesSinSesion",
    "7e397339-9065-414f-8fc0-5593c619c617": "AnadirEditarPlazas",
    "9f55f3c1-69d4-4b1a-9bf4-7a2dbc3eb765": "NavegarALista",
    "2645c842-5118-4c2a-a9ad-045023d67e60": "Identificarse",
    "b6c87b96-39a8-4b54-9ed6-b02ad88f6dc6": "VerMisReservasConductor",
    "7532698e-b1eb-4f37-8a83-e2a882eba264": "MenuFuncionesGestorZona",
    "3eda36e1-8f10-40f9-a682-007db407fad1": "NavegarA",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Registrarse",
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