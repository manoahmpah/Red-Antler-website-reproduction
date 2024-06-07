function Header() {
  return (
    <header className="flex justify-between pt-3 items-center">
      <h1 className="ml-4 text-3xl font-oswald font-bold" >Red Antler</h1>
        <ul className="flex mx-4">
            <li className="mx-4">work</li>
            <li className="mx-4">About</li>
            <li className="mx-4">Client</li>
            <li className="mx-4">Careers</li>
            <li className="mx-4">Contact</li>
        </ul>
    </header>
  );
}

export default Header;