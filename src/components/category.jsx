import { useState } from "react";

const CategoryForm = ({onSubmit}) => {
    
    const [category, setCategory] = useState({ title: "", description: "" });
    const [isShow, setIsShow] = useState(false);

    const changeHandler = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value });
    };
    const addNewCategoryHandler = (e) => {
        e.preventDefault();
       onSubmit(category)
        setCategory({ title: "", description: "" });
    };
   

    return (
        <section>
            <div className={isShow && "hidden mb-6"}>
                <h2 className="text-xl font-bold mb-2">Add New Category</h2>
                <form className="flex  flex-col p-4 gap-y-4 bg-slate-700  rounded-xl mb-6">
                    <div>
                        <label htmlFor="categoryTitle" className="text-slate-400 block mb-1">
                            title
                        </label>
                        <input
                            id="categoryTitle"
                            onChange={changeHandler}
                            className="bg-transparent border w-full md:w-auto  border-slate-500 text-slate-400 rounded-xl"
                            type="text"
                            name="title"
                            value={category.title}
                        />
                    </div>
                    <div>
                        <label className="text-slate-400 block mb-1" htmlFor="categoryDescription">
                            Discribtion
                        </label>
                        <textarea
                            id="categoryDescription"
                            className="bg-slate-700 border border-slate-500 rounded-xl"
                            onChange={changeHandler}
                            name="description"
                            value={category.description}
                        />
                    </div>
                    <div className="flex justify-between gap-3  ">
                        <button
                            className="flex-1  bg-slate-700 py-2  text-slate-400 border border-slate-400 rounded-xl"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsShow(!isShow);
                            }}
                        >
                            cancel
                        </button>
                        <button
                            onClick={addNewCategoryHandler}
                            className="flex-1 bg-slate-500 py-2 border text-slate-200 border-slate-400 rounded-xl"
                        >
                            Add Category
                        </button>
                    </div>
                </form>
            </div>

            <button
                className={`text-slate-600 font-medium text-lg mb-4 ${!isShow && "hidden"}`}
                onClick={() => setIsShow(!isShow)}
            >
                Add new Category?
            </button>
        </section>
    );
};

export default CategoryForm;
