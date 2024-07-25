function Footer() {
    const fullYear = new Date();
    const year = fullYear.getFullYear();
    return (
      <div className="p-2 font-poppins text-base font-medium text-center  text-white bg-gray-700">
        © {year} | Code by Roman
      </div>
    );
  }
  export default Footer;