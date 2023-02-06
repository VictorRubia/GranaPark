jQuery("#simulation")
  .on("click", ".s-1c8cb676-0bfd-4683-aee8-a36699bc6009 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_1" ],
                    "effect": {
                      "type": "fade",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_3","#s-Rectangle_2" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Path_4 svg",
                  "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Path_3 svg" ],
                    "attributes": {
                      "path-stroke": "#49454F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Path_2 svg",
                  "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Path_1 svg" ],
                    "attributes": {
                      "path-background-color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Paragraph_1 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Roboto-Medium_wgt500',Arial",
                      "font-weight": "500",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Paragraph_3 span",
                  "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Paragraph_2 span" ],
                    "attributes": {
                      "color": "#49454F",
                      "font-family": "'Roboto-Regular_wgt400',Arial",
                      "font-weight": "400",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e043ad75-cfa0-493f-a95e-1996b179d6ec",
                    "transition": {
                      "type": "fade",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_3","#s-Rectangle_1" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_2" ],
                    "effect": {
                      "type": "fade",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_3","#s-Rectangle_1" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Path_3 svg" ],
                    "attributes": {
                      "path-background-color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Paragraph_3 span",
                  "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Paragraph_1 span" ],
                    "attributes": {
                      "color": "#49454F",
                      "font-family": "'Roboto-Regular_wgt400',Arial",
                      "font-weight": "400",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Paragraph_2 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Roboto-Medium_wgt500',Arial",
                      "font-weight": "500",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Path_4 svg",
                  "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Path_2 svg",
                  "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Path_1 svg" ],
                    "attributes": {
                      "path-background-color": "#49454F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_3" ],
                    "effect": {
                      "type": "fade",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_2","#s-Rectangle_1" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Path_4 svg" ],
                    "attributes": {
                      "path-background-color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Paragraph_2 span",
                  "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Paragraph_1 span" ],
                    "attributes": {
                      "color": "#49454F",
                      "font-family": "'Roboto-Regular_wgt400',Arial",
                      "font-weight": "400",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Paragraph_3 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Roboto-Medium_wgt500',Arial",
                      "font-weight": "500",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Path_3 svg",
                  "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Path_2 svg",
                  "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Path_1 svg" ],
                    "attributes": {
                      "path-background-color": "#49454F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "SESION"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724",
                    "transition": {
                      "type": "fade",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "SESION"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/38d2834e-bec7-4de0-8237-67817e2b0f62",
                    "transition": {
                      "type": "fade",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "SESION"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bef4a52b-51d6-4874-b389-868de29ea4d9",
                    "transition": {
                      "type": "fade",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "SESION"
                },"3" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/66802e31-9c50-4df8-9da7-afacf47f5203",
                    "transition": {
                      "type": "fade",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_1" ],
                    "value": "Hoy"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true,
                    "transition": {
                      "type": "fade",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8d1ae69c-4f88-49c2-8953-df8fc72a2a0c",
                    "transition": {
                      "type": "fade",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-1c8cb676-0bfd-4683-aee8-a36699bc6009 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_8" ],
                    "value": {
                      "datatype": "variable",
                      "element": "descripcionAReservar"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_16" ],
                    "value": {
                      "datatype": "variable",
                      "element": "nombreAparcamientoAReservar"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-1c8cb676-0bfd-4683-aee8-a36699bc6009 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-top-color": "#6750A4",
                      "border-right-width": "2.0px",
                      "border-right-color": "#6750A4",
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#6750A4",
                      "border-left-width": "2.0px",
                      "border-left-color": "#6750A4"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Paragraph_6 span" ],
                    "attributes": {
                      "color": "#6750A4"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Input_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-top-color": "#6750A4",
                      "border-right-width": "2.0px",
                      "border-right-color": "#6750A4",
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#6750A4",
                      "border-left-width": "2.0px",
                      "border-left-color": "#6750A4"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Paragraph_7 span" ],
                    "attributes": {
                      "color": "#6750A4"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Input_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-top-color": "#6750A4",
                      "border-right-width": "2.0px",
                      "border-right-color": "#6750A4",
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#6750A4",
                      "border-left-width": "2.0px",
                      "border-left-color": "#6750A4"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Paragraph_13 span" ],
                    "attributes": {
                      "color": "#6750A4"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-1c8cb676-0bfd-4683-aee8-a36699bc6009 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#79747E",
                      "border-right-width": "1.0px",
                      "border-right-color": "#79747E",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#79747E",
                      "border-left-width": "1.0px",
                      "border-left-color": "#79747E"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Paragraph_6 span" ],
                    "attributes": {
                      "color": "#49454E"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "FechaInicioReal" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Input_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#79747E",
                      "border-right-width": "1.0px",
                      "border-right-color": "#79747E",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#79747E",
                      "border-left-width": "1.0px",
                      "border-left-color": "#79747E"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Paragraph_7 span" ],
                    "attributes": {
                      "color": "#49454E"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "FechaFin" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_2",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_15" ],
                    "value": "20,50\u20ac"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "FechaFin" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_2",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "TipoPlazaRealTrue" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_1",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Input_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#79747E",
                      "border-right-width": "1.0px",
                      "border-right-color": "#79747E",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#79747E",
                      "border-left-width": "1.0px",
                      "border-left-color": "#79747E"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-1c8cb676-0bfd-4683-aee8-a36699bc6009 #s-Paragraph_13 span" ],
                    "attributes": {
                      "color": "#49454E"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Descripcion" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_4",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });