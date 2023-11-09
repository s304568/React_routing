import axios from "axios";
import { FormEvent, useState } from "react";

function StockAPI() {
  const [stockcode, setStockcode] = useState("");
  const handleClick = async (e: FormEvent) => {
    e.preventDefault();

    const alpaVantagePrams = {
      function: "TIME_SERIES_INTRADAY",
      symbol: stockcode,
      interval: "5min",
      apikey: "DJZAR5T769MAXB7K"
    };

    try {
      const response = await axios.get("https://www.alphavantage.co/query", {
        params: alpaVantagePrams
      });

      console.log(response.data);
    } catch (error) {}
  };
  return (
    <>
      <form onSubmit={handleClick}>
        <label htmlFor="stockcodeTextbox">Stock Code</label>
        <input
          type="text"
          id="stockcodeTextbox"
          autoComplete="off"
          onChange={e => setStockcode(e.target.value)}
          value={stockcode}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default StockAPI;
