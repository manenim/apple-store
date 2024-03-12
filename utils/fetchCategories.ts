export const fetchCategories = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategories`);

        const data = await res.json();

        const categories: Category[] = data.categories
        console.log(categories)

        return categories
    } catch (error) {
        throw new Error("there was a error:" + " "+ error)
    }
    
}