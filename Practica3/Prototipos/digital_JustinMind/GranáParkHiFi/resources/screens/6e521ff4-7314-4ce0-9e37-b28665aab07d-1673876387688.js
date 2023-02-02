jQuery("#simulation")
  .on("click", ".s-6e521ff4-7314-4ce0-9e37-b28665aab07d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Path_5")) {
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
                      "type": "slideright",
                      "duration": 500
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
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#725DAB"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#6750A4"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "conSesion" ],
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e043ad75-cfa0-493f-a95e-1996b179d6ec"
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
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_4" ],
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
                    "target": [ "#s-Rectangle_6","#s-Rectangle_5" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Path_9 svg",
                  "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Path_8 svg" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Path_7 svg",
                  "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Path_6 svg" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_3 span" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_5 span",
                  "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_4 span" ],
                    "attributes": {
                      "color": "#49454F",
                      "font-family": "'Roboto-Regular_wgt400',Arial",
                      "font-weight": "400",
                      "font-stretch": "normal"
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
    } else if(jFirer.is("#s-Cell_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_6","#s-Rectangle_4" ]
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
                    "target": [ "#s-Rectangle_5" ],
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
                    "target": [ "#s-Rectangle_6","#s-Rectangle_4" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Path_8 svg" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_5 span",
                  "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_3 span" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_4 span" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Path_9 svg",
                  "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Path_7 svg",
                  "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Path_6 svg" ],
                    "attributes": {
                      "path-background-color": "#49454F"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/862c69b2-de5c-464c-8dad-a90b0cb39cd0",
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
    } else if(jFirer.is("#s-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_6" ],
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
                    "target": [ "#s-Rectangle_5","#s-Rectangle_4" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Path_9 svg" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_4 span",
                  "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_3 span" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_5 span" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Path_8 svg",
                  "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Path_7 svg",
                  "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Path_6 svg" ],
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
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "conSesion"
                },"1" ]
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
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_128")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_10" ]
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
    } else if(jFirer.is("#s-Path_126")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_8" ]
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
  .on("pageload", ".s-6e521ff4-7314-4ce0-9e37-b28665aab07d .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Panel_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "conSesion"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "conSesion" ],
                    "value": "0"
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "editarPerfil"
                },"3" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_18","#s-Input_6","#s-Group_17","#s-Path_12","#s-Paragraph_12" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_14","#s-Group_19","#s-Input_8","#s-Path_14","#s-Group_20" ]
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
  .on("focusin", ".s-6e521ff4-7314-4ce0-9e37-b28665aab07d .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_7 > .borderLayer" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_13 span" ],
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
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_3 > .borderLayer" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_10 span" ],
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
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_1 > .borderLayer" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_7 span" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_2 > .borderLayer" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_8 span" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_4 > .borderLayer" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_9 span" ],
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
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_5 > .borderLayer" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_11 span" ],
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
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_6 > .borderLayer" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_12 span" ],
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
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_8 > .borderLayer" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_14 span" ],
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
  .on("focusout", ".s-6e521ff4-7314-4ce0-9e37-b28665aab07d .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_7",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_7 > .borderLayer" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_13 span" ],
                    "attributes": {
                      "color": "#49454E"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-top-color": "#B3261E",
                      "border-right-width": "2.0px",
                      "border-right-color": "#B3261E",
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#B3261E",
                      "border-left-width": "2.0px",
                      "border-left-color": "#B3261E"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_13 span" ],
                    "attributes": {
                      "color": "#B3261E"
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
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_3",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_3 > .borderLayer" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_10 span" ],
                    "attributes": {
                      "color": "#49454E"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-top-color": "#B3261E",
                      "border-right-width": "2.0px",
                      "border-right-color": "#B3261E",
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#B3261E",
                      "border-left-width": "2.0px",
                      "border-left-color": "#B3261E"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_10 span" ],
                    "attributes": {
                      "color": "#B3261E"
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
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_1",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_1 > .borderLayer" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_7 span" ],
                    "attributes": {
                      "color": "#49454E"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-top-color": "#B3261E",
                      "border-right-width": "2.0px",
                      "border-right-color": "#B3261E",
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#B3261E",
                      "border-left-width": "2.0px",
                      "border-left-color": "#B3261E"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_7 span" ],
                    "attributes": {
                      "color": "#B3261E"
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
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_2",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_2 > .borderLayer" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_8 span" ],
                    "attributes": {
                      "color": "#49454E"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-top-color": "#B3261E",
                      "border-right-width": "2.0px",
                      "border-right-color": "#B3261E",
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#B3261E",
                      "border-left-width": "2.0px",
                      "border-left-color": "#B3261E"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_8 span" ],
                    "attributes": {
                      "color": "#B3261E"
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
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_4",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_4 > .borderLayer" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_9 span" ],
                    "attributes": {
                      "color": "#49454E"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-top-color": "#B3261E",
                      "border-right-width": "2.0px",
                      "border-right-color": "#B3261E",
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#B3261E",
                      "border-left-width": "2.0px",
                      "border-left-color": "#B3261E"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_9 span" ],
                    "attributes": {
                      "color": "#B3261E"
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
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_5",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_5 > .borderLayer" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_11 span" ],
                    "attributes": {
                      "color": "#49454E"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-top-color": "#B3261E",
                      "border-right-width": "2.0px",
                      "border-right-color": "#B3261E",
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#B3261E",
                      "border-left-width": "2.0px",
                      "border-left-color": "#B3261E"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_11 span" ],
                    "attributes": {
                      "color": "#B3261E"
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
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_6",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_6 > .borderLayer" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_12 span" ],
                    "attributes": {
                      "color": "#49454E"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_6 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-top-color": "#B3261E",
                      "border-right-width": "2.0px",
                      "border-right-color": "#B3261E",
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#B3261E",
                      "border-left-width": "2.0px",
                      "border-left-color": "#B3261E"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_12 span" ],
                    "attributes": {
                      "color": "#B3261E"
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
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_8",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_8 > .borderLayer" ],
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
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_14 span" ],
                    "attributes": {
                      "color": "#49454E"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Input_8 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-top-color": "#B3261E",
                      "border-right-width": "2.0px",
                      "border-right-color": "#B3261E",
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#B3261E",
                      "border-left-width": "2.0px",
                      "border-left-color": "#B3261E"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-6e521ff4-7314-4ce0-9e37-b28665aab07d #s-Paragraph_14 span" ],
                    "attributes": {
                      "color": "#B3261E"
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
  });