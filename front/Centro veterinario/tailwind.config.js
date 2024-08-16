/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // div{
      //   display: flexbox;
      //   justify-content: space-between;
      //   margin-top: auto;
//        }

      //   imgLanding:{
      //   "width" : 100%,
      //   height: 100%,
      //   }

      // .loginContainer: {
      //   display: flex;
      //   justify-content: center;
      //   align-items: center;
      //   background-color: #555;
      // }
      
      // .loginForm {
      //   background-color: #ffffff;
      //   padding: 40px;
      //   border-radius: 8px;
      //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      //   width: 300px;
      //   text-align: center;
      // }
      
      // h2{
      //   margin-bottom: 20px;
      //   color: #333;
      // }
      
      // .formGroup{
      //   margin-bottom: 20px;
      //   text-align: center;
      // }
      
      // label {
      //   display: block;
      //   margin-bottom: 5px;
      //   color: #333;
      // }
      
      // input {
      //   width: 100%;
      //   padding: 10px;
      //   border-radius: 4px;
      //   border: 1px solid #ccc;
      //   font-size: 16px;
      // }
      
      // .loginButoon {
      //   width: 100%;
      //   padding: 10px;
      //   background-color: #007bff;
      //   color: white;
      //   border: none;
      //   border-radius: 4px;
      //   font-size: 16px;
      //   cursor: pointer;
      //   transition: background-color 0.3s ease;
      // }
      
      // .loginButoon:hover{
      //   background-color: #0056b3;
      // }
      // .NavBar{
      //   display: flex;
      //   justify-content: space-between;
      //   align-items: center;
      //   padding: 5px 10px;
      //   background-color: #333;
      //   color: white;
      //  }
      //  .leftSection{
      //    display: flex;
      //    align-items: center;
      //  }
      //  .logo{
      //    height: 20px;
      //    margin-right: 10px;
      //  }
      //  .navLinks{
      //    list-style: none;
      //    display: flex;
      //    gap: 15px;
      //  }
      //  .navLinks a{
      //    color: white;
      //    text-decoration: none;
      //    font-size: 16px;
      //    transition: color 0.3s ease;
      //  }
      //  .navLinks a:hover{
      //    color: #ddd;
      //  }
      //  .searchBar{
      //    flex-grow: 1;
      //    display: flex;
      //    justify-content: center;
      //  }
      //  .searchBar input{
      //    width: 50%;
      //    padding: 10px 5px;
      //    font-size: 16px;
      //    border-radius: 4px;
      //    border: 1px solid #555;
      //  }
      //  .rightSection{
      //    display: flex;
      //    align-items: center;
      //    gap: 15px;
      //  }
      //  .notifications{
      //    position: relative;
      //    cursor: pointer;
      //  }
      //  .bellIcon{
      //    font-size: 20px;
      //  }
      //  .dropdown{
      //    display: none;
      //    position: absolute;
      //    top: 30px;
      //    right: 0;
      //    background-color: #444;
      //    padding: 10px;
      //    border-radius: 4px;
      //    color: white;
      //  }
      //  .notifications:hover .dropdown{
      //    display: block;
      //  }
      //  .userPhoto{
      //    height: 40px;
      //    width: 40px;
      //    border-radius: 50%;
      //  }
    },
  },
  plugins: [
    "@tailwindcss/forms",
  ],
}

