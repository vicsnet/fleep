import React from "react";
import SingleEvent from "./Event/SingleEvent";
import formatDate from "../../consts/helper";

export default function EventList({ data, isLoading, search, selectedOrder }) {
  const [newData, setNewData] = React.useState([]);

  function dataSort(a, b) {
    if (selectedOrder === "all") {
      return data;
    } else if (selectedOrder === "recent") {
      return Number(b.date) - Number(a.date);
    } else {
      return Number(a.date) - Number(b.date);
    }
  }

  function searchEvent(value) {
    if (search === "") {
      return value;
    } else if (value.title.toLowerCase().includes(search.toLowerCase())) {
      return value.title.toLowerCase().includes(search.toLowerCase());
    }
  }

  const newValue = data
    ?.sort((a, b) => dataSort(a, b))
    .filter((value) => searchEvent(value));

  return (
    <>
      {newValue?.length > 0 ? (
        newValue?.map((data) => (
          <div className="" key={data.id}>
            <div className="">
              <SingleEvent
                isLoading={data.isLoading}
                index={data.id}
                singleId={data.id}
                title={data.title}
                coverphoto={data.coverphoto}
                date={formatDate(data.date)}
                images={data.imagescount}
                participant={data.no_of_all_participants}
              />
            </div>
          </div>
        ))
      ) : (
        <div>NO Data </div>
      )}
    </>
  );
}
