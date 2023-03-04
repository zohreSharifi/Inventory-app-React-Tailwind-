import { useState } from "react";

const ProductForm = ({ categories, onSubmit }) => {
    const [product, setProduct] = useState({ title: "", quantity: 0, category: "" });
    const changeHandler = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };
    const AddNewProductHandler = (e) => {
        e.preventDefault()
        onSubmit(product);
        setProduct({ title: "", quantity: 0, category: "" })
    };

    return (
        <section className="mb-6">
            <h2 className="mb-2 font-bold text-xl">Add New Product</h2>
            <form className=" flex  flex-col p-4 gap-y-4 bg-slate-700  rounded-xl  ">
                <div>
                    <label htmlFor="productTitle" className="mb-1 px-2 text-slate-400 block">
                        title
                    </label>
                    <input
                        id="productTitle"
                        className="bg-transparent border w-full md:w-auto  border-slate-500 text-slate-400 rounded-xl"
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="productQuantity" className="mb-1 text-slate-400 block">
                        quantity
                    </label>
                    <input
                        id="productQuantity"
                        className="bg-transparent border w-full md:w-auto  border-slate-500 text-slate-400 rounded-xl"
                        type="number"
                        name="quantity"
                        value={product.quantity}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="productCategory" className="mb-1 text-slate-400 block">
                        category
                    </label>
                    <select
                        value={product.category}
                        name="category"
                        id="productCategory"
                        className="bg-transparent border w-full  text-slate-400 rounded-xl"
                        onChange={changeHandler}
                    >
                        <option value="" className="bg-slate-500 text-slate-300"> select a category !</option>
                        {categories.map((category) => {
                            return <option  vlaue={category.title} className="bg-slate-500 text-slate-300">{category.title}</option>;
                        })}
                    </select>
                </div>

                <button
                    onClick={AddNewProductHandler}
                    className="py-2 text-slate-200 px-6 bg-slate-500 border border-slate-400 rounded-xl mt-4"
                >
                    Add new Product
                </button>
            </form>
        </section>
    );
};

export default ProductForm;
