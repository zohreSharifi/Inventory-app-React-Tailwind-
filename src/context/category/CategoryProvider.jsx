import { createContext, useContext } from "react";

const CategoryProvider = ({children}) => {

    const CategoryContext=createContext()
    const CategotyContextDispatcher=createContext()

    return (  
        <CategoryContext.Provider >
            <CategotyContextDispatcher.Provider >
                {children}
            </CategotyContextDispatcher.Provider>

        </CategoryContext.Provider>
    );
}
 
// export const usecategory=()=>useContext(CategoryContext)
export default CategoryProvider;
