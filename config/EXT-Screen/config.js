var defaultConfig = {
  module: 'EXT-Screen',
  position: 'top_left',
  disabled: false,
  config: {
    debug: false,
    animateBody: true,
    delay: 2 * 60 * 1000,
    mode: 1,
    displayCounter: true,
    displayBar: true,
    displayStyle: "Text",
    displayLastPresence: true,
    lastPresenceTimeFormat: "LL H:mm",
    detectorSleeping: false,
    gpio: 20,
    clearGpioValue: true,
    sound: false,
    touchMode: 3,
    ON: [],
    OFF: []
  }
}

var schema = {
  "title": "EXT-Screen",
  "description": "{PluginDescription}",
  "type": "object",
  "properties": {
    "module": {
      "type": "string",
      "title": "{PluginName}",
      "default": "EXT-Screen"
    },
    "position": {
      "type": "string",
      "title": "{PluginPosition}",
      "default": "top_center",
      "enum": [
        "top_bar",
        "top_left",
        "top_center",
        "top_right",
        "upper_third",
        "middle_center",
        "lower_third",
        "bottom_left",
        "bottom_center",
        "bottom_right",
        "bottom_bar",
        "fullscreen_above",
        "fullscreen_below"
      ]
    },
    "disabled": {
      "type": "boolean",
      "title": "{PluginDisable}",
      "default": false
    },
    "config": {
      "type": "object",
      "title": "{PluginConfiguration}",
      "properties": {
        "debug": {
          "type": "boolean",
          "title": "{PluginDebug}",
          "default": false
        },
        "animateBody": {
          "type": "boolean",
          "title": "{EXT-Screen_Body}",
          "default": true
        },
        "delay": {
          "type": "number",
          "title": "{EXT-Screen_Delay}",
          "default": 120000
        },
        "mode": {
          "type": "number",
          "title": "{EXT-Screen_Mode}",
          "default": 1,
          "enum" : [ 0, 1, 2, 3, 4, 5, 6, 7 ],
          "minimum": 0,
          "maximum": 7
        },
        "displayCounter": {
          "type": "boolean",
          "title": "{EXT-Screen_Counter}",
          "default": true
        },
        "displayBar": {
          "type": "boolean",
          "title": "{EXT-Screen_Bar}",
          "default": true
        },
        "displayStyle": {
          "type": "string",
          "title": "{EXT-Screen_Style}",
          "default": "Text",
          "enum": ["Text", "Line", "SemiCircle", "Circle", "Bar"]
        },
        "displayLastPresence": {
          "type": "boolean",
          "title": "{EXT-Screen_Presence}",
          "default": true
        },
        "lastPresenceTimeFormat": {
          "type": "string",
          "title": "{EXT-Screen_Date}",
          "default": "LL H:mm",
          "enum": ["LL H:mm"]
        },
        "displayAvailability": {
          "type": "boolean",
          "title": "{EXT-Screen_Availability}",
          "default": true
        },
        "detectorSleeping": {
          "type": "boolean",
          "title": "{EXT-Screen_Sleeping}",
          "default": false
        },
        "gpio": {
          "type": "number",
          "title": "{EXT-Screen_GPIO}",
          "default": 20,
          "enum": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
          "minimum": 0,
          "maximum": 26
        },
        "clearGpioValue": {
          "type": "boolean",
          "title": "{EXT-Screen_Reset}",
          "default": true
        },
        "sound": {
          "type": "boolean",
          "title": "{EXT-Screen_Sound}",
          "default": false
        },
        "touchMode": {
          "type": "number",
          "title": "{EXT-Screen_TouchMode}",
          "default": 3,
          "enum": [0,1,2,3],
          "minimum": 0,
          "maximum": 3
        },
        "ON": {
          "type": "array",
          "title": "{EXT-Screen_ON}",
          "default": [],
          "items": {
            "properties": {
              "dayOfWeek": {
                "type": "array",
                "uniqueItems": true,
                "title": "{EXT-Screen_Days}",
                "items": {
                  "type": "number",
                  "enum": [0,1,2,3,4,5,6],
                  "minimum": 0,
                  "maximum": 6
                }
              },
              "hour": {
                "type": "number",
                "title": "{EXT-Screen_Hour}",
                "enum": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
                "minimum": 0,
                "maximum": 24
              },
              "minute": {
                "type": "number",
                "title": "{EXT-Screen_Minute}",
                "enum": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59],
                "minimum": 0,
                "maximum": 59
              }
            },
            "required": ["dayOfWeek", "hour", "minute"]
          },
          "additionalItems": {
            "properties": {
              "dayOfWeek": {
                "type": "array"
              },
              "hour": {
                "type": "number"
              },
              "minute": {
                "type": "number"
              }
            }
          }
        },
        "OFF": {
          "type": "array",
          "title": "{EXT-Screen_OFF}",
          "default": [],
          "items": {
            "properties": {
              "dayOfWeek": {
                "type": "array",
                "uniqueItems": true,
                "title": "{EXT-Screen_Days}",
                "items": {
                  "type": "number",
                  "enum": [0,1,2,3,4,5,6],
                  "minimum": 0,
                  "maximum": 6
                }
              },
              "hour": {
                "type": "number",
                "title": "{EXT-Screen_Hour}",
                "enum": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
                "minimum": 0,
                "maximum": 24
              },
              "minute": {
                "type": "number",
                "title": "{EXT-Screen_Minute}",
                "enum": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59],
                "minimum": 0,
                "maximum": 59
              }
            },
            "required": ["dayOfWeek", "hour", "minute"],
          },
          "additionalItems": {
            "properties": {
              "dayOfWeek": {
                "type": "array"
              },
              "hour": {
                "type": "number"
              },
              "minute": {
                "type": "number"
              }
            }
          }
        }
      },
      "required": ["mode", "delay"]
    }
  },
  "required": ["module", "config", "position"]
}

exports.default = defaultConfig
exports.schema = schema
