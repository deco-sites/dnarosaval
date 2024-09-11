import { Picture, Source } from "apps/website/components/Picture.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import Slider from "../../components/ui/Slider.tsx";
import Icon from "../../components/ui/Icon.tsx";
import { useId } from "../../sdk/useId.ts";

/**
 * @titleBy alt
 */
export interface Banner {
  /** @description desktop otimized image */
  desktop: ImageWidget;

  /** @description mobile otimized image */
  mobile: ImageWidget;

  /** @description Image's alt text */
  alt: string;
}

export interface Props {
  title: string;
  /** @format rich-text */
  description: string;
  action?: {
    link?: string;
    label?: string;
  };
  images?: Banner[];

  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function BannerItem({ image }: { image: Banner }) {
  const {
    alt,
    mobile,
    desktop,
  } = image;

  return (
    <div class="relative block overflow-y-hidden w-full">
      <Picture>
        <Source
          media="(max-width: 767px)"
          src={mobile}
          width={336}
          height={168}
        />
        <Source
          media="(min-width: 768px)"
          src={desktop}
          width={1440}
          height={600}
        />
        <img
          class="object-cover w-full h-full"
          loading={"lazy"}
          src={desktop}
          alt={alt}
        />
      </Picture>
    </div>
  );
}

export default function LojasCarousel(
  { title, description, action, images = [], interval }: Props,
) {
  const id = useId();
  return (
    <section class="container px-5 mb-8">
      <div id={id} class="relative mb-4">
        <div class="col-span-full row-span-full">
          <Slider class="carousel carousel-center w-full gap-6">
            {images.map((image, index) => (
              <Slider.Item index={index} class="carousel-item w-full">
                <BannerItem image={image} />
              </Slider.Item>
            ))}
          </Slider>
        </div>

        <div class="flex items-center justify-center z-10 absolute top-0 bottom-0 left-0">
          <Slider.PrevButton
            class="btn btn-neutral border-0 btn-outline btn-circle no-animation btn-sm"
            disabled={false}
          >
            <Icon id="chevron-right" class="rotate-180 text-white" />
          </Slider.PrevButton>
        </div>

        <div class="flex items-center justify-center z-10 absolute top-0 bottom-0 right-0">
          <Slider.NextButton
            class="btn btn-neutral border-0 btn-outline btn-circle no-animation btn-sm"
            disabled={false}
          >
            <Icon id="chevron-right" class="text-white" />
          </Slider.NextButton>
        </div>

        <Slider.JS rootId={id} interval={interval && interval * 1e3} infinite />
      </div>

      <div class="content flex flex-col">
        <h3 class="text-base tracking-wide text-black mb-3">{title}</h3>

        <span
          class="text-sm tracking-wide font-light text-[#505050] mb-3"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <a
          class="underline tracking-wide text-black text-xs"
          href={action?.link}
        >
          {action?.label}
        </a>
      </div>
    </section>
  );
}
