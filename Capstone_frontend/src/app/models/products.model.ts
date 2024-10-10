export class Products {
    id!: string;
    name!: string;
    description!: string;
    price!: number;
    categoryId!: string;  // Reference to the category ID
    imageUrl!: string;
}
