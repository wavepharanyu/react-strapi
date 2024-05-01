
export default interface Products {
    id?: number;
    attributes: Attributes
}

interface Attributes {
    title: string;
    slug: string;
    description: description[];
    price: number;
    qty: number;
    image: object;
    is_featured: boolean;
    category: object;
    users: object;
    createdAt: string;
    updatedAt: string;
}

interface description {
    type: string;
    children: DescriptionChild[];
}

interface DescriptionChild {
    type: string;
    text: string;
}