import { useState, useEffect } from "react";
import WalletTransactionDetail from "./WalletTransactionDetail";

const url = "https://jsonplaceholder.typicode.com/users";
const WalletTransaction = () => {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  });

  return (
    <main>
      <section className="rounded-lg bg-[#FFFFFF] mt-[40px] px-[33px] pb-[36px]">
        <h3 className="text-[20px] font-[600] leading-[24px] text-[#000000] pt-[36px] pl-[27px] ">
          Transaction
        </h3>

        <table className="w-[100%]  mt-[21px] table-fixed rounded-t-lg border-collapse">
          <thead className="text-left text-[16px] font-[300] leading-[19.2px] bg-[#FAFAFA] h-[70px] rounded-t-lg rounded-lg mb-[10px]">
            <tr className=" pl-[57px] rounded-t-lg">
              <th className="pt-[12px] pb-[12px] font-[500] w-[10%] pl-[45px] smDesk:pl-[30px] tabletAir:pl-[20px] rounded-tl-[14px]">
                S/N
              </th>
              <th className="pt-[12px] pb-[12px] w-[30%] font-[500]">
                User's Name
              </th>
              <th className="pt-[12px] pb-[12px] w-[20%] font-[500]">
                Event Name
              </th>
              <th className="pt-[12px] pb-[12px] font-[500]">
                Total Photos Bought
              </th>
              <th className="pt-[12px] pb-[12px] pr-[27px] w-[15%] rounded-tr-[14px] font-[500]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {user
              //   .slice(pagesVisited, pagesVisited + usersPerPage)
              .map(({ id }) => (
                <WalletTransactionDetail key={id} id={id} />
              ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default WalletTransaction;
