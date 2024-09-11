import { ImageWidget } from "apps/admin/widgets.ts";

export interface InstagramPost {
  src: ImageWidget;
  link: string;
  label?: string;
}

interface Props {
  /** @format rich-text */
  title: string;
  posts: InstagramPost[];
}

export default function InstagramSection({ title, posts }: Props) {
  return (
    <section class="container">
      <h3
        dangerouslySetInnerHTML={{ __html: title }}
        class="[&>p>strong]:text-base mb-3 px-5 text-base font-normal tracking-wide text-center uppercase"
      />
      <div class="grid grid-cols-3">
        {posts && posts.length > 0 && posts.map((post) => (
          <a href={post.link}>
            <img src={post.src} alt={post.label} loading={"lazy"} />
          </a>
        ))}
      </div>
    </section>
  );
}
