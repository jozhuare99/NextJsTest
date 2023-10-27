"use client";

const Footer = () => {
  // get year
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-white bordet-t">
      <div className="mx-auto py-auto">
        <p className="text-xs text-center text-black">
          &copy; {year} GrahamStore. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer;