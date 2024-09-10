import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
    title: string;
    /** @format rich-text */
    description?: string;
    cta: {
        link: string;
        label?: string;
    }
    image: ImageWidget;
}

export default function CollectionCard({title, description, cta, image}: Props) {
    return (
        <section class="container px-5 pt-5">
            <div class="bg-white p-5 flex flex-col">
                <h3 class="mb-3 text-base font-normal tracking-wide text-left">
                    {title}
                </h3>
                {description && (
                    <span class="text-[#505050] mb-5 text-sm font-normal tracking-wide text-left"
                    dangerouslySetInnerHTML={{__html: description}} />
                )}
                <a href={cta.link} class="mb-8 text-[10px] tracking-wide text-left font-normal underline">
                    {cta.label || "clique e conheça a coleção"}
                </a>
                <img class="w-full" src={image} alt={cta.label} width={294} height={339} />
            </div>
        </section>
    )
}