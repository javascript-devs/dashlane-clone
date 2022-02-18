import axios from "axios";

const apiData = async (opt) => {
  const uppercase = opt.hasOwnProperty("uppercase") ? "true" : "false";
  const numbers = opt.hasOwnProperty("numbers") ? "true" : "false";
  const symbols = opt.hasOwnProperty("symbols") ? "true" : "false";
  const length = opt.length;
  const response = await axios.get(
    `https://express-pwd-api.herokuapp.com/pwd?uppercase=${uppercase}&numbers=${numbers}&symbol=${symbols}&len=${length}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return response.data.result;
};

export default apiData;
