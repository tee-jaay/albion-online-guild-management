class ApiURLs {
  // Api host
  static API_HOST =
    process.env.REACT_APP_API_HOST || "http://api-oov-crafting.test/";
  // static API_HOST = "http://api-oov-crafting.test/";
  // Api base url
  static BASE_URL =
    process.env.REACT_APP_BASE_URL || "http://api-oov-crafting.test/api/v1/";
  // static BASE_URL = "http://api-oov-crafting.test/api/v1/";
  // Api for albion item images
  static ALBION_ONLINE_ITEM =
    process.env.REACT_APP_ALBION_ONLINE_ITEM ||
    "https://render.albiononline.com/v1/item/";
  // static ALBION_ONLINE_ITEM = "https://render.albiononline.com/v1/item/";
  // Users
  static REGISTER = "register";
  static LOGIN = "login";
  static LOGOUT = "logout";
  // Crafters
  static CRAFTERS = "crafters";
  static CRAFTERS_LIST = "crafters";
  static CRAFTERS_ADD = "crafters";
  // Places
  static PLACES = "places";
  static PLACES_DATA = "places-data";
  // Islands
  static ISLANDS = "islands";
  // Houses
  static HOUSES = "houses";
  // Stations
  static STATIONS = "stations";
  // Chests
  static CHESTS = "chests";
  static CHESTS_DATA = "chests-data";
  // Tasks
  static TASKS = "tasks";
  static TASKS_DATA = "tasks-data";
  // Items
  static ITEMS = "items";
  // Settings
  static SETTINGS = "settings";
}
export default ApiURLs;
