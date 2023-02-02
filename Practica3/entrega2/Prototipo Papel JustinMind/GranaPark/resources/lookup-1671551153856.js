(function(window, undefined) {
  var dictionary = {
    "39604d59-9905-4f67-b6d4-9abf766563c2": "AnadirEditarZona",
    "45b25a20-508a-406b-ba1f-35458399916a": "MapaGZonas",
    "82bfdea6-0839-44db-a131-7221bd68b328": "MapaInicial",
    "a992880b-0567-45cc-96a4-bff79b3d468b": "EdiciónPerfil",
    "f98fcca7-c4f2-409e-b56d-8d6659503c01": "MapaConductor",
    "356d1e2a-3b91-44f6-8de5-7eb735d755ac": "MenuFuncionesGestorAparcamiento",
    "545bf074-47b8-490b-8256-6753ad372e26": "EliminarZona",
    "500a0946-a914-4301-8e11-24451ef86902": "MenuFuncionesSinSesion",
    "7e397339-9065-414f-8fc0-5593c619c617": "AnadirEditarPlazas",
    "9b9b11e1-4884-4a79-a6d7-b83009d003cd": "EdiciónPerfilAparcamiento",
    "2645c842-5118-4c2a-a9ad-045023d67e60": "Identificarse",
    "572633dc-dc1f-40de-b19c-c0ee8ee7db8f": "MapaGAparcamiento",
    "7532698e-b1eb-4f37-8a83-e2a882eba264": "MenuFuncionesGestorZona",
    "0188f8f6-a0b0-42ff-b847-c0c542b7b43c": "MapaAnadirAparcamiento",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Registrarse",
    "a96e9e36-6703-4ed2-a22c-854888b946bf": "AnadirEditarAparcamiento",
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