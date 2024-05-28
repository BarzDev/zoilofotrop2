"use client";

import { Footer } from "flowbite-react";

const Component = () => {
  return (
    <Footer container>
      <Footer.Copyright
        className="text-center"
        href="#"
        by="Created by Fakhrul Akbar"
        year={2023}
      />
    </Footer>
  );
};

export default Component;
