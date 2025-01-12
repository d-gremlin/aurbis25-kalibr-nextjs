import { createContext, useState } from 'react';

export const CategoriesContext = createContext(null);


export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState({
     type: null,
     page: 1,
     tab: null,
     selectTab: null,
     Filter: {
         sort: "desc",
         type: null,
     },
});

return (
  <CategoriesContext.Provider value={[config, setConfig]}>
    { children }
  </CategoriesContext.Provider>
);
}
async function getCategories() {
    const res = await fetch(`categories`, { cache: 'no-store' })
    const categories = await res.json()
  
    return categories
  }

