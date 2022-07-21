var localizationMap = {
  "zh-CN": {
    'Search a place': "搜索地方",
    'Settings': '设置',
    'Languages': '语言',
    'Languages with <b>*</b> has full zoom levels.': '标注*的语言支持所有缩放等级',
    "Global *": "当地语言 *",
    "Bus": "巴士与电车",
    "Subway": "地铁与轻轨",
    "Train": "火车",
    "Bicycle": "自行车",
    "Traffic": "即时路况",
    "Show Nearby Places": "显示附近地点",
    "Show Nearby POIs": "显示附近兴趣点",
    "Direction from here": "设为起点",
    "Direction to here": "设为终点",
    "Driving": "驾车",
    "Cycling": "骑行",
    "Cycling MTB": "山地自行车",
    "Walking": "步行",
    "Hiking": "徒步",
    "From": "起点",
    "To": "终点",
    "Click on map": "点击地图上的点",
    "Use current location": "使用当前位置",
    "Reset": "重置",
    "About & Help": "关于",
    "Acknowledgement": "致谢",
    "Privacy": "隐私",
    "Other Information": "其他信息",
    "Quick tips": "小贴士",
    "Overlay": "图层",
    "Style": "样式",
    "Normal": "标准",
    "Grayscale": "灰度",
    "Vivid": "鲜艳",
    "Dark": "暗调",
    "Street": "道路图",
    "Satellite": "卫星图",
    "Topo": "高程地图",
    "Base Map": "底图",
  },
  "nl-NL": {
    'Search a place': "Zoek",
    'Settings': 'Instellingen',
    'Languages': 'Talen',
    'Languages with <b>*</b> has full zoom levels.': 'Talen met <b>*</b> hebben volledige zoomniveaus',
    "Global *": "Lokale taal *",
    "Bus": "Bus en Tram",
    "Subway": "Metro",
    "Bicycle": "Fietsten",
    "Traffic": "Verkeer",
    "Show Nearby Places": "Toon plaatsnamen",
    "Show Nearby POIs": "Toon NP's in de buurt",
    "Train": "Train",
    "Direction from here": "Instellen als startpunt",
    "Direction to here": "Instellen als bestemming",
    "Driving": "Rijden",
    "Cycling": "Fietsen",
    "Cycling MTB": "Fiets-MTB",
    "Walking": "Lopen",
    "Hiking": "Wandelen",
    "From": "Van",
    "To": "Aan",
    "Click on map": "Klik op een punt op de kaart",
    "Use current location": "Gebruik huidige locatie",
    "Reset": "Resetten",
    "About & Help": "Over",
    "Acknowledgement": "Bevestiging",
    "Privacy": "Privacy",
    "Other Information": "Overige informatie",
    "Quick tips": "Snelle tips",
    "Overlay": "Overlay",
    "Style": "Stijl",
    "Normal": "Standaard",
    "Grayscale": "Licht",
    "Vivid": "Levendig",
    "Dark": "Donker",
    "Street": "Straat",
    "Satellite": "Satelliet",
    "Topo": "Topo",
    "Base Map": "Basiskaart",
  },
  "fr-FR": {
    'Search a place': "Rechercher",
    'Settings': 'Paramètres',
    'Languages': 'Langues',
    'Languages with <b>*</b> has full zoom levels.': 'Les langues avec <b>*</b> ont des niveaux de zoom complets',
    "Global *": "Langue locale *",
    "Bus": "Bus",
    "Subway": "Métro",
    "Bicycle": "Vélo",
    "Traffic": "Circulation",
    "Show Nearby Places": "Afficher les lieux à proximité",
    "Show Nearby POIs": "Afficher les points d'intérêt à proximité",
    "Train": "Train",
    "Direction from here": "Direction à partir d'ici",
    "Direction to here": "Direction vers ici",
    "Driving": "Conduite",
    "Cycling": "Cyclisme",
    "Cycling MTB": "Cyclisme VTT",
    "Walking": "Marcher",
    "Hiking": "Randonnée",
    "From": "De",
    "To": "À",
    "Click on map": "Clic sur la carte",
    "Use current location": "Utiliser l'emplacement actuel",
    "Reset": "Réinitialiser",
    "About & Help": "À propos",
    "Acknowledgement": "Accusé de réception",
    "Privacy": "Confidentialité",
    "Other Information": "Autres informations",
    "Quick tips": "Conseils rapides",
    "Overlay": "Calques",
    "Style": "Style",
    "Normal": "Standard",
    "Grayscale": "Gris",
    "Vivid": "Vive",
    "Dark": "Foncée",
    "Street": "Carte",
    "Satellite": "Satellite",
    "Base Map": "Fond de Carte",
  }
}

function l(tag) {
  const lang = getCookie("ui_lang");
  var langSet = localizationMap[lang];
  if (langSet != null) {
    var string = langSet[tag];
    if (string)
      return string;
  }
  return tag;
}
