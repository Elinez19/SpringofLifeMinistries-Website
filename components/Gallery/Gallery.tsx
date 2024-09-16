import Image from "next/image";

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="group relative cursor-pointer">
        <Image
          src="/images/about/banner-1.png"
          width={100}
          height={48}
          loading="lazy"
          alt="Image 1"
          className="h-48 w-full scale-100 transform rounded-lg object-cover transition-transform group-hover:scale-105"
        />
      </div>

      <div className="group relative cursor-pointer">
        <Image
          src="/images/about/banner-2.png"
          width={100}
          height={48}
          loading="lazy"
          alt="Image 1"
          className="h-48 w-full scale-100 transform rounded-lg object-cover transition-transform group-hover:scale-105"
        />
      </div>

      <div className="group relative cursor-pointer">
        <Image
          src="/images/about/banner-3.png"
          width={100}
          height={148}
          loading="lazy"
          alt="Image 1"
          className="h-48 w-full scale-100 transform rounded-lg object-cover transition-transform group-hover:scale-105"
        />
      </div>

      <div className="group relative cursor-pointer">
        <Image
          src="/images/about/banner-1.png"
          width={100}
          height={48}
          loading="lazy"
          alt="Image 1"
          className="h-48 w-full scale-100 transform rounded-lg object-cover transition-transform group-hover:scale-105"
        />
      </div>

      <div className="group relative cursor-pointer">
        <Image
          src="/images/about/banner-2.png"
          width={100}
          height={48}
          loading="lazy"
          alt="Image 1"
          className="h-48 w-full scale-100 transform rounded-lg object-cover transition-transform group-hover:scale-105"
        />
      </div>

      <div className="group relative cursor-pointer">
        <Image
          src="/images/about/banner-1.png"
          width={100}
          height={48}
          loading="lazy"
          alt="Image 1"
          className="h-48 w-full scale-100 transform rounded-lg object-cover transition-transform group-hover:scale-105"
        />
      </div>

      <div className="group relative cursor-pointer">
        <Image
          src="/images/about/banner-3.png"
          width={100}
          height={48}
          loading="lazy"
          alt="Image 1"
          className="h-48 w-full scale-100 transform rounded-lg object-cover transition-transform group-hover:scale-105"
        />
      </div>

      <div className="group relative cursor-pointer">
        <Image
          src="/images/about/banner-2.png"
          width={100}
          height={48}
          loading="lazy"
          alt="Image 1"
          className="h-48 w-full scale-100 transform rounded-lg object-cover transition-transform group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Gallery;
