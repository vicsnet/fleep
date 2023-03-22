import React from "react";
import SingleEvent from "./Event/SingleEvent";

export default function EventList({ data, isLoading, search }) {
  return (
    <>
      {data
        ?.filter((value) => {
          if (search === "") {
            return value;
          } else if (value.title.toLowerCase().includes(search.toLowerCase())) {
            return value;
          }
        })
        .map((data) => {
          const {
            id,
            title,
            coverphoto,
            date,
            imagescount,
            no_of_all_participants,
          } = data;
          return (
            <div className="" key={id}>
              <div className="">
                <SingleEvent
                  isLoading={isLoading}
                  index={id}
                  singleId={id}
                  title={title}
                  coverphoto={coverphoto}
                  date={date}
                  images={imagescount}
                  participant={no_of_all_participants}
                />
              </div>
            </div>
          );
        })}
    </>
  );
}
