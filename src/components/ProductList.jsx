const ProductList = ({onRemove,products }) => {
    return (
        <section>
         
            <div className="overflow-x-auto">
            {products && products.map((product) => {
                return (
                    <div className="flex mb-2 items-center min-w-[400px] justify-between">
                        <span className="text-slate-400">{product.title}</span>
                        <div className="flex items-center gap-x-3 ">
                            <span className="text-slate-400">{new Date(product.createdAt).toLocaleDateString("fa-IR")}</span>
                            <span className="text-slate-400 py-.5 px-3 block border text-sm border-slate-400 rounded-2xl ">{product.category}</span>
                            <span className="border rounded-full h-7 bg-slate-500 w-7 flex justify-center items-center text-slate-300 border-slate-300">
                                {product.quantity}
                            </span>
                            <button className="border rounded-2xl px-2 py-.5 border-red-400 text-red-400"
                            id={product.id}
                            onClick={(e)=>onRemove(e.target.id)}
                            >delete</button>
                        </div>
                    </div>
                );
            }) 
                
            }
            </div>
        </section>
    );
};

export default ProductList;
