const FilterComp = ({ onSearch, onSort,onSortCategories }) => {
    return (
        <section>
            <h1 className="font-bold text-lg">Product list</h1>
            <div className="flex justify-between mb-6">
                <label htmlFor="search" className="text-slate-500 text-lg">
                    search
                </label>
                <input
                    type="text"
                    className="bg-slate-800 border border-slate-500 text-slate-400 rounded-xl"
                    id="search"
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>
            <div className="flex justify-between mb-6">
                <label htmlFor="search" className="text-slate-500 text-lg">
                    sort
                </label>
                <select
                    name=""
                    id=""
                    className="bg-slate-800  text-slate-400 rounded-xl"
                    onChange={(e) => onSort(e.target.value)}
                >
                    <option value="" className="bg-slate-500 text-slate-300">
                        select a setCategory
                    </option>
                    <option value="latest" className="bg-slate-500 text-slate-300">
                        latest
                    </option>
                    <option value="earliest" className="bg-slate-500 text-slate-300">
                        earliest
                    </option>
                </select>
            </div>
            <div className="flex justify-between mb-6">
                <label htmlFor="search" className="text-slate-500 text-lg">
                    sort by category
                </label>
                <select
                    name=""
                    id=""
                    className="bg-slate-800  text-slate-400 rounded-xl"
                    onChange={(e) => onSortCategories(e.target.value)}
                >
                    <option value="" className="bg-slate-500 text-slate-300">
                        select a setCategory
                    </option>
                    <option value="front" className="bg-slate-500 text-slate-300">
                        front
                    </option>
                    <option value="backEnd" className="bg-slate-500 text-slate-300">
                        backEnd
                    </option>
                </select>
            </div>
        </section>
    );
};

export default FilterComp;
