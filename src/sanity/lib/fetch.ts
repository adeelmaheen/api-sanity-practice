import { createClient } from "next-sanity";

const client = createClient({
    projectId: "skqpfyeb",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-10-10"
});

// Define a more specific type for params
interface Params {
  [key: string]: unknown;  // Use unknown instead of any, prompts you to perform type checking
}

export async function sanityFetch({ query, params = {} }: { query: string, params?: Params }) {
    return await client.fetch(query, params);
}
