export const INDEX_ROUTE = '/'
export const SEARCH_ROUTE = '/search'

export const TRENDING_SUGGESTIONS = ["car", "food", "business", "nature", "beach", "abstract", "sky", "flowers", "beautiful", "landscape", "forest", "dark"];

export const API_ADDRESS = "https://pexels.com/api/v1";
export const PICTURES_PER_PAGE = "15";

export const FILTERS = [
    {
        name: "orientation",
        values: ["All Orientations", "Horizontal", "Vertical", "Square"],
        descriptions : ["", "landscape", "portrait", "square"]
    },
    {
        name: "size",
        values: ["All Sizes", "Large", "Medium", "Small"],
        descriptions: ["", "large", "medium", "small"]
    },
]