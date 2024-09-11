import { type ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Section from "../../components/ui/Section.tsx";

/** @titleBy title */
interface Item {
  title: string;
  href: string;
}

/** @titleBy title */
interface Link extends Item {
  children: Item[];
}

/** @titleBy alt */
interface Social {
  alt?: string;
  href?: string;
  image: ImageWidget;
}

interface Props {
  links?: Link[];
  social?: Social[];
  paymentMethods?: Social[];
}

function Footer({
  links = [],
  social = [],
  paymentMethods = [],
}: Props) {
  return (
    <footer class="px-5 sm:px-0 mt-5 sm:mt-10">
      <div class="container flex flex-col text-center items-center justify-center gap-8 sm:gap-10 py-10">
        <hr class="w-full border-[#F0E1E1]" />
        <ul class="grid grid-flow-row sm:grid-flow-col gap-6 ">
          {links.map(({ title, href, children }) => (
            <li class="flex flex-col gap-4">
              <a
                class="text-sm font-light tracking-wide text-center text-[#101010]"
                href={href}
              >
                {title}
              </a>
              <ul class="flex flex-col gap-2">
                {children.map(({ title, href }) => (
                  <li>
                    <a
                      class="text-xs font-light tracking-wide text-center text-[#797979]"
                      href={href}
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div class="pt-6 flex flex-col sm:flex-row gap-12 justify-between items-start sm:items-center">
          <ul class="flex gap-4 m-auto">
            {social.map(({ image, href, alt }) => (
              <li>
                <a href={href}>
                  <Image
                    src={image}
                    alt={alt}
                    loading="lazy"
                    width={37}
                    height={37}
                  />
                </a>
              </li>
            ))}
          </ul>
          <ul class="grid grid-cols-5 gap-2">
            {paymentMethods.map(({ image, alt }) => (
              <li class="flex justify-center items-center">
                <Image
                  src={image}
                  alt={alt}
                  width={66}
                  height={41}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>

        <div class="grid grid-flow-row sm:grid-flow-col gap-8">
          {
            /* <ul class="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center">
            {policies.map(({ title, href }) => (
              <li>
                <a class="text-xs font-medium" href={href}>
                  {title}
                </a>
              </li>
            ))}
          </ul> */
          }
          {
            /*
          <div class="flex flex-nowrap items-center justify-between sm:justify-center gap-4">
            <div>
              <img loading="lazy" src={logo} />
            </div>
            <span class="text-xs font-normal text-base-400">{trademark}</span>
          </div> */
          }

          <div class="flex flex-nowrap items-center justify-center gap-4">
            <span class="text-sm font-normal text-base-400">
              Desenvolvido por
            </span>
            <a href="https://dna360.ag" target={"_blank"}>
              <img
                width={106}
                height={22}
                src={"https://dna360.ag/wp-content/uploads/2022/10/logo.png"}
                loading={"lazy"}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const LoadingFallback = () => <Section.Placeholder height="1145px" />;

export default Footer;
