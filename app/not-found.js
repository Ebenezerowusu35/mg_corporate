"use client"; 
import {motion} from "framer-motion"
import { useRouter } from "next/navigation";

import React from "react";

const error = () => {
  const router = useRouter()
  return (
    <html>
      <body>
        <div className="container error-cover">
          <div>
            <img src="/assets/img/error404.webp" alt="" className="img-fluid" />
          </div>
          <div>
            <h4>
              OOPs, THE PAGE YOU ARE LOOKING FOR <span>CANNOT BE FOUND!!!</span>
            </h4>
          </div>
          <div className="d-flex justify-content-center">
            <div className="p-2">
              <motion.button
                type="button"
                animate={{ mixBlendMode: "difference" }}
                onClick={() => router.push("/")}
                className="btn btn-outline-white rounded-pill px-lg-5"
              >
                Go to HomePage
              </motion.button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default error;
