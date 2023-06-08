import backgroundImage from '../../../assets/background/background.png';

const PageBanner = ({ header, subHeader }) => {
  return (
    <div
      className="flex flex-col bg-cover bg-center bg-no-repeat bg-fixed min-h-[200px] justify-center items-center rounded-lg"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${backgroundImage})`,
        backgroundBlendMode: 'overlay',
        backdropFilter: 'blur(150px)',
      }}
    >
      <div>
        <h2 className='text-2xl'>{header}</h2>
      </div>
      <div>
        <p>{subHeader}</p>
      </div>
    </div>
  );
};

export default PageBanner;
