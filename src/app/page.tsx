import { sanityFetch } from "@/sanity/lib/fetch";
import { allProducts } from "@/sanity/lib/quries";
import Image from "next/image";

type Products = {
  _id:string;
  name:string;
  description:string;
  price:number;
  imageUrl:string;
}

export default async function Home() {
  const products : Products[] = await sanityFetch({query:allProducts})
  return (
   <main>
    <div className="text-center my-8">
      <h1 className="text-3xl font-bold">Products</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
      {
      products.map((product) => (
      <div className="border p-6 rounded-lg shadow-lg flex flex-col items-center bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden" key={product._id}>
      <Image src={product.imageUrl} alt={product.name} className="w-60 h-60 object-cover rounded-md" height={240} width={240}/>
      <h2 className="text-xl font-bold text-center mt-4">
        {product.name}
      </h2>
      <p className="text-center text-gray-600 mt-2 line-clamp-3">
        {product.description}
      </p>
      <p className="text-center text-lg font-semibold text-green-500 mt-2">
        ${product.price}
      </p>
      <div className="flex space-x-2 mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
        Add to Cart
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300">
        Like
        </button>
      </div>
      </div>
      ))
      }
    </div>
   </main>
  );
};
