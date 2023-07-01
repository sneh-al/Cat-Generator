import {
  MapPinIcon,
  ArrowTopRightOnSquareIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import PawSvg from "../assets/paw.svg";

const Breed = ({ breed }) => {
  const [isMore, setMore] = useState(false);
  const {
    id,
    image,
    name,
    origin,
    description,
    temperament,
    weight,
    life_span,
  } = breed;
  const words = temperament.split(",");
  const handleChange = () => {
    setMore(!isMore);
  };
  return (
    <li
      key={id}
      className='p-5  md:flex  rounded-md bg-orange-700 border border-orange-700 hover:border-orange-900  transition ease-in duration-500 '>
      <div className='md:basis-1/4  md:h-72 md:w-72 w-full  '>
        <img
          src={image?.url}
          alt=''
          className='object-contain  w-full h-full '
        />
      </div>
      <div className='md:basis-3/4 p-5'>
        <p className='text-3xl border-b-2 text-white border-orange-900  w-fit mb-3 font-bold bg-clip-text bg-gradient-to-r from-red-500 to-white'>
          {name}
        </p>

        <div className='py-2 px-4 bg-orange-900 rounded-2xl text-white shadow-md w-fit mb-3 flex'>
          <p>{origin}</p>
          <MapPinIcon className='h-6 w-6 text-red-500' />
        </div>
        <div className='flex flex-wrap mb-3 gap-3'>
          <p className='bg-orange-900 rounded-2xl text-white shadow-md w-fit p-2'>
            Life-span :{life_span}
          </p>
          <p className='bg-orange-900 rounded-2xl text-white shadow-md w-fit p-2'>
            weight :{weight?.metric}
          </p>
        </div>

        <div className='flex flex-wrap gap-2 mb-3 '>
          {words.map((word, index) => (
            <div
              key={index}
              className='py-2 px-4 bg-orange-900 rounded-2xl text-white shadow-md'>
              {word}
            </div>
          ))}
        </div>
        <p className='text-lg text-white bg-orange-500 p-3 w-fit px-2 rounded-xl   mb-5 '>
          {description}
        </p>
        <button
          className={` transition ease-in-out duration-500 p-2   font-semibold flex w-fit  mb-3  ${
            isMore
              ? "scale-50 "
              : "scale-100 animate-bounce hover:border-b-2 hover:shadow-2xl  hover:text-white rounded-2xl   hover:border-blue-600 "
          }`}
          onClick={handleChange}>
          Find Out More
          <img src={PawSvg} alt='paw' className='ml-1 text-inherit' />
        </button>

        {isMore && <More breed={breed} />}
      </div>
    </li>
  );
};

export default Breed;

const More = ({ breed }) => {
  const {
    adaptability,
    affection_level,
    child_friendly,
    dog_friendly,
    energy_level,
    grooming,
    health_issues,
    intelligence,
    social_needs,
    vocalisation,
    cfa_url,
    vcahospitals_url,
    wikipedia_url,
    vetstreet_url,
  } = breed;

  const clss = "p-5  bg-orange-500 rounded-xl flex flex-wrap gap-3";
  return (
    <div className='text-white p-3 transition ease-in duration-200 '>
      <div className='flex flex-wrap gap-3 capitalize'>
        <p className={clss}>
          adaptability : <Stars filledStars={adaptability} />
        </p>
        <p className={clss}>
          Affection level :
          <Stars filledStars={affection_level} />
        </p>
        <p className={clss}>
          Child friendly :
          <Stars filledStars={child_friendly} />
        </p>
        <p className={clss}>
          Vocalisation :
          <Stars filledStars={vocalisation} />
        </p>
        <p className={clss}>
          Dog friendly :
          <Stars filledStars={dog_friendly} />
        </p>
        <p className={clss}>
          Energy level :
          <Stars filledStars={energy_level} />
        </p>
        <p className={clss}>
          grooming :
          <Stars filledStars={grooming} />
        </p>
        <p className={clss}>
          Health issues:
          <Stars filledStars={health_issues} />
        </p>
        <p className={clss}>
          Intelligence :
          <Stars filledStars={intelligence} />
        </p>
        <p className={clss}>
          Social needs :
          <Stars filledStars={social_needs} />
        </p>
      </div>
      <div className='flex flex-wrap  justify-items-start w-fit gap-2 font-semibold text-black mt-3'>
        {wikipedia_url && (
          <ExternalLink href={wikipedia_url} title='Wikipedia' />
        )}
        {vetstreet_url && (
          <ExternalLink href={vetstreet_url} title='Vetstreet' />
        )}
        {cfa_url && (
          <ExternalLink href={cfa_url} title='Cat Fanciers’ Association' />
        )}
        {vcahospitals_url && (
          <ExternalLink href={vcahospitals_url} title='VCA Animal Hospital' />
        )}
      </div>
    </div>
  );
};

const Stars = ({ filledStars }) => (
  <div className='flex'>
    {[1, 2, 3, 4, 5].map((star) => (
      <StarIcon
        key={star}
        className={`h-6 w-6 ${
          star <= filledStars ? "text-orange-900" : "text-white"
        }`}
      />
    ))}
  </div>
);

const ExternalLink = ({ href, title }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener  noreferrer'
    className='flex p-2 px-5 flex-wrap hover:text-white rounded-lg hover:bg-red-950 hover:border hover:border-blue-600 transition duration-200 ease-in active:scale-50 focus:scale-50'>
    {title}
    <ArrowTopRightOnSquareIcon className='w-6 h-6 ml-2' />
  </a>
);
