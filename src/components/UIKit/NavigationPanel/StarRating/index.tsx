import Image from "next/image";

interface StarRatingProps {
  rating: number;
  size: number;
}

const StarRating = ({ rating, size }: StarRatingProps) => {
  const filledStars = Math.floor(rating);
  const remainingStars = 5 - filledStars;

  const stars = Array.from({ length: filledStars }, (_, index) => (
    <Image
      key={`filled-star-${index}`}
      src="/images/homepage/icons/stars/filled-star.svg"
      alt="Filled Star"
      width={size}
      height={size}
    />
  )).concat(
    Array.from({ length: remainingStars }, (_, index) => (
      <Image
        key={`unfilled-star-${index}`}
        src="/images/homepage/icons/stars/empty-star.svg"
        alt="Unfilled Star"
        width={size}
        height={size}
      />
    ))
  );

  return <div className="flex items-center gap-1">{stars}</div>;
};

export default StarRating;
