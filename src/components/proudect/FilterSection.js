const FilterSection = () => {
    return (
        <div className="w-full">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>

            {/* Ingredient Filter */}
            <div className="mb-6">
                <h4 className="font-medium mb-2">property1</h4>
                <div className="space-y-2">
                    {["item1", "item2", "item3"].map((item) => (
                        <label key={item} className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span>{item}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Concern Filter */}
            <div className="mb-6">
                <h4 className="font-medium mb-2">property2</h4>
                <div className="space-y-2">
                    {["item1", "item2", "item3"].map((item) => (
                        <label key={item} className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span>{item}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Skin Type */}
            <div>
                <h4 className="font-medium mb-2">property3</h4>
                <div className="space-y-2">
                    {["item1", "item2", "item3"].map((item) => (
                        <label key={item} className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span>{item}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default FilterSection
