import Image from "next/image";

const Logo = () => {
  return (
    <span className={`text-gray-900 inline-flex items-center`}>
      <Image
        src="/assets/images/max-1-logo-svg-vector.svg"
        height={80}
        width={100}
        alt="logo"
      />
    </span>
  );
};

export { Logo };
