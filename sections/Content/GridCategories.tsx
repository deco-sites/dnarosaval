import { ImageWidget } from "apps/admin/widgets.ts";

export interface Category {
    image: ImageWidget;
    link: string;
    label?: string;
}
interface Props {
    /** @format rich-text */
    title: string;
    /** @format rich-text */
    subtitle: string;
    categories: Category[]
}

export default function GridCategories({title, subtitle, categories}: Props) {
    return (
        <section class="container px-5 pt-5">
            <div class={"mb-6"}>
                <h3 dangerouslySetInnerHTML={{__html: title}} />
                <span class="text-sm" dangerouslySetInnerHTML={{__html: subtitle}} />
            </div>
            <div class="grid grid-cols-2 gap-4">
                {categories && categories.length > 0 && categories.map(category => (
                    <a href={category.link} class="flex flex-col items-center justify-center">
                        <img src={category.image} alt={category.label} class="mb-3"/>
                        <span class="uppercase text-sm text-normal">{category.label}</span>
                    </a>
                ))}
            </div>
        </section>
    )
}