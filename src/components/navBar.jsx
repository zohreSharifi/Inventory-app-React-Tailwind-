const NavBar = ({products}) => {
    return (
        <header className="bg-slate-700 flex gap-x-4 justify-center items-center 
         text-slate-300 h-12">
            <h1 className="md:text-xl text-sm font-bold">Inventory App using tailwind & react</h1>
            <span
                className=" bg-slate-500 
             top-2 left-2/3  w-7 h-7 border-2 font-bold border-solid-slate-300 
             rounded-full flex justify-center items-center"
            >
             {   products.length}
            </span>
        </header>
    );
};

export default NavBar;
