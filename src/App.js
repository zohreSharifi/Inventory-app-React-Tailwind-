import { useEffect, useState } from "react";
import "./App.css";
import CategoryForm from "./components/category";
import FilterComp from "./components/filter";
import NavBar from "./components/navBar";
import ProductForm from "./components/productForm";
import ProductList from "./components/ProductList";

function App() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [sortValue, setSortValue] = useState("");
    const [sortCategoriesValue, setSortCategoriesValue] = useState("");

    // ....... Local storage
    useEffect(() => {
        setCategories(JSON.parse(localStorage.getItem("categories")) || []);
        setProducts(JSON.parse(localStorage.getItem("products")) || []);
    }, []);

    useEffect(() => {
        if (products.length) {
            localStorage.setItem("products", JSON.stringify(products));
        }
    }, [products]);
    useEffect(() => {
        if (categories.length) {
            localStorage.setItem("categories", JSON.stringify(categories));
        }
    }, [categories]);

    // ..... sort & search
    useEffect(() => {
        let result = products;
        result = filterSearchTitle(result);
        result = sortfilter(result);
        setFilteredProducts(result);
    }, [products, searchValue, sortValue, sortCategoriesValue]);

    const sortHandler = (sortValue) => {
        setSortValue(sortValue);
    };
    const sortCategoriesHandler = (sortCategoriesValue) => {
        setSortCategoriesValue(sortCategoriesValue);
    };
    const searchHandler = (searchValue) => {
        setSearchValue(searchValue.trim().toLowerCase());
    };
    const filterSearchTitle = (array) => {
        return array.filter((item) => item.title.toLowerCase().includes(searchValue));
    };
    const sortfilter = (array) => {
        let sortedProducts = [...array];
        return sortedProducts.sort((a, b) => {
            if (sortValue === "latest") {
                return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
            } else if (sortValue === "earliest") {
                return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1;
            }
        });
    };

    const submitCategoryForm = (category) => {
        setCategories([...categories, { ...category, createdAt: new Date().toISOString() }]);
    };
    const submitProductForm = (product) => {
        setProducts([
            ...products,
            { ...product, id: Date.now(), createdAt: new Date().toISOString() },
        ]);
    };
    const removeHandler = (id) => {
        setProducts(products.filter((item) => item.id != id));
    };

    return (
        <div className="App bg-slate-800 w-full h-auto text-slate-300 ">
            <div>
                <NavBar products={products} />
            </div>

            <div className="container max-w-screen-sm mx-auto p-4">
                <CategoryForm onSubmit={submitCategoryForm} />
                <ProductForm categories={categories} onSubmit={submitProductForm} />
                <FilterComp
                    onSearch={searchHandler}
                    onSort={sortHandler}
                    onSortCategories={sortCategoriesHandler}
                />
                <ProductList onRemove={removeHandler} products={filteredProducts} />
            </div>
        </div>
    );
}

export default App;
