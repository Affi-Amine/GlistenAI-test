import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PersonalisedText`.
 */
export type PersonalisedTextProps =
  SliceComponentProps<Content.PersonalisedTextSlice>;

/**
 * Component for "PersonalisedText" Slices.
 */
const PersonalisedText = ({ slice }: PersonalisedTextProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="prose prose-invert prose-lg prose-slate">
        <PrismicRichText field={slice.primary.description} />
      </div>
    </Bounded>
  );
};

export default PersonalisedText;
