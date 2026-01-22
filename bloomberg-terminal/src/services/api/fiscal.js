const API_KEY = import.meta.env.VITE_FISCAL_API_KEY;
const BASE_URL = import.meta.env.VITE_FISCAL_BASE_URL;

function buildURL(path, params){
    const url = new URL(BASE_URL + path);

    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });
}